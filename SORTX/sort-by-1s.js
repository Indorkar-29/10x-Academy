let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function noOf1s(n) {
    let count = 0;
    while (n) {
        n = n & (n - 1);
        count++;
    }
    return count;
}

let input = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
arr.sort(function(a, b) {
    let na = noOf1s(a);
    let nb = noOf1s(b);
    return nb - na;
});

console.log(...arr);

// function countBits(a) {
//     let count = 0;
//     while (a > 0) {
//         if ((a & 1) > 0)
//             count += 1;
//         a = a >> 1;
//     }
//     return count;
// }

// function insertionSort(arr, aux, n) {
//     for (let i = 1; i < n; i++) {
//         let key1 = aux[i];
//         let key2 = arr[i];
//         let j = i - 1;
//         while (j >= 0 && aux[j] < key1) {
//             aux[j + 1] = aux[j];
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         aux[j + 1] = key1;
//         arr[j + 1] = key2;
//     }
// }

// function sortBySetBitCount(arr, n) {
//     let aux = new Array(n);
//     for (let i = 0; i < n; i++)
//         aux[i] = countBits(arr[i]);
//     insertionSort(arr, aux, n);
// }
// let n = parseInt(readLine());
// let arr = readLine().split(" ").map(Number);
// sortBySetBitCount(arr, n)
// console.log(...arr)