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

for (let i = 0; i < n; i++) {
    let input = readLine().split(" ");
    let c = parseInt(input[0]);
    let b = parseInt(input[1]);
    if (b <= 0 || b > 72 || c <= 0 || c > 72 || b > c) {
        console.log("Invalid")
    } else if (b % 8 == 0) {
        console.log("SU");
    } else if (b % 8 == 7) {
        console.log("SL");
    } else if (b % 8 == 6 || b % 8 == 3) {
        console.log("U");
    } else if (b % 8 == 5 || b % 8 == 2) {
        console.log("M");
    } else if (b % 8 == 4 || b % 8 == 1) {
        console.log("L");
    }
}