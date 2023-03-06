let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function target(N, key, arr) {

}
let n = readLine().split(" ").map(Number);
let N = n[0];
let key = n[1];
let arr = readLine().split(" ").map(Number);
let count = 0;
console.log(target(N, key, arr));