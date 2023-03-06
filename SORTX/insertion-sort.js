let fs = require("fs");
let data = fs.readFileSync("C:/Users/ASUS/OneDrive/Desktop/10x/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function insertionSort(n, arr) {
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.log(...arr);
}
let testCases = parseInt(readLine());
while (testCases--) {
    let n = parseInt(readLine());
    let arr = readLine().split(" ").map(Number);
    insertionSort(n, arr);
}

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let key=arr[i];
//         let j=i-1;  
//         while( j>=0 && arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=key;
//     }
// }


// function convertToNumber(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=parseInt(arr[i]);
//     }
// }

// let T=parseInt(readLine());
// while(T--){
//     let N=parseInt(readLine());
//     let arr=readLine().split(' ');
//     convertToNumber(arr);
//     insertionSort(arr);
//     console.log(...arr);
// }