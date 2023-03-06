let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let str=readLine();
let ans="";
for(let i=str.length-1;i>=0;i--){
    ans=ans+str[i];
}
console.log(ans);