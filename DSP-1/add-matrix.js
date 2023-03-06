let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function addMatrix(mat1, mat2) {
//     if (m == n && mat1[0].length == mat2[0].length) {
//         for (let i = 0; i < m; i++) {
//             let temp = [];
//             for (let j = 0; j < m; j++) {
//                 temp.push(mat1[i][j] + mat2[i][j]);
//             }
//             res.push(temp);
//         }
//     } else {
//         return -1;
//     }
//     return res;
// }


// let m = parseInt(readLine());
// let mat1 = [];
// for (let i = 0; i < m; i++) {
//     let temp = readLine().split(" ").map(Number);
//     mat1.push(temp);
// }
// let n = parseInt(readLine());
// let mat2 = [];
// for (let j = 0; j < n; j++) {
//     let temp = readLine().split(" ").map(Number);
//     mat2.push(temp);
// }
// let res = [];
// addMatrix(mat1, mat2);
// for (let i = 0; i < res.length; i++) {
//     let temp = res[i];
//     console.log(...temp);
// }






function addmatrix(rows, matrix) {
    if (rows.length == matrix.length && rows[0].length == matrix[0].length) {
        for (let i = 0; i < rows.length; i++) {
            let temp = [];
            for (let j = 0; j < rows[0].length; j++) {
                temp.push(rows[i][j] + matrix[i][j]);
            }
            result.push(temp);
        }
    } else {
        console.log(-1);
    }
    return result;
}
let n = parseInt(readLine());
let rows = [];
for (let i = 0; i < n; i++) {
    let nums = readLine().split(" ").map(Number);
    rows.push(nums);
}
let input = parseInt(readLine());
let matrix = [];
for (let i = 0; i < input; i++) {
    let numbers = readLine().split(" ").map(Number);
    matrix.push(numbers);
}
let result = [];
addmatrix(rows, matrix);
for (let i = 0; i < result.length; i++) {
    let temp = result[i];
    console.log(...temp);
}