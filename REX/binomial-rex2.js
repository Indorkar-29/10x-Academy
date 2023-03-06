let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function binomialCoefficient(n, r) {
    if (r == 0 || n == r) {
        return 1;
    } else {
        let c = binomialCoefficient(n - 1, r - 1) + binomialCoefficient(n - 1, r);
        return c;
    }

}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let a = readLine().split(" ").map(Number);
    console.log(binomialCoefficient(a[0], a[1]));
}