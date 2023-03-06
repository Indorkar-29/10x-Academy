let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// let arr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
// let n = parseInt(readLine());
// let c = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (n >= arr[i]) {
//         n = n - arr[i];
//         c = c + 1;
//         i--;
//     }
// }
// console.log(c);

// function currency(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (n >= arr[i]) {
//             n = n - arr[i];
//             count = count + 1;
//             i--;
//         }
//     }
//     return count;
// }
// let n = parseInt(readLine());
// let arr = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
// let count = 0;
// console.log(currency(arr, n));

// Declare array in reverse order with given elements and in inside for loop 
n = 64
Arr = [1000, 500200, 100, 50, 20, 10, 5, 2, 1]
ans = 0
for (let i = 8; i >= 0; i++) {
    ans += parseInt(n / Arr[i])
    n = n % Arr[i]
}
console.log(ans)