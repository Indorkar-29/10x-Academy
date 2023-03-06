let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function currency(arr, n) {
//     if (n < 0) {
//         console.log(sum);
//     } else {
//         sum = sum + arr[n];
//         currency(arr, n - 1);
//     }
// }
// let arr = readLine().split("").map(Number);
// let n = arr.length - 1;
// let sum = 0;
// currency(arr, n);
// function currency(str) {
//     if (str.length == 0) {
//         return;
//     } else {
//         curr = curr + str[0];
//         str.shift();
//         currency(str);

//     }
// }
// let str = readLine().split("").map(Number);
// curr = 0;
// currency(str);
// console.log(curr);