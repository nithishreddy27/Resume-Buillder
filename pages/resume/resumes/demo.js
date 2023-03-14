import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import ResumeContext from "../../../context/ResumeContext";
import { useUser } from '../../../lib/hooks';
import Sidebar from  "../../../components/SideBar"
export default function Demo() {
  const { details, setdetails} = useContext(ResumeContext);
  // console.log("details inside demo",details)
  const router = useRouter()
  const id= router.query.id
  const user = useUser()
  var change = false



  



  useEffect(()=>{
    if(id && user){
      // console.log("indide useeffect")
      getResume()
    }
  },[id , user])

  // useEffect(() => {
  //   if (user) {
  //     setdetails({
  //       ...details,
  //       personal: {
  //         ...details.personal,
  //         email: user.email,
  //         firstName: user.profile.firstName,
  //         lastName: user.profile.lastName,
  //       },
  //     });
  //     console.log("details in effect",details)
  //   }
  // },[user]);

  async function getResume(){
    // console.log("inside",id)
    const b={
      email:user.email,
      id:id
    }
   var data = await fetch("../../api/test/getRes",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(b)
    })
    var resume = await data.json()
    console.log("data after fetch",resume.resume)
    setdetails(resume.resume)
  }

  // console.log("details",details)
  return (
    <div className='flex'>
      <div>
      <Sidebar/>

      </div>
      {details && (
        <div>
           {/* {details.personal.objective.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] heading">
                              OBJECTIVE
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            <p className="text-sm">
                              {details.personal.objective}
                            </p>
                          </>
                )} */}
        </div>
      )}
    </div>
  )
}
