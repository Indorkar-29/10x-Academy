const express = require("express");
const faker = require("faker");
const bodyParser=require('body-parser');
const multer=require('multer');


const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static("public"));          //MAKE STATIC FOLDER

//MULTER
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public");
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+ Date.now());
    }
});
const upload=multer({storage:storage});

const users = [];
for (let i =0; i < 10; i++){
    users.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    image:faker.image.image()
    })
}

app.get("/user", (req, res) => {
    res.json({
        name: req.query.name,
        email: req.query.email,
        age: req.query.age
    })
});

app.get("/", (req, res) => {
    res.render("user.ejs", {users});
})

app.get("/form",(req,res)=>{
    res.render("form.ejs");
});

// get --- whenever u want to fetch data from server 
// post --- whenever u want to create data in the database/server 
// put/patch ---  whenever u want to update data in the database/server 
// delete --- whenever u want to delete data in the database/server

app.post("/add/user",upload.single("image"),(req,res)=>{
    //console.log(req.file);
    //console.log(req.body);
    //write a code to insert data
    users.push({
        name:req.body.name,
        email:req.body.email,
        image:req.file.filename
    })
    res.redirect("/");

});

app.get("/remove/user",(req,res)=>{
    //console.log(req.body);
    //write a code to insert data
    users.shift();
    res.redirect("/");

});

app.get("*", (req, res) => {
    res.status(404).send("PAGE IS NOT FOUND");
})

app.listen(5000, () => console.log("Server is up at 5000"));