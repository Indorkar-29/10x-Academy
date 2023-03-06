let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let sum = 0;
let neg = 0;
if (n < 0) {
    neg = 1;
    n = n * -1;
}
while (n > 0) {
    let rem = n % 10;
    sum = sum * 10 + rem;
    n = parseInt(n / 10);
}
if (neg == 1) {
    console.log(sum * -1);
} else {
    console.log(sum);
}