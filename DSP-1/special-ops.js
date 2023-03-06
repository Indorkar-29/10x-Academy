let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function maximum(element, arr, max) {
//     arr.reverse();
//     for (let i = 0; i < element; i++) {
//         max = max + arr[i];
//     }
//     return max;
// }

// function minimum(element, arr, min) {
//     for (let i = 0; i < element; i++) {
//         min = min + arr[i];
//     }
//     return min;
// }

// function specialOps(max, min) {
//     let res = max - min;
//     console.log(res);
// }
// let n = parseInt(readLine());
// let max = 0;
// let min = 0;
// for (let i = 0; i < n; i++) {
//     let element = readLine().split(" ").map(Number);
//     element = element[0] - element[1];
//     let arr = readLine().split(" ").map(Number);
//     arr.sort();
//     max = maximum(element, arr, max);
//     arr.sort();
//     min = minimum(element, arr, min);
//     specialOps(max, min);
// }


let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let integers = readLine().split(" ").map(Number);
    let num = readLine().split(" ").map(Number);
    num.sort(function(a, b) {
        return a - b;
    });
    let diff = integers[0] - integers[1];
    let max = 0;
    let min = 0;
    for (let i = 0; i < diff; i++) {
        min += num[i];
    }
    for (let i = num.length - 1; i > num.length - diff - 1; i--) {
        max += num[i];
    }
    console.log(max - min);
}