import mongoose from "mongoose";

const userResume = new mongoose.Schema({
    personal:{
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
    },
    social:[{
        network:{
            type:String,
        },
        username:{
            type:String
        }
    }]
})

export default mongoose.models.resumes || mongoose.model("resumes", userResume);
