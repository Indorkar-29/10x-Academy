let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function sort(A) {
//     let count0 = 0;
//     let count1 = 0;
//     let count2 = 0;
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] == 0) {
//             count0 += 1;
//         } else if (A[i] == 1) {
//             count1 += 1;
//         } else if (A[i] == 2) {
//             count2 += 1;
//         }
//     }
//     let j = 0;
//     while (count0 > 0) {
//         A[j] = 0;
//         j++;
//         count0 -= 1;
//     }
//     while (count1 > 0) {
//         A[j] = 1;
//         j++;
//         count1 -= 1;
//     }
//     while (count2 > 0) {
//         A[j] = 2;
//         j++;
//         count2 -= 1;
//     }
//     console.log(...A);
// }
// let arr = readLine().split(" ").map(Number);
// sort(arr);

// ip:
// 0 1 2 0 1 2

// op:
// 0 0 1 1 2 2

// let arr = readLine().split(" ").map(Number);
// let N = parseInt(readLine());
// let sum = N * (N + 1) / 2;
// let arrSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
// }
// console.log(sum - arrSum);

// ip:
// 1 2 3 5 7 6 8
// 8

// op:
// 4

// Insertion Sort:

// function insertionSort(A, n) {
//     for (let i = 1; i < n; i++) {
//         let key = A[i];
//         let j = i - 1;
//         while (j >= 0 && key < A[j]) {
//             A[j + 1] = A[j];
//             j--;
//         }
//         A[j + 1] = key;
//     }
//     console.log(...A);
// }
// let arr = readLine().split(" ").map(Number);
// insertionSort(arr, arr.length);

// ip:
// 3 2 1 9 10 15

// op:
// 1 2 3 9 10 15

//Bubble Sort:

// function bubbleSort(A, n) {
//     for (let i = 0; i < n - 1; i++) {
//         let flag = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (A[j] > A[j + 1]) {
//                 flag = true;
//                 let temp = A[j];
//                 A[j] = A[j + 1];
//                 A[j + 1] = temp;
//             }
//         }
//         if (flag == false) {
//             break;
//         }
//     }
//     console.log(...A);
// }
// let arr = readLine().split(" ").map(Number);
// bubbleSort(arr, arr.length);

// ip:
// 10 9 7 1 3 5 2 8 12 1 2 8

// op:
// 1 1 2 2 3 5 7 8 8 9 10 12

// Selection Sort:

// function selectionSort(A, n) {
//     let min_idx, temp;
//     for (let i = 0; i < n - 1; i++) {
//         min_idx = i;
//         for (let j = i + 1; j < n; j++) {
//             if (A[j] < A[min_idx]) {
//                 min_idx = j;
//             }
//         }
//         temp = A[i];
//         A[i] = A[min_idx];
//         A[min_idx] = temp;
//     }
//     console.log(...A);
// }
// let arr = readLine().split(" ").map(Number);
// selectionSort(arr, arr.length);

// ip:
// 20 10 8 30 23 1

// op:
// 1 8 10 20 23 30

// Merge Sort:

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
//             i++;
//         } else {
//             C[k] = B[j];
//             j++;
//         }
//         k++;
//     }
//     while (i < n1) {
//         C[k] = A[i]
//         i++;
//         k++;
//     }
//     while (j < n2) {
//         C[k] = B[j];
//         j++;
//         k++;
//     }
// }
// let C = readLine().split(" ").map(Number);
// mergeSort(C, 0, C.length - 1);
// console.log(...C);

// ip:
// 5 9 6 1 2 4 10

// op:
// 1 2 4 5 6 9 10

// Quick Sort:

// function quickSort(A, low, high) {
//     if (low < high) {
//         let pos = partition(A, low, high);
//         quickSort(A, low, pos - 1);
//         quickSort(A, pos + 1, high);
//     }
// }

// function swap(A, i, j) {
//     let temp = A[i];
//     A[i] = A[j];
//     A[j] = temp;
// }

// function partition(A, low, high) {
//     let pivot = A[high];
//     let q = low - 1;
//     for (let i = low; i < high; i++) {
//         if (A[i] <= pivot) {
//             q++;
//             swap(A, i, q);
//         }
//     }
//     swap(A, q + 1, high);
//     return q + 1;
// }
// let A = readLine().split(" ").map(Number);
// quickSort(A, 0, A.length - 1);
// console.log(...A);