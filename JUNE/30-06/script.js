/*1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
на картинку алертом выводился ее описание.*/

const getDesc = () => {
    alert('Красно-белые кроссовки');
}

const getDesc2 = () => {
    alert('Одинокий лебедь на озере');
}

const getDesc3 = () => {
    alert('Тост с авакадо и лососем');
}

const info_photo = document.querySelector('#img-1');
const info_photo2 = document.querySelector('#img-2');
const info_photo3 = document.querySelector('#img-3');

info_photo.onclick = getDesc;
info_photo2.onclick = getDesc2;
info_photo3.onclick = getDesc3;

/*2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите
куда данная ссылка ссылается.*/

const getLinkDesc = () => {
    alert('UNSPLASH - бесплатные изображения в хорошем качетсве');
}

const getLinkDesc2 = () => {
    alert('Кембриджский английско-русский словарь');
}

const getLinkDesc3 = () => {
    alert('Яндекс переводчик русско-анлийский');
}

const info_link = document.querySelector('#link-1');
const info_link2 = document.querySelector('#link-2');
const info_link3 = document.querySelector('#link-3');

info_link.onmouseenter = getLinkDesc;
info_link2.onmouseenter = getLinkDesc2;
info_link3.onmouseenter = getLinkDesc3;

/*3) Напишите функцию, которая объединяет несколько строк и возвращает их.
Используйте глобальный массив arguments.*/

function unityElements() {
    let str = '';
    for (let i = 0; i < arguments.length ; i++) {
        str += `${arguments[i]} `;
    }
    return str;
}

const result = unityElements('Hello,', 'my dear', 'friend!');
console.log(result);