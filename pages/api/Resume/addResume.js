import dbConnect from "../../../lib/dbConnect"
import Resume from "../../../model/Resume"

export default async function handler(req, res){

    await dbConnect()
    const data= await Resume.create(req.body)
    // console.log("daya",data);
    res.send({"ok":req.body})

}