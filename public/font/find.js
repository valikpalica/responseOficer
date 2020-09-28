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

function createSlider() {
    const date = new Date;
    document.getElementById('slider').max = date.getFullYear();
    document.getElementById('slider').min = 2000;
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
    let link = '';
    let name ='';
    for (let i = 0;i<mas.length;i++){
        let color = mas[i].midleBallOficers<3.0 || mas[i].midleComanders<3.0 ? '#D32F2F' :'#8BC34A';
        innerHTML+= `<tr style="background-color: ${color}"><td>${namedisciplinas[mas[i].id-1].name}</td><td>${mas[i].midleBallOficers}</td><td>${mas[i].midleComanders}</td></tr>`;
    }
    tbody.innerHTML= innerHTML;
}
createSlider();