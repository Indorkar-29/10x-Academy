let arr=[3,4,6,8,7,2,1,5,9];
console.log(arr);
for(let i=0,j=arr.length-1;i<j;i++,j--){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
console.log(arr);