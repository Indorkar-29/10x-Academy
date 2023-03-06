// Find Sum of N numbers:
// let N=5;
// function sum(N){
//     if(N===0)return 0;
//     else{
//         return N+sum(N-1)
//     }
// }
// console.log(sum(N));
// // op:15
// // TC: O(n) SC: O(n)

// Find Product of N numbers:
// let N=5;
// function product(N){
//     if(N===1)return 1;
//     else{
//         return N*product(N-1)
//     }
// }
// console.log(product(N));
// // op:120
// // TC: O(n) SC: O(n)

// Fibonacci Numbers:
// function fib(n){
//     if(n===0 || n===1)return n;
//     else{
//         return fib(n-1)+fib(n-2);
//     }
// }

// console.log(fib(8));
// // op: 21
// // TC: O(2**n) SC: O(n)

// Palindrome Check:
// let str = "MADAM";
// function checkPalindrome(str, i, j) {
//   if (i == j) return true;
//   else if (str[i] != str[j]) {
//     return false;
//   } else if (i < j + 1) {
//     return checkPalindrome(str, i + 1, j - 1);
//   }
//   return true;
// }
// console.log(checkPalindrome(str,str[0],str[str.length-1]));
// // op: true
// // TC: O(n/2)=O(n) SC: O(n/2)=O(n)

// Power Functions:
// Approach 1:
// function pow(x,n){
//     if(n===0)return 1;
//     else if(n>0){
//         return x*pow(x,n-1);
//     }
// }
// console.log(pow(2,6));
// // op: 64
// // TC: O(n) SC: O(n)

// Approach 2:
// function pow(x,n){
//     if(n===0)return 1;
//     else if(n%2===0){
//         return pow(x,n/2)*pow(x,n/2); // take floor of n/2 everywhere
//     }else{
//         return x*pow(x,n/2)*pow(x,n/2);
//     }
// }
// console.log(pow(2,6));
// // op: 64
// // TC: O(n) SC: O(log n)

// Approach 3:(Still not working)
// function pow(x,n){
//     if(n===0){return 1}
//     // let y=pow(x,n/2)
//     else if(n%2===0){
//         return y*y; // take floor of n/2 everywhere
//     }else{
//         return x*y*y;
//     }
// }
// console.log(pow(2,6));
// // op: 64
// // TC: O(log n) SC: O(log n)

// GCD or HCF of 2 Numbers:
// function gcd(a,b){
//     if(a===0 && b===0)return "NA";
//     else if(a===0)return b;
//     else if(b===0)return a;
//     else if(a>b)return gcd(b,a%b);
//     else{
//         return gcd(a,b%a);
//     }
// }
// console.log(gcd(10,15));
// // op: 5
// // TC: O(log(min(a,b))) SC: O(log(min(a,b)))

// Print all the combinations of balanced parenthesis
// function generate(str,pos,n,open,close,ans){
//     if(open==close==n){
//         // ans.push(str);
//         // return;
//         console.log(str);
//         return;
//     }else{
//         if(open>close){
//             str[pos]=")";
//             generate(str,pos+1,n,open,close+1,ans);
//         }
//         if(open<n){
//             str[pos]="(";
//             generate(str,pos+1,n,open+1,close,ans);
//         }
//     }
// }
// console.log(generate([""],0,2,0,0,[]));
// TC: O(2**n)

// Generate all permutations of a string
// function swap(str,i,j){
//     let temp=str[i];
//     str[i]=str[j];
//     str[j]=temp;
// }
// function permutation(str,pos,n){
//     if(pos==n-1){
//         console.log(str);
//         return;
//     }else{
//         for(let i=pos;i<n;i++){
//             swap(str,i,pos);
//             permutation(str,pos+1,n);
//             swap(str,pos,i);
//         }
//     }
// }
// TC: O(n!*n)

// Find permutation of string in lexicographic order (No code)


// Print all the subsets of array
// function subset(arr, n, pos, presentSub, ans) {
//   if (pos == n) {
//     ans.push(presentSub);
//     return;
//   } else {
//     subset(arr, n, pos + 1, presentSub + arr[pos], ans); //Include
//     subset(arr, n, pos + 1, presentSub, ans); //Exclude
//   }
// }
// // TC: O(2**n) SC: O(n)
