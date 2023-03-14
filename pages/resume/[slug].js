import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { useUser } from '../../lib/hooks'
import ResumeContext from "../../context/ResumeContext";
import SideBar from "../../components/SideBar";
import Link from "next/link"
import Script from "next/script"
import dynamic from 'next/dynamic'

var DynamicHeader=dynamic(() => import('./demo'), {
  loading: () => <p>Loading...</p>,
})



export default function Slug(props) {
  const router = useRouter()
  const arr = props.done;
  const q = router.query
  const user = useUser()
  const { details, setdetails, setdemo, demo ,id,setid,setFirst,setindex,setemail } = useContext(ResumeContext);
  const [change, setChange] = useState(false)
  const [resumeId, setresumeId] = useState()

  // function changeResume(resumeId){
  //   console.log("inside",router.asPath);
  //   // const router = useRouter()
  //   // router.asPath(`/resume/${resumeId}`)
  
  // }


  async function runMe(queryId){
    console.log("query ",queryId)
    var resumeName
    const body = {resumeId:queryId}
    const data = await fetch("http://localhost:3000/api/testResume/getResume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const rname = await data.json()
      resumeName = rname.resumeName
      console.log("resname",resumeName);
    
    DynamicHeader = dynamic(() => import(`./resumes/${resumeName}`), {
      loading: () => <p>Loading...</p>,
    })
  }


  useEffect(()=>{
    if(resumeId){
      runMe(resumeId)
    }
  },[resumeId])



  useEffect(()=>{
    setFirst(true)
    runMe(q.slug)
  },[0])

  useEffect(()=>{
    setChange(true)
  },[details])

  useEffect(()=>{
    if(q){
      console.log("query is ",q.index)
      setindex(q.index)
    }
  },[q])


  useEffect(()=>{
    if(user && change && q){
      setemail(user.email)
      setid(q.slug)
      console.log("user",user)
      setdetails({
        ...details,
        id:q.slug,
        personal: {
          ...details.personal,
          email: user.email,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
          phone:user.phone.value
        },
      });
    }

  },[user,change,q])
 


  return (
    <div>

      {user && details && (
        <div className='flex w-[100%]'>
            <div className='w-[80%]'>

            <DynamicHeader />
            </div>

            <div className='p-5'>
              {arr.map((resume)=>(
                <div key={resume._id}>
                  {/* {console.log(resume)} */}
                    {
                    
                    <>
                    <button onClick={()=>{
                                        router.push({pathname:`/resume/${resume._id}`,query:{index:q.index}})
                                        
                                        setresumeId(resume._id)
                                     
                                        }}  className="m-2">{resume.ResumeName}</button> 
                                <img src={`${resume.ResumeImage}`}  alt="" width={50} height={50} className="cursor-pointer"
                                
                                      onClick={()=>{
                                        router.push({pathname:`/resume/${resume._id}`,query:{index:q.index}})
                                        
                                        setresumeId(resume._id)
                                     
                                        }}/>     
                                {/* <Image></Image> */}
                      </>
                    }


                    
                </div> 
              ))}
            </div>
        </div> 
      
      )}

    </div>
  )
}



export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/Resume/searchResume");
  // console.log("resume",res)
  const data = await res.json();
  return {
    props: {
      done: data,
    },
  };
};

