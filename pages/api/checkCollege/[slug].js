import dbConnect from "../../../lib/dbConnect"
import Register from "../../../model/Register"

export default async function handler(req, res){
    const clgid=req.query
    console.log("inside slug",clgid)
    await dbConnect()
    try{
        
        var data = await Register.findOne({"college.paraphrase":clgid.slug})
        console.log("res",data)
        res.status(200).send({ name : data.college.name }) 
        
    }
    // const datb=db.db("provast")
    // console.log("connected",clgid)
    // const bool= await datb.collection("colleges").findOne({"name":clgid.slug})
    // console.log("in college",bool)
    // if(!bool){
    //     res.status(200).send({ done: bool }) 
    // }
    // else{   
    //     res.status(500).send({ done: bool })
    // }
    catch(error){
        res.status(500).send({ done: error })

    }
    

}