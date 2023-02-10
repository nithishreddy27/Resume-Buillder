import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    id:{
        type:String
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    createdAt:{
        type:Date
    },
    hash:{
        type:String
    },
    salt:{
        type: String
    },
})
module.exports = mongoose.models.individual || mongoose.model('individual',userSchema)