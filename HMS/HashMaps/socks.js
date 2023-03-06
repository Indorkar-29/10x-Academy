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
let socks = readLine().split(" ");
let sockSet = new Set();
let pairCount = 0;
for (let i = 0; i < n; i++) {
    if (sockSet.has(socks[i])) {
        pairCount++;
        sockSet.delete(socks[i]);
    } else {
        sockSet.add(socks[i]);
    }
}
console.log(pairCount);