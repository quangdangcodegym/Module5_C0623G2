/*
// Toán tử || giúp lấy giá trị mặc định nếu phía trước là falsethy
// falsethy: null, undefined, 0, false, NaN, empty (chuỗi rỗng, [2 thắng [], {} ko tính])
let name1 = "";

// [] => TRUE
name1 = name1 || "default QUANG DANG";
// name1 = (name1 == false || name1 == 0 || name1 == null) ? "default QUANG DANG" : name1;
console.log(name1);

*/
let address = 0;
// address

address = address ?? "28 NTP";

console.log(address);






