const listImages = document.querySelectorAll('#images');

const showPhotoDesc = (event) => {
    alert(event.target.alt);
}

for (let i = 0; i < listImages.length ; i++) {
    listImages[i].addEventListener('click', showPhotoDesc);
}