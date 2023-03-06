const read=require("readline");

const rl=read.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ",(userName)=>{
    console.log("Hello",userName);
    rl.close();
});

// Please enter your name: Tushar
// Hello Tushar