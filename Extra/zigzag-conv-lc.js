let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function zigzag(str) {

}
let n = parseInt(readLine());
let str = readLine();
console.log(zigzag(str, n));




// P   A   H   N
// A P L S I I G
// Y   I   R

// ip=PAYPALISHIRING
// op=PAHNAPLSIIGYIR