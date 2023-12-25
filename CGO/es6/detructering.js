let jobs = ["Java", "React", "Angular"];

/*
// destructuring: phá hủy, phân tách
let jobs = ["Java", "React", "Angular"];

let job_1 = jobs[0];
let job_2 = jobs[1];
let job_3 = jobs[2];


let [a, b, c] = jobs;

console.log(b);

*/
const product = {
    id: "12434",
    nameStudent: "iPhone 14",
    price: 30000000,
    info() {
        return `Product name: ${nameStudent}, price is ${price}`;
    }
}



let { nameStudent, info, price, id } = product;

console.log(nameStudent);

console.log(info());

console.log(kk);