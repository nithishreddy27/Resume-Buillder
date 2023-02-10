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
    paraphase:{
        type: String
        
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    gender:{
        type: String
    },
    rollnumber:{
        type: String
    },
    phone:{
        type: String
    },
    college:{
        type: String
    },
    designation:{
        type: String
    },
    collegewebsite:{
        type: String
    },
    placementemail:{
        type: String
    },
    placementphone:{
        type: String
    },
    principalemail:{
        type: String
    },
    principalphone:{
        type: String
    },
    school:{
        type:String
    },
    degree:{
        type:String
    },
    branch:{
        type:String
    },
    board:{
        type:String
    },
    edtype:{
        type:String
    },
    score:{
        type:String
    },
    grade:{
        type:String
    },
    duration:{
        type:String
    },
    

})
module.exports = mongoose.models.some || mongoose.model('some',userSchema)