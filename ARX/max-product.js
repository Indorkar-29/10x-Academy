let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let m = parseInt(readLine());

let n = parseInt(readLine());
let arr1 = [];
let arr2 = [];
let temp = readLine().split(" ");
let temp1 = readLine().split(" ");
for (let i = 0; i < temp.length; i++) {
    if (temp[i] < 0) {
        temp[i] = temp[i] * -1;
    }
}
for (let i = 0; i < temp1.length; i++) {
    if (temp1[i] < 0) {
        temp1[i] = temp1[i] * -1;
    }
}
for (let i = 0; i < m; i++) {
    arr1.push(parseInt(temp[i]));
}
for (let j = 0; j < n; j++) {
    arr2.push(parseInt(temp1[j]));
}
let p1 = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > arr1[i - 1]) {
        if (arr1[i] > p1) {
            p1 = arr1[i];
        }
    }
}
let p2 = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > arr2[i - 1]) {
        if (arr2[i] > p2) {
            p2 = arr2[i];
        }
    }
}
console.log(p1 * p2);