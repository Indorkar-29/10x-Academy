function insertionSort(A,n){
    for(let i=1;i<n;i++){
        let key=A[i];
        let j=i-1;
        while(j>=0 && A[j]>key){
            A[j+1]=A[j];
            j--;
        }
        A[j+1]=key;
    }
    console.log(...A);
}

let arr=[5,14,77,24,8,24,85,3];
insertionSort(arr,arr.length);

// function insertionSort(A,n){
//     for(let i=1;i<n;i++){
//         let key=A[i];
//         let j=i-1;
//         while(j>=0 && A[j]>key){
//             A[j+1]=A[j];
//             j--;
//         }
//         A[j+1]=key;
//     }
//     console.log(...A);
// }

// function insertionSort(A,n){
//     for(let i=1;i<n;i++){
//         let key=A[i];
//         let j=i-1;
//         while(j>=0 && A[j]>key){
//             A[j+1]=A[j];
//             j--;
//         }
//         A[j+1]=key;
//     }
//     console.log(...A);
// }

// function insertionSort(A,n){
//     for(let i=1;i<n;i++){
//         let key=A[i];
//         let j=i-1;
//         while(j>=0 && A[j]>key){
//             A[j+1]=A[j];
//             j--;
//         }
//         A[j+1]=key;
//     }
//     console.log(...A);
// }

// function insertionSort(A,n){
//     for(let i=1;i<n;i++){
//         let key=A[i];
//         let j=i-1;
//         while(j>=0 && A[j]>key){
//             if(A[j]>A[j+1]){
//                 A[j+1]=A[j];
//                  j--;
//             }
//         }
//         A[j+1]=key;
//     }
//     console.log(...A);
// }