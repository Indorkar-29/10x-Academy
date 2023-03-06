let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let testCases = parseInt(readLine())
while (testCases--) {
    let input = parseInt(readLine())
    let gain = []
    let angerSum = 0
    for (let i = 0; i < input; i++) {
        let [happiness, anger] = readLine().split(" ").map(Number)
        angerSum += anger
        gain.push(happiness + anger)

    }
    gain.sort((a, b) => (b - a))
    console.log(gain[0] + gain[1] - angerSum)
}

// let n = parseInt(readLine());
// let arr1 = [];
// let arr2 = [];
// while (n--) {
//     let len = parseInt(readLine());
//     for (let i = 0; i < len; i++) {
//         let temp = readLine().split(" ").map(Number);
//         arr1.push(temp[0]);
//         arr2.push(temp[1]);
//     }
// }
// console.log(...arr1);
// console.log(...arr2);

// ip:
// 1
// 4
// 2 3
// 10 2
// 11 5
// 4 1

// op:
// 2 10 11 4
// 3 2 5 1

//Python:

// for x in range(int(input())):
//     import math
//     n=int(input())
//     d=[]
//     c=[]
//     for x in range(n):
//         a,b=map(int,input().split())
//         d.append(b)
//         c.append(a+b)
//     c.sort()
//     print(c[-1]+c[-2]-sum(d))