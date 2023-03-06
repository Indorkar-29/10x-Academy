let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Define the required class here...
class Car {
    constructor(n = "Audi", m = "A4") {

        this.name = n;
        this.model = m;

    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let flag = parseInt(readLine());
if (flag === 1) {
    let inputString = readLine().split(' ');
    vehicle = new Car(inputString[0], inputString[1]);
} else {
    vehicle = new Car();
}

console.log(vehicle.name);
console.log(vehicle.model);