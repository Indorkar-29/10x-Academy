let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function recursion(calculated, current, N) {
    let i;
    let cur = 1;
    if (current == N + 1) {
        return 0;
    } else {
        for (i = calculated; i < calculated + current; i++) {
            cur = cur * i;
        }
        return cur + recursion(i, current + 1, N);
    }
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let N = parseInt(readLine());
    console.log(recursion(1, 1, N));
}