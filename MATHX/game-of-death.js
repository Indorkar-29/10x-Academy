let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function deathGame(n,k){
    let pos=0;
    for(let i=2;i<n+1;i++){
        pos=(pos+k)%i;
    }
    return pos+1
}

let testCases=parseInt(readLine());
while(testCases--){
    let input=readLine().split(" ").map(Number);
    console.log(deathGame(input[0],input[1]));
}


// function deathGame(n,k){
//     if(k===1) return n;

//     let list={};
//     for(let i=1;i<n;i++){
//         list[i]=i+1;
//     }
//     list[n]=1;

//     let size=n;
//     let curr=1;

//     for(let j=1;j<n;j++){
//         let moves=(k-1)%size;
//         let prev=curr;
//         for(let k=0;k<moves;k++){
//             prev=curr;
//             curr=list[curr];
//         }
//         let next=list[curr];
//         curr=next;
//         list[prev]=curr;
//     }
//     return curr;
// }

// let testCases=parseInt(readLine());
// while(testCases--){
//     let input=readLine().split(" ").map(Number);
//     console.log(deathGame(input[0],input[1]));
// }