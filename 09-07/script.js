/*1)Расположите в тег img изображение грустного смайлика.
    Щелчок на изображение (onclick) вызывает функцию:
    Функция "спрашивает", как зовут пользователя,
    а затем приветствует его по имени,
    и меняет изображение на улыбающийся смайлик (свойство src тега img)*/

const smile = document.querySelector('#sad_smile');

function askName() {
    let user = prompt('Как вас зовут?');
    if (user){
        alert(`Добро пожаловать, ${user}`);
        smile.src = './img/happy.png';
    }
}

smile.addEventListener('click', askName);



/*2) Реализовать таймер. С функционалом старт, стоп.
    При нажатии на кнопку старт, таймер начинается (старт с 0).
При нажатии на стоп, таймер остановливается.*/

let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let showTime = document.querySelector('#showTime');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

let time = 0;
let counter;

function startTimer() {
    counter = setInterval(function() {
        time++;
        showTime.innerText = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(counter);
}
