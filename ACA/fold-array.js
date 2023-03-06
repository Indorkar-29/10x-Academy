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
for (i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
let fold = parseInt(readLine());
if (fold <= 0) {
    console.log(fold);
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
} else {
    let orgArr = [];
    for (let k = 0; k < fold; k++) {
        let arr1 = [];
        for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
            if (arr.length == 1) {
                arr1.push(arr[i]);
            } else if (i < j) {
                arr1.push(arr[i] + arr[j]);
            } else if (i = j) {
                arr1.push(arr[i]);
            }
        }
        arr = arr1;
        n = arr1.length;
        // orgArr = arr1;
    }
    //     console.log(orgArr.length);
    //     for (i = 0; i < orgArr.length; i++) {
    //         console.log(orgArr[i]);
    //     }   console.log(orgArr.length);
    console.log(arr.length)
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}