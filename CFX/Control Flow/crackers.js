let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let input = readLine().split(" ");
let n = parseInt(input[0]);
let k = parseInt(input[1]);
if (n % k == 0) {
    console.log(0);
} else {
    console.log(1);
}