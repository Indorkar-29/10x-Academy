let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let num = parseInt(readLine());
let sum = 0;
let count = 0;
for (k = 0; k < num; k++) {
    let n = readLine().split(" ");
    for (let i = 0; i < n.length; i++) {
        sum = sum + parseInt(n[i]);
    }
    let avg = sum / 5;
    for (let j = 0; j < n.length; j++) {
        console.log(parseInt(n[j]));
        console.log(avg);
        if (parseInt(n[j]) > 9 && avg > 9) {
            count++;
        } else {
            count;
        }
    }
    if (count != 0) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}