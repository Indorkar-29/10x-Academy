let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function insertionInBetween(n, x, arr) {
    arr.push(x);
    arr.sort(function(a, b) {
        return a - b;
    })
    console.log(...arr);
}
let input = readLine().split(" ").map(Number);
let n = input[0];
let x = input[1];
let arr = readLine().split(" ").map(Number);
insertionInBetween(n, x, arr);

// function insertionSort(arr) {
//     let i = arr.length - 1;
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }

//   function convertToNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = parseInt(arr[i]);
//     }
//   }
//   let inputs = readLine().split(" ");
//   let N = parseInt(inputs[0]);
//   let key = parseInt(inputs[1]);
//   let arr = readLine().split(" ");
//   arr.push(key);
//   convertToNumber(arr);
//   insertionSort(arr);
//   console.log(...arr);