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
    for (let i = 0;i<mas.length;i++){
        innerHTML+= `<tr><td>${mas[i].NSP}</td><td>${mas[i].midleOficer}</td><td>${mas[i].midleComander}</td></tr>`;
    }
    tbody.innerHTML= innerHTML;
}

createSlider();
