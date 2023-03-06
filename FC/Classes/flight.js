let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
    constructor(upTime, downTime) {
        this.upTime = upTime;
        this.downTime = downTime;
    }
    calculateFlight() {
        //write your code here
        let hour1 = this.upTime.split(":");
        let hour2 = this.downTime.split(":");
        let min1 = parseInt(hour1[0]) * 60 + parseInt(hour1[1]);
        let min2 = parseInt(hour2[0]) * 60 + parseInt(hour2[1]);
        return min2 - min1;
    }
}

// -------- Do NOT edit anything below this line ----------
let upTime = readLine();
let downTime = readLine();
let NewFlight = new Flight(upTime, downTime);
console.log(NewFlight.calculateFlight());