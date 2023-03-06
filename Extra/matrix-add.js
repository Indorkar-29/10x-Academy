let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let m = parseInt(readLine());
let n = parseInt(readLine());
let arr = [];
let sum = 0;
for (let i = 0; i < m; i++) {
    arr.push([]);

    for (let j = 0; j < n; j++) {
        arr[i][j] = parseInt(readLine());
        sum = sum + arr[i][j];
    }

}
console.log(sum);