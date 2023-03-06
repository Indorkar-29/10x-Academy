let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let testCases = parseInt(readLine());
while (testCases--) {
    let n = parseInt(readLine());
    let girls = readLine().split(" ").map(Number);
    let boys = readLine().split(" ").map(Number);
    girls.sort(function(a, b) { return a - b; });
    boys.sort(function(a, b) { return b - a; });
    let count = 0;
    for (let i = 0; i < n; i++) {
        if ((girls[i] % boys[i] == 0) || (boys[i] % girls[i] == 0)) {
            count++;
        }
    }
    console.log(count);
}