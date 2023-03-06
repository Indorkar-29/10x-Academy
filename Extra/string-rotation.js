let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function isStrRotation(s1,s2){

    return (s1.length===s2.length) && ((s1+s1).indexOf(s2)!=-1);
}

let s1=readLine();
let s2=readLine();
console.log(isStrRotation(s1,s2));