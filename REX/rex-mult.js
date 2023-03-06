let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function mult(arr, len, i, prod) {
    if (i >= len) {
        console.log(prod)

    } else {

        prod = (prod * parseInt(arr[i]))
        i++;
        mult(arr, len, i, prod)
    }

}

let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
    let arr = readLine().split("")
    if (arr[0] === "-") {
        arr[0] = 1;
    }

    let len = arr.length;
    mult(arr, len, 0, 1, )
}