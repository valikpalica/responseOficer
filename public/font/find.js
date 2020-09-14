
document.addEventListener('DOMContentLoaded', function() {
    let  elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.browser-default');
    var instances = M.FormSelect.init(elems, options);
});
let button = document.getElementById('button');
button.addEventListener('click',findinstitute);

function createSlider(){
    const date = new Date;
    document.getElementById('slider').max = date.getFullYear();
    document.getElementById('slider').min = 2000;
}
function findinstitute(){
    let tbody = document.getElementById('tbody');
    let year = document.getElementById("slider").value;
    let specialize = document.getElementById('specialize').value;
    let inHTML = '';
    for (let i =0;i<cadet.length;i++){
        inHTML+=`<tr></tr><td>${cadet[i].NSP}</td>` +
            `<td>${cadet[i].year}</td>` +
            `<td>${cadet[i].ins}</td></tr>`
    }
    tbody.innerHTML = inHTML
}

const cadet = [{NSP:'Палиця Валентин Олександрович',ins:'5',year:'4'},{NSP:'Пархоменко Іван Олександрович',ins:'4',year:'4'},{NSP:'Жильцов  Олександр Валентинович',ins:'3',year:'2'},{NSP:'Пахнюк Захар Андрійович',ins:'3',year:'3'},{NSP:'Смирнов Павел Олександрович',ins:'3',year:'4'}];

createSlider();
