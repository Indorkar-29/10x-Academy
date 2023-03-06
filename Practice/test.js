// PANGEA TECH

// function Palindrome(str) { 

//   // code goes here 
//   for(let i=0,j=str.length-1;i<=j;i++,j--){
//     if(str[i] !== str[j]){
//       return "false";
//     }
//   } 
//   return "true"; 
// }
   
// // keep this function call here 
// console.log('Test 1 passing: ' + (Palindrome("never odd or even") == 'true'));
// console.log('Test 2 passing: ' + (Palindrome("eye") == 'true'));

// function GCF(arr) { 

//     // code goes here

//         if(arr[0]==0 && arr[1]==0){
//             return -1;
//         }else if(arr[0]==0){
//             return arr[1];
//         }else if(arr[1]==0){
//             return arr[0];
//         }else if(arr[0]>=arr[1]){
//             return GCF([arr[1],arr[0]%arr[1]]);
//         }else{
//             return GCF([arr[0],arr[1]%arr[0]]);
//         }
      
//     // return arr[0]; 
  
//   }
     
//   // keep this function call here 
//   console.log('Test 1 passing: ' + (GCF([1, 6]) == '1'));
//   console.log('Test 2 passing: ' + (GCF([12, 28]) == '4'));

// function FibonacciChecker(num) { 

//     // code goes here  
//     if(num === 0 || num === 1){
//         return "yes";
//     }
//     let prev=1;
//     let count=2;
//     let temp=0;
//     while(count <= num){
//         if(prev + count === num){
//             return "yes";
//         };
//         temp=prev;
//         prev=count;
//         count += temp;
//     }
//     return "no"; 
//   }
     
//   // keep this function call here 
//   console.log('Test 1 passing: ' + (FibonacciChecker(34) == 'yes'));
//   console.log('Test 2 passing: ' + (FibonacciChecker(54) == 'no'));

//   //1,1,2,3,5,8,13,21,34,55,89,144,233,377


// let fs=require('fs');
// let data=fs.readFileSync('./input.txt','utf-8');
// let idx=0;
// data=data.split('\n');
// function readLine(){
//     idx++;
//     return data[idx-1].trim();
// }

// 1 :=>

// let arr=readLine().split(" ").map(Number);
// let iteration=parseInt(readLine());

// iteration=iteration % arr.length;

// for(let i=0;i<arr.length;i++){
//     if(i<iteration){
//         console.log(arr[arr.length+i-iteration]);
//     }else{
//         console.log(arr[i-iteration]);
//     }
// }

// 2 :=>

// class Progress{
//     constructor(name){
//         this.studentName=name;
//     }
//     enter_score(marks){
//         this.marks=marks;
//     }
//     get_average_score(){
//         let avg=0;
//         for(let i=0;i<this.marks.length;i++){
//             avg+=this.marks[i];
//         }
//         return `${this.studentName} average score: ${Math.round(avg/this.marks.length)}`;
//     }
//     get_test_score(testNum){
//         let ans= `${this.studentName} test ${testNum} marks: NA`;
//         for(let i=1;i<=this.marks.length;i++){
//             if(testNum === i){
//                 ans=`${this.studentName} test ${testNum} marks: ${this.marks[i-1]}`;
//             }
//         }
//         return ans;
//     }
// }

// let name=readLine();
// let newProgress=new Progress(name);
// let numOfTest=parseInt(readLine());
// let marks=[];
// for(let i=0;i<numOfTest;i++){
//     marks[i]=parseInt(readLine());
// }
// newProgress.enter_score(marks);
// let testCases=parseInt(readLine());
// while(testCases--){
//     let test=readLine();
//     if(test === "get_marks"){
//         let testNum=parseInt(readLine());
//         console.log(newProgress.get_test_score(testNum));
//     }else if(test === "average"){
//         console.log(newProgress.get_average_score());
//     }else{
//         console.log("NA");
//     }
// }


// BIND SYSTEM

// function remDuplicates(arr){
//     let s=new Set();
//     let temp=[];
//     for(let i=0;i<arr.length;i++){
//         if(!s.has(arr[i])){
//             s.add(arr[i]);
//             temp.push(arr[i]);
//         }
//     }
//     return temp;

// }


// let arr=[1,2,3,4,2,314,1,3,5];
// //second lowest =2
// // second highest= 5

// let newArr=remDuplicates(arr);

// function bubbleSort(A,n){
//     for(let i=0;i<n;i++){
//         let flag=false;
//         for(let j=0;j<n-i-1;j++){
//             if(A[j]>A[j+1]){
//                 flag=true;
//                 let temp=A[j];
//                 A[j]=A[j+1];
//                 A[j+1]=temp;
//             }
//         }
//         if(flag == false){
//             break;
//         }
//     }
//     return A;
// }

// let sortedArr=bubbleSort(newArr,newArr.length);

// console.log("Second Lowest: ",sortedArr[1]);
// console.log("Second Highest: ",sortedArr[sortedArr.length-2]);


// let testCases=paresInt(readLine());
// let arr=readLine().split(" ").map(Number);
// let r=arr[0];
// let g=arr[1];
// let b=arr[2];
// let count=0;

// while(testCases--){
//     if(r===0 && g===0 && b=== 0)return count;
//     else{
        
//     }

// }

// console.log(count);

// ----------------------------------------------X------------------------------------------------------------

// let fs=require('fs');
// let data=fs.readFileSync("./input.txt".'utf-8');
// let idx=0;
// data=data.split('\n');
// function readLine(){
//     idx++;
//     return data[idx-1].trim();
// }

