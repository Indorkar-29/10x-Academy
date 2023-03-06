let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let size = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let sum = 0;
let score = 0;
let maxFromRight = arr[size - 1]; // 4
for (let i = size - 1; i >= 0; i--) {
    if (arr[i] >= maxFromRight) {
        maxFromRight = arr[i];
    }
    score = (maxFromRight - arr[i]);
    sum = sum + score;
}
console.log(sum);