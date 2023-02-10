import { addDetails } from "../../lib/user";



export default async function handler(req,res){
    console.log("inside add api ",req.body);
    try{
        var data=await addDetails(req.body)
        if(req.body.notificationMethod == "student"){
          res.writeHead(302, { Location: '/register/addEducation' })
        }
        if(req.body.notificationMethod == "individual"){
          res.writeHead(302, { Location: '/student/profile' })
        }
        if(req.body.notificationMethod == "college"){
          res.writeHead(302, { Location: '/register/waiting' })
        }
        if(req.body.notificationMethod == "corporate"){
          res.writeHead(302, { Location: '/register/waiting' })
        }

        res.end()
    } 
  catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }    
}