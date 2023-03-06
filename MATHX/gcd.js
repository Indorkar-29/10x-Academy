let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function getGCD(a, b) {
  if (a === 0 && b === 0) {
    return -1;
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else if (a >= b) {
    return getGCD(b, a % b);
  } else {
    return getGCD(a, b % a);
  }
}

let testCases = parseInt(readLine());
while (testCases--) {
  let temp = readLine().split(" ").map(Number);
  console.log(getGCD(temp[0], temp[1]));
}

// LCM:
// console.log((a * b) / getGCD(a, b));
