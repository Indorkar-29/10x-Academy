let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let num = readLine().split(" ");
let n = parseInt(num[0]);
let k = parseInt(num[1]);
let arr = [];
let temp = readLine().split(" ");
for (let i = 0; i < n; i++) {
    arr.push(parseInt(temp[i]));
}
let count = 0;
for (let j = 0; j < n; j++) {
    if (arr[j] == k) {
        count++;
    }
}
console.log(count);