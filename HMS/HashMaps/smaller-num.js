let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//Without HashMap:

// function smallerNum(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 count++;
//             }
//         }
//         res.push(count);
//         console.log(res[i]);
//     }
// }

// let n = parseInt(readLine());
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = parseInt(readLine());
// }
// smallerNum(arr);


//With HashMap:

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readLine());
}

let m = new Map();
for (let i = 0; i < n; i++) {
    if (m.has(arr[i])) {
        m.set(arr[i], 1 + m.get(arr[i]));
    } else {
        m.set(arr[i], 1 + 0);
    }
}
let keys = Array.from(m.keys());
keys.sort((a, b) => a - b);

let smallerCount = 0;
for (let i = 0; i < keys.length; i++) {
    let temp = m.get(keys[i]);
    m.set(keys[i], smallerCount);
    smallerCount += temp;
}

for (let i = 0; i < n; i++) {
    console.log(m.get(arr[i]));
}