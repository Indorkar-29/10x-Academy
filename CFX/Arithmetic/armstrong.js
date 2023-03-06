let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = readLine();
let input = n.split("");
let sum = 0;
for (i = 0; i < input.length; i++) {
    sum = sum + input[i] ** 3;
}
if (sum == n) {
    console.log("Yes");
} else {
    console.log("No");
}