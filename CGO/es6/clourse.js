/*
//pure function: Hàm luôn trả về cùng một kết quả nếu được truyền vào các tham số không đổi
function sum(n2) {
    var n3 = 100;
    return Math.random() + n2;
}


// Hàm này không tạo ra bất kỳ ảnh hưởng nào đến các đối tượng khác ,
// chẳng hạn như các request, input, output hoặc data mutation
console.log(sum(5));


let n1 = 10;

function sum(n2){
    var n3 = 100;
    return n1 + n2;
}


function counter() {
    var count = 0;
    function increament() {
        return ++count;
    }

    return increament;
}

var app = counter(); // app: increment
console.log(app());
console.log(app());
console.log(app());
*/

function bookManager() {
    let books = ["Toán 12", "Lý 11", "Hóa 10"];
    return {
        addBook(bookName) {
            books.push(bookName);
        },
        getBooks() {
            return books.toString();
        },
        resetData() {
            books = [];
        }
    }
}

let bookApp = bookManager();
bookApp.addBook("Văn 10");
books = [];
console.log(bookApp.getBooks());