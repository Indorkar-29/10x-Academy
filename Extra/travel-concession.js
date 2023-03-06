let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let age = parseInt(readLine());
let gender = readLine();
if (age > 60) {
    console.log("Eligible");
} else if (age > 58 && gender === "female") {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}