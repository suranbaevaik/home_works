const products = [
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

const showProducts = (elements) => {
    elements.forEach( (item) => {
        const cardBox = document.createElement('div');
        cardBox.className = 'card';

        const elementName = document.createElement('h2');
        elementName.className = 'card_name';
        elementName.innerText = item.name;

        const elementImage = document.createElement('img');
        elementImage.src = item.img_url;

        const elementPrice = document.createElement('p');
        elementPrice.innerText = `${item.price} сом`;

        const elementButton = document.createElement('button');
        elementButton.innerText = 'КУПИТЬ';

        cardBox.append(elementName, elementImage, elementPrice, elementButton);

        document.querySelector('#root').append(cardBox);
    })
}

showProducts(products);
