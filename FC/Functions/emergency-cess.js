let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function calculateTotalFund(salaries, peopleCount) {
    let sum = 0;
    for (let i = 0; i < salaries.length; i++) {
        sum = Math.ceil(sum + (salaries[i] * 7 / 100));
    }
    return sum;
}

function ConvertToNumber(list) {
    for (let each in list) {
        list[each] = Number(list[each])
    }
}

let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
ConvertToNumber(salaries);
let totalFund = calculateTotalFund(salaries, peopleCount);
console.log(totalFund);