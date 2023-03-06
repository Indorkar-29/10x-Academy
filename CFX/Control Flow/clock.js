const { count } = require("console");
let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = readLine().split(" ");
let num1 = parseInt(n[0]);
let num2 = parseInt(n[1]);
let sum = (num1 + num2);
if (sum % 12 == 0) {
    console.log(12);
} else {
    console.log(sum % 12);
}