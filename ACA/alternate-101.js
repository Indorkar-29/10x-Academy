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
let num = readLine().split(" ");
let sum = 0;
for (i = 0; i < m; i++) {
    if (i % 2 == 0) {;
        sum = sum + parseInt(num[i]);
    }
}
console.log(sum);