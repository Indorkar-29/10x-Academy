function bubbleSort(A,n){
    for(let i=0;i<n-1;i++){
        let flag=false;
        for(let j=0;j<n-i-1;j++){
            if(A[j]>A[j+1]){
                flag=true;
                let temp=A[j];
                A[j]=A[j+1];
                A[j+1]=temp;
            }
        }
        if(flag === false){
            break;
        }
    }
    console.log(...A);
}

let arr=[10,3,2,7,9,5,4,6,8,1];
bubbleSort(arr,arr.length);

// function bubbleSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let flag=false;
//         for(let j=0;j<n-i-1;j++){
//             if(A[j]>A[j+1]){
//                 flag=true;
//                 let temp=A[j];
//                 A[j]=A[j+1];
//                 A[j+1]=temp;
//             }
//         }
//         if(flag === false){
//             break;
//         }
//     }
//     console.log(...A);
// }

// function bubbleSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let flag=false;
//         for(let j=0;j<n-i-1;j++){
//             if(A[j]>A[j+1]){
//                 flag=true;
//                 let temp=A[j];
//                 A[j]=A[j+1];
//                 A[j+1]=temp;
//             }
//         }
//         if(flag===false){
//             break;
//         }
//     }
//     console.log(...A);
// }

// function bubbleSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let flag=false;
//         for(let j=0;j<n-i-1;j++){
//             if(A[j]>A[j+1]){
//                 flag=true;
//                 let temp=A[j];
//                 A[j]=A[j+1];
//                 A[j+1]=temp;
//             }
//         }
//         if(flag===false){
//             break;
//         }
//     }
//     console.log(...A);
// }

// function bubbleSort(A,n){
//     for(let i=0;i<n-1;i++){
//         let flag=false;
//         for(let j=0;i<n-i-1;j++){
//             if(A[j]>A[j+1]){
//                 flag=true;
//                 let temp=A[j];
//                 A[j]=A[j+1];
//                 A[j+1]=temp;
//             }
//         }
//         if(flag===false){
//             break;
//         }
//     }
//     console.log(...A);
// }