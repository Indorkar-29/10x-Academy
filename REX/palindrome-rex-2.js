let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function palindrome(m) {
    if (m[0] == m[m.length - 1]) { return "True"; } else if (m[0] == m[m.length - 1]) {
        palindrome(m[0 + 1], m[m.length - 2]);
    } else {
        return "False";
    }
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let m = readLine().split("");
    console.log(palindrome(m));
}