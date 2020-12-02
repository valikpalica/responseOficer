let password = document.getElementById('password');
let pas2 = document.getElementById('password1');
let button = document.getElementById('button');
document.getElementById('vch').addEventListener('change',()=>{
    let pattern  =  /А\d{4}/g;
    let vch = document.getElementById('vch').value;
    if(vch.length===5){
        let result = pattern.exec(vch);
        if(result===null){
            let button = document.getElementById('button');
            button.disabled  = true;
            let error = document.getElementById('vchError');
            error.innerText = 'Не правильне введення номеру військової частини';
        }
        else {
            let error = document.getElementById('vchError');
            error.innerHTML = '';
            button.disabled  = false;
        }
    }
    else {
        let button = document.getElementById('button');
        button.disabled  = true;
        let error = document.getElementById('vchError');
        error.innerText = 'Не правильне введення номеру військової частини';
    }

});

pas2.addEventListener('input',function () {

    if(password.value!=pas2.value){
        button.disabled  = true;
        let error = document.getElementById('errorMessage');
        error.innerHTML = 'Паролі не співпадають';
    }
    else {
        let error = document.getElementById('errorMessage');
        error.innerHTML = '';
        button.disabled  = false;
    }
});

password.addEventListener('input',function () {
        let value = password.value;
        if (value.length<8){
            let message = document.getElementById('lenghtPassword');
            message.innerHTML  = 'Пароль може бути не безпечним, збільште його до 8 символів';
        }
        else {
            let message = document.getElementById('lenghtPassword');
            message.innerHTML  = '';
        }
})