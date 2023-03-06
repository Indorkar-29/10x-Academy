let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
let arr2 = [];
let m = parseInt(readLine());
for (let i = 0; i < m; i++) {
    arr2.push(parseInt(readLine()));
}
let iconcount = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] == arr2[0]) {
        let k = i + 1;
        let count = 1;
        for (let j = 1; j < m; j++, k++) {
            if (arr[k] == arr2[j]) {

                count++;
                continue;
            } else {
                break;
            }
        }
        if (count == m) {
            iconcount++;
        }
    }
}
console.log(iconcount);