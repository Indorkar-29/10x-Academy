let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let input=readLine().split(" ").map(Number);
let N=input[0];
let K=input[1];
let matrix=[];

for(let i=0;i<N;i++){
    let temp=[];
    temp.push(i+1);
    for(let j=0;j<N;j++){
        temp.push(j+1);
        console.log(temp);
        matrix.push(temp);
        temp.pop();
    }
}
console.log(matrix);