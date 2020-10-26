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
    if(first!= undefined&&last!=undefined&&third!=undefined&&fourth!=undefined){
        let rez = await fetch('/saveResponseOficer',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({first:first,third:third,fourth:fourth,last:last})
        });
        clear();
    }
    else {
        clear();
        return alert('not create');
    }


}


async function getComanderResponse() {
    let first = getFirstPunkt();
    let last = lastPosition();
    let second = getSecondTable();
    if(first!=undefined&&last!=undefined&&second!=undefined){
        await fetch('/saveResponseComander',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({first:first,second:second,last:last})
        });
        clear();
    }
    else {
        clear();
        return alert('not create');
    }

}

function clear() {
     document.getElementById('zvanije').value = '';
     document.getElementById('institute').value  = '';
     document.getElementById('facultet').value ='';
     document.getElementById('specialize').value = '';
    let responseOficer = document.getElementsByName("response");
    for (let i = 0;i<responseOficer.length;i++){
        responseOficer[i].value = '';
    }
    let divResponse = document.getElementsByName("divResponse");
    for (let i=0;i<divResponse.length;i++){
        divResponse[i].value  =''
    }
    let ballcom = document.getElementsByName('ballcom');
   if (ballcom!= null){
       for(let i= 0;i<ballcom.length;i++){
           ballcom[i].checked  = false;
       }
   }
    let radiobutton = document.getElementsByName("checkboxfirth");
    if(radiobutton!= null){
        for (let i=0;i<radiobutton.length;i++){
            radiobutton[i].checked = false;
        }
    }
    let koris = document.getElementsByClassName("koris");
    let nedolkik = document.getElementsByClassName("nedoliki");
    if(koris!= null){
        for (let i=0;i<koris.length;i++){
            koris[i].checked = false;
        }
    }
    if(nedolkik!= null){
        for (let i = 0;i<nedolkik.length;i++){
            nedolkik[i].checked = false;
        }
    }
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
    if(mas.length<26){
        alert("You not choose ball");
        mas.length = 0;
    }
    else if (mas.length == 26) {
        console.log(mas);
        return {mas:mas,midle:midle};
    } else {
        alert("You not correct choose ball");
        mas.length = 0;
    }
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
    if(mas.length<15){
        alert('you did not chose all value');
        mas.length = 0;
    }
    else if (mas.length==15){
        return mas;
    }
    else {
        alert('you did not corect chose value');
        mas.length =0;
    }
}