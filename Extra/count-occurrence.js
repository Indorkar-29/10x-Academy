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
let count = 0;
for (i = 0; i < size; i++) {
    let input = parseInt(readLine());
    if (input != query) {
        continue;
    } else {
        count = count + 1;
    }

}
console.log(count);