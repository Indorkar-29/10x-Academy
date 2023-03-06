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
let a = [];
for (let i = 0; i < n; i++) {
    a.push(readLine().split(" ").map(Number));
}
let b = a.length;
let d = [];
for (let i = 0; i < a[0].length; i++) {
    for (let j = 0; j < n; j++) {
        d.push(a[j][i]);
    }
}
console.log(...d);