let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function nonDuplicated(num) {
    for(let i=num.length-1;i>=0;i--){
        if(num[i]===num[i-1]){
            num.splice(i,1);
        }
    }
    return num;
}

console.log(nonDuplicated([1,1,2]));




// let res = [];
// res.push(nums[0]);
// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < res.length; j++) {
//         if (nums[i] === res[j]) {
//             res.pop();
//         }
//     }
//     res.push(nums[i]);
// }
// return res[res.length];