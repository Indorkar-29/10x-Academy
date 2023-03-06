let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let res = [];
if (n === 1) {
    res = [1];
} else if (n === 2) {
    res = [1, 1];
} else {
    let prev = [1, 1];
    for (let row = 3; row <= n; row++) {
        let curr = [1];
        for (let i = 1; i <= (row - 2); i++) {
            curr[i] = prev[i] + prev[i - 1];
        }
        curr.push(1);
        prev = curr;
    }
    res = prev;
}
for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
}