// function a() {
//     console.log(this);  //  windown
// }

class User {
    constructor() {

    }
    toString() {
        this.name = "TUẦN"
        console.log(this.name);
    }
    hello = () => {
        console.log(this);
        console.log(this.name);
    }
    hello1 = function () {
        console.log(this);
        console.log(this.name);
    }

}

let a = new User();
a.toString();


a.hello();
a.hello1();