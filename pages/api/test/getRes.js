import dbConnect from "../../../lib/dbConnect"
import TestResume from "../../../model/Test"


export default async function handler(req,res){

    
    dbConnect()
    // console.log("inside get resume",req.body);

    try{
            const data = await TestResume.findOne({"email":req.body.email})
            // console.log("data",data.resume)
            data.resume.map((item)=>{
                if(item._id == req.body.id){
                    // console.log("item",item)
                    res.send({"resume":item})
                }
            })
    
            // const data = await TestResume.findOne({"resume":req.body.id})
            // console.log("data",data)

    }
   
    



    // try{
    //     const data = await TestResume.findOne({"email":req.body.email})
    //     res.send(data)
    // }
    catch(error){
            res.send({"error":error})
    }
//    res.send({done:true})
    
}


