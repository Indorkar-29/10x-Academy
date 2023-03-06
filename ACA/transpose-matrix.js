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
    arr.push(readLine().split(" "));
}
for (let j = 0; j < arr.length; j++) {
    let temp = [];
    for (let k = 0; k <= arr.length; k++) {
        // console.log(parseInt(arr[j][k]));
        temp.push(parseInt(arr));
    }
    console.log(temp);
}