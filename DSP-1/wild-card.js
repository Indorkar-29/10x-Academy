let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function binaryStr(str, i) {
    if (i == str.length) {
        console.log(str.join(""))
        return;
    }
    if (str[i] == "?") {
        str[i] = 0;
        binaryStr(str, i + 1) // 0
        str[i] = 1;
        binaryStr(str, i + 1)
        str[i] = "?"
    } else binaryStr(str, i + 1)
}
let str = readLine().split("");
binaryStr(str, 0);