/*let whois = prompt('Кто пришел', 'Админ');
if(whois === 'Админ'){
    const password = prompt('Пароль','');
    if (password === 'Темный Властелин'){
        alert('Добро Пожаловать!');
    } else if(password === null){
        alert('Вход отменен');
    } else{
        alert('Пароль неверен');
    }
} else if(whois === null){
    alert('Вход отменен');
} else{
    alert('Я вас не знаю');
}*/

const test = true;

if(test !== true){
    alert('Верно');
} else{
    alert('Неверно');
}

const result = test !== true ? 'Верно' : 'Неверно';
alert(result);
