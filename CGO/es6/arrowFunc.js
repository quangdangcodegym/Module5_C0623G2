/*
// declaration function: có tên hàm
sum(10, 20);
function sum(n1, n2) {
    console.log(n1 + n2);
}

// expression function: ko có tên hàm
var times = function (n1, n2) {
    console.log(n1 * n2);
}


var times = (n1, n2) => console.log(n1 * n2);
times(5, 7);

const message = (msg) => console.log(msg);

const func = function (msg) {
    console.log(msg)
}

*/

let numbers = [4, 65, 7, 78, 34, 3];

// numbers.forEach((value, index) => {
//     console.log(value * 2);
// })

// numbers.forEach(function (value, index) {
//     console.log(value * 2);
// })

const func = (value, index) => console.log(value * 2);
numbers.forEach(func);



