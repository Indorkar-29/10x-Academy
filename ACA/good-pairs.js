let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = readLine().split(" ");
let count = 0;
for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
        if (n[i] == n[j]) {
            count++;
        }
    }
}
console.log(count);