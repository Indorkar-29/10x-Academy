let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function largestElement(A) {
    // Code here
    let b = A[0];
    for (let i = 1; i <= n; i++) {
        if (A[i] > b) {
            b = A[i];
        }
    }
    return b;
}
// --------- Do NOT edit Below this line -----------
function ConvertToNumber(list) {
    for (let each in list) {
        list[each] = Number(list[each]);
    }
}

let n = parseInt(readLine());
let A = readLine().split(" ");
ConvertToNumber(A);
console.log(largestElement(A));