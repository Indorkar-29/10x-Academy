let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function remove(num,val){
    for(let i=0;i<num.length;i++){
        if(val===num[i]){
            num.splice(i,1);
            i--;
        }
    }
    return num;
}
console.log(remove([0,1,2,2,3,0,4,2],2));