let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function unitDistance(str1,str2){
    let str1Len=str1.length;
    let str2Len=str2.length;
    if(Math.abs(str1Len-str2Len)>1) return false;

    let i=0,j=0,count=0;
    while(i<str1Len && j<str2Len){
        if(str1[i] !== str2[j]){
            count+=1;
            if(count > 1) return false;
            if(str1Len > str2Len) i+=1;
            if(str1Len < str2Len) j+=1;
            else{
                i+=1;
                j+=1;
            }
        }else{
            i+=1;
            j+=1;
        }
    }
    if(i<str1Len || j<str2Len)count+=1;
    return count===1;
}

let testCases=parseInt(readLine());
while(testCases--){
    let [str1,str2]=readLine().split(" ");
    console.log(unitDistance(str1,str2)?"True":"False");
}