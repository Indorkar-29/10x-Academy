let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()))
}
let inc = true
let dec = true

for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[i + 1]) {
        dec = false
    }
}
for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        inc = false
    }
}
if (inc || dec) {
    console.log(1)
} else {
    console.log(0)
}