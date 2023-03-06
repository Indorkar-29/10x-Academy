let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function gen(){

}

function solve(ours,theirs,moves){
    let result=-2;
    for(let no in ours.length){
        let mm,xx,yy=ours[no];
        if(mm !=" "){
            for(let x,y,t,nt in gen(ours,theirs,xx,yy,))
        }
    }
}

function simplifiedChessEngine(whites, blacks, moves) {
    /*
     * Write your code here.
     */
    if(moves%2==0){
        moves -=1;
    }
    for(let a in [whites,blacks]){
        for(let b in a){
            b[1]=indexOf(b[1])-indexOf("A");
            b[2]=indexOf(b[2])-indexOf("1");
        }
    }
    if(solve(whites,blacks,moves==1)){
        return "YES";
    }else{
        return "NO"
    }
}