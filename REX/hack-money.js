let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function hack(N) {

}
let T = parseInt(readLine());
let n = 1;
for (let i = 0; i < T; i++) {
    let N = parseInt(readLine());
    hack(N);
}