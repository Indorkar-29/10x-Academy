const fs=require('fs');
const os=require('os');
const path=require('path');

// CRUD -- CREATE READ UPDATE DELETE

// CREATE A FILE

// ASYNC:-

// fs.writeFile("file.txt","This is my first file in node js.",(err)=>{
//     console.log(err);
// });

// //Write will always create a file(overwrite if already existing file)

// fs.writeFile("file.js","console.log('First File')",(err)=>{
//     console.log(err);
// });

// console.log("ASYNC TEST");               //Async TEST

// SYNC:-

// fs.writeFileSync("file2.txt","This is  sync file");

// console.log("SYNC TEST");                   //SYNC TEST


// READ A FILE

// fs.readFile("file.txt",{encoding: "utf-8"} ,(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);     //data.toString
//     }
// });

// UPDATE A FILE

// fs.appendFile("file.txt","\nI am adding more content.",(err)=>{
//     console.log(err);
// });

// //If file is there then it will append to that file(It does not over write).
// //If file does not exist then it will create new file and add tha data to that file.

// DELETE A FILE

// fs.unlink("file.js",(err)=>{
//     console.log(err);
// });

// RENAME A FILE

// fs.rename("file2.txt","newFile.txt",(err)=>{
//     console.log(err);
// })

// OS AND PATH

// OS

// // WINDOWS
// fs.readFile("C:\\Users\\ASUS\\OneDrive\\Desktop\\10x\\NODE JS\\Practice\\lec-3\\http.js",{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// });
// // LINUX or MAC
// fs.readFile("C://Users//ASUS//OneDrive//Desktop//10x//NODE JS//Practice//lec-3//http.js",{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// });

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.platform());

// if(os.platform()=="win32"){
//     fs.readFile("C:\\Users\\ASUS\\OneDrive\\Desktop\\10x\\NODE JS\\Practice\\lec-3\\http.js",{encoding:"utf-8"},(err,data)=>{
//         console.log(data);
//     });
// }else{
//     fs.readFile("C://Users//ASUS//OneDrive//Desktop//10x//NODE JS//Practice//lec-3//http.js",{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// });
// }

// PATH

// console.log(__dirname);  //C:\Users\ASUS\OneDrive\Desktop\10x\NODE JS\Practice\lec-4

// fs.readFile(path.join(__dirname,"file.txt"),{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// });

// OUTSIDE:-

// fs.readFile(path.join(__dirname,"..","lec-3","http.js"),{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// });

// INSIDE:-

// fs.readFile(path.join(__dirname,"test","file2.txt"),{encoding:"utf-8"},(err,data)=>{
//     console.log(data);
// });

// MOVE A FILE

// fs.rename(path.join(__dirname,"fs.js"),path.join(__dirname,"test","fs.js"),(err)=>{
//     console.log(err);
// });

// DELETE ALL THE FILES FROM TEST FOLDER:-

// fs.readdir(path.join(__dirname,"test"),(err,files)=>{
//     if(!err){
//         for(let i=0;i<files.length;i++){
//             fs.unlink(path.join(__dirname,"test",files[i]),(err)=>{
//                 console.log(err);
//             });
//         }
//     }  
// });