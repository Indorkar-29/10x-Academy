const express=require('express');
const router=express.Router();
const Class=require('../models/Class');
const bodyParser=require('body-parser');

router.use(express.json());
router.use(bodyParser.json());

router.post('/v1/myClass',async(req,res)=>{
    const {newClass,studentsCount}=req.body;
    try{
        let user=await Class.create(newClass,studentsCount);
        res.status(201).json({
           id:user._id
        });
    }catch(e){
        res.status(400).json({
            error:e.message
        });
    }
});

router.get('/v1/myClass',async(req,res)=>{
    try{
        const allClass=await Class.find();
        res.status(200).json({
            classes:allClass
        });
    }catch(e){
        res.status(400).json({
            error:e.message
        });
    }
});

router.get('/v1/myClass/:myClassId',async(req,res)=>{
    try{
        const singleClass=await Class.findOne({_id:req.params.myClassId});
        res.status(200).json({
            singleClass
        })
    }catch(e){
        res.status(404).json({
            error:"There is no class at that id"
        });
    }
});

router.delete("/v1/myClass/:myClassId",async(req,res)=>{
    try{
        await Class.deleteOne({_id:req.params.myClassId});
        res.status(204);
    }catch(e){
        res.status(404).json({
            error:"There is no task at that id"
        });
    }
});

module.exports=router;