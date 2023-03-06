let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function palindrome(m) {
//     if (m[0] == m[m.length - 1]) { return "YES"; } else if (m[0] == m[m.length - 1]) {
//         palindrome(m[0 + 1], m[m.length - 2]);
//     } else {
//         return "NO";
//     }
// }
// let n = readLine();
// let m = n.toUpperCase();
// m = m.split("");
// console.log(palindrome(m));



let givenString = readLine().toLowerCase();
let reverseString = givenString.split("").reverse().join("");
if (givenString === reverseString) {
    console.log("YES");
} else {
    console.log("NO");
}