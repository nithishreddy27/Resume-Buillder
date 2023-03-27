import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        Id:{
            type:String
        },
        SepalLengthCm:{
            type:String
        },
        SepalWidthCm:{
            type:String
        },
        PetalLengthCm:{
            type:String
        },
        PetalWidthCm:{
            type:String
        },
        Species:{
            type:String
        },
        
    }
);

export default mongoose.models.iris || mongoose.model("iris", userSchema);