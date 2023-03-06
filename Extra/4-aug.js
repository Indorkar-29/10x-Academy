let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function even(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}
let array = readLine().split(" ").map(Number);
console.log(even(array));