function selectionSort(A,n){
    for(let i=0;i<n-1;i++){
        let minIdx=i;
        for(let j=i+1;j<n;j++){
            if(A[j]<A[minIdx]){
                minIdx=j;
            }
        }
        let temp=A[i];
        A[i]=A[minIdx];
        A[minIdx]=temp;
    }
    console.log(...A);
}

let arr=[1,6,3,8,4,9,4,93,7,77];
selectionSort(arr,arr.length);

// function selectionSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let minIdx=i;
//         for(let j=i+1;j<n;j++){
//             if(A[j]<A[minIdx]){
//                 minIdx=j;
//             }
//         }
//         let temp=A[i];
//         A[i]=A[minIdx];
//         A[minIdx]=temp;
//     }
//     console.log(...A);
// }

// function selectionSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let minIdx=i;
//         for(let j=i+1;j<n;j++){
//             if(A[j]<A[minIdx]){
//                 minIdx=j;
//             }
//         }
//         let temp=A[i];
//         A[i]=A[minIdx];
//         A[minIdx]=temp;
//     }
//     console.log(...A);
// }

// function selectionSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let minIdx=i;
//         for(let j=i+1;j<n;j++){
//             if(A[j]<A[minIdx]){
//                 minIdx=j;
//             }
//         }
//         let temp=A[i];
//         A[i]=A[minIdx];
//         A[minIdx]=temp;
//     }
//     console.log(...A);
// }

// function selectionSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let minIdx=i;
//         for(let j=i+1;j<n;j++){
//             if(A[j]<A[minIdx]){
//                 minIdx=j;
//             }
//         }
//         let temp=A[i];
//         A[i]=A[minIdx];
//         A[minIdx]=temp;
//     }
//     console.log(...A);
// }