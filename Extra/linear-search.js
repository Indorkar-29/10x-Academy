let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let query = parseInt(readLine());
let size = parseInt(readLine());
let response = "Not Present";
for (let i = 0; i < size; i++) {
    let element = parseInt(readLine());
    if (element === query) {
        response = "Present";
        break;
    }
}
console.log(response);