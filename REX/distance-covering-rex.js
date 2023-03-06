let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function distCover(dist) {
    if (dist < 0) return 0;
    if (dist == 0) return 1;
    return distCover(dist - 1) + distCover(dist - 2)
}
let numOfCases = parseInt(readLine())
for (let i = 0; i < numOfCases; i++) {
    console.log(distCover(parseInt(readLine())))
}