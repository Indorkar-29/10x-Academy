let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// let n = readLine();
// let givenStr = n.toLowerCase();
// let reverseString = givenStr.split("").reverse().join("");

// if (givenStr == reverseString) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

let n = readLine();
let str = n.toLowerCase();
let count = 0;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
        count += 1;
    }
}
if (count === 0) {
    console.log("YES");
} else {
    console.log("NO");
}