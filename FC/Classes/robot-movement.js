let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Define your class here
// your class name should be 'RobotMovement' and method names as 'moveUp', 'moveDown', 'moveLeft' and 'moveRight' 
class RobotMovement {
    constructor(x = 0, y = 0) {
        this.xCoordinate = x;
        this.yCoordinate = y;
    }
    moveUp() {
        this.yCoordinate = this.yCoordinate + 1;
    }
    moveDown() {
        this.yCoordinate = this.yCoordinate - 1;
    }
    moveLeft() {
        this.xCoordinate = this.xCoordinate - 1;
    }
    moveRight() {
        this.xCoordinate = this.xCoordinate + 1;
    }
}



// DO NOT CHANGE ANYTHING BELOW THIS LINE
let Num = parseInt(readLine());
let myRobotMove = new RobotMovement();
for (let index = 0; index < Num; index++) {
    let currentMovement = readLine();
    if (currentMovement === "up") {
        myRobotMove.moveUp();
    } else if (currentMovement === "down") {
        myRobotMove.moveDown();
    } else if (currentMovement === "left") {
        myRobotMove.moveLeft();
    } else {
        myRobotMove.moveRight();
    }
}
console.log(myRobotMove.xCoordinate);
console.log(myRobotMove.yCoordinate);