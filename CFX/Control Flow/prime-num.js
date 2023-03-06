let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let N = parseInt(readLine());
    let j = 2;
    for (; j < N; j++) {
        if (N % j == 0) {
            console.log("No");
            break;
        }
    }
    if (j == N) {
        console.log("Yes");
    }
}