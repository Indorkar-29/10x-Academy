let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function binomialCoefficient(n, r) {
    if (r == 0 || r == n) {
        return 1;
    } else {
        return binomialCoefficient(n - 1, r - 1) + binomialCoefficient(n - 1, r);
    }

}
let input = parseInt(readLine());
for (let i = 0; i < input; i++) {
    let temp = readLine().split(" ");
    console.log(binomialCoefficient(parseInt(temp[0]), parseInt(temp[1])));
}