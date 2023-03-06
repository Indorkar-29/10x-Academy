let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function rotateLeft(d, arr) {
  // Write your code here
  let temp=[]
  let m= d%arr.length;
  for(let i=0;i<arr.length;i++){
      temp.push(arr[(m+i)%arr.length]);
  }
  return temp;
}
console.log(rotateLeft(4,[1,2,3,4,5]));