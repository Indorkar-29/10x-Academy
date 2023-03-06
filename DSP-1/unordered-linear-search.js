let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let target = parseInt(readLine());
let arrLength = parseInt(readLine());
let arr = [];
let result = -1;
for (let i = 0; i < arrLength; i++) {
    arr.push(parseInt(readLine()));
    if (arr[i] == target) {
        result = i;
        break;
    }
}
console.log(result);