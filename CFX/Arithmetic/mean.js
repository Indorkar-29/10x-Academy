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
let num = 0;
let input = readLine().split(" ");
for (let i = 0; i < n; i++) {
    num = num + parseInt(input[i]);
}

console.log(Math.floor(num / n));