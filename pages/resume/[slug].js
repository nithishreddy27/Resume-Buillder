import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useUser } from "../../lib/hooks";
import ResumeContext from "../../context/ResumeContext";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";


var DynamicHeader = dynamic(() => import("./demo"), {
  loading: () => <p>Loading...</p>,
});

export default function Slug(props) {
  const router = useRouter();
  const arr = props.done;
  const q = router.query;
  const user = useUser();
  const {
    details,
    setdetails,
    setdemo,
    demo,
    id,
    setid,
    setFirst,
    setindex,
    setemail,
  } = useContext(ResumeContext);
  const [change, setChange] = useState(false);
  const [see, setsee] = useState();
  const [resumeId, setresumeId] = useState();

  function changeResume(resumeId) {
    console.log("inside", router.asPath);
    // const router = useRouter()
    // router.asPath(`/resume/${resumeId}`)
  }

  function runMe(queryId) {
    console.log("query ", queryId);
    var resumeName;
    if (queryId == "63edd774ee9b8719a9a401aa") {
      resumeName = "Blue";
    } else if (queryId == "63edd6ddee9b8719a9a401a1") {
      resumeName = "Amsterdam";
    } else if (queryId == "63edd716ee9b8719a9a401a5") {
      resumeName = "Berlin";
    } else if (queryId == "63edd7c2ee9b8719a9a401ae") {
      resumeName = "Casual";
    } else if (queryId == "63edd815ee9b8719a9a401b2") {
      resumeName = "Chrono";
    } else if (queryId == "63edd873ee9b8719a9a401b7") {
      resumeName = "Classic";
    } else if (queryId == "63edd8b3ee9b8719a9a401bd") {
      resumeName = "Dublin";
    } else if (queryId == "63edd8e6ee9b8719a9a401c1") {
      resumeName = "Dynamic";
    } else if (queryId == "63edd92aee9b8719a9a401c5") {
      resumeName = "Elegant";
    } else if (queryId == "63edd957ee9b8719a9a401c9") {
      resumeName = "Grid";
    } else if (queryId == "63edd9b8ee9b8719a9a401cd") {
      resumeName = "Assymetric";
    } else if (queryId == "63edd9fcee9b8719a9a401d1") {
      resumeName = "Square";
    } else if (queryId == "63edda33ee9b8719a9a401d5") {
      resumeName = "Symetric";
    } else if (queryId == "63edda9dee9b8719a9a401da") {
      resumeName = "Madrid";
    } else if (queryId == "63eddad0ee9b8719a9a401de") {
      resumeName = "Modern";
    } else if (queryId == "63eddb38ee9b8719a9a401e2") {
      resumeName = "Professional";
    } else if (queryId == "63eddb75ee9b8719a9a401e6") {
      resumeName = "Retro";
    } else if (queryId == "63eddba5ee9b8719a9a401eb") {
      resumeName = "Ruby";
    } else if (queryId == "63eddbe9ee9b8719a9a401f0") {
      resumeName = "Stylish";
    } else if (queryId == "63eddc50ee9b8719a9a401fa") {
      resumeName = "Tokyo";
    } else if (queryId == "63eddc85ee9b8719a9a401ff") {
      resumeName = "Vertical";
    }
    DynamicHeader = dynamic(() => import(`./creative/${resumeName}`), {
      loading: () => <p>Loading...</p>,
    });
  }

  useEffect(() => {
    if (resumeId) {
      runMe(resumeId);
    }
  }, [resumeId]);

  useEffect(() => {
    setFirst(true);
    runMe(q.slug);
    // setresumeId()
  }, [0]);

  useEffect(() => {
    setChange(true);
  }, [details]);

  useEffect(() => {
    if (q) {
      console.log("query is ", q.index);
      setindex(q.index);
    }
  }, [q]);

  useEffect(() => {
    if (user && change && q) {
      setemail(user.email);
      setid(q.slug);
      setdetails({
        ...details,
        personal: {
          ...details.personal,
          email: user.email,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
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
            
            <button className="border lg:absolute absolute bg-slate-700 border-white rounded-md p-2 z-20 lg:right-[300px] right-5 top-[92px] lg:top-5  mb-5 text-white"
            onClick={()=>{setres(!res)}}>
              CHANGE
            </button>
            )}
            <div className="relative">
              <DynamicHeader />
            </div>
          </div>
          {res == true && (
          <div className="h-screen fixed lg:static top-[100px] w-full overflow-auto bg-gradient-to-b from-slate-700 to-slate-800 border border-white lg:w-[30%]">
            <div className="py-5 px-6 text-xl flex gap-[100px]  w-[100%] fixed bg-slate-700 border border-red-100 text-white">
              
              <div>All Templates</div>
              <button onClick={()=>{
                setres(false)
              }}>
                  close
              </button>
              </div>
             
              
                   

            <div className='justify-center px-10 py-5 mt-[60px] grid grid-cols-2 gap-5 '>
              {arr.map((resume)=>(
                <div>
                  {/* {console.log(resume)} */}
                    {
                    
                    <>
                    <div
                      className="cursor-pointer"
                    onClick={()=>{
                      // <Link href={`/resume/${resume._id}?index=${q.index}`}>{resume.ResumeName}</Link>
                                        router.push({pathname:`/resume/${resume._id}`,query:{index:q.index}})
                                        
                                        setresumeId(resume._id)
                                        // router.reload()
                                        // changeResume(resume._id)
                                        // console.log("inside click")
                                        // router.replace(`/resume/${resume._id}?index=${q.index}`)
                                        // router.replace({
                                        //   pathname: `/resume/${resume._id}`,
                                        //   query: { index:q.index }
                                        // }, 
                                        // )
                                        // router.reload(window.location.pathname)
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
  console.log("resume", res);
  const data = await res.json();
  return {
    props: {
      done: data,
    },
  };
};
