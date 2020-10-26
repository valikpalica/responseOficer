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

document.getElementById('checngeresponse').addEventListener('click',changeFirstResponse);
document.getElementById('changetable').addEventListener('click',changeFirstTable);
document.getElementById('changetableSecond').addEventListener('click',changeSecondTable);
document.getElementById('changeOficerResponse').addEventListener('click',changeLastResponse);
document.getElementById('year').addEventListener('change',checkYear);

let namedisciplinas = [{name:'основ кримінального кодексу щодо військових злочинів та відповідальності за них'},
    {name:'основ міжнародного гуманітарного права'},
    {name:'Статутів Збройних Сил України'},
    {name:'підтримувати підрозділ у стані постійної бойової готовності'},
    {name:'планувати, організовувати та контролювати повсякденну діяльність підрозділу'},
    {name:'управляти повсякденною діяльністю підрозділу через підпорядкований сержантський склад'},
    {name:'здійснювати підготовку та управляти підрозділом під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'приймати обґрунтовані рішення в складній обстановці під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'вести (відпрацьовувати) бойові (звітні) документи'},
    {name:'організовувати і вести розвідку під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'організовувати і підтримувати стійкий звязок під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'здійснювати заходи з інженерної підготовки підрозділу під час підготовки та в ході виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'здійснювати РХБ захист дій підрозділу під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'здійснювати заходи з топогеодезичного забезпечення дій підрозділу  під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'організовувати заходи ППО та маскування підрозділу'},
    {name:'здійснювати заходи з медичного забезпечення дій підрозділу під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'організовувати взаємодію з іншими підрозділами'},
    {name:'володіння штатним озброєнням та військовою технікою'},
    {name:'організовувати експлуатацію озброєння та військової техніки (обслуговування та ремонт) під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name:'виховувати у підлеглих патріотизм та любов до Батьківщини'},
    {name:'виховувати особовий склад та зміцнювати військову дисципліну у підпорядкованому підрозділі'},
    {name:'проводити навчальні заняття з особовим складом підпорядкованого підрозділу з дотриманням заходів безпеки'},
    {name:'здатність до мотивації особового складу на успішне виконання завдання'},
    {name:'вміння працювати в команді'},
    {name:'особиста дисциплінованість, стресостійкість та витривалість'},
    {name:'швидко реагувати на ризькі зміни в бойовій (навчальній) обстановці'}];

let masBaseStokes = [
    {name: 'Морально-психологічне забезпечення підготовки та застосування Збройних Сил України'},
    {name: '3агальна тактика'},
    {name: 'Основи військового управління (у тому числі штабні процедури НАТО)'},
    {name: 'Управління повсякденною діяльністю підрозділів (у тому числі охорона державної таємниці, безпека життєдіяльності, основи охорони праці, безпека військової діяльності)'},
    {name: 'Радіаційний, хімічний, біологічний захист підрозділів   (у тому числі екологія)'},
    {name: 'Військова топографія'},
    {name: 'Інженерна підготовка'},
    {name: 'Організація військового зв’язку,'},
    {name: 'Бойова система виживання воїнів (у тому числі тактична медицина)'},
    {name: 'Статути Збройних Сил України та їх практичне застосування (у тому числі стройова підготовка)'},
    {name: 'Стрілецька зброя та вогнева підготовка'},
    {name: 'Фізичне виховання та спеціальна фізична підготовка'},
    {name: 'Іноземна мова (загальний, загальновійськовий та спеціальний курс)'},
    {name: 'Правознавство (у тому числі основи військового законодавства та міжнародне гуманітарне право, морське право для спеціальностей підготовки військових фахівців морського профілю)'},
    {name: 'Військова педагогіка та психологія (у тому числі лідерство)'}
];
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
    let responseInform = getFirstPunkt();
    let firstTable = getTableBall();
    let secondTable = getKoris();
    let lastResponse  = lastPosition();
    responseInformation(responseInform);
    createFirstTable(firstTable);
    createSecondTable(secondTable);
    createLastResponse(lastResponse);
    console.log(responseInform,firstTable,secondTable,lastResponse);
}
function responseInformation(obj) {
    document.getElementById('ckeckzvanije').value = obj.zvanije;
    document.getElementById('ckeckFLP').value =obj.FLP;
    document.getElementById('ckeckinstitute').value =NameInstitute(obj.institute);
    document.getElementById('ckeckyear').value = obj.year;
    document.getElementById('ckeckfacultet').value = obj.facultet;
    document.getElementById('ckeckspecialize').value =obj.specialize;
    document.getElementById('ckeckwork').value = obj.work;
    document.getElementById('ckeckposada').value = obj.posada;
    document.getElementById('ckeckvidpovidnist').value = obj.vidpovidnist;
}
function createFirstTable(array) {
    let tbody  = document.getElementById('tbody1');
    let innerHTML = '';
    for(let i=0;i<array.length;i++){
        innerHTML+=`<tr><td>${namedisciplinas[i].name}</td><td>${array[i]}</td></tr>`;
    }
    tbody.innerHTML = innerHTML;
}
function createSecondTable(array) {
    let tbody = document.getElementById('tbody2');
    let innerHTML = '';
    for (let i=0;i<array.length;i++){
        innerHTML+=`<tr><td>${masBaseStokes[i].name}</td><td>${array[i].koris}</td><td>${array[i].nedolik}</td></tr>`
    }
    tbody.innerHTML = innerHTML;
}

function createLastResponse(object) {
    document.getElementById('oficerResponsechenge').value = object.oficerResponse;
}
function NameInstitute(value) {
    let option = document.getElementById('institute').getElementsByTagName('option');
    console.log(option[value].innerText);
    return option[value].innerText;
}


function changeFirstResponse() {
    let display = document.getElementById('all');
    let display1 = document.getElementById('generalReposne');
    display.style.display = "none";
    display1.style.display = "block";
}
function changeFirstTable() {
    let display = document.getElementById('all');
    let display1 = document.getElementById('table1');
    display.style.display = "none";
    display1.style.display = "block";
}
function changeSecondTable() {
    let display = document.getElementById('all');
    let display1 = document.getElementById('table2');
    display.style.display = "none";
    display1.style.display = "block";
}
function changeLastResponse() {
    let display = document.getElementById('all');
    let display1 = document.getElementById('responseOficer');
    display.style.display = "none";
    display1.style.display = "block";
}
function time() {
    let data = new Date();
    let body = document.getElementById('time');
    let hour = data.getHours();
    let Minutes = data.getMinutes();
    let second = data.getSeconds();
    body.innerText = `${hour}:${Minutes}:${second}`;
}
function checkYear() {
    let year = document.getElementById('year').value;
    let data = new Date();
    if(+year>data.getFullYear()){
        document.getElementById('year').value =  '';
        alert('Не правильний рік');
    }

}

setInterval(time,1000);