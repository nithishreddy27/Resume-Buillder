import Test from "../../../model/Test"
import UserResume from "../../../model/Test"


export default async function handler(req,res){
    // console.log("in update",req.body)

    var ObjectID = require('mongodb').ObjectId;
    // console.log("id",req.body.id);
    
    // await Test.findOneAndUpdate({"email":"ruby@gmail.com","resume._id":req.body._id},{$set:{"resume.$":req.body}},{new:true})
//    var data = await Test.findOne({"email":"ruby@gmail.com","resume._id":req.body._id})
    // console.log()
    // var data = await Test.findOne({"email":"ruby@gmail.com"})

    // const data = await Test.findByIdAndUpdate({_id:ObjectID("63fecf7d91bc66a428e130bf")},{$set:req.body},{new:true})

    const resume = await Test.findOne({email:"swa@gmail.com"})
    // console.log("resume",resume)
    // var ind
    const arr=[]
    resume.resume.map((item,index)=>{
        if(item._id == req.body.id){
            // ind=index
            // console.log("inside")
            arr.push(req.body.details)
        }
        else{
            arr.push(item)
        }
    })
    // const 
    // console.log("index",arr)
    // console.log("data in update",resume.resume[ind])
    
    
    const body={
        email:"swa@gmail.com",
        resume:arr
    }
    // console.log("body",body)
    // var data = await Test.updateOne({"email":"r@gmail.com"},body)
    var data =await Test.findOneAndUpdate({"email":"swa@gmail.com"},{$set:body},{new:true})
    // var data = await Test.findOneAndUpdate({"email":"check@gmail.com"},{ $set: { [`resume.${ind}`] : req.body.details } })



    // console.log("data",data)
    
    // const arr= [] 

    res.send({"done":true})

}