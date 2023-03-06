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
let max_count = 0;
let answer = [];
for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
        if (arr[i] == arr[j]) {
            count++;
        } else {
            break;
        }
    }
    if (count > max_count) {
        max_count = count;
        answer = [];
        answer.push(arr[i]);
    } else if (count == max_count) {
        answer.push(arr[i]);
    }
}
if (answer.length == 0) {
    console.log(-1);
} else {
    for (let i = 0; i < answer.length; i++) {
        console.log(answer[i]);
    }
}