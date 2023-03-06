let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function excel(num) {
//     let alpha = [" ", "Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
//     if (num < alpha.length) {
//         return alpha[num];
//     } else {
//         let res = "";
//         let div = Math.floor(num / 26);
//         res = res + alpha[div];
//         let mod = num % 26;
//         res = res + alpha[mod];
//         return res;
//     }
// }
// let n = parseInt(readLine());
// for (let i = 0; i < n; i++) {
//     let num = parseInt(readLine());
//     console.log(excel(num));
// }


// [" ", "Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"]



function getAlpha(n) {
    return String.fromCharCode(90 - n);
}
let testCases = parseInt(readLine());
while (testCases--) {
    let n = parseInt(readLine());
    n -= 1;
    let col = "";
    while (n >= 0) {
        let mod = n % 26;
        col += getAlpha(mod);
        n = parseInt(n / 26);
        n -= 1;
    }
    console.log(col.split("").reverse().join(""));
}