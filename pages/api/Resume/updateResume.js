import React,{ useEffect } from "react"
import UserResume from "../../../model/UserResume"
import Register from "../../../model/Register"


export default async function updateResume(req,res){

    // var data = await UserResume.findOneAndUpdate({"email":req.body.personal.email},{$set:req.body},{new:true})

    // console.log("req.body.personal.email",req.body.personal.email)
    try{
        const data=await UserResume.findOne({"personal.email":`${req.body.personal.email}`})
        // console.log(data)
        if(data){
            // console.log("found")
            // console.log("inside id  f");
        var up = await UserResume.findOneAndUpdate({"personal.email":`${req.body.personal.email}`},{$set:req.body},{new:true})
        // console.log("after",up)
    }
    else{
        // console.log("not found")
        await UserResume.create(req.body) 
    }
    
    // console.log("updated",d)
    res.send({"done":true})
}
catch(error){
    res.send({"error":error})
}
}