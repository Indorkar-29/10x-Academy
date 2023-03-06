let n = [70, 40, 50];
sum = 0;
for (let i = 0; i < n.length; i++) {
    if (n[i] > sum) {
        sum = n[i]
    }
}
console.log(sum)