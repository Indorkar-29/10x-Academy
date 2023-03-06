let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

class InputReader {

    printer(i, input) {
        console.log(i, input);
    }
    readStrings(n) {
        for (let i = 0; i < n; i++) {
            let str = readLine();
            this.printer(i, str);
        }
    }
    readIntegers(n) {
        for (let i = 0; i < n; i++) {
            let int = parseInt(readLine());
            this.printer(i, int);
        }
    }
    readFloats(n) {
        for (let i = 0; i < n; i++) {
            let float = parseFloat(readLine());
            float = float.toFixed(2); //Math.round(readLine() * 100) / 100
            this.printer(i, float);
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