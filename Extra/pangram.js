let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function pangram(sentence){
    let m=new Set();
    let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(let i=0;i<sentence.length;i++){
        for(let j=0;j<alpha.length;j++){
            if(alpha[j]===sentence[i]){
                if(!m.has(sentence[i])){
                    m.add(sentence[i]);
                }
            }
        }
    }
    if(m.size==26){
        return true;
    }
    else{
        return false;
    }
}
let sentence=readLine();
console.log(pangram(sentence));