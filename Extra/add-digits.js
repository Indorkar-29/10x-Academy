let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// recursive function problem
let num = parseInt(readLine());
// let sum = 0;
// while (num > 9) {
//     sum += num % 10;
//     num = (num / 10);
// }
// console.log(sum);
let sum = num % 9 || 9;
console.log(sum);