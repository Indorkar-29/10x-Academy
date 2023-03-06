let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a = parseInt(readLine());
let b = parseInt(readLine());
let c = parseInt(readLine());

let avg = (a + b + c) / 3;
console.log(avg);