import { serializeWithBufferAndIndex } from "bson"
import UserResume from "../../../model/UserResume"

export default async function handler(req,res){

    switch(req.method){
        case("POST"):
            var resumeData = await UserResume.findOne({"email":req.body.resume.email})
            if(resumeData){
                
                resumeData.resume.push(req.body.resume.resume)
                await resumeData.save()
            }
            else{
                var data = await UserResume.create(req.body.resume)
            }
            res.send({"done":true})
            break

        case("GET"):
            var resumeData = await UserResume.find({})
            res.json(resumeData)
            break

        case("PUT"):
            try{

            const email = req.body.details.personal.email
            var data = await UserResume.findOne({"email":email })
            console.log("data",data)
            const arr =[]

            data.resume.map((resume,index)=>{
                if(req.body.resumeId == index){
                    arr.push(req.body.details)
                }
                else{
                    arr.push(resume)
                }
            })
        
            var data = await UserResume.findOneAndUpdate({"email":email},{$set:{"resume":arr}})
            res.send({"done":true})
            break
            }
            catch(err){
                console.log("error",err);
                res.send({"error":err})

            }
        
        case("DELETE"):
            console.log("in delete");
            try{
                const email = req.body.body.email
                console.log("email",req.body.body.index)
                var data = await UserResume.findOne({"email":email })
                console.log("data",data)
                const arr =[]

                data.resume.map((resume,index)=>{
                    
                    if(req.body.body.index == index){
                        console.log("inside")
                    }
                    else{
                        arr.push(resume)
                    }
            })
        
            var data = await UserResume.findOneAndUpdate({"email":email},{$set:{"resume":arr}})
            res.send({"done":true})
            break
            }
            catch(err){
                console.log("error",err);
                res.send({"error":err})

            }
    }
}   