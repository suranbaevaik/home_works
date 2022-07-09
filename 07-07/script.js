const btn = document.querySelector('#btn');
function showNotification(options) {
    let information = document.createElement('div');
    information.className = 'notification';
    information.innerText = options.html;
    document.body.append(information);
    setTimeout(() => information.remove(), 1500)
}

btn.addEventListener('click', () => {
    showNotification({
        html: 'A simple primary alert—check it out!',
    });
})




