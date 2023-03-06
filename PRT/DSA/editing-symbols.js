let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let count=0;
let symbols=readLine();
for(let i=0;i<symbols.length;i++){
    if(symbols[i]==="+"){
        count+=1;
    }
    if(symbols[i]==="-"){
        count-=1;
    }
}
console.log(count);