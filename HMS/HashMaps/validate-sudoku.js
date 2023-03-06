let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function isValidateRow(Board, row) {
//     let set = new Set();
//     for (let i = 0; i < 9; i++) {
//         if (set.has(Board[row][i])) {
//             return "False";
//         }
//         if (Board[row][i] != ".") {
//             set.add(Board[row][i]);
//         }
//     }
//     return "True";
// }

// function isValidateCol(Board, col) {
//     let set = new Set();
//     for (let i = 0; i < 9; i++) {
//         if (set.has(Board[i][col])) {
//             return "False";
//         }
//         if (Board[i][col] != ".") {
//             set.add(Board[i][col]);
//         }
//     }
//     return "True";
// }

// function isValidateBox(Board, startRow, startCol) {
//     let set = new Set();
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             let val = Board[i + startRow][j + startCol];
//             if (set.has(val)) {
//                 return "False";
//             }
//             if (val != ".") {
//                 set.add(val);
//             }
//         }
//     }
//     return "True";
// }

// function isValidate(Board, row, col) {
//     return isValidateRow(Board, row) && isValidateCol(Board, col) && isValidateBox(Board, (row - row % 3), (col - col % 3));
// }

// function isSudoku(Board) {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (!isValidate(Board, i, j)) {
//                 return "False";
//             }
//         }
//     }
//     return "True";
// }
// let n = 9;
// let Board = [];
// for (let i = 0; i < n; i++) {
//     Board.push(readLine().split(" "));
// }
// console.log(isSudoku(Board));




//HMS-Solution-Session:

function validate(matrix) {
    for (let row = 0; row < 9; row++) {
        let m = new Map();
        for (let col = 0; col < 9; col++) {
            let ch = matrix[row][col];
            if (ch != "." && m.has(ch)) {
                return "False";
            }
            m.set(ch, true);
        }
    }

    for (let col = 0; col < 9; col++) {
        let m = new Map();
        for (let row = 0; row < 9; row++) {
            let ch = matrix[row][col];
            if (ch != "." && m.has(ch)) {
                return "False";
            }
            m.set(ch, true);
        }
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let m = new Map();
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    let ch = matrix[row][col];
                    if (ch != "." && m.has(ch)) {
                        return "False";
                    }
                    m.set(ch, true);
                }
            }
        }
    }
    return "True";
}

let matrix = [];
for (let i = 0; i < 9; i++) {
    matrix.push(readLine().split(" "));
}
console.log(validate(matrix));