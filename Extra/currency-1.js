let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function currency(str) {
    if (str.length == 0) {
        return;
    } else {
        curr = curr + str[0];
        str.shift();
        currency(str);
    }
}
let str = readLine().split("").map(Number);
curr = 0;
currency(str);
console.log(curr);