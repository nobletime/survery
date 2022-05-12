const express = require("express");
const fs = require("fs")
const session = require("express-session");
const passport = require('passport')
const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local')
const mdb = require("./db");
const { send365Email } = require("./email");
const { ObjectId } = require('mongodb');

const ejs = require("ejs");
const path = require("path");
const qrcode = require("qrcode");
const exp = require("constants");

const app = express();

app.use(
  session({
    secret: "airway-assessment-csma",
    rolling: true,
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 3600000, secret: true },
  })
);


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(__dirname + "/public"));
app.use(express.text({}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb', extended: true }))
//app.use(express.raw({ type: 'application/octet-stream', limit: '50mb' }));

app.use(passport.initialize());
app.use(passport.session());

const user = {
  username: 'admin',
  password: 'Rest007!',
  passwordHash: 'Rest007!',
  id: 1
}
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
  (username, password, done) => {
    if (username.toLowerCase() != user.username)
      return done(null, false)
    if (password != user.password)
      return done(null, false)

    return done(null, username)
  }
))



var isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.render('login');
}

app.post('/signin', passport.authenticate('local', {
  successRedirect: '/onboarding',
  failureRedirect: '/login'
}))



app.get("/qrcode", async (req, res, next) => {
  if (req.query.cid) {
    const result = await mdb.findOne("onboarding", { clinic_id: req.query.cid });
    if (result == null) {
      res.send(`<div style="text-align:center; font-size:20px"> <strong>Your clinic_id = ${req.query.cid} is not found. Likely because you have NOT been onboarded yet. Please contact the support!</strong>`)
    }

    res.render("qrcode", {
      cid: req.query.cid,
      clinic_name: result.clinic_name,
      result: ""
    });
  } else {
    res.send(`<div style="text-align:center; font-size:20px"> <strong>You are not authorized to view this page. Please contact the support</strong>`)
  }

});



app.get("/onboarding", isAuthenticated, (req, res, next) => {
  res.render("onboarding", {

  });
});

app.get('/clinic-list', async (req, res) => {
  const result = await mdb.find("onboarding", {});

  result.forEach(e => e['DT_RowId'] = e._id.toString());

  let tableData = { "data": result, "options": [], "files": [], "debug": [{ "query": "SELECT  `id` as 'id', `name` as 'name', `created_by` as 'created_by', `type` as 'type', `email` as 'email', `start_date` as 'start_date', `interval` as 'interval', FROM  `scheduled_events` ", "bindings": [] }] };

  res.send(JSON.stringify(tableData));
})

app.post('/clinic-list', async (req, res) => {
  let firstKey = "", newvalues, query = "";
  let data = req.body.data, result = "";

  switch (req.body.action) {
    case 'create':
      let obj = data[0];
      result = await mdb.save("onboarding", obj);

      templateTData.data = [obj];
      obj['DT_RowId'] = obj._id.toString();
      res.send(JSON.stringify(templateTData));

      let subject = "C-GASP Screener Service Registeration";
      const pass = 'CsmaTraker1999';
      const surveylink = `https://airwayassessment.azurewebsites.net/qrcode?cid=${obj.clinic_id}`
      const body = `Your C-GASP Screener Service link to generate QR-Code and view survey results is below:<br/><a href="${surveylink}">${surveylink}</a>`;
      await send365Email('CSMA-Tracker@csma.clinic', [obj.email.toLowerCase()], subject, body, "Rest Tracker Report", pass, null);

      break;
    case 'edit':
      firstKey = Object.keys(data)[0];
      let datatmp = req.body.data[firstKey];
      delete datatmp._id;

      query = { '_id': new ObjectId(firstKey) };
      newvalues = { $set: datatmp };

      result = await mdb.updateOne("onboarding", query, newvalues);
      datatmp['DT_RowId'] = firstKey;
      templateTData.data = [datatmp];
      res.send(JSON.stringify(templateTData));


      break;

    case 'remove':

      firstKey = Object.keys(data)[0];
      newvalues = data[firstKey];
      query = { 'clinic_id': newvalues.clinic_id };
      result = await mdb.deleteOne("onboarding", query);
      res.send(templateTData)
      break;
  }


});

app.post('/save', async (req, res) => {
  result = await mdb.save("results", req.body);
  res.send("Save successful")
})



app.post("/scan", async (req, res, next) => {
  const cid = req.body.cid;
  const pid = req.body.pid;
  const pemail = req.body.pemail;
  const base_url = "https://airwayassessment.azurewebsites.net";
  const input_text = `${base_url}?cid=${cid}&pid=${pid}`;
  let src = "";

  try {
    src = await qrcode.toDataURL(input_text)
  } catch (err) {
    return res.send("Qr code error");
  }

  let subject = "C-GASP Screener Level-1 Survey Test";
  const pass = 'CsmaTraker1999';
  let body = `Please either scan the QR code or click the link below to begin your survey (C-GASP Screener Level-1 Survey Test):<br/><a href="${input_text}">${input_text}</a><br/><br/><img src="${src}" alt="QR Code"><br/>`

  res.render("scan", {
    cid: cid,
    qr_code: src,
    url: input_text,
    pemail: pemail
  });

  await send365Email('CSMA-Tracker@csma.clinic', [pemail.toLowerCase()], subject, body, "Rest Tracker Report", pass, null);

});

app.get("/results", async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const result = await mdb.find("results", { clinic_id: req.query.cid });
  res.send(JSON.stringify(result)
  );
});

app.get("/download-results", async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const result = await mdb.find("results", { clinic_id: req.query.cid, patient_id: req.query.pid });
  res.send(JSON.stringify(result)
  );
});


app.get("/login", function (req, res, next) {
  req.logout();
  res.render("login");
});

app.get(["/", "/results/*"], async (req, res, next) => {
  if (req.query.cid) {
    const result = await mdb.findOne("onboarding", { clinic_id: req.query.cid });
    if (result)
      res.render("index");
    else
      res.send(`<div style="text-align:center; font-size:20px"> <strong>Your clinic_id = ${req.query.cid} is not found. Likely because you have NOT been onboarded yet. Please contact the support!</strong>`)
  } else {
    res.send(`<div style="text-align:center; font-size:20px"> <strong>You are not authorized to view this page. Please contact the support</strong>`)
  }
});



app.listen(process.env.PORT || 3040, function () {
  console.log("Listening to 3040!");
});


let templateTData = { "data": [], "debug": [{ "query": "DELETE FROM  `datatables_demo` WHERE (`id` = :where_1 )", "bindings": [{ "name": ":where_1", "value": "3", "type": null }] }] };