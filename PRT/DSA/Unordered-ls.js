let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function UnorderedLinearSearch(arr, target) {
  for (let i in arr) {
    if (arr[i] === target) return parseInt(i);
  }
  return -1;
}

let target = parseInt(readLine());
let arrSize = parseInt(readLine());
let arr = [];

for (let i = 0; i < arrSize; i++) {
  arr.push(parseInt(readLine()));
}

console.log(UnorderedLinearSearch(arr, target));
