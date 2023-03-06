const read = require("readline");

//define from where you will take input and show your output
const rl = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Plz tell your name ",(name)=>{
//     console.log("Hello",name);
//     rl.question("How are you? ",(greets)=>{
//         console.log("I am",greets);
//         rl.close();             //for closing the Terminal
//     })
// });

const numArr = [];
rl.question("Plz enter the size of an array: ", async (size) => {
  for (let i = 0; i < size; i++) {
    await new Promise((res) => {
      rl.question("Plz enter the numbers: ", (num) => {
        numArr.push(parseInt(num));
        res();
      });
    });
  }
  console.log(...numArr);
  rl.close();
});
