let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let str = "";
let flag = 0;
for (let i = 0; i <= n; i++) {
    for (let gap = 0; gap < n - i; gap++) {
        str += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        if (flag == 0) {
            str += "*";
            flag = 1;
        } else {
            str += "$";
            flag = 0;
        }
    }
    str += "\n";
}
console.log(str);

//50%:

// function goodWill(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= 2 * n; j++) {
//             if (j >= n + 1 - i && j <= n - 1 + i) {
//                 if (j % 2 == 0) row += "$";
//                 else row += "*";
//             } else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
// }
// let n = parseInt(readLine());
// goodWill(n);