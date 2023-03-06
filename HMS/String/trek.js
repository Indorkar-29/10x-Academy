let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// let n = parseInt(readLine());
// let seaLevel = 0;
// let flag = 0;
// let valley = 0;
// for (let i = 0; i < n; i++) {
//     let strLength = parseInt(readLine());
//     let walk = readLine().split("");
//     for (let j = 0; j < strLength - 1; j++) {
//         if (walk[j] == "U") {
//             flag += 1;
//             seaLevel += 1;
//             if (flag == seaLevel) {
//                 valley += 1;
//             }
//         } else if (walk[j] == "D") {
//             flag -= 1;
//             seaLevel - +1;
//             if (flag == seaLevel) {
//                 valley += 1;
//             }
//         }
//     }
// }
// console.log(valley);


function countValleys(steps, n) {
    let level = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (steps[i] === "U") {
            level++;
        } else {
            level--;
        }
        if (level === 0 && steps[i] === "U") {
            count++;
        }
    }
    return count;
}

let testCases = parseInt(readLine());
while (testCases > 0) {
    let n = parseInt(readLine());
    let steps = readLine();
    console.log(countValleys(steps, n));
    testCases -= 1;
}