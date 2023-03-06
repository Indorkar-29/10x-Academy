let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// name your function as rightToLeftDiagonal
function rightToLeftDiagonal() {
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
        let x = matrix[i].length;
        arr[i] = matrix[i][x - i - 1];
    }
    return arr;
}
// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
    let rowElements = readLine().split(" ");
    matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
    console.log(element);
}