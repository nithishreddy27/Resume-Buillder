import React from 'react'
import Navbar from '../../components/Navbar'
import Link from "next/link"

const Home = (props) => {
  const arr= props.done
  
  return (
    <div>
       <Navbar></Navbar>
       <Link href="/resume/addResume">Add Resume</Link>
      {
        arr.map((data)=>(
          <div key="_id">
            <p>{data.ResumeName}</p>
            <p>{data.ResumeType}</p>
            <p>{data.ResumeDesign}</p>
            <p>{data.ResumeImage}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/Resume/searchResume");
  const data = await res.json();
  var o=data[0]
  // console.log("student",o.ResumeName)
  return {
    props: {
      done: data,
    },
  };
};