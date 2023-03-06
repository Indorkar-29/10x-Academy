let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function searchInsert(num,target){
    for(let i=0;i<num.length;i++){
        if(num[i]===target){
            return i;
        }else if(target<num[i]){
            return i;
        }
    }
    return num.length;
}
console.log(searchInsert([1,3,5,6],5))