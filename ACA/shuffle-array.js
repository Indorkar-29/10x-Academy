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
let arr1 = [];
for (let i = 0; i < n * 2; i++) {
    arr.push(parseInt(readLine()));
}
let z = arr.splice(n);
for (let j = 0; j < n; j++) {
    arr1.push(arr[j], z[j]);
}
for (i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}