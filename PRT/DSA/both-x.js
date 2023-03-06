let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}


let testCases=parseInt(readLine());

while(testCases--){
    let [str1,str2,x]=readLine().split(" ");
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    let m1=new Map();
    let m2=new Map();
    for(let i=0;i<str1.length;i++){
        if(!m1.has(str1[i])){
            m1.set(str1[i],1);
        }else{
            m1.set(str1[i],m1.get(str1[i])+1);
        }
    }
    for(let i=0;i<str2.length;i++){
        if(!m2.has(str2[i])){
            m2.set(str2[i],1);
        }else{
            m2.set(str2[i],m2.get(str2[i])+1);
        }
    }
    let arr=[];
    for(let [key,value] of m1){
        if(m2.get(key) === parseInt(x) && value=== parseInt(x)){
            arr.push(key);
        }
    }
    console.log(...arr.sort());
}


