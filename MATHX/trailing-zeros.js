let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let testCases = parseInt(readLine());
while (testCases--) {
  let N = parseInt(readLine());
  let trailingZero = 0;
  for (let i = 5; i <= N; i = i * 5) {
    trailingZero = trailingZero + Math.floor(N / i);
  }
  console.log(trailingZero);
}
