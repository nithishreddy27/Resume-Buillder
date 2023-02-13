import { addDetails} from "../../lib/user";

export default async function handler(req,res){
    console.log(" inside add api ",req.body);
    try{
      if(req.body.notificationMethod == "student"){
          var data=await addDetails(req.body)
          res.writeHead(302, { Location: '/register/addEducation' })
        }
        if(req.body.notificationMethod == "individual"){
          var data=await addDetails(req.body)
          res.writeHead(302, { Location: '/dashboard' })
        }
        if(req.body.notificationMethod == "college"){
          console.log("inside college ",req.body)
          var data=await addDetails(req.body)
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