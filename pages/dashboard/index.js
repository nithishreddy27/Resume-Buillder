import { useRouter } from 'next/router'
import React from 'react'
import { useUser } from '../../lib/hooks'

export default function index() {
    const user = useUser()
    const router = useRouter()
    console.log("in dashboard",user)
    if(user){
        if(user.notificationMethod == "individual"){
            router.push("/dashboard/individual")
        }
        else if(user.notificationMethod == "student"){
            router.push("/dashboard/student")
            
        }
        else if(user.notificationMethod == "college"){
            router.push("/dashboard/college")   
        }
        else if(user.notificationMethod == "corporate"){
            router.push("/dashboard/individual")
        }
    }
  return (
    <div>
        {/* {user && } */}
    </div>

  )
}
