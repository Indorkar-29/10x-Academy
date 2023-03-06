let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

class HopRacing {
    constructor(t1, t2) {
        this.hopper = t1;
        this.hops = t2;
    }
    getRounds() {
        for (let i = 0; i < n; i++) {
            if (this.hopper[i] === 1) {
                count1 += this.hops[i];
                if (count1 >= 10) {
                    return 1;
                }
            } else if (this.hopper[i] === 2) {
                count2 += this.hops[i];
                if (count2 >= 10) {
                    return 2;
                }
            }
        }
    }
}

let n = parseInt(readLine());
let arr1 = [];
let arr2 = [];
for (let i = 0; i < n; i++) {
    let temp = readLine().split(" ").map(Number);
    arr1.push(temp[0]);
    arr2.push(temp[1]);
}
let count1 = 0;
let count2 = 0;
let newHopRace = new HopRacing(arr1, arr2);
console.log(newHopRace.getRounds());