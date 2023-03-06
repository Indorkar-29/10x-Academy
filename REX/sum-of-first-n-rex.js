let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function sumOfFirstN(n) {
    if (n == 0) {
        return;
    } else {
        sumOfFirstN(n - 1);
        add = add + n;
        console.log(n, add);
    }
}

let n = parseInt(readLine());
let add = 0;
sumOfFirstN(n);