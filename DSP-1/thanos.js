let fs = require("fs");
const { serialize } = require("v8");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function total(arr, n, s) {
    left = Array(n).fill(-1);
    right = Array(n).fill(n);
    st = [0];
    for (let i = 1; i < n; i = i + 1) {
        while (st.length !== 0 && arr[st[st.length - 1]] < arr[i]) {
            st.pop();
        }
        if (st.length !== 0) {
            console.log(st, left);
            left[i] = st[st.length - 1];
        }
        st.push(i);
    }

    st = [n - 1];
    for (let i = n - 2; i > -1; i = i - 1) {
        while (st.length !== 0 && arr[st[st.length - 1]] <= arr[i]) {
            st.pop();
        }
        if (st.length !== 0) {
            right[i] = st[st.length - 1];
        }
        st.push(i);
    }
    hashSet = new Map();
    for (let i = 0; i < n; i = i + 1) {
        l = i - 1 - left[i];
        r = right[i] - 1 - i;
        count = 1 + l + r + (l * r);
        if (hashSet.has(arr[i])) {
            console.log(hashSet.get(arr[i]));
            count += hashSet.get(arr[i]);
        }
        hashSet.set(arr[i], count);
    }
    for (let i = 0; i < s.length; i = i + 1) {
        console.log(hashSet.get(s[i]));
    }
}
let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let t = parseInt(readLine());
let s = readLine().split(" ").map(Number);
total(arr, n, s);