let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n=parseInt(readLine());
let arr=readLine().split(" ").map(Number);
let count=0;
for(let i=0;i<n;i++){
    if(arr[i]%2==0){
        count+=arr[i];
    }
}
console.log(count);