const http = require("http");
const qstring = require("querystring");
const fs=require('fs');

const server = http.createServer((req, res) => {
  
  // console.log(req.url.split("?"));
  // const qparams=req.url.split("?")[1];
  // const url=req.url.split("?")[0];
  // console.log(qparams);

  console.log(req.url);
  const qparams = qstring.parse(req.url.split("?")[1]);
  const url = req.url.split("?")[0];
  console.log(qparams);

  if (url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });               //text/plain
    
    fs.readFile('test.html',{encoding:"utf-8"},(err,data)=>{
      res.write(data);
      res.end()
    });

    //res.write(`<h1>Welcome to node home page lorem ipsum</h1>`);      //we can also pass entire html content by using template string.
    //res.end();        //It is required for ending the response
  } else if (url == "/aboutus") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Welcome to node about us page</h1>");
  } else if (url == "/user") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(
      JSON.stringify({
        name: qparams.name?qparams.name:"Tushar",       //"Tushar",
        email: qparams.email,                           //"tusharindorkar@gmail.com",
        age: qparams.age,                               //22
      })
    );
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("The server is up at, port 5000");
});
