let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// Do not edit above this line
// Code Here
class gearVehicle{
    #model
    #numberOfGear
    constructor(model){
        this.speed=0;
        this.#numberOfGear=0;
        this.#model=model? model :"Suzuki";
    }
    getModel(){
        return this.#model;
    }
    getNumberOfGear(){
        return this.#numberOfGear;
    }
    getSpeed(){
        return this.speed;
    }
    #increaseGear(){
       return this.#numberOfGear+=1;
    }
    increaseSpeed(n){
        if(n>0){
            this.speed+=n;
            if(this.speed%20===0){
                this.#increaseGear();
            }
        }
    }
}

// Do not edit below this line
let n = parseInt(readLine());

let model = readLine();
let vehicle = new gearVehicle(model);

for (let i = 1; i < n; i++) {
  amount = parseInt(readLine());
  vehicle.increaseSpeed(amount);
}
// console.log(vehicle.getModel());
let speed = vehicle.getSpeed();

let gear = vehicle.getNumberOfGear();

// Output the final speed and final number of gear
console.log(speed + " " + gear);