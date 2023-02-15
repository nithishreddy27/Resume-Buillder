import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Link from "next/link"

const Home = (props) => {
  const arr= props.done

  const l=[]
  const [type, setType] = useState("free")
  const [design, setDesign] = useState("all")
  return (
    // <div>
    //    <Navbar></Navbar>
    //   {
    //     arr.map((data)=>(
    //       <div key="_id">
    //         <p>{data.ResumeName}</p>
    //         <p>{data.ResumeType}</p>
    //         <p>{data.ResumeDesign}</p>
    //         <p>{data.ResumeImage}</p>
    //       </div>
    //     ))
    //   }
    // </div>
    <div><header className="text-gray-900 body-font bg-white">
    <nav className="container md:ml-auto md:mr-auto flex items-center justify-between px-10 py-3 bg-gray-100">
      <div>
        <Link href="/">
          <img
            className="h-[50px] w-[150px]"
            src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_B_fpwhlu.png&w=1920&q=75"
            alt=""
          />
        </Link>    
      </div>
      <div className="flex justify-between">
        <Link href="/student" className="mr-6 hover:text-gray-900">
          Dashboard
        </Link>     
        <Link href="/" className="mr-6 hover:text-gray-900">
          Notices
        </Link>
        <Link href="/" className="mr-6 hover:text-gray-900">
          Resumes
        </Link>
        <Link href="/" className="mr-6 hover:text-gray-900">
          Test Patterns
        </Link>
        <Link href="/" className="mr-6 hover:text-gray-900">
          Assessments
        </Link>
      </div>
      <div>
        <Link href="/api/logout" className="font-bold">
          LOGOUT
        </Link>
      </div>

    </nav>
    <Link href="/resume/addResume">Add Resume</Link>
  </header>
  <div className='h-screen'>
    <h1 className='mt-10 p-2 font-bold text-gray-900 text-lg text-center sm:text-3xl md:text-4xl'>welcome <b className='text-orange-600'>your name!</b> pick your template </h1>
    <div className='mb-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-2 md:text-lg md:max-w-3xl text-center'>
    <p>Each resume template is expertly designed and follows the exact "resume rules" hiring </p>
    <p>
        managers look for.Stand out and get hired faster with field-tested resume template
    </p>
    {/* <select id='tabs' name='tabs' className='block w-full focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md mt-8'>
        <option>All templates</option>
        <option>Simple</option>
        <option>Creative</option>
        <option>Company</option>
        <option>MBA</option>
    </select> */}
   </div>
   <nav className='my-10 flex '>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("all")}>all templates</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("simple")}>Simple</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("creative")}>Creative</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("company")}>Company</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("mba")}>MBA</a>

   </nav>
   <div className='grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mt-5 '>
  
   {/* <div className='rounded-md bg-black h-96 w-64 m-5 cursor-pointer relative'  key={data._id}>
        <div className=' text-4xl text-white font-semibold tracking-wider text-center '><span className='absolute z-40'>Name </span> </div>
        <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png" alt=""  className='h-[100%] w-[100%] opacity-50'/>

      </div> */}

      {
        
        arr.map((data)=>{
          if(design == "all" || data.ResumeDesign == design){
            l.push(data)
          }
        })
      }
    {
      l.map((data)=>(  
             <Link href={`resume/${data.ResumeDesign}/${data.ResumeName}`} className='rounded-md bg-black h-96 w-64 m-5 cursor-pointer relative' key={data._id} >
             <div className=' text-4xl text-white font-semibold tracking-wider text-center '><span className='absolute z-40'>{data.ResumeName} </span> </div>
             <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png" alt=""  className='h-[100%] w-[100%] opacity-50'/>
     
           </Link>
          
      ))
    }



    </div>
   </div>
    
  
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