let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function lucky_sevens(arr) {
    if (arr.length < 3) {
        return "false";
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
            return "true";
        }
    }
    return "false";
}

let arr = readLine().split(" ").map(Number);
console.log(lucky_sevens(arr));