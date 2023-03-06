//write your code here
const router=require("express").Router();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const User=require("./model/users");
router.use(bodyParser.json());

router.use("/",User);

router.get("/",(req,res)=>{
    res.send("Ok")
})

mongoose.connect();
router.listen(3000,()=>console.log("Server is running at port 3000"));
