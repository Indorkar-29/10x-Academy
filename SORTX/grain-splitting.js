let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function sumOf(grainArr) {
    let sum = 0;
    for (let i = 0; i < grainArr.length; i++) {
        sum += grainArr[i];
    }
    return sum / 2;
}
// [ 4, 1, 1, 1, 4, 5 ]
// bags of second village
function bags(grainArr, villageBag) {
    let sum = 0;
    let bagArr = [];
    for (let j = grainArr.length - 1; j >= 0; j--) {
        sum += grainArr[j];
        if (sum <= villageBag) bagArr.push(grainArr[j]);
        else if (
            sum == villageBag &&
            bagArr.length < Math.ceil(grainArr.length / 2)
        ) {
            break;
        } else if (
            sum > villageBag ||
            bagArr.length > Math.ceil(grainArr.length / 2)
        )
            break;
    }
    return bagArr;
}
// main reading area
let numOfCases = parseInt(readLine());
console.log(numOfCases);
for (let i = 0; i < numOfCases; i++) {
    let grainArr = readLine().split(" ").map(Number);
    let villageBag = sumOf(grainArr);
    grainArr.sort(function(a, b) {
        return a - b;
    });
    let x = bags(grainArr, villageBag);
    x.sort(function(a, b) {
        return a - b;
    })
    console.log(...x);
}