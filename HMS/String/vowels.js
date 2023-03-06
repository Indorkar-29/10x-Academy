let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let str = readLine().split("");
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
for (let j = 0; j < n; j++) {
    if (str[j] === "a") {
        a++;
    } else if (str[j] === "e") {
        e++;
    } else if (str[j] === "i") {
        i++;
    } else if (str[j] === "o") {
        o++;
    } else if (str[j] === "u") {
        u++;
    }
}
if (a >= 1 && e >= 1 && i >= 1 && o >= 1 && u >= 1) {
    console.log("YES");
} else {
    console.log("NO");
}