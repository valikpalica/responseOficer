let button = document.getElementById("button");
let buttonOficer = document.getElementById('buttonOficer');
if (button!= null){
    button.addEventListener('click', getComanderResponse);
}
if(buttonOficer!= null){
    buttonOficer.addEventListener('click',getOficerResponse);
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.browser-default');
    var instances = M.FormSelect.init(elems);
});

function obj() {
    return {}
}




async function getOficerResponse() {
    let first = getFirstPunkt();
    let last = lastPosition();
    let third = getThirdTable();
    let fourth = getFourthTable();
    //console.log('first table' ,first,'third table',third,'fourst table',fourth,last);
    await fetch('/saveResponseOficer',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({first:first,third:third,fourth:fourth,last:last})
    });
}

async function getComanderResponse() {
    let first = getFirstPunkt();
    let last = lastPosition();
    let second = getSecondTable();
    await fetch('/saveResponseComander',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({first:first,second:second,last:last})
    });
}

function getFirstPunkt() {
    let responseOficer = document.getElementsByName("response");
    let oficer = obj();
    for (let i = 0; i < responseOficer.length; i++) {
        oficer[responseOficer[i].id] = responseOficer[i].value;
    }
    let zvanije = document.getElementById('zvanije').value;
    let institute = document.getElementById('institute').value;
    let facultet = document.getElementById('facultet').value;
    let specialize = document.getElementById('specialize').value;
    oficer['zvanije'] = zvanije;
    oficer['institute'] = institute;
    oficer['facultet'] = facultet;
    oficer['specialize'] = specialize;
    return oficer;
}

function lastPosition() {
    let divResponse = document.getElementsByName("divResponse");
    let response = obj();
    for (let i = 0; i < divResponse.length; i++) {
        response[divResponse[i].id] = divResponse[i].value;
    }

    return response;
}

function getSecondTable() {
   let ballcom = document.getElementsByName('ballcom');
    let mas = [];
    let counter = 0;
    for (let i = 0; i < ballcom.length; i++) {
        if(ballcom[i].checked){
           mas.push(ballcom[i].value);
           counter+=+ballcom[i].value;
        }
    }
    let midle = counter/mas.length;

    return {mas:mas,midle:midle};
}

function getThirdTable() {
    let radiobutton = document.getElementsByName("checkboxfirth");
    let mas = [];
    let counter = 0;
    for (let i = 0; i < radiobutton.length; i++) {
        if (radiobutton[i].checked) {
            mas.push(radiobutton[i].value);
            counter+=+radiobutton[i].value;
        }
    }
    let midle = counter/mas.length;
    if (mas.length < 26) {
        alert("You not choose ball");
        mas.length = 0;
    } else if (mas.length == 26) {
        console.log(mas);
        return {mas:mas,midle:midle};
    } else {
        alert("You not correct choose ball");
        mas.length = 0;
    }
}

function getFourthTable() {
    let mas = [];
    for (let i = 1; i <= 15; i++) {
        let tabobj = obj();
        tabobj[`koris`] = '';
        tabobj[`nedolik`] = '';
        let koris = document.getElementById(i).getElementsByClassName("koris");
        let nedolkik = document.getElementById(i).getElementsByClassName("nedoliki");
        for (let j = 0; j < koris.length; j++) {
            if (koris[j].checked) {
                tabobj[`koris`] = koris[j].value;
            }
        }
        for (let j = 0; j < nedolkik.length; j++) {
            if (nedolkik[j].checked) {
                tabobj[`nedolik`] = nedolkik[j].value;
            }
        }

        mas.push(tabobj);
    }
    console.log(mas);
    return mas;
}