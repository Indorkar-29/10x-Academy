let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function strange(arr){
    let sum=0;
    let prod=1;
    for(let i=0;i<arr.length;i++){
        sum+=parseInt(arr[i]);
        prod=prod*parseInt(arr[i]);
    }
    if(sum>=prod){
        count++
    }
}

let testCases=parseInt(readLine());
let count=0;
while(testCases--){
    strange(readLine().split(""));
}
console.log(count);