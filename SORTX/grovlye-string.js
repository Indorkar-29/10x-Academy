let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function grovlyeStr(str) {
    let grovlyeStr = '',
        a = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (i % 2 != 0) grovlyeStr += char;
        else {
            a += char;
        }
    }
    let b = a.split('').reverse().join('');
    console.log(b.concat(grovlyeStr));
}
let numOfCases = parseInt(readLine());
for (let i = 0; i < numOfCases; i++) {
    let str = readLine().split('');
    str.sort();
    grovlyeStr(str);
}