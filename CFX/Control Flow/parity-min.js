let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let min = parseInt(readLine());
for (i = 1; i < n; i++) {
    let curr = parseInt(readLine());
    if (curr < min) {
        min = curr;
    }
}
let sum = 0;
while (min != 0) {
    sum += min % 10;
    min = parseInt(min / 10);
}
if (sum % 2 == 0)[
    console.log(1)
]
else {
    console.log(0);
}