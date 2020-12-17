document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.browser-default');
    var instances = M.FormSelect.init(elems);
});
let button = document.getElementById('button');
button.addEventListener('click', findinstitute);
document.getElementById('save').addEventListener('click', generateLink);

const namedisciplinas = [{name: 'основ кримінального кодексу щодо військових злочинів та відповідальності за них'},
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

function main() {
    createSlider();
    setInterval(time, 1000);
}
function createSlider() {
    const date = new Date;
    document.getElementById('slider').max = date.getFullYear();
    document.getElementById('slider').min = 2000;
}

function imageDownload() {
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

    if (year.length != 0 && specialize.length != 0) {
        let answer = await fetch('/downloaddisciplinas', {
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
            let a = generateTag();
            clearLink(divLink);
            a.innerHTML = imageDownload();
            divLink.appendChild(a);
            clearInterval(interval);
        }

    },1000);
}

function divLoader() {
    let innerSlider = `<div class="d-flex justify-content-center">
                                      <div class="spinner-border text-primary" role="status">
                                         <span class="sr-only">Loading...</span>
                                      </div>
                                    </div>`;
    return innerSlider;
}

function generateTag(){
    let a = document.createElement('a');
    a.setAttribute('href', `/downloaddisciplinas`);
    a.setAttribute('download', 'worddisciplinas.docx');
    return a;
}
function clearLink(divLink){
    while (divLink.firstChild) {
        divLink.removeChild(divLink.lastChild);
    }
}




async function findinstitute() {
    let year = document.getElementById('slider').value;
    let specialize = document.getElementById('specialize').value;
    let rez = await fetch('/find', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({year: year, specialize: specialize}),
    });
    let obj = await rez.json();
    console.log(obj);
    create_table(obj.answer);
}

function create_table(mas) {
    let tbody = document.getElementById('tbody');
    let innerHTML = '';
    for (let i = 0; i < mas.length; i++) {
        let midleBallOficers = mas[i].midleBallOficers == null ? 0 : mas[i].midleBallOficers;
        let midleBallComanders = mas[i].midleComanders == null ? 0 : mas[i].midleComanders;
        let color = mas[i].midleBallOficers < 3.0 || mas[i].midleComanders < 3.0 ? '#FFCDD2' : '#DCEDC8';
        innerHTML += `<tr style="background-color: ${color}"><td>${namedisciplinas[mas[i].id - 1].name}</td><td>${midleBallOficers}</td><td>${midleBallComanders}</td></tr>`;
    }
    tbody.innerHTML = innerHTML;
}



function time() {
    let data = new Date();
    let body = document.getElementById('time');
    let hour = data.getHours();
    let Minutes = data.getMinutes();
    let second = data.getSeconds();
    body.innerText = `${hour}:${Minutes}:${second}`;
}

main();


