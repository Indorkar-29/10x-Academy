let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let num1 = parseInt(readLine());
let num2 = parseInt(readLine());
let sum = num1 + num2;
console.log(sum);