/*********** 1st Task ***********/

function myFun (arr, len){
    let newArr = [];
    for (let i = 0; i < len; i++) {
        newArr.push(arr);
    }
    return newArr;
}

console.log(myFun('x', 10));


/*********** 2nd Task ***********/

function generalPoint(exam, project) {
    if (exam >= 90 || project >= 10){
        console.log('100 баллов');
    } else if (exam >= 75 && project >= 5) {
        console.log('90 баллов');
    } else if (exam >= 50 && project >= 2) {
        console.log('75 баллов');
    } else if (exam >= 30 && project >= 1) {
        console.log('50 баллов');
    } else {
        console.log('0 баллов');
    }
}

generalPoint(30,10);
