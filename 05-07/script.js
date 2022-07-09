/*********** ЗАДАНИЕ-1 ***********/

const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const box3 = document.querySelector('#box-3');
const container = document.querySelector('#boxes');

box1.addEventListener('click', () => {
    container.classList.toggle('background-red');
})

box2.addEventListener('click', () => {
    container.classList.toggle('background-red');
})

box3.addEventListener('click', () => {
    container.classList.toggle('background-red');
})

/*********** ЗАДАНИЕ-2 ***********/
const btn = document.querySelector('#show-notification');
function showNotification(options) {
    let information = document.createElement('div');
    information.className = 'notification';
    information.innerText = options.html;
    document.body.append(information);
    setTimeout(() => information.remove(), 1500)
}

btn.addEventListener('click', () => {
    showNotification({
        html: 'Hello!',
    });
})
