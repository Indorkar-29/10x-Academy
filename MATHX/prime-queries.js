let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let input=readLine().split(" ").map(Number);
let target=input[0];
let queries=input[1];

function p(n,flag){
    for(i = 2; i <= n - 1; i++){ 
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
}

function primeQueries(temp){
    if(temp<2){
        return 0;
    }else{
        let count=0;
        for(let i=2;i<=temp;i++){
            let flag=true;
            p(i,flag);
            // console.log(flag);
            if(flag){
                count++;
            }
        }
        return count;
    }
}
for(let i=0;i<queries;i++){
    let temp=parseInt(readLine());
    console.log(primeQueries(temp));
}
