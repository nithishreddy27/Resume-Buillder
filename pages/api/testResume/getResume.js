import Resume from "../../../model/Resume"

export default async function handler(req,res){

    switch(req.method){
        case("POST"):
            console.log('b',req.body.resumeId);
            const data = await Resume.findById(req.body.resumeId)
            console.log("data",data)
            res.send({"resumeName":data.ResumeName})
            break

    }
}   