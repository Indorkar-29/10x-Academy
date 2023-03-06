let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function multiply(b) {
    if (b.length == 0) { return 0; } else {
        c = c * b[0];
        b.shift()
        multiply(b);
        return c;
    }
}
let n = parseInt(readLine());
let c = 1;
for (let i = 0; i < n; i++) {
    let b = readLine().split("").map(Number);
    if (b[0] === "-") {
        b[0] = 1;
    }
    console.log(multiply(b));
}