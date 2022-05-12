$(() => {

    const params = new URLSearchParams(window.location.search)
    let cid = "", pid = "";

    if (params.has('cid') && params.has('pid')) {
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
            surveydata.patient_id = pid

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