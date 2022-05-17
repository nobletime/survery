
function exportAllToCSV(result, filename) {
    if (result  == null || result.length ==0 ) return;
    let header = "Clinic Name, Subject Internal Id, Child's DOB, Gender, Relationship to Child, Ratings, Date Completed, Q1, Q2, Q3, Q4, Q5"
    header = header + ", Q1.1, Q1.2"
    header = header + ", Q2.1, Q2.2, Q2.3, Q2.4"
    header = header + ", Q3.1, Q3.2, Q3.3, Q4.4"
    header = header + ", Q4.1, Q4.2, Q4.3, Q4.4, Q4.5"
    header = header + ", Q5.1, Q5.2, Q5.3, Q5.4, Q5.5"

    let body = "";

    for (const r of result) {
        r.dob = moment(new Date(r.dob)).format("MM/DD/YYYY")
        r.date = moment(new Date(r.date)).format("MM/DD/YYYY")
        body = body + `\n${r.clinic_name}, ${r.patient_id}, ${r.dob}, ${r.gender}, ${r.relationship_child}, ${r.rating}, ${r.date}, ${r.main_questions[1]}, ${r.main_questions[2]}, ${r.main_questions[3]}, ${r.main_questions[4]}, ${r.main_questions[5]} `

        for (let key in r.secondary1) {
            body = body + `,${r.secondary1[key]}`
        }

        if (!r.hasOwnProperty('secondary1')) body = body + ",,"

        for (let key in r.secondary2) {
            body = body + `,${r.secondary2[key]}`
        }

        if (!r.hasOwnProperty('secondary2')) body = body + ",,,,"
        for (let key in r.secondary3) {
            body = body + `,${r.secondary3[key]}`
        }

        if (!r.hasOwnProperty('secondary3')) body = body + ",,,,"
        for (let key in r.secondary4) {
            body = body + `,${r.secondary4[key]}`
        }

        if (!r.hasOwnProperty('secondary4')) body = body + ",,,,,"
        for (let key in r.secondary5) {
            body = body + `,${r.secondary5[key]}`
        }
    }

    download(`${filename}.csv`, header + body)

}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}


function getAllResults() {
    
    $.get(`/results`, function (data) {
        exportAllToCSV(data, "SurveyResuls");
    });
}


function getSelectedResults() {
    
    $.get(`/results?cid=${table.row( { selected: true } ).data().clinic_id}`, function (data) {
        if (data.length==0) alert("No Results available!")
        exportAllToCSV(data, "SurveyResuls");
    })
}