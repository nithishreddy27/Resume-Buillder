import { serializeWithBufferAndIndex } from "bson"
import UserResume from "../../../model/UserResume"

export default async function handler(req,res){

    switch(req.method){
        case("POST"):
        const resume = req.body.resume.resume
        console.log("req body",resume)
            // var resumeData = await UserResume.updateOne({"email":req.body.resume.email},{ $push: { resume: resume } })
            var resumeData = await UserResume.findOne({"email":req.body.resume.email})
            if(resumeData){
                const arr=[]
                resumeData.resume.map((item)=>{
                    arr.push(item)
                })
                if(resume.resume){
                    arr.push(resume.resume)
                }
                else{

                    arr.push(resume)
                }
                console.log("res",resume)
                console.log("item",arr)
                await UserResume.updateOne({"email":req.body.resume.email},{$set:{"resume":arr}})
                // await resumeData.resume.push(resume)
                // console.log("in",resumeData.resume)
                
                // await resumeData.save()
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
            // console.log("data",data)
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