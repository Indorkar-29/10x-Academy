let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let number = parseInt(readLine());
let sum = 0;
let neg = 0;
if (number < 0) {
    neg = 1
    number = number * -1;
}
while (number > 0) {
    let rem = number % 10;
    sum = sum * 10 + rem;
    number = parseInt(number / 10);
}
if (neg == 1) {
    console.log(sum * -1);
} else {
    console.log(sum);
}