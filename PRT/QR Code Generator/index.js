const express=require('express');
const app=express();
const qr=require('qrcode');
const bodyParser=require('body-parser');
const PORT=5000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render("index");
});

app.post('/scan',(req,res)=>{
    const url=req.body.url;
    if(url.length===0) res.send("Empty Data!");

    qr.toDataURL(url,(err,data)=>{
        if(err) res.send('Error Occured');
        res.render("scan",{data});
    });
});

app.listen(PORT,()=>{
    console.log("Server is Running at Port ",PORT);
});
