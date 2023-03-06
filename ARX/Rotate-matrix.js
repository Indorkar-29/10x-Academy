let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    let row = readLine().split(" "); //let row = readLine().split(" ").map(Number);
    for (let j = 0; j < row.length; j++) {
        row[j] = parseInt(row[j]);
    }
    arr.push(row);
}
let rotated_matrix = [];
for (let col = 0; col < arr[0].length; col++) {
    let row = [];
    for (let j = arr.length - 1; j >= 0; j--) {
        row.push(arr[j][col]);
    }
    rotated_matrix.push(row);
}
console.log(rotated_matrix.length);
for (row of rotated_matrix) {
    console.log(...row);
}



//DSP-Solution-Session:

// let m = parseInt(readLine());
// let matrix = [];
// for (let i = 0; i < m; i++) {
//     let arr = readLine().split(" ").map(Number);
//     matrix.push(arr);
// }
// let n = matrix[0].length;
// console.log(n);
// for (let j = 0; j < n; j++) {
//     let str = "";
//     for (let i = m - 1; i >= 0; i--) {
//         str += matrix[i][j];
//     }
//     console.log(str.trim());
// }