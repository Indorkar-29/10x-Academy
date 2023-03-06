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
for (let i = 0; i < n; i++) {
    arr.push([]);
    let col = readLine().split(" ").map(Number);
    for (let j = 0; j < n; j++) {
        arr[i][j] = col[j];
        if (i == j) {
            if (arr[i][j] < 0) {
                arr[i][j] = 0;
            } else {
                arr[i][j] = 1;
            }
        }
    }
    console.log(...arr[i]);
}