import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import {useUser} from "../../lib/hooks"
import Link from "next/link"
import { useRouter } from 'next/router';

export default function College(props) {

  const user = useUser()
  const router = useRouter();

  function runMe(){
    router.push("/register/addCollegeDetails")
  }

  const students = props.done
  console.log(students)
  return (
    // <div>student  {JSON.stringify(user)}</div>
    <div className="h-screen w-screen">
    <Navbar />
    
    <div className=" h-[64%] p-10">
      {/* {console.log("user", user)} */}
      {user&& (
        <div className='mt-16 '>
          <h1 className='font-bold'>STUDENTS</h1>
          {/* {user.college.paraphrase == } */}
          {students.map((student)=>(
            <>
              {student.paraphrase == user.college.paraphrase && (
                <>
                                <h1 className='my-2'>{student.profile.firstName}</h1>
                </>
              )}
            </>
          ))}
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



// export const getServerSideProps = async () => {
//   // const {name} =await context
//   // console.log("coin",name);
//     const res = await fetch(`https://complete-psi.vercel.app/api/getUsers`);
//     const data = await res.json();
//     var o = data[0];
//     // console.log("student",o.ResumeName)
//     return {
//       props: {
//         done: data,
//       },
//     }; 
//   };
  
export const getServerSideProps = async () => {
  // const {name} =await context
  // console.log("coin",name);
    const res = await fetch(`http://localhost:3000/api/getUsers`);
    const data = await res.json();
    var o = data[0];
    // console.log("student",o.ResumeName)
    return {
      props: {
        done: data,
      },
    }; 
  };
  