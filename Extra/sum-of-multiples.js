let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//Write  your function here
function sumOfMultiples(arr, multiple) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % multiple == 0) {
            temp = temp + arr[i];
        }
    }
    return temp;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let range = parseInt(readLine());
let numbers = [];
for (let each = 0; each < range; each++) {
    numbers.push(parseInt(readLine()));
}
let mult = parseInt(readLine());
console.log(sumOfMultiples(numbers, mult));