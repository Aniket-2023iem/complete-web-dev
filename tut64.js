const fs = require("fs");
let text= fs.readFileSync("ok.txt" ,"utf-8");
text = text.replace("oi", "dips");
console.log("welcome boys ")
console.log(text);
console.log("creating a new file..");
fs.writeFileSync("dips.txt", text);