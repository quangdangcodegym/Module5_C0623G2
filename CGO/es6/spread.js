/*
Rest Paramter được sử dụng khi khai báo hàm,
ngược lại Spread Operator được sử dụng trong các câu lệnh, biểu thức hoặc khi gọi hàm.


Spread:  trải ra các phần tử


// truyền tham trị (pass by value): kiểu dữ liệu number, boolean, string
// truyền tham chiếu (pass by reference): object, array, function


let football = ["Hiếu", "Khanh", "Sang"];
let walking = ["Hiếu", ...football];


let staff_1 = {
    name: "Thiện",
    age: 18,
    gender: true
}
let staff2 = {
    ...staff_1,
    name: "ĐẠt"
};
let staff3 = {
    name: staff_1.name,
    age: staff_1.age,
    gender: staff_1.gender
}
let staff4 = {
    ...staff_1,
    name: "QUANG DANG",
}
console.log(staff4);


let staff_1 = {
    name: "Thiện",
    age: 18,
    gender: true
}

let address = "28 NTP";

let staff_2 = {
    ...staff_1,
    address
}

console.log(staff_2);
*/


