let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let str = readLine().split(" ");
let revStr = ""
for (let i = 0; i < str.length; i++) {
    revStr += str[i].split("").reverse().join("");
    if (i != str.length - 1) {
        revStr += " ";
    }
}
console.log(revStr);

// input:
// Welcome to this Javascript Guide!

// output:
// emocleW ot siht tpircsavaJ !ediuG