let password = document.getElementById('password');
let pas2 = document.getElementById('password1');
let button = document.getElementById('button');

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