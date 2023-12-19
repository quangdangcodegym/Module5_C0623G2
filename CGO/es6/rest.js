// khi định nghĩa 1 hàm
//  TH1: ko có tham số
//  TH2: có tham số, nhưng hữu hạn
//  TH2: có tham số, nhưng vô hạn




function sum(message, ...rest) {
    let total = 0;
    for (let i = 1; i < rest.length; i++) {
        total += rest[i];
    }
    return `${message}: ${total}`;
}

console.log(sum("Tính tổng: ", 4, 7, 8, 9, 1, 5));