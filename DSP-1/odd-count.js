let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let r = parseInt(readLine());
let oddCount = 0;

let input = readLine().split(" ");

for (let i = 0; i < r; i++) {
    let num = parseInt(input[i]);
    if (num % 2 != 0) {
        oddCount = oddCount + 1;
    }
}
console.log(oddCount);