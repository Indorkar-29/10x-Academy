let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function chess(x, y, N) {
    if (N === 0) { return 0; }
    N--;
    let possibleXCorrArr = [x - 1, x - 2, x + 1, x + 2, x - 1, x - 2, x + 1, x + 2];
    let possibleYCorrArr = [y - 2, y - 1, y + 2, y + 1, y + 2, y + 1, y - 2, y - 1];
    for (let i = 0; i < possibleXCorrArr.length; i++) {
        if (possibleXCorrArr[i] > 0 && possibleYCorrArr[i] > 0 && possibleXCorrArr[i] < 11 && possibleYCorrArr[i] < 11) {
            let possiblePosCoor = possibleXCorrArr[i] + "," + possibleYCorrArr[i];
            if (N === 0) {
                possiblePoss.set(possiblePosCoor, N);
            }
            chess(possibleXCorrArr[i], possibleYCorrArr[i], N);
        }
    }
    return possiblePoss.size;
}
let [i, j, n] = readLine().split(" ").map(Number);
let possiblePoss = new Map();
console.log(chess(i, j, n));