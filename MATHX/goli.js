let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function profit(arr){
    let b=arr[0];
    let s=arr[1];
    let c=arr[2];

    return (arr[0]+arr[1])-arr[2];
}
let testCases=parseInt(readLine());
while(testCases--){
    let arr=readLine().split(" ").map(Number);
    console.log(profit(arr));
}