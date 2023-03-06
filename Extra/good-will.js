let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function goodWill(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= 2 * n - 1; j++) {
            if (j >= n + 1 - i && j <= n - 1 + i) {
                if (j % 2 == 0) row += "$";
                else row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

let n = parseInt(readLine());
goodWill(n);