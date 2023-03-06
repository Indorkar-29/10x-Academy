let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let input=readLine().split(" ").map(Number);
let A=input[0];
let B=input[1];
let C=A;;
let res=A*B*C;
if(res%2===0){
    console.log("No");
}else{
    console.log("Yes");
}