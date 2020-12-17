document.getElementById('generateLInk').addEventListener('click', generateLink);
let button = document.getElementById('button');
button.addEventListener('click', getProcent);
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.browser-default');
    var instances = M.FormSelect.init(elems);
});
function createSlider() {
    const date = new Date;
    document.getElementById('slider').max = date.getFullYear();
    document.getElementById('slider').min = 2000;
}

function imageDownload(){
    return `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cloud-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg><p style="float: right">Download</p>`
}


async function generateLink() {
    let year = document.getElementById('slider').value;
    let specialize = document.getElementById('specialize').value;
    let divLink = document.getElementById('divLInk');
    divLink.innerHTML = divLoader();

    if (year.length!= 0&& specialize.length!= 0 ) {

        let answer = await fetch('/downloadopds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({year: year, specialize: specialize}),
        });
        let reader = await answer.body.getReader();
        GetDone(reader,divLink);
    } else {
        alert('choose year and specialize');
    }
}

function GetDone(reader,divLink) {

    let interval = setInterval(async ()=>{
        const {done} = await reader.read();
        if(done){
            let a = genTag();
            clearLink(divLink);
            a.innerHTML = imageDownload();
            divLink.appendChild(a);
            clearInterval(interval);
        }

    },1000);
}
function genTag (){
    let a = document.createElement('a');
    a.setAttribute('href', `/downloadopds`);
    a.setAttribute('download', 'word.docx');
    return a;
}
function clearLink(divLink){
    while (divLink.firstChild) {
        divLink.removeChild(divLink.lastChild);
    }
}
function divLoader() {
    let innerSlider = `<div class="d-flex justify-content-center">
                                      <div class="spinner-border text-primary" role="status">
                                         <span class="sr-only">Loading...</span>
                                      </div>
                                    </div>`;
    return innerSlider;
}

let masData = [];
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


async function getProcent() {
    let year = document.getElementById('slider').value;
    let specialize = document.getElementById('specialize').value;
    let data = await fetch('/findopds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({year: year, specialize: specialize})
    });
    let json = await data.json();
    console.log(json.answer);
    masData = json.answer;
    createTable(json.answer);
}

function createTable(mas) {
    let tbody = document.getElementById('tbody');
    let innerHtml = '';
    for (let i = 0; i < mas.length; i++) {
        innerHtml += `<tr><td>${masBaseStokes[mas[i].id - 1].name}</td><td class="disableCor">${validate(mas[i].procentCoris.procentA1)}</td><td class="disableCor">${validate(mas[i].procentCoris.procentA2)}</td><td class="disableCor">${validate(mas[i].procentCoris.procentA3)}</td>
<td class="disabled">${validate(mas[i].procentNedolik.procentB1)}</td>
<td class="disabled">${validate(mas[i].procentNedolik.procentB2)}</td>
<td class="disabled">${validate(mas[i].procentNedolik.procentB3)}</td>
<td class="disabled">${validate(mas[i].procentNedolik.procentB4)}</td>
<td class="disabled">${validate(mas[i].procentNedolik.procentB5)}</td>
<td class="disabled">${validate(mas[i].procentNedolik.procentB6)}</td>
<td class="disabled">${validate(mas[i].procentNedolik.procentNone)}</td></tr>`;
    };
    tbody.innerHTML = innerHtml;
}

function validate(element) {
    let newelement = element == null ? 0 : element.toString().slice(0, 4);
    return newelement;
}

createSlider();
function time() {
    let data = new Date();
    let body = document.getElementById('time');
    let hour = data.getHours();
    let Minutes = data.getMinutes();
    let second = data.getSeconds();
    body.innerText = `${hour}:${Minutes}:${second}`;
}

setInterval(time,1000);