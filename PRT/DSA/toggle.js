let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let str=readLine();
// let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// let ans="";

// for(let i=0;i<str.length;i++){
//     let flag=true;
//     for(let j=0;j<26;j++){
//         if(str[i]==arr[j]){
//             flag=false;
//             ans+=str[i].toUpperCase();
//             break;
//         }
//     }
//     if(flag===true){
//         ans+=str[i].toLowerCase();
//     }
// }
// console.log(ans);

// OR

let str=readLine();
let ans="";
for(let i=0;i<str.length;i++){
    if(str.charAt(i)===str.charAt(i).toLowerCase()){
        ans+=str.charAt(i).toUpperCase();
    }else{
        ans+=str.charAt(i).toLowerCase();
    }
}
console.log(ans);