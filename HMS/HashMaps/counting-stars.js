let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//HMS-Solution-Session:

// function countingStars(str, n) {
//     let m = new Map();
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         if (!m.has(str[i])) {
//             res += 0;
//             m.set(str[i], 1 + 0);
//         } else {
//             res += m.get(str[i]);
//             m.set(str[i], 1 + m.get(str[i]));
//         }
//     }
//     return res;
// }

// let m = parseInt(readLine());
// while (m--) {
//     let n = parseInt(readLine());
//     let str = readLine();
//     console.log(countingStars(str, n));
// }


let num = parseInt(readLine());
for (let j = 0; j < num; j++) {
    let n = parseInt(readLine());
    let str = readLine();
    let sum = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(str[i])) {
            sum = sum + map.get(str[i]);
            map.set(str[i], map.get(str[i]) + 1);
        } else
            map.set(str[i], 1);
    }
    console.log(sum);
}

// let noOfTestCases = parseInt(readLine());
// for (let i = 0; i < noOfTestCases; i++) {
//     let sum = 0;
//     lenOfStr = parseInt(readLine());
//     let str = readLine(); // abab
//     let List = new Map();
//     for (let i = 0; i < lenOfStr; i++) {
//         let char = str.charAt(i);
//         if (List.has(char)) {
//             let value = List.get(char);
//             // console.log(value)
//             sum += value;
//             List.set(char, value + 1);
//         } else List.set(char, 0);
//         // console.log(List)
//     }
//     let values = Array.from(List.values())
//     for (let i = 0; i < values.length; i++) {
//         sum += values[i]
//     }
//     // console.log(values)
//     console.log(sum)
// }