let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function pallindrome(arr, firstIndex, lastIndex) {

    if (firstIndex < lastIndex && arr[firstIndex] == arr[lastIndex]) {
        firstIndex++;
        lastIndex--;
        pallindrome(arr, firstIndex, lastIndex);
    } else if (firstIndex >= lastIndex) {
        console.log("True");
    } else {
        console.log("False");
    }
}

let testCase = parseInt(readLine());
for (let i = 0; i < testCase; i++) {
    let arr = readLine().split("");
    pallindrome(arr, 0, arr.length - 1);
}