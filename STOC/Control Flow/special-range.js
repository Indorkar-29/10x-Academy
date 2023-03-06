let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let m = parseInt(readLine());
let n = parseInt(readLine());
let x = -1;
if (m < 0 && n < 0) {
    console.log(x);
} else {
    while (m <= n) {
        if (m >= 0) {
            console.log(m);

        }
        m = m + 1;
    }
}