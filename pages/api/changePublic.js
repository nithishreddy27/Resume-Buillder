import { serializeWithBufferAndIndex } from "bson"
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants"
import UserResume from "../../model/UserResume"

export default async function handler(req,res){
    
    var email
    switch(req.method){
        case("POST"): 
            email = req.body.email
            console.log("inside post",email)
                // var data = await UserResume.findOne({"email":email ,resume:{$eleMatch:{"publicResume":"false"}}})
            var data = await UserResume.findOne({"email":email})
            data.resume.map((resume)=>{
                if(resume.publicResume){
                    res.send({"resume":resume})
                }
            })
            console.log("out");
            res.send({"no":true})
            break
        case("PUT"):
            console.log("inside put")
            email = req.body.body.email
            const resumeId = req.body.body.resumeId
            var data = await UserResume.updateOne(
                {"email":email },
                { $set: { "resume.$[elem].publicResume": "true" } },
                { arrayFilters: [ { "elem._id": resumeId } ] }
             )
                
            var d = await UserResume.updateOne(
                {"email":email },
                { $set: { "resume.$[elem].publicResume": "false" } },
                { arrayFilters: [ { "elem._id": { $ne: resumeId } } ] }
             )
            console.log("ata",d);
            res.send({"done":true})
            break

    }
}   