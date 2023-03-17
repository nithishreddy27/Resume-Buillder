import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useUser } from "../../lib/hooks";
import ResumeContext from "../../context/ResumeContext";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import {GrClose} from "react-icons/gr"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { TbReplace } from "react-icons/tb"

var DynamicHeader = dynamic(() => import("./demo"), {
  loading: () => <p>Loading...</p>,
});

export default function Slug(props) {
  const router = useRouter();
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
    });
  }

  useEffect(() => {
    if (resumeId) {
      runMe(resumeId);
    }
  }, [resumeId]);



  useEffect(()=>{
    setFirst(true)
    runMe(q.slug)
  },[0])

  useEffect(() => {
    setChange(true);
  }, [details]);

  useEffect(() => {
    if (q) {
      console.log("query is ", q.index);
      setindex(q.index);
    }
  }, [q]);


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
  }, [user, change, q]);

  const [res, setres] = useState(false);
  return (
    <div>
      {user && details && (
        <div className="flex w-[100%]">
          <div className="w-full">
            {res==false && (
            
            <button className="border lg:absolute fixed bg-slate-700 z-40 border-white rounded-md p-2  lg:left-[40%] right-[10%] lg:right-[57.4%] top-4 lg:top-5  mb-5 text-white"
            onClick={()=>{setres(!res)}}>
              <TbReplace></TbReplace>
            </button>
            )}
            <div className="relative">
              <DynamicHeader />
            </div>
          </div>
          {res == true && (
          <div className="h-screen fixed lg:static top-[200px] w-full overflow-auto bg-gradient-to-b from-slate-700 to-slate-800 border-l border-white lg:w-[30%]">
            <div className="py-5 px-6 text-xl flex gap-[100px]  w-[100%] fixed bg-slate-700 border border-white lg:border-b lg:border-red-100 text-white">
              
              <div>All Templates</div>
              <button
              className="relative right-8"
              onClick={()=>{
                setres(false)
              }}>
                  <AiOutlineCloseCircle className="text-white text-2xl"></AiOutlineCloseCircle>
                  
              </button>
              </div>
             
              
                   

            <div className='justify-center px-10 py-5 mt-[60px] grid grid-cols-2 gap-5 '>
              {arr.map((resume)=>(
                <div key={resume._id}>
                  {/* {console.log(resume)} */}
                    {
                    
                    <>
                    <div
                      className="cursor-pointer"
                    onClick={()=>{
                      // <Link href={`/resume/${resume._id}?index=${q.index}`}>{resume.ResumeName}</Link>
                                        router.push({pathname:`/resume/${resume._id}`,query:{index:q.index}})
                                        
                                        setresumeId(resume._id)
                                        
                                        }} >
                    <button  className="m-2 text-white flex justify-center">{resume.ResumeName}</button> 
                                <img src={`${resume.ResumeImage}`} alt="" width={150} height={200} 
                                className=""/>     
                                {/* <Image></Image> */}
                                </div>
                      </>
                    }
                  </div>
                ))}
              </div>
            
          </div>
          )}
        </div>
      )}
    </div>
  );
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
