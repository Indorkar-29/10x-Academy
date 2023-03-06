let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function jumpingGame(arr, target, pos) {
    if (pos >= target) { return 0; }
    let minJump = 1 / 0;
    minJump = Math.min(minJump, 1 + jumpingGame(arr, target, pos + arr[pos]), 1 + jumpingGame(arr, target, pos + 1))
    return minJump
}
let noOfSprings = parseInt(readLine());
let springArr = readLine().split(" ").map(Number);
console.log(jumpingGame(springArr, noOfSprings, 0))