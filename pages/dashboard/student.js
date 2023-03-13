import React, { useState ,useContext ,useEffect} from 'react'
import Navbar from '../../components/Navbar';
import {useUser} from "../../lib/hooks"
import Link from "next/link"
import { useRouter } from 'next/router';
import ResumeContext from "../../context/ResumeContext";


export default function Student() {

  const user = useUser()
  const [position, setPosition] = useState("profile");
  const router = useRouter();


 

  function runMe(){
    router.push("/register/addStdDetails")
  }
  
  return (
    // <div>student  {JSON.stringify(user)}</div>
    <div className="h-screen w-screen"> 
    {!user && (
      <Navbar/>
    )}
    {user && (
      
      // console.log("user.profile.email",user.email)
      <Navbar/>
    )}
    
    <div className=" h-[64%] p-10">
      {console.log("user", user)}
      {user&& (
        <div className='mt-28'> 
          one
        </div>
      )}


      {user && !user.profile.firstName &&(
        <>
          {
            runMe()
          }
        </>
      ) }
      
    </div>
  </div>
  )
}
