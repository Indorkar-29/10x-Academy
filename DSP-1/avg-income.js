let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function avgIncome(i, c) {
    for (let m = 0; m < n; m++) {
        if (c[m] > 2) {
            avg = avg + i[m];
            count += 1;
        }
    }
    if (count > 0) {
        console.log(Math.floor(avg / count));
    } else {
        console.log(res);
    }
}
let n = parseInt(readLine());
let avg = 0;
let count = 0;
let res = -1;
let income = [];
let children = [];
for (let i = 0; i < n; i++) {
    income[i] = parseInt(readLine());
}
for (let j = 0; j < n; j++) {
    children[j] = parseInt(readLine());
}
avgIncome(income, children);