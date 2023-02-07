import clientPromise from "../../lib/mongodb"

export default async function hander(req, res){
    const db=await clientPromise
    const datb=db.db("provast")
    try{
        const response = await datb.collection("jobs").find().toArray()
        // const data = await res
        // console.log("in api",response);
        res.status(200).send({done:response})
    }
    catch(error){
        res.status(500).send({done:error})
    }
}