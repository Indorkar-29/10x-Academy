const oper=require("./oper")

console.log("Welcome to node JS");

// function A(){
//     console.log("I am in Method A");
//     B();
//     console.log("I am done with A");
// }
// function B(){
//     setTimeout(()=>{
//         console.log("I will execute after 2sec");
//     },2000);
//     C();
//     console.log("I am done with B");
// }
// function C(){
//     console.log("I am in Method C");
//     console.log("I am done with C");
//     setTimeout(()=>{
//         console.log("I will execute after 0sec");
//     },0);
// }
// A();

// console.log(oper);   //{ sum: [Function: add], minus: [Function: sub] }

// console.log(oper.sum(10,20));   //30
// console.log(oper.minus(20,10)); //10

console.log(oper.add(10,20));  //30
console.log(oper.sub(20,10));  //10