const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

function showNotification(options) {
    let information = document.createElement('div');
    information.innerText = options.html;
    information.className = options.className += ' notification';
    document.body.append(information);
    setTimeout(() => information.remove(), 1500)
}

btn.addEventListener('click', () => {
    showNotification({
        html: 'A simple success alert—check it out!',
        className: 'success',
    });
})

btn1.addEventListener('click', () => {
    showNotification({
        html: 'A simple info alert—check it out!',
        className: 'info',
    })
})

btn2.addEventListener('click', () => {
    showNotification({
        html: 'A simple danger alert—check it out!',
        className: 'error',
    })
})



