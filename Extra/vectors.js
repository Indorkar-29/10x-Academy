let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let A = readLine().split(" ");
let B = readLine().split(" ");
let a1 = A[0],
    a2 = A[1],
    a3 = A[2];
let b1 = B[0],
    b2 = B[1],
    b3 = B[2];

let AB = a1 * b1 + a2 * b2 + a3 * b3;
let modAB = Math.sqrt(Math.pow(a2 * b3 - a3 * b2, 2) - Math.pow(a1 * b3 - b1 * a3, 2) + Math.pow(a1 * b2 - a2 * b1, 2));
if (AB === 0) {
    console.log(2);
} else if (modAB === 0) {
    console.log(1);
} else {
    console.log(0);
}