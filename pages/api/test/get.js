import dbConnect from "../../../lib/dbConnect"
import TestResume from "../../../model/Test"


export default async function handler(req,res){

    
    dbConnect()
    // console.log("inside get resume");
    try{
        const data = await TestResume.findOne({"email":req.body.email})
        res.send(data)
    }
    catch(error){
            res.send({"error":error})
    }
   
    
    // res.send({"body":req.body})
}


