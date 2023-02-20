import dbConnect from "../../lib/dbConnect"

export default async function handler(req,res){

    await dbConnect()
    console.log("connected")
    res.json("connnected")
}