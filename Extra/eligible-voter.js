let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let voter = 0;
for (i = 0; i < n; i++) {
    let value = parseInt(readLine());
    if (value <= 18) {
        continue;

    } else {
        voter = voter + 1;
    }
}
console.log(voter);