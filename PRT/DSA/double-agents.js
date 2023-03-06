let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let array = readLine().split(" ");
let map = new Map();

for (let i = 0; i < array.length; i++) {
  let agent = array[i].split("").sort().join("");

  if (map.has(agent)) {
    map.set(agent, map.get(agent) + 1);
  } else {
    map.set(agent, 1);
  }
}

let count = 0;
for (let i of map) {
  if (count < i[1]) {
    count = i[1];
  }
}
console.log(count);
