let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function series(m) {
    if (m <= 9) { return m; } else if (m % 2 == 1) {
        return series(m - 9);
    } else if (m % 2 == 0) {
        return series(m - 10);
    }
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    console.log(series(parseInt(readLine())));
}