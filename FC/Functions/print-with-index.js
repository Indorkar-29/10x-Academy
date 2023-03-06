let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//You have to write a function with function name as printer which takes a list.
// you can use printWithIndex function to print
// you can start from now
function printer() {
    for (let i = 0; i < stringList.length; i++) {
        printWithIndex(i, stringList[i]);
    }
}
//Do not change anything below this line
function printWithIndex(index, string) {
    console.log(index, string);
}

let noOfStrings = parseInt(readLine());
let stringList = [];
for (let i = 0; i < noOfStrings; i++) {
    stringList.push(readLine());
}
printer(stringList);