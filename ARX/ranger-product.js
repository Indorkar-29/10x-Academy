let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let testCase = parseInt(readLine());
while (testCase > 0) {
    let size = parseInt(readLine());
    let num = readLine().split(" ").map(Number);
    let product = [1];
    let temp = 1;
    for (let i = 0; i < size; i++) {
        product[i] = temp;
        temp = temp * num[i];
    }
    temp = 1;
    for (let i = size - 1; i >= 0; i--) {
        product[i] = product[i] * temp;
        temp = temp * num[i];
    }
    console.log(...product);
    testCase--;
}