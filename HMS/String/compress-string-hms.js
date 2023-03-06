let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function compressStr(m) {
    let res = "";
    let count = 1;
    for (let i = 1; i < m.length; i++) {
        if (m[i] === m[i - 1]) {
            count++;
        } else {
            if (count === 1) {
                res += m[i - 1];
            } else {
                res += m[i - 1] + count;
            }
            count = 1;
        }
    }
    if (count === 1) {
        res += m[m.length - 1];
    } else {
        res += m[m.length - 1] + count;
    }
    return res;
}
let n = parseInt(readLine());
while (n--) {
    let m = readLine();
    console.log(compressStr(m));
}