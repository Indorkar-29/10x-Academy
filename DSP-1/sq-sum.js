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
for (let i = 1; i <= n; i++) {
    sum += i * i;
}
console.log(sum);

// let sum = parseInt((n * (n + 1) * (2 * n + 1)) / 6);
// console.log(sum);