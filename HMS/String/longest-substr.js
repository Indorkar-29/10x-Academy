let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function longestSubstr(st) {
    let lastOcc = new Array(256).fill(-1);
    let start = 0;
    let longest = 0;
    for (let i = 0; i < st.length; i++) {
        if (lastOcc[st.charCodeAt(i)] !== -1) {
            start = Math.max(start, 1 + lastOcc[st.charCodeAt(i)]);
            longest = Math.max(longest, i - start + 1);
        } else {
            start = Math.max(start, 0);
            longest = Math.max(longest, i - start + 1);
        }
        lastOcc[st.charCodeAt(i)] = i;
    }
    return longest;
}

let n = parseInt(readLine());
while (n--) {
    let st = readLine();
    console.log(longestSubstr(st));
}