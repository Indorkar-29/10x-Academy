let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function signum(number) {
    // you can start from here.
    if (number < 0) {
        return -1;
    } else if (number > 0) {
        return 1;
    } else {
        return 0;
    }
}
// Please do not edit the code below this line.

let testInput = parseFloat(readLine());
console.log(signum(testInput));