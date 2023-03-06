const express=require('express');
const router=express.Router();
const Student=require("../models/Students");

const bodyParser=require('body-parser');

router.use(express.json());
router.use(bodyParser.json());

router.post('/v1/myClass/:myClassId/students',async(req,res)=>{
    try{
        const {name,studentId}=req.body;
        const newStudent=await Student.create({name,studentId,classId:req.params.myClassId});
        res.status(201).json({
            id:newStudent.classId
        })
    }catch(e){
        res.status(400).json({
            error:e.message
        });
    }
});

router.get('/v1/myClass/:myClassId/students',async(req,res)=>{
    try{
        const allStudents=await Student.find({classId:req.params.id});
        res.status(200).json({
            allStudents
        });

    }catch(e){
        res.status(404).json({
            error:"There are no students at this class"
        });
    }
});

router.get('/v1/myClass/:myClassId/students/:studentId',async(req,res)=>{
    try{
        const singleStudent=await Student.findOne({classId:req.params.myClassId,_id:req.params.studentId});
        res.status(200).json({
            singleStudent
        })
    }catch(e){
        res.status(404).json({
            error:"There are no student of that id"
        });
    }
});

router.put('/v1/myClass/:myClassId/students/:studentId',async(req,res)=>{
    try{
        const updateStudent=await Student.findOneAndUpdate({classId:req.params.myClassId,_id:req.params.studentId},req.body);
        res.status(204).json({
            updateStudent
        })
    }catch(e){
        res.status(404).json({
            error:e.message
        });
    }
});

router.delete('/v1/myClass/:myClassId/students/:studentId',async(req,res)=>{
    try{
        await Student.findOneAndDelete({_id:req.params.studentId,classId:req.params.myClassId});
        res.status(204);
    }catch(e){
        res.status(404).json({
            error:"There is no task at that ID"
        });
    }
});

module.exports=router;