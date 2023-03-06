const fs=require('fs');

const http=require('http');

const server=http.createServer();

// server.on('request',(req,res)=>{
//     fs.readFile('file.txt',(err,data)=>{
//         res.end(data);
//     })
// })

// server.on('request',(req,res)=>{
//     fs.readFile('bigfile.txt',(err,data)=>{
//         res.end(data);
//     })
// })

// server.on('request',(req,res)=>{
//     const rstream=fs.createReadStream('bigfile.txt',{encoding:"utf-8"});

//     rstream.on('data',(chunk)=>{
//         res.write(chunk);
//     });
//     rstream.on('end',(err)=>{
//         console.log("All the data from file has been read");
//         res.end();
//     });
//     rstream.on('error',(err)=>{
//         console.log("There is some issue while reading the file");
//         res.end();
//     });
// });

// server.on('request',(req,res)=>{
//     const rstream=fs.createReadStream('bigfile.txt',{encoding:"utf-8"});

//     rstream.pipe(res);              //data & end event is handled by pipe

//     rstream.on('error',(err)=>{
//         res.end("There is some issue while reading the file");
//     });
// });

// const rstream=fs.createReadStream('bigfile.txt',{encoding:"utf-8"});
// const wstream=fs.createWriteStream('newfile.txt');
// rstream.pipe(wstream);
// wstream.on('finish',()=>{
//     console.log("file writing is finished");
// });

// const wstream=fs.createWriteStream('bigfile.txt');
// for(let i=0;i<1e6;i++){
//     wstream.write("I Love You! ");
// }
// wstream.end();

//server.listen(5000,()=>{console.log("Server is up at port 5000");});
