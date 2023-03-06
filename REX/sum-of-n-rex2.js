let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function sumOfFirstN(n) {
    if (n == 0) { return; } else {
        sumOfFirstN(n - 1);
        a = a + n;
        console.log(n, a);
    }
}
n = parseInt(readLine());
let a = 0;
sumOfFirstN(n);