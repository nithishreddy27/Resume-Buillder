import dbConnect from "../../../lib/dbConnect"

export default async function handler(req, res){
    const clgid=req.query
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


    await dbConnect()
    

}