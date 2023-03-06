let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// 1:

// let arr = readLine().split(" ").map(Number);
// let set = new Set();
// set.add(arr[0]);
// for (let i = 1; i < arr.length; i++) {
//     if (!set.has(arr[i])) {
//         set.add(arr[i])
//     }
// }
// console.log(...set)

// input:
// 1 2 3 5 1 5 9 1 2 8

// output:
// 1 2 3 5 9 8

// 2:

// function remDuplicates(arr) {
//     if (arr.length == 0 || arr.length == 1) {
//         return arr;
//     }
//     arr.sort(function(a, b) {
//         return a - b;
//     });
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != arr[i + 1]) {
//             arr2.push(arr[i])
//         }
//     }
//     // for (let i = 0; i < arr2.length; i++) {
//     //     console.log(arr2[i]);
//     // }
//     // console.log(...arr2);
//     return arr2;
// }
// let arr = readLine().split(" ").map(Number);
// remDuplicates(arr);
// console.log(remDuplicates(arr));

// 3:

let input = readLine().split(" ").map(Number);
input.sort(function(a, b) { return a - b })
for (i = 0; i < input.length; i++) {
    if (input[i] == input[i + 1]) {
        input.splice(i, 1)
        i--
    }
}
console.log(...input)