let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function targetSum(arr, pos, target, n) {
    if (target === 0) {
        count++;
        return;
    } else if (target < 0) { return; } else if (pos === n) { return; }
    targetSum(arr, pos, target - arr[pos], n);
    targetSum(arr, pos + 1, target, n);
    return count;
}
let [n, target] = readLine().split(" ").map(Number);
let arr = readLine().split(" ").map(Number);
let count = 0;
console.log(targetSum(arr, 0, target, n));