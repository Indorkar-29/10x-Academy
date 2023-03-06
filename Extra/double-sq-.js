let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Please do not change the function name.
function doubleOrSquare(number) {
    if (number == 0) { return number; } else if (number < 0) {
        number = -(number);
        return number * number;
    } else {
        return number + number;
    }
}
// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
console.log(doubleOrSquare(n));