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
// let games = new Map();
// let names = new Set();
// let max = "";
// for (let i = 0; i < n; i++) {
//     let choiceMap = readLine().split(" ");
//     if (!names.has(choiceMap[0])) {
//         names.add(choiceMap[0]);
//         if (games.has(choiceMap[1]))
//             games.set(choiceMap[1], games.get(choiceMap[1] + 1));
//         else
//             games.set(choiceMap[1], 1);

//     }
//     if (max === "")
//         max = choiceMap[1];
//     else {
//         if (choiceMap[1].localeCompare(max) !== 0) {
//             if (games.get(choiceMap[1]) > games.get(max)) {
//                 max = choiceMap[1];
//             } else if (games.get(choiceMap[1]) === games.get(max)) {
//                 if (choiceMap[1].localeCompare(max) === -1)
//                     max = choiceMap[1];

//             }
//         }
//     }
// }
// console.log(max);
// if (games.has("football")) {
//     console.log(games.get("football"));
// } else
//     console.log(0);

let n = parseInt(readLine())
let games = new Map();
let names = new Set();
let max = '';
for (let i = 0; i < n; i++) {
    let choiceMap = readLine().split(' ');
    if (!names.has(choiceMap[0])) {
        names.add(choiceMap[0]);
        if (games.has(choiceMap[1])) games.set(choiceMap[1], games.get(choiceMap[1]) + 1);
        else games.set(choiceMap[1], 1);
    }
    if (max === '') max = choiceMap[1];
    else {
        if (choiceMap[1].localeCompare(max) !== 0) {
            if (games.get(choiceMap[1]) > games.get(max)) max = choiceMap[1];
            else if (games.get(choiceMap[1]) === games.get(max)) {
                if (choiceMap[1].localeCompare(max) === -1) max = choiceMap[1];
            }
        }
    }
}
console.log(max);
if (games.has('football')) console.log(games.get('football'));
else console.log(0);