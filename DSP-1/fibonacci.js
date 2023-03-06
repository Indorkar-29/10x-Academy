let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function fibonacciSequence(n) {
//     res = [0, 1];
//     for (let i = 2; i < n; i++) {
//         res[i] = res[i - 1] + res[i - 2];
//     }
//     return res;
// }
// let n = parseInt(readLine()); // 0
// if (n == 1) {
//     console.log(0);
// } else if (n > 1) {
//     let res = [];
//     res = fibonacciSequence(n);
//     for (let i = 0; i < res.length; i++) {
//         console.log(res[i]);
//     }
// } else {
//     console.log(-1);
// }

let input = parseInt(readLine());
if (input <= 0) {
    console.log(-1);
}
let num1 = 0;
let num2 = 1;
let nextTerm = num1 + num2;
for (let i = 1; i <= input; i++) {
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
}



// function fib(n) {
//     if (n == 0 || n == 1) {
//         return n;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }
// let n = parseInt(readLine());
// console.log(fib(n));