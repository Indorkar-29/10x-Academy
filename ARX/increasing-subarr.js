let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine())
let arr = readLine().split(" ").map(Number);
let maxLen = 1
let len = 1
let maxInd = 0
for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
        len++;
    } else {
        if (maxLen < len) {
            maxLen = len;
            maxInd = i - maxLen
        }
        len = 1;
    }
}
if (maxLen < len) {
    maxLen = len;
    maxInd = n - maxLen
}
console.log(maxLen + " " + maxInd + " " + (maxInd + maxLen - 1))