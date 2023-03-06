const mongoose=require("mongoose");

const StudentSchema=new mongoose.Schema({
    name:String,
    studentId:Number,
    classId:{type:mongoose.Types.ObjectId,ref:"Class"}
});

const Student=mongoose.model('Student',StudentSchema);
module.exports=Student;