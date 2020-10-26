document.getElementById('next1').addEventListener('click',nex1);

document.getElementById('back1').addEventListener('click',back1);
document.getElementById('next2').addEventListener('click',nex2);

document.getElementById('back2').addEventListener('click',back2);
document.getElementById('next3').addEventListener('click',nex3);

document.getElementById('back3').addEventListener('click',back3);
document.getElementById('next4').addEventListener('click',nex4);

document.getElementById('back4').addEventListener('click',back4);
document.getElementById('next5').addEventListener('click',all);

document.getElementById('generalReposne').addEventListener('change',checkGenarealResponse);
document.getElementById('table1').addEventListener('change',checkFirstTable);
document.getElementById('table2').addEventListener('change',checkSecondTable);
document.getElementById('oficerResponse').addEventListener('change',checkLastResponse);

function back1() {
    let display = document.getElementById('table1');
    let display1 = document.getElementById('generalReposne');
    display.style.display = "none";
    display1.style.display = "block";
}
function back2() {
    let display = document.getElementById('instuction');
    let display1 = document.getElementById('table1');
    display.style.display = "none";
    display1.style.display = "block";
}
function back3() {
    let display = document.getElementById('table2');
    let display1 = document.getElementById('instuction');
    display.style.display = "none";
    display1.style.display = "block";
}
function back4() {
    let display = document.getElementById('responseOficer');
    let display1 = document.getElementById('table2');
    display.style.display = "none";
    display1.style.display = "block";
}
function checkGenarealResponse() {
    let button  =document.getElementById('next1');
    let input  =  document.getElementById('generalReposne').getElementsByTagName('input');
    let select  =  document.getElementById('generalReposne').getElementsByTagName('select');
    for (let i=0;i<input.length;i++){
        if(input[i].value === ''){
            button.disabled = true;
            return;
        }
    }
    for (let i=0;i<select.length;i++){
        if(select[i].value === ''){
            button.disabled = true;
            return;
        }
    }
    button.disabled = false;
}
function checkFirstTable() {
    let button = document.getElementById('next2');
    let input = document.getElementById('table1').getElementsByTagName('input');
    let counted = 0;
    for (let i=0;i<input.length;i++){
        if(input[i].checked){
            counted++;
        }
    }
    if(counted===26){
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}
function checkSecondTable() {
    let button  = document.getElementById('next4');
    let firstInput = document.getElementById('table2').getElementsByClassName('koris');
    let countedFirst = 0;

    for (let i=0;i<firstInput.length;i++){
        if(firstInput[i].checked){
            countedFirst++;
        }
    }
    if(countedFirst===15){
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}
function checkLastResponse() {
    let button = document.getElementById('next5');
    let input = document.getElementById('oficerResponse').value;
    if (input !== ''){
        button.disabled = false;
    }
    else {
        button.disabled  = true;
    }

}


function nex1() {
    let display = document.getElementById('generalReposne');
    let display1 = document.getElementById('table1');
    display.style.display = "none";
    display1.style.display = "block";
}
function nex2() {
    let display = document.getElementById('table1');
    let display1 = document.getElementById('instuction');
    display.style.display = "none";
    display1.style.display = "block";
}
function nex3() {
    let display = document.getElementById('instuction');
    let display1 = document.getElementById('table2');
    display.style.display = "none";
    display1.style.display = "block";
}
function nex4() {
    let display = document.getElementById('table2');
    let display1 = document.getElementById('responseOficer');
    display.style.display = "none";
    display1.style.display = "block";
}
function all() {
    let display = document.getElementById('responseOficer');
    let display1 = document.getElementById('all');
    display.style.display = "none";
    display1.style.display = "block";
    getall();
}

function obj() {
    return {}
}

function getKoris() {
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
    return mas;
}
function getTableBall() {
    let radiobutton = document.getElementsByName("checkboxfirth");
    let mas = [];
    let counter = 0;
    for (let i = 0; i < radiobutton.length; i++) {
        if (radiobutton[i].checked) {
            mas.push(radiobutton[i].value);
            counter+=+radiobutton[i].value;
        }
    }
   return  mas;
}

function lastPosition() {
    let divResponse = document.getElementsByName("divResponse");
    let response = obj();
    for (let i = 0; i < divResponse.length; i++) {
        console.log(divResponse[i].value);
        response[divResponse[i].id] = divResponse[i].value;
    }
    return response;
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
function getall() {
    let first = getFirstPunkt();
    let second = getTableBall();
    let third = getKoris();
    let last  = lastPosition();
    console.log(first,second,third,last);
}