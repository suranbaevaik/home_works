/*1) Заполните массив 10-ю иксами с помощью цикла.    [x,x...]*/

let arr = [];
for (let i = 0; i <=9  ; i++) {
    arr[i] = 'x';
}
console.log(arr);

/*2) У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99.
С помощью цикла for и оператора if нужно проверить есть ли в массиве число
со значением, равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'*/

let arr_2 = [1,2,115,4,58,5,7,99];
for (let i = 0; i < arr_2.length; i++) {
    if (arr_2[i] === 4){
        alert('Есть');
    }
}