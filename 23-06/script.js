/********** Задача **********/

const users = [
    {name: 'Maks', isProgrammer: true},
    {name: 'Sasha', isProgrammer: true},
    {name: 'Ulan', isProgrammer: false},
    {name: 'Jenya', isProgrammer: false}
];

const filtered = users.filter(item => item.isProgrammer);

console.log(filtered);


/********** 1) Дан массив с числами: -5,  10,  5, 55,  -1, 22,  -4 , 36, -45:
 Оставьте в нем только отрицательные числа. **********/

const arr = [-5, 10, 5, 55, -1, 22, -4, 36, -45];

const filteredNumbers = arr.filter(item2 => item2 < 0);

console.log(filteredNumbers);


/********** 2) Дан массив с числами. Сделайте из него массив,
 состоящий из квадратов этих чисел.**********/

const arr2 = [2, 4, 6, 3, 8, 5];

const square = arr2.map(element => element**2);

console.log(square);