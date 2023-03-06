let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function maxProfit(arr) {
    let profit = 0;
    let start = arr[0];
    for (let i = 1; i < arr.length; i++) {
        start = Math.min(arr[i], start);
        profit = Math.max(profit, arr[i] - start);
    }
    return profit;
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readLine());
}
console.log(maxProfit(arr));