import dbConnect from "../../../lib/dbConnect"
import Resume from "../../../model/Resume" 

// it is used to search all the available resumes
export default async function(req, res){
    await dbConnect()
    const data = await Resume.find({})
    // console.log("in api data",data)
    res.status(200).send(data)
} 