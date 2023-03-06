let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function ringingBell(bells){
  let periods=bells.map(period => BigInt(period));
  let lcm = periods.reduce((a,b)=> (a*b)/gcd(a,b));
  return lcm;
}

function gcd(a, b) {
  if (a === 0n) return b;
  if (b === 0n) return a;
  return gcd(b, a % b);
}

let input = parseInt(readLine());
let ans=ringingBell(readLine().split(" ").map(Number));
let str="";
str+=ans
console.log(str);