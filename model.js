const mongoose=require("mongoose")
const Name=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    percent:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("name",Name)