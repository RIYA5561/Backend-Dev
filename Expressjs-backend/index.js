const express=require('express')
const app=express()
const PORT=8000;
app.use(express.json());
const student=[
 {id: 1, name:"anushka", branch:"cse"},
 {id: 2, name:"komal", branch:"ece"},
 {id: 3, name:"teesha", branch:"bca"}]

 //ROUTE TO HOMEPAGE
app.get("/",(req,res)=>{
    res.send("welcome to home page");
})

//ROUTE TO STUDENT PAGE WHERE STUDENT CAN BE SEARCHED USING THEIR BRANCH
app.get("/student",(req,res)=>{
    const branch =req.query.branch;
    if(!branch){
        return res.json(student)
    }
    const foundStudents=student.filter(
        (s)=>s.branch===branch
    );
    res.json(foundStudents)
}
)

// STUDENT CAN BE SEARCHED USING THEIR IDS
app.get("/student/:id",(req,res)=>{
    const id=req.params.id;
    const foundStudent=student.find(
        (s)=>s.id==id
    );
    if(!foundStudent){
        return res.status(404).send("student not found");
    }
    res.json(foundStudent);
});

app.get("student/search",(req,res)=>{
    const searchQuery=req.query;
    console.log(req.query);

})

// ADDING NEW STUDENT
app.post("/student/register", (req, res) => {
  const data = req.body;

  if (!data || !data.name || !data.branch|| !data.id) {
    return res.status(400).send("Please provide student details");
  }
  

  const validID=student.find( student=>student.id===data.id)
  if(validID){
    return res.status(409).send("id already exists")
  }

 
  student.push(data);
  res.status(201).json({
    message: "Student registered successfully",
    student: data
  });
});

//UPDATE THE STUDENT DETAIL
app.put("/student/:id",(req,res)=>{
    const id= req.params.id;
    const detail=req.body;

const index=student.findIndex()


res.status(201).json({
    message: "Student details updated successfully",
    student: student[index]
  });

})

app.listen(PORT,()=>{
    console.log("Server is listening on port: 8000");
})
