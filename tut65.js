//synchronous: line by line execuetion
//asynchronous: line by line is not gaurenteeed , call backs will fire
const fs = require("fs");
let text= fs.readFile("ok.txt" ,"utf-8", (err ,data) =>{
    console.log(err , data);
}) ;
console.log("this is a message")