let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Define your class here
// your class name should be 'BankAccount' and method names as 'credit' and 'debit'
function BankAccount() {
    this.balance = 0;
    this.credit = function(TA) {
        if (TA >= 0) {
            this.balance = this.balance + TA;
        }
    }
    this.debit = function(TA) {
        if (TA >= 0) {
            this.balance = this.balance - TA;
        }
    }
    return this.balance;
}
// DO NOT CHANGE ANYTHING BELOW THIS LINE

let n = parseInt(readLine());
let myAccount = new BankAccount();
for (let index = 0; index < n; index++) {
    let currentTransaction = readLine().split(" ");
    let typeOfTransaction = currentTransaction[0];
    let transactionAmount = parseInt(currentTransaction[1]);
    if (typeOfTransaction === "d") {
        myAccount.debit(transactionAmount);
    } else {
        myAccount.credit(transactionAmount);
    }
}
console.log(myAccount.balance);