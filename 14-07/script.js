const arrUsers = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            city: "Gwenborough"
        },
        phone: "1-770-736-8031 x56442",
        company: {
            name: "Romaguera-Crona"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            city: "Wisokyburgh"
        },
        phone: "010-692-6593 x09125",
        company: {
            name: "Deckow-Crist"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            city: "McKenziehaven"
        },
        phone: "1-463-123-4447",
        company: {
            name: "Romaguera-Jacobson"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            city: "South Elvis"
        },
        phone: "493-170-9623 x156",
        company: {
            name: "Robel-Corkery"
        }
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            city: "Roscoeview"
        },
        phone: "(254)954-1289",
        company: {
            name: "Keebler LLC"
        }
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
            street: "Norberto Crossing",
            city: "South Christy"
        },
        phone: "1-477-935-8478 x6430",
        company: {
            name: "Considine-Lockman"
        }
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
            street: "Rex Trail",
            city: "Howemouth"
        },
        phone: "210.067.6132",
        company: {
            name: "Johns Group"
        }
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
            street: "Ellsworth Summit",
            city: "Aliyaview"
        },
        phone: "586.493.6943 x140",
        company: {
            name: "Abernathy Group"
        }
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
            street: "Dayna Park",
            city: "Bartholomebury"
        },
        phone: "(775)976-6794 x41206",
        company: {
            name: "Yost and Sons"
        }
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
            street: "Kattie Turnpike",
            city: "Lebsackbury"
        },
        phone: "024-648-3804",
        company: {
            name: "Hoeger LLC"
        }
    }
]

const showUserCards = (elements) => {
    elements.forEach( (item) => {
        const cardBox = document.createElement('div');
        cardBox.className = 'card_box';

        const cardImg = document.createElement('img');
        cardImg.src = './img/user.png';

        const cardName = document.createElement('h2');
        cardName.className = 'name';
        cardName.innerHTML = item.name;

        const cardUserName = document.createElement('p');
        cardUserName.className = 'text';
        cardUserName.innerHTML = '<b>Username: </b>' + item.username;

        const cardEmail = document.createElement('p');
        cardEmail.className = 'text';
        cardEmail.innerHTML = '<b>E-mail: </b>' + item.email;

        const cardAddress = document.createElement('p');
        cardAddress.className = 'text';
        cardAddress.innerHTML = '<b>Address: </b>' + item.address.street + ', ' + item.address.city;

        const cardPhone = document.createElement('p');
        cardPhone.className = 'text';
        cardPhone.innerHTML = '<b>Phone: </b>'+ item.phone;

        const cardCompany = document.createElement('p');
        cardCompany.className = 'text';
        cardCompany.innerHTML = '<b>Company: </b>' + item.company.name;

        cardBox.append(cardImg, cardName, cardUserName, cardEmail, cardAddress, cardPhone, cardCompany);
        document.querySelector('#main_box').append(cardBox);
    })
}

showUserCards(arrUsers);
