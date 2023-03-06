let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let seq = readLine().split(" ")
    let x1 = parseInt(seq[0])
    let v1 = parseInt(seq[1])
    let x2 = parseInt(seq[2])
    let v2 = parseInt(seq[3])
    if (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}