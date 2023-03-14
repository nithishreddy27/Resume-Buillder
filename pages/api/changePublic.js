import { serializeWithBufferAndIndex } from "bson"
import UserResume from "../../model/UserResume"

export default async function handler(req,res){

    switch(req.method){
        
        case("PUT"):
            // console.log("in api",req.body)
            const email = req.body.body.email
            console.log("ena",email)
            var data = await UserResume.findOne({"email":email })
            const arr =[]
            data.resume.map((resume,index)=>{

                

                if(req.body.body.index == index){
                    // console.log("data",resume)
                    const publicResume = true
                    // const r = {...resume, publicResume}
                    // const r = resume
                    
                    
                    let r = {...resume,publicResume:true}
                    // console.log("resume",r)

                    arr.push(r)
                }
                else{
                    arr.push(resume)
                }
            })
            // console.log("r in change",arr)
            // arr.map((item)=>{
            //     console.log(item)
            // })
            var data = await UserResume.findOneAndUpdate({"email":email},{$set:{"resume":arr}})
            console.log("data",data)
            res.send({"done":true})
            break

    }
}   