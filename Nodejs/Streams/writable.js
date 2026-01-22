
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
const inputStream=fs.createReadStream(inputFilePath,"utf-8");
inputStream.on("data",(chunk)=>{
    console.log("Received chunk:",chunk);
})

//writeStream.pipe(outputStream);
