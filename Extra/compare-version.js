let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function comp(ver1, ver2, long) {
    for (let i = 0; i < long; i++) {
        let curr1 = ver1[i] || 0;
        let curr2 = ver2[i] || 0;
        if (curr1 < curr2) {
            return -1;
        }
        if (curr1 > curr2) {
            return 1;
        }
    }
    return 0;
}

let testCases = parseInt(readLine());
while (testCases--) {
    let temp = readLine().split(" ");
    let ver1 = temp[0].split(".").map(Number);
    let ver2 = temp[1].split(".").map(Number);

    let long = Math.max(ver1.length, ver2.length);
    console.log(comp(ver1, ver2, long));
}