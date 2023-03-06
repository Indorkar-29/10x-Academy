let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Define your class here
class Biller {
    constructor() {
        this.addBill = 0;
        this.minusBill = 0;
        this.totalBill = 0;
    }
    addToBill(price) {
        this.addBill = this.addBill + price;
    }
    removeFromBill(price) {
        this.minusBill = this.minusBill - price;
    }
    getBill() {
        this.totalBill = this.addBill + this.minusBill;
        return this.totalBill;
    }
}

// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
let biller = new Biller();
for (let i = 0; i < n; i++) {
    let input = readLine().split(" ");
    let type = input[0];
    let price = parseInt(input[1]);
    if (type === "+") {
        biller.addToBill(price);
    } else {
        biller.removeFromBill(price);
    }
}
console.log(biller.getBill());