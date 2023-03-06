let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine())
let arr = readLine().split(" ").map(Number)
let diff = 0
let maxx = []
let minn = []
for (let i = 0; i < n; i++) {
    diff += Math.abs(i + 1 - arr[i])
    maxx.push(Math.max(i + 1, arr[i]))
    minn.push(Math.min(i + 1, arr[i]))
}
diff += Math.max(0, Math.abs(2 * (Math.min(...maxx) - Math.max(...minn))))
console.log(diff);

// let n = parseInt(readLine());
// let arr = readLine().split(" ").map(Number);
// let temp = arr[0];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1] = temp;
// let count = 0;
// for (let i = 1; i <= arr.length; i++) {
//     count += Math.abs(arr[i - 1] - i);
// }
// console.log(count);