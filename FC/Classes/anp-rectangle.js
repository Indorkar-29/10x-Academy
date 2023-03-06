let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Your class should be named as `Rectangle`. 
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.
class Rectangle {
    constructor(l, w) {
        this.length = l;
        this.width = w;
    }
    rectangleArea() {
        if (this.length <= 0 || this.width <= 0) {
            return 0;
        } else {
            return this.width * this.length;
        }
    }
    rectanglePerimeter() {
        if (this.length <= 0 || this.width <= 0) {
            return 0;
        } else {
            return 2 * (this.length + this.width);
        }
    }
}

let length = parseInt(readLine());
let width = parseInt(readLine());
let newRectangle = new Rectangle(length, width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());