let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = readLine().split(" ");
let iteration = parseInt(readLine());
let i = 0;
while (i < iteration) {
    let x = parseInt(n[n.length - 1])
    n.pop();
    n.unshift(x);
    i++;
}
for (let i = 0; i < n.length; i++) {
    console.log(parseInt(n[i]));
}