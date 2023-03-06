const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const Task=require('./models/Task');

app.use('/static',express.static('public'));

app.use(express.urlencoded({extended:true}));

// mongoose.set('useFindAndModify',false);

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true},()=>{
     console.log("Connected to DB");
    app.listen(process.env.PORT,()=>console.log("Server is Running at port ",process.env.PORT));
})

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    Task.find({},(err,tasks)=>{
        res.render('todo.ejs',{Task:tasks});
    });
});

app.post('/',async(req,res)=>{
    const newTask=new Task({content:req.body.content});
    try{
        await newTask.save();
        res.redirect("/");
    }catch(e){
        res.redirect('/');
    }
});

app.route('/edit/:id')
.get((req,res)=>{
    const id=req.params.id;
    Task.find({},(err,tasks)=>{
        res.render('editTodo.ejs',{Task:tasks,idTask:id});
    });
})
.post((req,res)=>{
    const id=req.params.id;
    Task.findByIdAndUpdate(id,{content:req.body.content},err=>{
        if(err) return res.send(500,err);
        res.redirect("/");
    });
});

app.route('/remove/:id').get((req,res)=>{
    const id=req.params.id;
    Task.findByIdAndRemove(id,err=>{
        if(err) return res.send(500,err);
        res.redirect("/");
    });
});

