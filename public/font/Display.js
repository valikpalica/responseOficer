document.getElementById('next').addEventListener('click', next);
document.getElementById('generalResponse').addEventListener('change', onChecngeInfo);
document.getElementById('AllTableBall').addEventListener('change', onchageTable);
document.getElementById('response').addEventListener('change', onchangeResponse);
document.getElementById('next1').addEventListener('click', next1);
document.getElementById('next2').addEventListener('click', next2);
document.getElementById('next3').addEventListener('click', next3);
document.getElementById('changetable').addEventListener('click', checngeTable);
document.getElementById('checngeresponse').addEventListener('click', chengeResponse);
document.getElementById('changelast').addEventListener('click', changelast);
document.getElementById('back1').addEventListener('click', back1);
document.getElementById('back2').addEventListener('click', back2);
document.getElementById('back3').addEventListener('click', back3);
document.getElementById('year').addEventListener('change', checkYear);

let namedisciplinas = [{name: 'основ кримінального кодексу щодо військових злочинів та відповідальності за них'},
    {name: 'основ міжнародного гуманітарного права'},
    {name: 'Статутів Збройних Сил України'},
    {name: 'підтримувати підрозділ у стані постійної бойової готовності'},
    {name: 'планувати, організовувати та контролювати повсякденну діяльність підрозділу'},
    {name: 'управляти повсякденною діяльністю підрозділу через підпорядкований сержантський склад'},
    {name: 'здійснювати підготовку та управляти підрозділом під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'приймати обґрунтовані рішення в складній обстановці під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'вести (відпрацьовувати) бойові (звітні) документи'},
    {name: 'організовувати і вести розвідку під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'організовувати і підтримувати стійкий звязок під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'здійснювати заходи з інженерної підготовки підрозділу під час підготовки та в ході виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'здійснювати РХБ захист дій підрозділу під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'здійснювати заходи з топогеодезичного забезпечення дій підрозділу  під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'організовувати заходи ППО та маскування підрозділу'},
    {name: 'здійснювати заходи з медичного забезпечення дій підрозділу під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'організовувати взаємодію з іншими підрозділами'},
    {name: 'володіння штатним озброєнням та військовою технікою'},
    {name: 'організовувати експлуатацію озброєння та військової техніки (обслуговування та ремонт) під час під час виконання бойових (спеціальних) завдань, проведення навчань, занять'},
    {name: 'виховувати у підлеглих патріотизм та любов до Батьківщини'},
    {name: 'виховувати особовий склад та зміцнювати військову дисципліну у підпорядкованому підрозділі'},
    {name: 'проводити навчальні заняття з особовим складом підпорядкованого підрозділу з дотриманням заходів безпеки'},
    {name: 'здатність до мотивації особового складу на успішне виконання завдання'},
    {name: 'вміння працювати в команді'},
    {name: 'особиста дисциплінованість, стресостійкість та витривалість'},
    {name: 'швидко реагувати на ризькі зміни в бойовій (навчальній) обстановці'}];

function next() {
    let display = document.getElementById('generalResponse');
    let display1 = document.getElementById('instruction');
    display.style.display = "none";
    display1.style.display = "block";
}

function next1() {
    let display = document.getElementById('instruction');
    let display1 = document.getElementById('AllTableBall');
    display.style.display = "none";
    display1.style.display = "block";
}

function next2() {
    let display = document.getElementById('AllTableBall');
    let display1 = document.getElementById('response');
    display.style.display = "none";
    display1.style.display = "block";
}

function next3() {
    let display = document.getElementById('response');
    let display1 = document.getElementById('all');
    display.style.display = "none";
    display1.style.display = "block";
    result();
}

function back1() {
    console.log('back1');
    let display = document.getElementById('instruction');
    let display1 = document.getElementById('generalResponse');
    display.style.display = "none";
    display1.style.display = "block";
}

function back2() {
    let display = document.getElementById('AllTableBall');
    let display1 = document.getElementById('instruction');
    display.style.display = "none";
    display1.style.display = "block";
}

function back3() {
    let display = document.getElementById('response7');
    let display1 = document.getElementById('AllTableBall');
    display.style.display = "none";
    display1.style.display = "block";
}

function onChecngeInfo() {
    let button = document.getElementById('next');
    let select = document.getElementById('generalResponse').getElementsByTagName('select');
    let input = document.getElementById('generalResponse').getElementsByTagName('input');
    for (let i = 0; i < select.length; i++) {
        if (select[i].value == '') {
            button.disabled = true;
            return;
        }
    }
    for (let i = 0; i < input.length; i++) {
        //console.log(input[i].value=='');
        if (input[i].value == '') {
            button.disabled = true;
            return;
        }
    }
    button.disabled = false;
}

function onchageTable() {
    let button = document.getElementById('next2');
    let input = document.getElementById('AllTableBall').getElementsByTagName('input');
    //console.log(input);
    let counted = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            counted++;
        }
    }
    console.log(counted);
    if (counted == 26) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function onchangeResponse() {
    let button = document.getElementById('next3');
    let input = document.getElementById('response').getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == '') {
            button.disabled = true;
            return;
        }
    }
    button.disabled = false;
}

