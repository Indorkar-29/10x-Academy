let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function profitMax(arr, start, finish) {
//     if (finish <= start) {
//         return 0;
//     }
//     let gain = 0;
//     for (let i = start; i < finish; i++) {
//         for (let j = i + 1; j <= finish; j++) {
//             if (arr[j] > arr[i]) {
//                 let max = arr[j] - arr[i] + profitMax(arr, start, i - 1) + profitMax(arr, j + 1, finish);
//                 gain = Math.max(gain, max);
//             }
//         }
//     }
//     return gain;
// }

// let n = parseInt(readLine());
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = parseInt(readLine());
// }
// console.log(profitMax(arr, 0, n - 1));

function profitMax(arr) {
    let gain = 0;
    let start = arr[0];
    for (let i = 1; i < arr.length; i++) {
        start = Math.min(arr[i], start);
        gain = Math.max(gain, arr[i] - start);
    }
    return gain;
}

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readLine());
}
console.log(profitMax(arr));