let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let size = parseInt(readLine());
let arr = readLine().split(" ").map(Number);

let sortedArr = arr.sort((a, b) => {
  return a - b;
});

let maxDiff = sortedArr[size - 1] - sortedArr[0];
console.log(maxDiff);
