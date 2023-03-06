let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function halfInsertion(A, n) {
    for (let i = 1; i < n; i++) {
        let key = A[i];
        let j = i - 1;
        while (j >= 0 && key < A[j]) {
            A[j + 1] = A[j]
            j--;
        }
        A[j + 1] = key;
    }
    return A;
}
let str = readLine().split("");
if (str.length % 2 == 0) {
    let newStr = str.splice(str.length / 2);
    console.log(str.join("") + halfInsertion(newStr, newStr.length).join(""));
} else {
    let newStr = str.splice(Math.floor(str.length / 2));
    console.log(str.join("") + halfInsertion(newStr, newStr.length).join(""));
}

// function insertionSort(arr,start){
//     for(let i=start;i<arr.length;i++){
//         let key=arr[i];
//         let j=i-1; 
//         while( j>=start && arr[j]>key){ 
//             arr[j+1]=arr[j];    
//             j--;
//         }
//         arr[j+1]=key; 
//     }
// }

// let arr=readLine().split(""); 
// insertionSort(arr,parseInt(arr.length/2));
// console.log(arr.join(""))