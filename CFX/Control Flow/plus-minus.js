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
let positiveSum = 0;
let negetiveSum = 0;
for (i = 0; i < n; i++) {
    let temp = parseInt(readLine());
    if (i % 2 == 0) {
        positiveSum += temp;
    } else {
        negetiveSum += temp;
    }
}
console.log(positiveSum - negetiveSum);