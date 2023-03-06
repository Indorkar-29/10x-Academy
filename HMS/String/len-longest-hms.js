let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let S = readLine().split(" ");
let count = 0;
for (let i = 0; i < S.length; i++) {
    let arr = S[i];
    let len = arr.split("");
    if (len.length >= count) {
        count = len.length;
    }
}
console.log(count);