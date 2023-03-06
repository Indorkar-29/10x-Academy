let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = readLine();
let input = n.split("");
let sum = 0;
let product = 1;
for (let i = 0; i < input.length; i++) {
    sum = sum + parseInt(input[i]);
    product = product * parseInt(input[i]);
}
let output = product - sum;
console.log(output);