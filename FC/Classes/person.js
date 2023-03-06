let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Define the required class here...
class Person {
    name = inputString[0];
    age = inputString[1];
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let inputString = readLine().split(" ");
let character = new Person(inputString[0], inputString[1]);
console.log(character.name);
console.log(character.age);