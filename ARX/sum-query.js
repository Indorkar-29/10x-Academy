let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let input = readLine().split(" ").map(Number);
let arrayElements = input[0];
let queries = input[1];
let array = readLine().split(" ").map(Number);
let arr = [];
let sum = 0;
for (let i = 0; i < arrayElements; i++) {
    sum = sum + array[i];
    arr.push(sum);
}
for (let i = 0; i < queries; i++) {
    let arr1 = readLine().split(" ").map(Number);
    let start = arr1[0];
    let end = arr1[1];
    if (start == 0) {
        console.log(arr[end]);
    } else {
        console.log(arr[end] - arr[start - 1]);
    }
}