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
let arr = [];
let c = 1;
let flag = -1;
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
    if (arr[i] == arr[i - 1]) {
        c++;
    }
    if (c == arr[i - 1]) {
        flag = arr[i - 1];
        break;
    }
}
if (arr[0] == 1 && arr[1] != 1) {
    flag = 1;
}
console.log(flag);