let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// let arr=[3,8,12,4,13];
// let temp=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(temp<arr[i]){
//         temp=arr[i];
//     }
// }
// console.log(temp);

// let arr=[3,4,1,2,5]
// let size=5;
// let index=2;
// let sum=0;
// for(let i=0;i<size;i++){
//     if(i!=index){
//         sum+=arr[i];
//     }
// }
// console.log(sum);

// let arr=[2,4,3,5,3,8,1];
// let up=0;
// let lp=0;
// for(let i=1;i<arr.length-1;i++){
//     if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
//         up+=arr[i];
//     }
//     else if(arr[i]<arr[i-1] && arr[i]<arr[i+1]){
//         lp+=arr[i];
//     }
// }

// let res=up-lp;
// if(res<0){
//     res=res*(-1);
// }
// console.log(res);