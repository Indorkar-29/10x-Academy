let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function replaceElements(arr) {
    // Implement this function    
    let result = [];
    result[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        result[i] = Math.max(arr[i + 1], result[i + 1]);
        // if (arr[i + 1] > result[i + 1]) {
        //     result[i] = arr[i + 1];
        // } else if (arr[i + 1] < result[i + 1]) {
        //     result[i] = result[i + 1];
        // }
    }
    return result;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index = 0; index < numElems; index++) {
    arr.push(parseInt(readLine()));
}
let res = replaceElements(arr);
for (elem of res) {
    console.log(elem);
}