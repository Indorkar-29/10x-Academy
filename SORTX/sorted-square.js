let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let arr = [];
for (let j = 0; j < n; j++) {
    arr.push(parseInt(readLine()));
}
for (let i = 0; i < arr.length; i++) {
    let sq = Math.abs(arr[i] ** 2);
    arr[i] = sq;
}
arr.sort(function(a, b) { return a - b; })
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}