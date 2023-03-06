let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let num = readLine().split(" "); // [2,2,5,3,3]
let map = new Map();
for (let i = 0; i < 2 * n + 1; i++) { // 0->2; 1->2; 2->1; 3->3; 4->3
    let x = num[i]; // 2; 2
    if (!map.has(x)) map.set(x, 1); // (2 ==> 1); (2 ==> 2, 1 ==> 1); (2 ==> 2, 1 ==> 1, 3 ==> 1)
    else map.set(x, map.get(x) + 1); // (2 ==> 1+1-->2); (2 ==> 2, 1 ==> 1, 3 ==> 2)
}
// console.log(map); // Map(3) { '2' => 2, '5' => 1, '3' => 2 }
// console.log(map.size) // 3
for (let [key, value] of map.entries()) {
    if (map.get(key) % 2 != 0) console.log(key);
}