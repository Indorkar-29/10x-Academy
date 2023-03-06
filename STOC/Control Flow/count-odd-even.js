let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let size = parseInt(readLine());
let oddCount = 0;
let evenCount = 0;
for (let i = 0; i < size; i++) {
    let num = parseInt(readLine());
    if (num % 2 != 0) {
        oddCount = oddCount + 1;
    } else {
        evenCount = evenCount + 1;
    }
}
console.log(oddCount);
console.log(evenCount);