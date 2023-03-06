let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a = parseInt(readLine());
let b = parseInt(readLine());
let c = 180 - (a + b);
if ((a + b) > 180) {
    console.log("it is more than 180 degree. hence, it is not a traingle");
    return;
}
if ((a + b) < 0) {
    console.log("you have entered negative number");
    return;
} else {
    console.log(c);
    return;
}