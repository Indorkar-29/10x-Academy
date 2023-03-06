let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let input = readLine().split(" ");
let N = parseInt(input[0]);
let K = parseInt(input[1]);
let arr = [];
let count = 0;
for (let i = 0; i < N; i++) {
    let temp = readLine();
    arr.push(temp);
}
for (let j = 0; j < K; j++) {
    for (let m = 0; m < N - 1; m++) {
        if (arr[m][j] > arr[m + 1][j]) {
            count += 1;
            break;
        }
    }
}
console.log(count);