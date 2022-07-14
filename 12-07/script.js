let product_cards = [
    {
        id : 1,
        name : "Iphone 13 pro max",
        img_url : "https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
        price : 100250,
    },
    {
        id : 2,
        name : "Iphone 13 pro",
        img_url : "https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
        price : 97000,
    }
];

let products ='';

product_cards.forEach(element => {
    products += `<img src="${element.img_url}"> <br>`;
    products += `Код товара: ${element.id} <br>`;
    products += `Название: ${element.name} <br>`;
    products += `Цена: ${element.price}`;
});

document.querySelector('#products').innerHTML = products;
