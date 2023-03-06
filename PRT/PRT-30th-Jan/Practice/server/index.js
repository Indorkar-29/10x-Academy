const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./connectDB/DB');
const userRouter=require('./routes/user');
const todoRouter=require('./routes/todo');

dotenv.config();
app.use(cors());
app.use(express.json());

// routes
app.use('/',userRouter);
app.use('/',todoRouter);
app.get('*',(req,res)=>{
    res.status(404).send("404, PAGE NOT FOUND");
});

// server config
app.listen(process.env.PORT,async()=>{
    try{
        await connectDB();
        console.log("Server is Running at Port",process.env.PORT);
    }catch(e){
        console.log(e);
    }
});