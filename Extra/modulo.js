let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n1 = parseInt(readLine());
let d1 = parseInt(n1 / 100);
let m1 = n1 % 100;
let d2 = parseInt(m1 / 10);
let d3 = m1 % 10;
console.log(d1 + d2 + d3);