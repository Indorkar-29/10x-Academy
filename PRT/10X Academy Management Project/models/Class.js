const mongoose=require('mongoose');

const ClassSchema=new mongoose.Schema({
    newClass:String,
    studentsCount:Number
});

const Class=mongoose.model("Class",ClassSchema);
module.exports=Class;