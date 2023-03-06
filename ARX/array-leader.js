let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let arrSize = parseInt(readLine());
let A = [];
for (let i = 0; i < arrSize; i++) {
    A.push(parseInt(readLine()));
}
console.log(A[A.length - 1]);
let leader = A[A.length - 1];
for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] > leader) {
        console.log(A[i]);
        leader = A[i];
    }
}