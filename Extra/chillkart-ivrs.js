let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let line1 = 0;
let line2 = 0;
let line3 = 0;

let input = parseInt(readLine());
while (input != 0) {
    if (input === 1) {
        line1 = line1 + 1;
    } else if (input === 2) {
        line2 = line2 + 1;
    } else if (input === 3) {
        line3 = line3 + 1;
    }
    input = parseInt(readLine());
}
console.log(line1);
console.log(line2);
console.log(line3);