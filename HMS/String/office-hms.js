let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// function office(t, h) {

// }
// let teamMembers = readLine().split(" ");
// let happiness = readLine().split(" ").map(Number);
// for (let i = 0; i < teamMembers.length; i++) {
//     if (teamMembers[i] == "Boss") {
//         happiness[i] = 2 * happiness[i];
//         break;
//     }
// }
// console.log(office(teamMembers, happiness));

let teamMembers = readLine().split(" ");
let scores = readLine().split(" ").map(Number);
let happiness = 0;
for (let i = 0; i < scores.length; i++) {
    if (teamMembers[i] === "Boss" || teamMembers[i] === "boss") {
        happiness += scores[i] * 2;
    } else {
        happiness += scores[i];
    }
}
happiness = happiness / teamMembers.length;
if (happiness <= 5) {
    console.log("They fired me");
} else {
    console.log("I still have a job");
}