// class Node{
//     constructor(element){
//         this.data=element;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }

//     printList(){
//         let arr=[];
//         let temp=this.head;
//         while(temp != null){
//             arr.push(temp.data);
//             // console.log(temp.data);
//             temp=temp.next;
//         }
//         console.log(...arr);
//     }

//     insertAtBeginning(element){
//         let node =new Node(element);
//         if(this.head === null){
//             this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     insertAtEnd(element){
//         let node=new Node(element);
//         if(this.head === null){
//             this.head=node;
//         }else{
//             let temp=this.head;
//             while(temp.next != null){
//                 temp=temp.next;
//             }
//             temp.next=node;
//         }
//         this.size++;
//     }

//     insertAtPosition(element,pos){
//         let node=new Node(element);
//         let curr=this.head;
//         let prev=null;
//         if(pos===0){
//             node.next=this.head;
//             this.head=node;
//         }else{
//             let i=0;
//             while(i<pos && curr.next != null){
//                 i++;
//                 prev=curr;
//                 curr=curr.next;
//             }
//             node.next=curr;
//             prev.next=node;
//         }
//         this.size++;
//     }

//     removeAtBeginning(){
//         let curr=this.head;
//         this.head=this.head.next;
//         curr.next=null;
//         curr=null;
//         this.size--;
//     }

//     removeAtEnd(){
//         let curr=this.head;
//         let prev=null;
//         while(curr.next != null){
//             prev=curr;
//             curr=curr.next;
//         }
//         prev.next=null;
//         this.size--;
//     }

//     removeAtPosition(pos){
//         let curr=this.head;
//         let prev=null;
//         if(pos===0){
//             this.head=this.head.next;
//             curr.next=null;
//             curr=null;
//         }else{
//             let i=0;
//             while(i<pos && curr.next != null){
//                 i++;
//                 prev=curr;
//                 curr=curr.next;
//             }
//             prev.next=curr.next;
//             curr.next=null;
//         }
//         this.size--;
//     }
// }

// let l1=new LinkedList();
// l1.insertAtEnd("A");
// l1.insertAtEnd("B");
// l1.insertAtEnd("C");
// l1.insertAtEnd("D");
// l1.insertAtBeginning(1);
// l1.insertAtBeginning(2);
// l1.insertAtBeginning(3);
// l1.insertAtBeginning(4);
// l1.insertAtPosition("$",4);
// // l1.printList();
// l1.removeAtPosition(4);
// // l1.printList();
// l1.removeAtBeginning();
// // l1.printList();
// l1.removeAtEnd();
// l1.printList();

// --------------------------------X-----------------------------------------


// MAP

// let arr=[1,2,3,4,5];
// //map((ele,idx,array)=>{})
// let double=arr.map(ele=>ele*2);
// console.log(...double); // [2,4,6,8,10]

// FILTER

// let arr=[1,2,3,4,5,6,7,8,9,10];
// //filter((ele,idx,array)=>{})
// let even=arr.filter(ele=>ele%2===0);
// console.log(...even); // [2,4,6,8,10]

// REDUCE

// let arr=[1,2,3,4,5];
// // filter((accumulator,currVal,idx,array)=>{},initialVal)
// let sum=arr.reduce((result,item)=>result+item);
// console.log(sum); // 15


// ----------------------------------------------X---------------------------------------------------------------------
// neetcode :=>

// Contain Duplicates
// let arr=[1,2,3,4,1];
// let s=new Set(arr);
// if(s.size != arr.length){
//     console.log(true);
// }else{
//     console.log(false);
// }

// var containsDuplicate=(nums)=>{
//     nums.sort((a,b)=>a-b);
//     return hasDuplicate(nums);
// }

// const hasDuplicate=(nums)=>{
//     for(let curr=0;curr<nums.length-1;curr++){
//         const next=curr+1;
//         const isNextDuplicate=nums[curr]===nums[next];
//         if(isNextDuplicate)return true;
//     }
//     return false;
// }
// TC: O(nlogn) & SC: O(1)

// Valid Anagram
// var isAnagram=(s,t)=>{
//     const isEqual=s.length===t.length;
//     if(!isEqual)return false;
//     return reorder(s)===reorder(t);
// }

// const reorder=(str)=>str.split("").sort((a,b)=>a.localeCompare(b)).join("");

// console.log(isAnagram("anagram","nagaram"));
// TC: O(nlogn) & SC: O(n)

// Two Sum
// var twoSum=(nums,target,map=new Map())=>{
//     for(let idx=0;idx<nums.length;idx++){
//         const num=nums[idx];
//         const complement=(target-num);
//         const sumIdx=map.get(complement);
//         const isTarget=map.has(complement);
//         if(isTarget)return [idx,sumIdx];
//         map.set(num,idx);
//     }
//     return [-1,-1];
// }

// TC: O(N) & SC: O(N)

// Valid Parentheses

// var isValid=(s,stack=[])=>{
//     const map={
//         '}':'{',
//         ']':'[',
//         ')':'('
//     };
//     for(const char of s){
//         const isBracket=(char in map);
//         if(!isBracket){
//             stack.push(char);
//             continue;
//         }
//         const isEqual=(stack[stack.length-1]===map[char]);
//         if(isEqual){
//             stack.pop();
//             continue;
//         }
//         return false;
//     }
//     return (stack.length === 0);
// }

// TC: O(N) & SC: O(N)

