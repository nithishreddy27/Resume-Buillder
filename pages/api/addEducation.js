import { addDetails } from "../../lib/user";
import { removeTokenCookie } from '../../lib/auth-cookies'



export default async function handler(req,res){
    try{
        var data=await addDetails(req.body)
        removeTokenCookie(res)
        res.writeHead(302, { Location: '/login' })
        res.end()
    } 
  catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }    
}