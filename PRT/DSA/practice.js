// const data=[
//     {name:"mayuri",marks:90},
//     {name:"abc",marks:70},
//     {name:"xyz",marks:60},
//     {name:"pqr",marks:20},
//     {name:"mayuri9999",marks:27},
//     ]
// console.log(data);
// data.map((item)=>{
//     if(item.marks===20){
//         item.name="Tushar";
//     }
// });
// console.log(data);


// // Palindrome:

// function palindrome(str){
//     for(let i=0;i<str.length/2;i++){
//         if(str[i] !== str[str.length-1-i]){
//             return "No";
//         }
//     }
//     return "Yes";
// }

// const str="madam";
// const ans=palindrome(str);
// console.log(ans);

// // Brute Force:

// function palindrome(str){
//     for(let i=0;i<str.length/2;i++){
//         if(str[i] !== str[str.length-1-i]){
//             return "No";
//         }
//     }
//     return "Yes";
// }

// const str="madam";
// const ans=palindrome(str);
// console.log(ans);





// console.log("a")
// console.log("b")
// console.log("c")
// setTimeout(()=>{console.log("d")}, 2000);
// setTimeout(()=>{console.log("e")}, 0);
// console.log("f")


// class One{
//     sayHello(){
//         console.log("Hello from One");
//     }
// }

// class Two extends One{
//     sayHello(){
//         console.log(1+2);
//     }
// }

// let user1=new One();
// let user2=new Two();

// user1.sayHello();
// user2.sayHello();
// console.log("3"+9+9);

// let input=["string1","string2","string3"];
// input.join();
// console.log(input);

// Unsolved:

// let input=[1,5,6,3,2,8,15];  //4,7,10
// input.sort((a,b)=>{return a-b});
// let largest=input[input.length-1];
// console.log(largest);

// let ans=[];
// for(let i=0;i<largest;i++){
//     let temp=i+1;
//     if(input[i] != temp){
//         for(let j=i;j<input[i];j++){
//             ans.push(j);
//         }
//     }
// }
// console.log(ans);

// let input=["string1","string2","string3"]; //["string1,string2,string3"]
// let str="";
// for(let i=0;i<input.length;i++){
//     str+=input[i];
//     if(i!=input.length-1){
//         str+=",";
//     }
// }
// let ans=[];
// ans.push(str);
// console.log(ans);

// Reverse String without using any inbuilt function.
// in html async and defer?
// What is a z-index, how does it function?
// explain about prototypes and prototype chain? explain with an example
// Lifecycle of reactJs?
// Where do you see yourself in the next five years?

// dsa - https://leetcode.com/problems/3sum/description/

// webtech - 
// What is formatting in HTML?
// How to create a hyperlink in HTML?
// What is the difference between HTML elements and tags?

// What is the Box model in CSS?

// What is JSX? how is it different from using html css and js?
//  how would you Handle state in react?
// how does node js work? and what is the role of nodejs in your project?

// Input: x = 123
// Output: 321


// function reverse(x){
//     let max_limit = 2147483648;
    // let min_limit = -2147483648;
    // let ans=0;
    // while(x != 0){
    //     let rem=x%10;
    //     ans=ans*10+rem;
    //     x=parseInt(x/10);
    // }
    // if(ans> max_limit || ans < min_limit){
    //     return 0;
    // }else{
    //     return ans;
    // }
// }
// let x=120;
// console.log(reverse(x));

// let num =5;
// let ans=1;
// for(let i=1;i<=5;i++){
//     console.log(i);
//     ans=ans*i;
// }
// console.log(ans);

// function nFactorial(n) {
//     if (n < 0) {
//         return;
//     }
//     if (n === 0) {
//         return 1;
//     }
//     return n * nFactorial(n - 1);
// }

// console.log(nFactorial(5));

// let arr=[1, 2, 3, 1, 1, 3];
// // [1,1,1,3,3,2]
// let m=new Map();
// for(let i=0;i<arr.length;i++){
//     if(m.has(arr[i])){
//         m.set(arr[i],m.get(arr[i])+1)
//     }else{
//         m.set(arr[i],1);
//     }
// }
// let ans=[];
// for (const [key,value] of m) {
//     if(value>value+1){
//         ans.push(key);
//     }
// }
// // console.log(ans);

// function freq(arr){
//     let m={};
//     for(let i of arr){
//         m[i]=m[i]?m[i]+1:1;
//     }
//     let ans=Object.entries(m);
//     ans.sort((a,b)=>b[1]-a[1]);

//     let result=[];
//     for(let i=0;i<ans.length;i++){
//         for(let j=0;j<ans[i][1];j++){
//             result.push(parseInt(ans[i][0]));
//         }
//     }
//     return result;
// }
// let arr=[1,2,3,1,1,3];
// console.log(freq(arr));

