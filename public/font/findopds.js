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
    createTable(json.answer);
}

function createTable(mas) {
    let tbody = document.getElementById('tbody');
    let innerHtml = '';
    for (let i = 0; i < mas.length; i++) {
        innerHtml += `<tr><td>${masBaseStokes[mas[i].id - 1].name}</td><td>${mas[i].procentCoris.procentA1.toString().slice(0,4)}</td><td>${mas[i].procentCoris.procentA2.toString().slice(0,4)}</td><td>${mas[i].procentCoris.procentA3.toString().slice(0,4)}</td>
<td>${mas[i].procentNedolik.procentB1.toString().slice(0,4)}</td>
<td>${mas[i].procentNedolik.procentB2.toString().slice(0,4)}</td>
<td>${mas[i].procentNedolik.procentB3.toString().slice(0,4)}</td>
<td>${mas[i].procentNedolik.procentB4.toString().slice(0,4)}</td>
<td>${mas[i].procentNedolik.procentB5.toString().slice(0,4)}</td>
<td>${mas[i].procentNedolik.procentB6.toString().slice(0,4)}</td>
<td>${mas[i].procentNedolik.procentNone.toString().slice(0,4)}</td></tr>`;
    };

    tbody.innerHTML = innerHtml;

}

createSlider();