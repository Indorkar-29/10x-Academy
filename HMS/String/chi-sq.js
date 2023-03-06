let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function minimumIns(str) {
    let count = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        let temp = str.charCodeAt(i) - 97;
        count[temp]++;
    }
    let unpaired = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] % 2 !== 0) {
            unpaired++;
        }
    }
    if (unpaired > 0) {
        return unpaired - 1;
    } else {
        return 0;
    }
}

let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let str = readLine();
    console.log(minimumIns(str));
}