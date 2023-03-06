const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require("./connectDB/db");
const classRouter=require("./routes/class");
const studentRouter=require('./routes/students');

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/',classRouter);
app.use('/',studentRouter);

app.listen(process.env.PORT,async()=>{
    try{
        await connectDB();
        console.log("Server is running at port ",process.env.PORT);
    }catch(e){
        console.log(e);
    }
});