function checngeTable() {
    let display = document.getElementById('all');
    let display1 = document.getElementById('AllTableBall');
    display.style.display = "none";
    display1.style.display = "block";
}

function chengeResponse() {
    let display = document.getElementById('all');
    let display1 = document.getElementById('generalResponse');
    display.style.display = "none";
    display1.style.display = "block";
}

function changelast() {
    let display = document.getElementById('all');
    let display1 = document.getElementById('response');
    display.style.display = "none";
    display1.style.display = "block";
}

function result() {
    let first = getFirstPunkt();
    let second = getSecondTable();
    let last = lastPosition();
    createTable(second);
    responseInform(first);
    responseComander(last);
}

function responseInform(obj) {
    document.getElementById('ckeckzvanije').value = obj.zvanije;
    document.getElementById('ckeckFLP').value = obj.FLP;
    document.getElementById('ckeckinstitute').value = NameInstitute(obj.institute);
    document.getElementById('ckeckyear').value = obj.year;
    document.getElementById('ckeckfacultet').value = obj.facultet;
    document.getElementById('ckeckspecialize').value = obj.specialize;
    document.getElementById('ckeckwork').value = obj.work;
    document.getElementById('ckeckposada').value = obj.posada;
    document.getElementById('ckeckvidpovidnist').value = obj.vidpovidnist;
}

function NameInstitute(value) {
    let option = document.getElementById('institute').getElementsByTagName('option');
    console.log(option[value].innerText);
    return option[value].innerText;
}

function responseComander(obj) {
    document.getElementById('checkcomanderResponse').value = obj['comanderResponse'];
    document.getElementById('ckeckcomandervhResponse').value = obj['comandervhResponse'];
}

function createTable(obj) {
    let tbody = document.getElementById('tbody');
    let inner = '';
    for (let i = 0; i < obj.mas.length; i++) {
        inner += `<tr><td>${namedisciplinas[i].name}</td><td>${obj.mas[i]}</td></tr>`
    }
    tbody.innerHTML = inner;
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
        if (ballcom[i].checked) {
            mas.push(ballcom[i].value);
            counter += +ballcom[i].value;
        }
    }
    let midle = counter / mas.length;
    return {mas: mas, midle: midle};

}

function checkYear() {
    let year = document.getElementById('year').value;
    let data = new Date();
    if (+year > data.getFullYear()) {
        document.getElementById('year').value = '';
        alert('Не правильний рік');
    }
}

function time() {
    let data = new Date();
    let body = document.getElementById('time');
    let hour = data.getHours();
    let Minutes = data.getMinutes();
    let second = data.getSeconds();
    body.innerText = `${hour}:${Minutes}:${second}`;
}

setInterval(time, 1000);