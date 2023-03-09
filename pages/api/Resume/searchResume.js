import dbConnect from "../../../lib/dbConnect"
import Resume from "../../../model/Resume"


export default async function(req, res){
    await dbConnect()
    const data = await Resume.find({})
    // console.log("search",data)
    res.status(200).send(data)
} 