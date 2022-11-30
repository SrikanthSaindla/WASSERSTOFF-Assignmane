 const express=require('express')
 const mongoose=require('mongoose')
 const app=express()
 const cors=require("cors")
const Name=require("./model")
 app.use(express.json())

 
 app.use(cors({
    origin:"*"
}))
 
 

mongoose.connect("mongodb+srv://srikanth:srikanth@cluster0.wcxhyq7.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>console.log('Db connected')
).catch(
    (e)=>console.log(e.message)
)

 


app.post("/add",async(req,res)=>{
  
    const{name,percent}=req.body;

try{
    const newData=new Name({name,percent})
    await newData.save()
    return res.send("data send")
}
catch(err){
console.log(err.message)
}
})
 
app.get("/getdata",async(req,res)=>{
try{
    const allData=await Name.find()
    return res.json(allData)

}catch(err){
console.log(err.message)
}
})

app.listen(5000,()=>console.log('sever is running '))