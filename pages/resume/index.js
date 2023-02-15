import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Link from "next/link"
import { FiMenu} from 'react-icons/fi'
const Home = (props) => {
  const arr= props.done
  const [open, setOpen] = useState(false);
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
    <div>
      <div>
        <div className="border-b border-gray-300 py-2 fixed top-[-8px] w-[100%] z-40 bg-slate-50">
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          {/* <h1>Provast</h1> */}
          <img
            src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_B_fpwhlu.png&w=2048&q=75"
            width={220}
            height={55}
          />
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="text-base text-gray-600 lg:flex lg:justify-between">
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                >
                  Contact 
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
        </div>
    </div>
  <div className='h-screen absolute top-[80px]'>
    <h1 className='mt-10 p-2 font-bold text-gray-900 text-lg text-center sm:text-3xl md:text-4xl'>welcome <b className='text-orange-600'>your name!</b> pick your template </h1>
    <div className='mb-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-2 md:text-lg md:max-w-3xl text-center'>
    <p>Each resume template is expertly designed and follows the exact "resume rules" hiring </p>
    <p>
        managers look for.Stand out and get hired faster with field-tested resume template
    </p>
    <select id='tabs' name='tabs' className='md:hidden block w-full focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md mt-8'>
        <option>All templates</option>
        <option>Simple</option>
        <option>Creative</option>
        <option>Company</option>
        <option>MBA</option>
    </select>
   </div>
   <div className='hidden md:block'>
   <nav className='my-10 flex'>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer focus:bg-orange-500' onClick={()=>setDesign("all")}>all templates</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("simple")}>Simple</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("creative")}>Creative</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("company")}>Company</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer' onClick={()=>setDesign("mba")}>MBA</a>

   </nav>
   </div>
  
   <div className='grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mt-5  '>

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

             <div  key={data._id}>
              <div className='rounded-md bg-gray-100 h-[355px]  w-63 p-5 m-5 cursor-pointer relative'>
              <div className='opacity-80'>
    <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png"/>
    </div>
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-200  bg-opacity-70 rounded-full p-1'>
        
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVJJREFUWEftl+FNAzEMhb9OQDcoTECZoGwAbNANoBMAEwAbsEFhAzYANigbwAStXuVKEbqLz7lWOlXxv1MSv68vTuKOGFiMBsbDUQGdArfAJTA1p7+AD+AFWJW4X+rQHfDkCGqOwEJRAvRsznQREpDAOkcU6BpYJtm/gQdAW6XQ1un7PJlzA7x1JYoCqS4mlvwdEGBTCODKBrTm7BBA+vWflvgPUFH/tgiNrahPbPwicTHLFnEoLeScOztBnbaZfSwA1Z4bESDVxr1lfLRayQlE529zVSBvz6pDfR3SydB9oiO+j9Cd9AroUDRGbssiT0QUtvWU5oB06e0utqigN7/19s4Brb2sPccbtStQ4mp1yCux6lB1yHPAG681dPwOHfJx/WlraXJvWdqke/ZHx4vaD4kIap78OYwK/58vZ9SgKW+4QesrXrQ+0uQXCUQXDQ5oA5cjSCVYiqWCAAAAAElFTkSuQmCC"/>
        </div>
        <div className=' text-2xl p-3 text-center   font-semibold'>{data.ResumeName} </div> 

    </div>
    <div className='rounded-md bg-gray-100 h-[355px]  w-63  p-5 m-5 cursor-pointer relative'>
    <div className='opacity-80'>
    <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png"/>
    </div>
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-200  bg-opacity-70 rounded-full p-1'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVJJREFUWEftl+FNAzEMhb9OQDcoTECZoGwAbNANoBMAEwAbsEFhAzYANigbwAStXuVKEbqLz7lWOlXxv1MSv68vTuKOGFiMBsbDUQGdArfAJTA1p7+AD+AFWJW4X+rQHfDkCGqOwEJRAvRsznQREpDAOkcU6BpYJtm/gQdAW6XQ1un7PJlzA7x1JYoCqS4mlvwdEGBTCODKBrTm7BBA+vWflvgPUFH/tgiNrahPbPwicTHLFnEoLeScOztBnbaZfSwA1Z4bESDVxr1lfLRayQlE529zVSBvz6pDfR3SydB9oiO+j9Cd9AroUDRGbssiT0QUtvWU5oB06e0utqigN7/19s4Brb2sPccbtStQ4mp1yCux6lB1yHPAG681dPwOHfJx/WlraXJvWdqke/ZHx4vaD4kIap78OYwK/58vZ9SgKW+4QesrXrQ+0uQXCUQXDQ5oA5cjSCVYiqWCAAAAAElFTkSuQmCC"/>
        </div>
        <div className=' text-2xl p-3 text-center   font-semibold'>{data.ResumeName} </div> 

    </div>
    <div className='rounded-md bg-gray-100 h-[355px]  w-63  p-5 m-5 cursor-pointer relative'>
      <div className='opacity-80'>
    <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png"/>
    </div>
    <div className=' text-2xl p-3 text-center   font-semibold'>{data.ResumeName} </div> 
    
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-200  bg-opacity-70 rounded-full p-1'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVJJREFUWEftl+FNAzEMhb9OQDcoTECZoGwAbNANoBMAEwAbsEFhAzYANigbwAStXuVKEbqLz7lWOlXxv1MSv68vTuKOGFiMBsbDUQGdArfAJTA1p7+AD+AFWJW4X+rQHfDkCGqOwEJRAvRsznQREpDAOkcU6BpYJtm/gQdAW6XQ1un7PJlzA7x1JYoCqS4mlvwdEGBTCODKBrTm7BBA+vWflvgPUFH/tgiNrahPbPwicTHLFnEoLeScOztBnbaZfSwA1Z4bESDVxr1lfLRayQlE529zVSBvz6pDfR3SydB9oiO+j9Cd9AroUDRGbssiT0QUtvWU5oB06e0utqigN7/19s4Brb2sPccbtStQ4mp1yCux6lB1yHPAG681dPwOHfJx/WlraXJvWdqke/ZHx4vaD4kIap78OYwK/58vZ9SgKW+4QesrXrQ+0uQXCUQXDQ5oA5cjSCVYiqWCAAAAAElFTkSuQmCC"/>
        </div>

    </div>
    <div className='rounded-md bg-gray-100 h-[355px]  w-63  p-5 m-5  cursor-pointer relative'>
    <div className='opacity-80'>
    <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png"/>
    </div>
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-200  bg-opacity-70 rounded-full p-1'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVJJREFUWEftl+FNAzEMhb9OQDcoTECZoGwAbNANoBMAEwAbsEFhAzYANigbwAStXuVKEbqLz7lWOlXxv1MSv68vTuKOGFiMBsbDUQGdArfAJTA1p7+AD+AFWJW4X+rQHfDkCGqOwEJRAvRsznQREpDAOkcU6BpYJtm/gQdAW6XQ1un7PJlzA7x1JYoCqS4mlvwdEGBTCODKBrTm7BBA+vWflvgPUFH/tgiNrahPbPwicTHLFnEoLeScOztBnbaZfSwA1Z4bESDVxr1lfLRayQlE529zVSBvz6pDfR3SydB9oiO+j9Cd9AroUDRGbssiT0QUtvWU5oB06e0utqigN7/19s4Brb2sPccbtStQ4mp1yCux6lB1yHPAG681dPwOHfJx/WlraXJvWdqke/ZHx4vaD4kIap78OYwK/58vZ9SgKW+4QesrXrQ+0uQXCUQXDQ5oA5cjSCVYiqWCAAAAAElFTkSuQmCC"/>
        </div>
        <div className=' text-2xl p-3 text-center   font-semibold'>{data.ResumeName} </div> 
    </div>
    <div className='rounded-md bg-gray-100 h-[355px]  w-63  p-5 m-5 cursor-pointer relative'>
    <div className='opacity-80'>
    <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png"/>
    </div>
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-4  00  bg-opacity-70 rounded-full p-1'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVJJREFUWEftl+FNAzEMhb9OQDcoTECZoGwAbNANoBMAEwAbsEFhAzYANigbwAStXuVKEbqLz7lWOlXxv1MSv68vTuKOGFiMBsbDUQGdArfAJTA1p7+AD+AFWJW4X+rQHfDkCGqOwEJRAvRsznQREpDAOkcU6BpYJtm/gQdAW6XQ1un7PJlzA7x1JYoCqS4mlvwdEGBTCODKBrTm7BBA+vWflvgPUFH/tgiNrahPbPwicTHLFnEoLeScOztBnbaZfSwA1Z4bESDVxr1lfLRayQlE529zVSBvz6pDfR3SydB9oiO+j9Cd9AroUDRGbssiT0QUtvWU5oB06e0utqigN7/19s4Brb2sPccbtStQ4mp1yCux6lB1yHPAG681dPwOHfJx/WlraXJvWdqke/ZHx4vaD4kIap78OYwK/58vZ9SgKW+4QesrXrQ+0uQXCUQXDQ5oA5cjSCVYiqWCAAAAAElFTkSuQmCC"/>
        </div>
        <div className=' text-2xl p-3 text-center   font-semibold'>{data.ResumeName} </div> 
        </div>

            
             </div>
          
      ))
    }

{/* <Link href={`resume/${data.ResumeDesign}/${data.ResumeName}`} className='  rounded-md bg-black h-96 w-64 m-5 cursor-pointer relative' key={data._id} >
             <div className=' text-4xl text-white font-semibold tracking-wider text-center '>
              hjedbfuethu4h
              <span className='absolute z-40'>{data.ResumeName} </span> 
             </div>
          
             <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402487_quantized.png" alt=""  className='h-[100%] w-[100%] opacity-50'/>
     
           </Link> */}

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