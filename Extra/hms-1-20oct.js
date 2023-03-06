let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function detective(msg, guess) {
    let m = new Map();
    for (let i = 0; i < msg.length; i++) {
        let ch = msg[i];
        if (!m.has(ch)) {
            m.set(ch, 1);
        } else {
            m.set(ch, m.get(ch) + 1);
        }
    }
    for (let j = 0; j < guess.length; j++) {
        let ch = guess[j];
        if (m.has(ch)) {
            if (m.get(ch) === 1) {
                m.delete(ch);
            } else {
                m.set(ch, m.get(ch) - 1);
            }
        } else {
            return "NO";
        }
    }
    return "YES";
}

let n = parseInt(readLine());
while (n--) {
    let msg = readLine().split(" ").join("").toLowerCase();
    let guess = readLine().split(" ").join("").toLowerCase();
    console.log(detective(msg, guess));
}