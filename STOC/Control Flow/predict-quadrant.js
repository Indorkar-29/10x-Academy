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
for (i = 0; i < n; i++) {
    let p = readLine().split(" ");
    let x = parseInt(p[0]);
    let y = parseInt(p[1]);
    if (x > 0 && y > 0) {
        console.log("Q1");
    } else if (x < 0 && y > 0) {
        console.log("Q2");
    } else if (x < 0 && y < 0) {
        console.log("Q3");
    } else if (x > 0 && y < 0) {
        console.log("Q4");
    }
}