import React,{useState, useContext, useEffect} from 'react'
import {useUser} from "../../lib/hooks"
import ResumeContext from "../../context/ResumeContext";
import Link from  "next/link"
import { useRouter } from 'next/router';

export default function Testing(props) {

    const { details, setdetails } = useContext(ResumeContext);
    const user = useUser()
    // console.log("props",props.done);
    const resume = props.resumes
    // console.log(resume);

    // const [form, setForm] = useState({email:"",role:""})
    const router = useRouter()

    
    async function addResume(event){
      // event.preventDefault()
      const resume={email:document.getElementById("email").value,role:document.getElementById("role").value}
      
      // console.log("inside addresume",resume)

        var data =await fetch("../api/test/add",{
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(resume)
        })
        var response = await data.json()
        // console.log("res",response)
        const r={
          email:user.email,
          resume:response.data
        }
        setdetails(r)

        router.push({pathname:"/resume/testing"})
        // router.push({pathname:"creative/demo",query:{id:response.data.id}})


    }



    // useEffect(()=>{
    //   // console.log("details in testing",details)
    // },[details])
  return (
    <div>

            {/* create */}

            <h1>Create</h1>
            {user && (
                <>
                <div >
                    <input type="text" name="email" id="email" value={user.email} onChange={()=>{console.log("email");}}/>
                    <label htmlFor="role" >Role</label>
                    <input type="text" name="role" id="role" className='border'/>
                    <button onClick={addResume}>submit</button>
                </div>


                 {/* {
                    resume.map((data) => (
                        <>
                        {data.email == user.email && (
                          <div>
                                {data.resume.map((resume)=>(
                                    <div key={resume._id}>
                                        <Link href={`/resume/${resume._id}`}>{resume.role}</Link>
                                    </div>
                                ))}
                            </div>
                        )}
                        </>
                      ))
                }  */}
                {
                  // resume
                  resume.map((item)=>(
                    <div key={item._id}>

                     {item.email == user.email && (
                          <div>
                                {item.resume.map((resume)=>(
                                    <div key={resume._id}>
                                        <Link href={`/resume/${resume._id}`}>{resume.role}  </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                  ))
                }

                {/* {console.log(resume)} */}
                {/* <Link href="../resume/creative/demo">dynamic</Link> */}
                {/* <Link href="">blue</Link> */}
                </>
            )}



    </div>
  )
}

export const getServerSideProps = async () => {
    const res = await fetch("https://complete-pbk9zkqmh-nithishreddy27.vercel.app/api/test/getResume");
    const data = await res.json();
    
      return {
        props: {
          resumes: data,
        },
      };
    
  };


// export const getServerSideProps = async () => {
//     const res = await fetch("http://localhost:3000/api/test/getResume");
//     const data = await res.json();
    
//       return {
//         props: {
//           resumes: data,
//         },
//       };
    
//   };