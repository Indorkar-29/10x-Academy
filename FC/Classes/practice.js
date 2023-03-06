// let fs = require("fs");
// let data = fs.readFileSync("./input.txt", "utf-8");
// let idx = 0;
// data = data.split("\n");
// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// // Inheritance with example:

// // Parent  Class
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// // Child Class 
// class Student extends Person{                   // inheriting parent class using the extends keyword
//     constructor(n,a,rollNumber){
//         super(n,a)                              // by using super keyword the parent class constructor is invoked
//         this.rollNumber=rollNumber;
//     }
// }

// // student1 is the instance of the Student class where the Student class is inherited to the Person class
// let student1=new Student("Tushar",22,18328);


// // By using inheritance we are able to access the properties of the Parent class which is the Person class in this case
// console.log(student1.name);         // Tushar
// console.log(student1.age);          // 22
// console.log(student1.rollNumber);   // 18328


// // Encapsulation with example:

// class AtmUser{
//     // By using # we make the data/attributes private
//     // we can use this private data inside this class only
//     #bankName
//     #cardNumber
//     #PIN
//     #balance
//     constructor(cardNumber,bankName,PIN,balance){
//         this.#cardNumber=cardNumber;
//         this.#bankName=bankName;
//         this.#PIN=PIN;
//         this.#balance=balance;
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }

// // user1 is instance of AtmUser class
// const user1= new AtmUser(111323212,"SBI",2323,24254636);

// // By using encapsulation we can hide the data/attributes of a class
// console.log(user1.balance);      // undefined
// console.log(user1.getBalance()); // 24254636