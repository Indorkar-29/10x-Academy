let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n1 = parseInt(readLine());
let n2 = parseInt(readLine());
let n3 = parseInt(readLine());
let r = n2 / n1;
let n4 = n1 * (r ** 3);
console.log(n4);