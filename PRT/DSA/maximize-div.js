let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}


// function maximizeDiv(arr,size){
//     let max=Number.MAX_SAFE_INTEGER;
//     for(let i=0;i<size;i++){
//         for(let j=0;j<size;j++){
//             if(i !== j){
//                 max=Math.max(Math.abs(arr[i]-i)/Math.abs(arr[j]-j),max);
//             }
//         }
//     }
//     return max.toFixed(1);
// }
// function maximizeDiv(arr,size){
//     let max=Number.MIN_VALUE;
//     let min=Number.MAX_VALUE;
//     for(let i=0;i<size;i++){
//         max=Math.max(arr[i],max);
//         min=Math.min(arr[i],min);
//     }
//     return max/min;
// }

// function maximizeDiv(arr,size){
//     arr.sort((a,b)=>{return b-a});
//     let max=arr[1];
//     for(let i=2;i<size;i++){
//         max=max/arr[i];
//     }
//     return arr[0]/max;
// }

let size=parseInt(readLine());
let arr=readLine().split(" ").map(Number);
let max=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i !== j){
                max=Math.max(Math.abs(arr[i]-i)/Math.abs(arr[j]-j),max);
            }
        }
    }
console.log(max.toFixed(1));