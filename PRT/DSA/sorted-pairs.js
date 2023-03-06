let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let size=parseInt(readLine());
let arr=readLine().split(" ").map(Number);
let count=0;

for(let i=0;i<size;i++){
    for(let j=i+1;j<size;j++){
        if(arr[i]<=arr[j]) count++;
    }
}
console.log(count);
