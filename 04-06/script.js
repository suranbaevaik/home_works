/*1) Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.*/

let arr = [2,5,77,43,1,9];
for (let i = 0; i <arr.length ; i++) {
    if (arr[i] > 0 && arr[i] < 10){
        console.log(arr[i]);
    }
}


/*2) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.*/

let arr2 = [1,2,5,6,88,5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr2[i];
}
console.log(result);


/*3) Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
    Квадрат числа 5 будет 25.*/

let arr3 = [1,2,3,4,5,6,7,8,9,10];
let square = 0;
for (let i = 0; i < arr3.length; i++) {
    square += arr3[i]**2;
}
console.log(square);