let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// function flowerSort(A,n){
//     for(let i=1;i<n;i++){
//         let key=A[i];
//         let j=i-1;
//         while(j>=0 && key <A[j]){
//             A[j+1]=A[j];
//             j--;
//         }
//         A[j+1]=key;
//     }
//     console.log(...A);
// }

let n=parseInt(readLine());
let arr=readLine().split(" ").map(Number);
console.log(...arr.sort((a,b)=>a-b));
// flowerSort(arr,n);