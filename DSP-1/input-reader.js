let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// class InputReader {
//     //implement the methods here
//     readStrings() {
//         for (let i = 0; i < num; i++) {
//             console.log(i, readLine());
//         }
//     }
//     readIntegers() {
//         for (let i = 0; i < num; i++) {
//             console.log(i, parseInt(readLine()));
//         }
//     }
//     readFloats() {
//         for (let i = 0; i < num; i++) {
//             console.log(i, Math.round(readLine() * 100) / 100);
//         }
//     }
// }

// // -------- Do NOT edit anything below this line ----------

// let num = parseInt(readLine());
// let typeOfInput = readLine();
// let NewInputReader = new InputReader();
// if (typeOfInput === "string") {
//     NewInputReader.readStrings(num);
// } else if (typeOfInput === "integer") {
//     NewInputReader.readIntegers(num);
// } else {
//     NewInputReader.readFloats(num);
// }


class InputReader {
    readStrings(n) {
        for (let i = 0; i < n; i++) {
            console.log(i, readLine());
        }
    }
    readIntegers(n) {
        for (let i = 0; i < n; i++) {
            console.log(i, parseInt(readLine()));
        }
    }
    readFloats(n) {
        for (let i = 0; i < n; i++) {
            console.log(i, Math.round(readLine() * 100) / 100);
        }
    }
}

let n = parseInt(readLine());
let type = readLine();
let NewInputReader = new InputReader();
if (type === "string") {
    NewInputReader.readStrings(n);
} else if (type === "integer") {
    NewInputReader.readIntegers(n);
} else {
    NewInputReader.readFloats(n);
}