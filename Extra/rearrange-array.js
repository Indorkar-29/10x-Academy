let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let a = [];
for (let i = 0; i < n; i++) {
    a.push(parseInt(readLine()));
}
let b = [];
for (let i = 0; i < n; i++) {
    b.push(parseInt(readLine()));
}
let c = [];
for (let i = 0; i < n; i++) {
    if (b[i] === i) {
        c[b[i]] = a[i];

    } else {
        let k = c.splice(b[i]);
        c[b[i]] = a[i];
        for (let j = 0; j < k.length; j++) {
            c.push(k[j]);
        }
    }
}
for (let i = 0; i < c.length; i++) {
    console.log(c[i]);
}