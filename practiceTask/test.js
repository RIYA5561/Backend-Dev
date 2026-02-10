const http = require("http");
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/plain");
    res.end("Hello, World!");
});

const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});
app.get("/students/search",(req,res)=>{
});
app.get("/students/:id",(req,res)=>{
    const id = req.params.id;
    res.send(`Student ID:${id}`);
});

app.get("/students",(req,res)=>{
    res.send("List of students");
});

