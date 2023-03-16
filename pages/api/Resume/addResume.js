import dbConnect from "../../../lib/dbConnect"
import Resume from "../../../model/Resume"

export default async function handler(req, res){

    await dbConnect()

    switch(req.method){

        case("POST"):
            const data= await Resume.create(req.body)
        case("PUT"):
            console.log("in put");
    }   
    res.redirect("/resume")

}