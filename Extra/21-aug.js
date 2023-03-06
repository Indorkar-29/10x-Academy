let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function prod(n) {
//     if (n == 1) { return 1; } else {
//         return n * prod(n - 1);
//     }
// }
// let n = parseInt(readLine());
// console.log(prod(n));

function sum(n) {
    if (n == 0) { return 0; } else {
        return n + sum(n - 1);
    }
}
let n = parseInt(readLine());
console.log(sum(n));