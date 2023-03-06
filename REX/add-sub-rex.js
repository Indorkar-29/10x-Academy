let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function addSubstract(arr, pos, target, n, ) {
    if (target === 0 && pos === n) {
        return 1;
    }
    if (pos >= n) {
        return 0;
    }
    return addSubstract(arr, pos + 1, target, n) + addSubstract(arr, pos + 1, target - arr[pos], n) + addSubstract(arr, pos + 1, target + arr[pos], n)
}
let target = parseInt(readLine());
let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
console.log(addSubstract(arr, 0, target, n));