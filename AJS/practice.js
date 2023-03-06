// let str = "hello from 10xAcademy";
// String.prototype.capitalize = function() {
//     let letters = this.split("");
//     for (let i = 0; i < letters.length; i++) {
//         if (i == 0) {
//             letters[i] = letters[i].toUpperCase();
//         } else {
//             letters[i] = letters[i].toLowerCase();
//         }
//     }
//     return letters.join("");
// }
// console.log(str.capitalize());
// op:
// Hello from 10xacademy
// function Student(name, phone, email) {
//     this.name = name;
//     this.phone = phone;
//     this.email = email;
// }
// class Student {
//     constructor(name, phone, email) {
//         this.name = name;
//         this.phone = phone;
//         this.email = email;
//     }
// }
// Student.prototype.batch = "AJS";
// let adam = new Student("ADAM", 1234567890, "abc@xyz.com");
// console.log(adam.batch);

// function sortArr(arr) {
//     const even = arr.filter(ele => ele % 2 == 0).sort((a, b) => a - b);
//     const odd = arr.filter(ele => ele % 2 !== 0).sort((a, b) => b - a);
//     return odd.concat(even);
// }
// console.log(sortArr([0, 4, 5, 3, 7, 2, 1]))

// op:
// [
//     7, 5, 3, 1,
//     0, 2, 4
//   ]

// Notes:

// let str="hello from MAYANK";//Hello from 10xAcademy
// String.prototype.capitalize=function(){
//     let letters=this.split("");// ['h', 'e', 'L', 'L', 'o', '0']
// for(let i=0; i<letters.length; i++){
//     if(i==0){
//         letters[i]=letters[i].toUpperCase();
//     }
//     else {
//         letters[i]=letters[i].toLowerCase();
//     }
// }
// return letters.join("")// ARRAY to STRING  based on the seperator

// }

// console.log(str.capitalize())

// // function Student(name, phone, email){
// //     this.name=name;
// //     this.phone=phone;
// //     this.email=email;

// //     prototype-->THIS is available for all functions
// // }
// class Student{
//    constructor (name, phone, email){
//     this.name=name;
//     this.phone=phone;
//     this.email=email;
//    }
//     addBatch(batch){
//         this.batch=batch;
//     }
//     getDetails(){
//         console.log(`${this.name} || ${this.phone} || ${this.email} || ${this.batch}`);
//     }

// }

// class Topper extends Student {
//     constructor(name, phone, email,score){
//         super(name, phone, email);// It calls the parent class's constructor
//         this.score=score;
//     }
//     getTopperDetails(){
//         console.log(`${this.name} || ${this.phone} || ${this.email} || ${this.batch} || ${this.score}`);
//     }

// }


// Student.prototype.batch="AJS"

// let adam=new Student("ADAM", 1234567890, "abc@xyz.com");
// let Nagaraj=new Topper("Nagaraj", 223423423, "abc1@xyz.com", "95%");

// Student.prototype.batch="REACT"

// //console.log("JOHN CONTRUCTOR VALUE IS:-"+john.constructor);
// //OBJECT (ADAM and JOHN)-->
// //PROTOTYPE--> This is a special type of object and exist as a property on function

// //IN JAVASCRIPT EVERYTHING IS OBJECT


// var Ctor = function() { }; // constructor function
// Ctor.prototype.bar = 'bar';//PROTOTYPE PROPERTY
// var obj = new Ctor(); // object instantiation
// var obj1 = new Ctor(); // object instantiation
// obj1.wow='wow';
// // adds own property to instance
// obj.foo = 'foo';//INSTANCE PROPERTY

// for (var prop in obj) {
//     console.log("PROTOTYPE VALUES IS:-",prop); 
// }

// Topper.prototype.batch="HTML";
// Nagaraj.getTopperDetails();

// //Given an array A of positive integers. Your task is to sort them in such a way that the first part of the array contains odd numbers sorted in descending order, rest portion contains even numbers sorted in ascending order.

// /*
// "Sample Input
//  7
//  1 2 3 5 4 7 10


//  Sample Output
//  7 5 3 1 2 4 10




//  Sample Input
//  7
//  0 4 5 3 7 2 1


//  Sample Output
//  7 5 3 1 0 2 4"

// */

// function sortArr(arr){
// const even=arr.filter(ele=>ele%2==0);//4%2==0 ==[0]
// const odd=arr.filter(ele=>ele%2!==0).sort((a,b)=> b-a);
// return odd.concat(even)

// }
// console.log(sortArr([0,4,5,3,7,2,1]))

// let str = "hello from 10xAcademy";
// String.prototype.capitalize = function() {
//     let letters = this.split("");
//     for (let i = 0; i < letters.length; i++) {
//         if (i == 0) {
//             letters[i] = letters[i].toUpperCase();
//         }
//     }
//     return letters.join("");
// }
// console.log(str.capitalize());

// op:
// Hello from 10xAcademy

// class Student {
//     constructor(name, phone, email) {
//         this.name = name;
//         this.phone = phone;
//         this.email = email;

//     }
// }
// Student.prototype.batch = "AJS";
// let adam = new Student("ADAM", 1234567890, "abc@xyz.com")
// console.log(adam.batch);

// op:
// AJS

// var Ctor = function() {};
// Ctor.prototype.bar = "bar";
// var obj = new Ctor();
// var obj1 = new Ctor();
// obj1.wow = "wow";
// obj.foo = "foo";
// for (var prop in obj) {
//     console.log(prop);
// }

// op:
// foo
// bar