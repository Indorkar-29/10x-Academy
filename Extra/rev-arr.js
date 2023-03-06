let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
    let m = parseInt(readLine());
    let arr = [];
    let temp = readLine().split(" ");
    for (let j = 0; j < m; j++) {
        let a = temp.pop()
        arr.push(parseInt(a));
    }
    console.log(arr);
}