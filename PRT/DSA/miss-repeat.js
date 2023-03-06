let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function missRepeat(arr,size){
    let ans=[]
    for(let i=0;i<size;i++){
        let ab_val=Math.abs(arr[i]);
        if(arr[ab_val-1]>0) arr[ab_val-1]= -arr[ab_val-1];
        else ans.push(ab_val);
    }
    for(let j=0;j<size;j++){
        if(arr[j]>0) ans.push(j+1);
    }
    console.log(...ans);
}
let size=parseInt(readLine());
let arr=readLine().split(" ").map(Number);
missRepeat(arr,size);