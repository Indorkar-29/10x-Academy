let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Define the required class here...
function Rectangle(l, w) {
    this.length = l,
        this.width = w,
        this.calculatePerimeter = function() {
            return 2 * (this.length + this.width);
        }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let input = readLine().split(" ");
let length = parseInt(input[0]);
let width = parseInt(input[1]);
let rectangle = new Rectangle(length, width);
console.log(rectangle.calculatePerimeter());