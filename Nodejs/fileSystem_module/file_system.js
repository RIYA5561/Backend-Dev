// modules
// const file= require("fs") // inbuild module for custom modules we use "./" eg- ./fs
// const path= require("path")

// // const fs= require("http") //
// // http.createServer(function(req,res){
    
// // })

// const fs=require("fs");
// fs.writeFileSync("./test.txt", "This is Sync file content")

// //Sync

// const file=fs.readFileSync("test.txt","utf-8") // utf-8 is one of the method which is use to decode the file content
// console.log(file)


// // Async
// const asyncFile=fs.readFile("test.txt","utf-8", (err,data)=>{
//     if(err){
//         console.log("error in file reading", err);

//     }
//     else{
//         console.log("file reading successfull", data)
//     }
// })
// console.log(asyncFile)

// // whenever we write file its content gets overrite so we use append to add content without deleting the old data


const fs = require("fs");
// fs.copyFileSync("test.txt","dest.txt")
// fs.copyFile("test.txt","dest_async.txt",(err)=>{
//     if(err){
//         console.log("error in copying file", err)
//     }else{
//         console.log("file copied successfully")
//     }
// })

// 5. creating new directory
fs.mkdir("newDirectory",(err)=>{
    if(err) return;
    console.log("directory created successfully")
})
fs.mkdir("folders/folder1/folder2", { recursive:true},(err)=>{
    if(err){
        console.log("error in creating directory", err)
    }else{
        console.log("directory created successfully")
    }
})
   fs.readdir("newDirectory",(err,files)=>{
    if(err){
        console.log("error in reading directory", err)
    }else{
        console.log("directory read successfully", files)
    }})
    
    fs.rmdir("newDirectory",(err)=>{  // it is used to dlt empty directory
        if(err){
            console.log(err);return

        }
        else{
            console.log("directory removed successfully")
        }})

        fs.rm("newdirectory/index.js",(err)=>{ // rm is used to dlt the content of directory
            if(err){
                console.log("error in removing directory", err)
            }else{
                console.log("directory removed successfully")
            }})





