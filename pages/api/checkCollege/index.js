// import { useRouter } from "next/router";
import clientPromise from "../../../lib/mongodb";
// import clientPromise from "../../../lib/mongodb"


export default async function handler(req, res){
    const db=await clientPromise
    const datb=db.db("provast")
    console.log("conn")

    // await datb.collection("details").findOneAndUpdate({"username":"some@g.c"},{$set:JSON.parse(JSON.stringify(req.body))})
    console.log("found")
    // const data=await datb.collection("details").find({}).toArray()
    res.json({"done":data})
}