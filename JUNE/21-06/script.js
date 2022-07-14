/********** Метод (reduce) **********/
const numbers = [1,2,23,5,45];

const result = numbers.reduce((sum, item)=>{
    return sum + item;
}, 0)

console.log(result);

/*1) sum = 0;
   item = 1;
   sum = 0 + 1;
   result = 1;

2) sum = 0 + 1;
   item = 2;
   sum = 0 + 1 + 2;
   result = 3;

3) sum = 0 + 1 + 2;
   item = 23;
   sum = 0 + 1 + 2 + 23;
   result = 26;

4) sum = 0 + 1 + 2 + 23;
   item = 5;
   sum = 0 + 1 + 2 + 23 + 5;
   result = 31;

5) sum = 0 + 1 + 2 + 23 + 5;
   item = 45;
   sum = 0 + 1 + 2 + 23 + 5 + 45;
   result = 76;*/


/********** Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
 произведение этих аргументов. **********/

function mul(n, m) {
    return n * m;
}

console.log(mul(3,4));


/********** Создайте функцию и с помощью цикла найдите факториал числа 7:
 Название для функции можно дать любую.
 Например при вызове функции factorial с параметром 7 в консоли должно
 вывести следующее: **********/


function factorial(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
       num = num * i;
    }
    return num;

}

console.log(factorial(7));