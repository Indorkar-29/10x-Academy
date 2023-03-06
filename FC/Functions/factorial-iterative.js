let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function factorial(number) {
    // write your code here
    let factorial = 1;
    if (number < 0) {
        return "undefined";
    } else if (number == 0) {
        return 1;
    } else {
        for (let i = 1; i <= number; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}

let number = parseInt(readLine());

console.log(factorial(number));