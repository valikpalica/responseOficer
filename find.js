

document.addEventListener('DOMContentLoaded', function() {
    let  elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems);
});





function createSlider(){
    const date = new Date;
    document.getElementById('slider').max = date.getFullYear();
    document.getElementById('slider').min = 2000;
}


function findinstitute(obj){
    let year = document.getElementById("slider").value;
    console.log(obj.value,year)
}


function find(obj){
    console.log(obj.value);
}
createSlider();
