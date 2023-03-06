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
    let arr = readLine().split(" ").map(Number);
    let query = parseInt(readLine());
    let count = -1;
    for (let i = 1; i <= arr.length; i++) {
        if ((i - 1) === query) {
            count = arr[i - 1];
        }
    }
    console.log(count);
}