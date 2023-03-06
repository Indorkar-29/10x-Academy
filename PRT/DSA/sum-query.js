let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let input=readLine().split(" ").map(Number);
let queries=input[1];
let arr=readLine().split(" ").map(Number);

let ans=[];
ans.push(arr[0]);
for(let i=1;i<arr.length;i++){
    ans[i]=ans[i-1]+arr[i];
}

while(queries--){
    let temp=readLine().split(" ").map(Number);
    let left=temp[0];
    let right=temp[1];
    if(left===0){
        console.log(ans[right]);
    }else{
        console.log(ans[right]-ans[left-1]);
    }
}