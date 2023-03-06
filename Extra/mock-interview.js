// let arr = [10, 70, 30, 40, 50];
// let count = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//         count++
//     }
// }
// if (count === arr.length - 1) {
//     console.log("Array is Sorted");
// } else {
//     console.log("Array is Not Sorted");
// }


function nonRepeating(n) {
    for (let i = 0; i < res.length; i++) {
        if (n === res[i]) {
            res.pop();
        }
    }
    res.push(n);
    return res;
}
let arr = [1, 2, 2, 3, 4, 5, 2, 4, 5, 6, 7, 8, 9, 6];
let sort = arr.sort();
let res = [];
res.push(arr[0]);
for (let i = 1; i < sort.length; i++) {
    nonRepeating(sort[i]);
}
console.log(res);


// nikhilx58@gmail.com