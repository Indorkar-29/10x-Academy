let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function ladder(n) {
//     for (let i = 1; i < n; i++) {
//         let arr = [];
//         for (let j = 1; j < n; j++) {
//             arr.push(" ");
//         }
//         arr.push("#");
//         console.log(arr);
//     }
//     // let arr1 = [];
//     // for (let k = 1; k <= n; k++) {
//     //     arr1.push("#");
//     // }
//     // console.log(arr1);
// }
// let n = parseInt(readLine());
// ladder(n);


let n = parseInt(readLine());
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
    for (let j = 0; j < i; j++) {
        row += "#";
    }
    console.log(row);
}