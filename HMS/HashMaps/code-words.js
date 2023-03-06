let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

function getMorseCode(word) {
    let code = "";
    for (let i = 0; i < word.length; i++) {
        code += codes[word.charCodeAt(i) - 97];
    }
    return code;
}

let testCases = parseInt(readLine());
while (testCases--) {
    let words = readLine().trim().split(" ");
    let m = new Map(); //let s=new Set();
    for (let i = 0; i < words.length; i++) {
        let code = getMorseCode(words[i]);
        m.set(code, true); //s.add(code);
    }
    console.log(m.size); //console.log(s.size);
}