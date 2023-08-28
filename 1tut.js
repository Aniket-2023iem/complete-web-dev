//console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Css Transform</title>
      <style>
      *{
          margin: 0px;
          padding: 0px;
  
      }
          .container{
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: aquamarine;
          }
          .box{
              background-color: rgb(189, 97, 97);
              border: 3px solid orange;
              border-radius: 13px;
              height: 150px;
              width: 150px;
              display: flex;
              align-items: center;
              justify-content: center;  
              transition: all 0.5s ease-in-out;         
          }
          .box:hover{
              transform: rotate(36deg);
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="box">this is a box</div>
      </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});