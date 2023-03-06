let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function stringInsertionSort(A, n) {
    for (let i = 1; i < n; i++) {
        let key = A[i];
        let j = i - 1;
        while (j >= 0 && key < A[j]) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = key;
    }
    console.log(A.join(""));
}
let str = readLine().split("");
stringInsertionSort(str, str.length);