/*1) Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!»*/
function hello() {
    alert('Привет, JavaScript!');
}

hello();


/*2) Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром.*/
function number(a) {
    alert(a ** 3);
}

number(2);


/*3) Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/
function getName(name) {
    if (name){
        alert('Привет, ' + name);
    } else{
        alert('Привет, гость');
    }
}

getName('Василий');