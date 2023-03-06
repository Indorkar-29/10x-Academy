let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let lifespan = 0;
for (i = 0; i < n; i++) {
    let value = parseInt(readLine());
    if (value <= 0) {
        lifespan = lifespan;
    } else if (value > 0) {
        lifespan = value + lifespan;
    }
}
console.log(lifespan);