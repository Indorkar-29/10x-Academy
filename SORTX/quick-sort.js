let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function quickSort(A, low, high) {
    if (low < high) {
        let pos = partition(A, low, high);
        quickSort(A, low, pos - 1);
        quickSort(A, pos + 1, high);
    }
}

function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function partition(A, low, high) {
    let pivot = A[high];
    let q = low - 1;
    for (let i = low; i < high; i++) {
        if (A[i] <= pivot) {
            q++;
            swap(A, i, q);
        }
    }
    swap(A, q + 1, high)
    return q + 1;
}

let testCases = parseInt(readLine());
while (testCases--) {
    let len = parseInt(readLine());
    let A = readLine().split(" ").map(Number);
    quickSort(A, 0, len - 1);
    console.log(...A);
}