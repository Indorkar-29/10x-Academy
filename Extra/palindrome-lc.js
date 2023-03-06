let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function palindrome(str) {

    st = str.toUpperCase();
    let pal = "";
    for (let i = 0; i < st.length; i++) {
        if (st[i] >= "A" && st[i] <= "Z") {
            pal = pal + st[i];
        } else if (st[i] >= 0 && st[i] <= 9) {
            pal = pal + st[i];
        }
    }
    let temp = "";
    for (let i = 0; i < pal.length; i++) {
        if (pal[i] == " ") {
            continue;
        } else {
            temp = temp + pal[i];
        }
    }
    let reverseString = temp.split("").reverse().join("");
    console.log(reverseString);
    if (temp === reverseString) {
        return true;
    } else {
        return false;
    }
}

let str = readLine();
console.log(palindrome(str));