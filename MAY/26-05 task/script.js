let point = 0;
let question1 = prompt('Столица Канады?', '');
if (question1 === 'Оттава'){
    point+=1;
    alert('Верно');
} else{
    alert('Неверно');
}

let question2 = prompt('Столица Австралии?', '');
if (question2 === 'Канберра'){
    point+=1;
    alert('Верно');
} else{
    alert('Неверно');
}

alert('Ваш результат: ' + point + ' б');