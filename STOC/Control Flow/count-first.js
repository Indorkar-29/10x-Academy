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
let count = 1;
let value1 = parseInt(readLine());
for (i = 0; i < size - 1; i++) {
    let num = parseInt(readLine());
    if (value1 === num) {
        count = count + 1;
    }
}
console.log(count);