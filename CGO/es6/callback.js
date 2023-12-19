// để gọi là 1 callback function
// 1. nó phải là 1 hàm
// 2. nó phải được truyền vào 1 hàm khác thông qua đối số
// 3. nó phải được thực thi (gọi hàm)

// function callback(n1, n2){
//     console.log(n1, n2);
//     return n1 + n2;
// }

var phepCong = function (n1, n2) {
    return n1 + n2
}
var phepNhan = function (n1, n2) {
    return n1 * n2
}



function calculateApp(n1, n2, tinhtoan) {
    console.log(tinhtoan(n1, n2));
}


calculateApp(3, 5, phepCong);
calculateApp(3, 5, phepNhan);