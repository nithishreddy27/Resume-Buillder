import { useRouter } from 'next/router'
import React from 'react'
import { useUser } from '../../lib/hooks'

export default function Index() {
    const user =  useUser()
    const router = useRouter()
    // console.log("in dashboard",user)
    if(user){
        router.push(`/profile/${user.notificationMethod}`)        
    }
  return (
    <div>
        {/* {user && } */}
    </div>

  )
}
