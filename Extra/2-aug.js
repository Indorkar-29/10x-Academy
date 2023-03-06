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
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
let fold = parseInt(readLine());
for (let f = 0; f < fold; f++) {
    let i = 0;
    let j = arr.length - 1;
    let temp = [];
    while (i <= j) {
        if (i != j) {
            temp.push(arr[i] + arr[j]);
        } else {
            temp.push(arr[i]);
        }
        i++;
        j--;
    }
    arr = temp;
}
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
