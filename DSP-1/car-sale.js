let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// class carSale {
//     constructor(t, i, l) {
//         this.target = t;
//         this.index = i;
//         this.list = l;
//     }
//     getPromisingCustomers() {

//     }
// }
// let n = parseInt(readLine());
// let target = 900000;
// // let initial=-1;
// for (let i = 0; i < n; i++) {
//     let listOfCostumers = parseInt(readLine());
//     let newCarSale = new carSale(target, i, listOfCostumers);
//     console.log(newCarSale.getPromisingCustomers());
// }

class CarSell {
    constructor() {
        this.boughtPrice = 1000000;
        this.sellingPrice = parseInt((90 * 1000000) / 100);
    }
    getPromisingCustomers(customer) {
        if (customer >= this.sellingPrice) {
            flag = "Yes"
            return flag;
        }
    }
}
let testCase = parseInt(readLine());
let flag = "No";
let car = new CarSell();
for (let i = 0; i < testCase; i++) {
    let customer = parseInt(readLine());
    let result = car.getPromisingCustomers(customer);
    if (result == "Yes") {
        console.log(i);
    }
}
if (flag == "No") {
    console.log(-1);
}