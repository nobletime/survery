$(() => {

    const params = new URLSearchParams(window.location.search)
    let cid = "", pid = "", cname="";

    if (params.has('cid') && params.has('pid')) {   
        cname = document.getElementById("cname").innerHTML;
        console.log(cname);
        cid = params.get('cid');
        pid = params.get('pid');
        json['clientId'] = cid
    } else {
        return 
    }       

    Survey
        .StylesManager
        .applyTheme("defaultV2");

    window.survey = new Survey.Model(json);

    survey
        .onComplete
        .add(function (sender) {
            let surveydata = sender.data;
            surveydata.clinic_id = cid
            surveydata.clinic_name = cname
            surveydata.patient_id = pid
            surveydata.date = new Date(moment(new Date()).format('MM/DD/YYYY'));

            fetch("/save", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(surveydata)
            }).then(res => {
                console.log("Request complete! response:", res);
            });
        });

    //   survey.data = JSON.parse(data);
    //    survey.mode = 'display';

    $("#surveyElement").Survey({ model: survey });
})