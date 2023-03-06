let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function recursiveSeries(num) {
    if (num <= 9) {
        return num;
    } else if (num % 2 == 0) {
        return recursiveSeries(num - 10);
    } else {
        return recursiveSeries(num - 9);
    }

}
let testCase = parseInt(readLine());

for (let i = 0; i < testCase; i++) {
    let num = parseInt(readLine());
    console.log(recursiveSeries(num));
}