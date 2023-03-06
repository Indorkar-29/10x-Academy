let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function merge(leftArr, rightArr) {
    let sortedArr = []
    let left = 0;
    let right = 0;
    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] < rightArr[right]) {
            sortedArr.push(leftArr[left++])
        } else {
            sortedArr.push(rightArr[right++])
        }
    }
    while (left < leftArr.length) {
        sortedArr.push(leftArr[left++])
    }
    while (right < rightArr.length) {
        sortedArr.push(rightArr[right++]);
    }
    return sortedArr;
}
let m = parseInt(readLine());
let n = parseInt(readLine());
let arr_one = readLine().split(" ").map(Number);
for (let i = 0; i < m - 1; i++) {
    let arr_two = readLine().split(" ").map(Number);
    let merge_arr = merge(arr_one, arr_two);
    arr_one = merge_arr;
}
console.log(...arr_one);

// function mergeSort(C, start, end) {
//     if (start >= end) {
//         return;
//     }
//     let mid = parseInt((start + end) / 2);
//     mergeSort(C, start, mid);
//     mergeSort(C, mid + 1, end);
//     merge(C, start, mid, end);
// }

// function merge(C, p, q, r) {
//     let n1 = q - p + 1;
//     let n2 = r - q;
//     let A = [];
//     let B = [];
//     for (let i = 0; i < n1; i++) {
//         A[i] = C[p + i];
//     }
//     for (let j = 0; j < n2; j++) {
//         B[j] = C[q + 1 + j];
//     }
//     let i = 0,
//         j = 0,
//         k = p;
//     while (i < n1 && j < n2) {
//         if (A[i] <= B[j]) {
//             C[k] = A[i];
//             i++
//         } else {
//             C[k] = B[j];
//             j++;
//         }
//         k++
//     }
//     while (i < n1) {
//         C[k] = A[i];
//         i++;
//         k++;
//     }
//     while (j < n2) {
//         C[k] = B[j];
//         j++;
//         k++;
//     }
// }

// let testCases = parseInt(readLine());
// let len = parseInt(readLine());
// let res = [];
// while (testCases--) {
//     let C = readLine().split(" ").map(Number);
//     for (let i = 0; i < len; i++) {
//         res.push(C[i]);
//     }
// }
// mergeSort(res, 0, res.length - 1);
// console.log(...res);