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
let m = parseInt(num[1]);
arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
    arr.push([]);
    let col = readLine().split(" ").map(Number);
    for (let j = 0; j < m; j++) {
        arr[i][j] = col[j];
        if ((arr[i][j]) % 2 != 0) {
            sum = sum + arr[i][j];
        }
    }
}
console.log(sum);