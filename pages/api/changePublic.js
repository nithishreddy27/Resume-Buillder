import { serializeWithBufferAndIndex } from "bson"
import UserResume from "../../model/UserResume"

export default async function handler(req,res){
    
    var email
    switch(req.method){
        case("POST"):
            console.log("inside post")
            email = req.body.email
            var data = await UserResume.findOne({"email":email ,resume:{$eleMatch:{"publicResume":"false"}}})
            console.log("data",data)
            break
        case("PUT"):
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