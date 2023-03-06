let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
}


let inputs = readLine().split(" ");
let N = parseInt(inputs[0]);
let Q = parseInt(inputs[1]);
let times = readLine().split(" ");
readLine()
convertToNumber(times);

times.sort((a, b) => {
    return b - a;
})

let preSum = [];
preSum.push(times[0]);
for (let i = 1; i < N; i++) {
    preSum.push(preSum[i - 1] + times[i]);
}

while (Q--) {
    let k = parseInt(readLine());
    console.log(preSum[k - 1])
}

//TLE:

// let input = readLine().split(" ").map(Number);
// let num = input[0];
// let query = input[1];
// let time = readLine().split(" ").map(Number);
// let scores = readLine().split(" ").map(Number);
// time.sort(function(a, b) { return b - a });
// while (query--) {
//     let q = parseInt(readLine());
//     let sum = 0;
//     for (let i = 0; i < q; i++) {
//         sum += time[i];
//     }
//     console.log(sum);
// }

//Python:

// n,q=map(int,input().split())
// a=list(map(int,input().split()))
// b=input()
// a.sort(reverse=True)
// sum=[0]*n
// sums=0
// for x in range(n):
//     sums+=a[x]
//     sum[x]=sums
// for x in range(q):
//     print(sum[int(input())-1])