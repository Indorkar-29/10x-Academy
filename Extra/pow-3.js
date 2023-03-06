let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// let n = parseInt(readLine());
// if (n > 0) {
//     if (n % 3 == 0) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// } else {
//     console.log("False");
// }
function PowerOfThree(n) {
    let i = 0;
    let count = 0;
    while (3 ** i <= n) {
        if (n === 3 ** i) count++
            i = i + 1;
    }
    if (count === 0) return false;
    else return true;
}
let n = parseInt(readLine());
console.log(PowerOfThree(n));