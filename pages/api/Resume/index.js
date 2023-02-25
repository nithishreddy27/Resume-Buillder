import React,{ useEffect } from "react"
import UserResume from "../../../model/UserResume"
import Register from "../../../model/Register"


export default async function updateResume(req,res){
    
    try{
        await dbConnect()
        if(req.method == "POST"){
            const data= await Resume.create(req.body)
            res.redirect("/resume")
        }
        if(req.method == "GET"){
        const email = req.body.email
        console.log("get res",email)
        if(email){
                // console.log('inside get',req.body)
                var data =await UserResume.findOne({"personal.email":`${email}`})
                // console.log("data",data);
                res.send({"resume":data})
            }
            else{
                var pro = {
                    personal: {
                        firstName:"FNAME",
                        lastName: "LANME",
                        email: "example@gmail.com",
                        role: "WEB DEVELPOER",
                        image: "",
                        dob: "1985-11-01",
                        phone: "9", 
                        objective:"",
                    },
                    social: [
                       
                    ],
                    work: [
                       
                    ],
                    education: [
                        
                    ],
                    awards: [
                      
                    ],
                    skills: [
                       
                    ],
                    languages: [
                       
                    ],
                    hobbies: [
                      
                    ],
                    certifications: [
                       
                    ],
                    projects: [
                    
                    ]
                }
                res.send({"resume":pro})
    }
        
        }
      
    res.send({"done":true})
    }
    catch(error){
        res.send({"error":error})
    }
}