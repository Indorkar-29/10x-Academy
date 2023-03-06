const express=require('express');
const faker=require("faker");

const app=express();

app.set("views","./views");
app.set("view engine","ejs");

// app.get('/',(req,res)=>{
//     res.send('Welcome to express server');
// });

// app.get('/user',(req,res)=>{
//     res.json({
//         name:"Tushar",
//         email:"tusharindorkar@gmail.com",
//         age:22
//     });
// });

// app.get("/",(req,res)=>{
//     res.render("user.ejs");
// });

// app.get("/",(req,res)=>{
//     res.render("user.ejs",{user:users[0]});
// });
app.get("/",(req,res)=>{
    res.render("user.ejs",{users});
});

const users=[];
// users.push({
//     name:"Tushar",
//     email:"tushar.indorkar.29@gmail.com",
//     age:22
// });
for(let i=0;i<10;i++){
    users.push({
        name:faker.name.findName(),
        email:faker.internet.email(),
        age:Math.ceil(Math.random()*100)
    });
}
console.log(users);

app.get('/user',(req,res)=>{
    //console.log(req.query);
    res.json({
        name:req.query.name,
        email:req.query.email,
        age:req.query.age
    });
});

app.get("*",(req,res)=>{
    res.status(404).send("Page Not Found");
});



app.listen(5000,()=>{console.log("Server is up at port 5000...");});