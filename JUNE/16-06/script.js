/*********** 1st TASK ***********/

let arr = [2, 3, 4, 5, 6, 7];
let result = 1;
for (let i = 0; i < arr.length ; i++) {
    result *= arr[i];
}

console.log(result);

/*********** 2nd TASK ***********/

const reverseArray = (data) => {
    const newArray = [];
    for (let i = data.length - 1; i >= 0; i--) {
        newArray.push(data[i]);
    }
    return newArray;
}

const myArray = ['hello', 20, 21, true];
const result_2 = reverseArray(myArray);
console.log(result_2);