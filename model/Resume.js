import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        ResumeName:{
            type:String
        },
        ResumeType:{
            type:String
        },
        ResumeDesign:{
            type:String
        },
        ResumeImage:{
            type:String   
        }
    }
);

export default mongoose.models.resumes || mongoose.model("resumes", userSchema);