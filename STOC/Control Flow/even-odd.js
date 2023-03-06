let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let i = parseInt(readLine());
if (i % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}