import React , { useState, useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlinePlus,
  AiFillProject,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdSocialDistance, MdOutlineSpeakerNotes } from "react-icons/md";
import { FaLanguage, FaAward } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
// import {GrProjects} from "react-icons/gr"
import { GiSkills } from "react-icons/gi";
import { RxHobbyKnife } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";




export default function Internship() {

    const [iarrow, setiarrow] = useState(false);
    const { details, setdetails } = useContext(ResumeContext);


    const [internship, setinternship] = useState({company:"",designation:"",from:"",to:"",summary:{data:""}})


    function addInternship(event) {
        event.preventDefault()
        const intern = internship
        const arr = [];
        var count=0

        details.work.map((item) => {
            if(item.company == internship.company){
                arr.push(intern)
                count=1
              }
              else{
                arr.push(item);
              }
        });
        // console.log('intern',intern)

        
    if(count==0){   
        arr.push(intern);
    }
        setdetails({ ...details, work: arr });
    
        setinternship({company:"",designation:"",from:"",to:"",summary:{data:""}})

      }
    
    function deleteInternship(index) {
            console.log("network", index);
            const arr = [];
            details.work.map((item, i) => {
            if (i != index) arr.push(item);
            });
            setdetails({ ...details, work: arr });
    }

    function updateInternship(index){
        // console.log("in");
        details.work.map((item, i) => {
            if (i == index) {
                setinternship({company:item.company,designation:item.designation,from:item.from,to:item.to,summary:{data:item.summary.data}})
            }
          }); 
      }

  return (
    <div><div className="mt-5 shadow-md p-2 rounded-md">
    <div className="flex">
      <h1 className="font-bold text-xl grow">Internships</h1>
      <div
        className="pt-[-15px] mt-[-10px]"
        onClick={() => {
          setiarrow(!iarrow);
        }}
      >
        {iarrow == true && (
          <div>
            <div className="flex justify-center">
              <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                <span className="mr-2">
                  <AiOutlinePlus></AiOutlinePlus>
                </span>
                Hide
              </button>
            </div>
          </div>
        )}
        {iarrow == false && (
          <div>
            <div className="flex justify-center">
              <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                <span className="mr-2">
                  <AiOutlinePlus></AiOutlinePlus>
                </span>
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="ml-1 mt-1">
        {details.work.map((item, index) => (
          <div className=" border border-white py-3 " key={item.company}>
            <div className="flex">
            <div className="ml-2 grow">
              <p className="font-semibold ">{item.company}</p>
            </div>
            
            <button className="mr-5"
              onClick={() => {
                deleteInternship(index);
              }}
            >
              <AiFillDelete></AiFillDelete>
            </button>

            <button onClick={()=>updateInternship(index)}>Update</button>

            </div>
            <div className="">
              </div>

          </div>
        ))}
      </div>
    <div className={`${iarrow ? "block" : "hidden"}`}>

      <form action="">
      {/* <div className="mt-5 text-gray-300"> */}



        <label htmlFor="company" className="font-semibold">
          Company
        </label>

        <input
          type="text"
          name="internship"
          id="company"
          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
          value={internship.company}
          onChange={(e)=>{setinternship({...internship,company:e.target.value})}}
        />
      {/* </div> */}
      {/* <div className="mt-2"> */}
        <label
          htmlFor="position"
          className="font-semibold text-gray-300"
        >
          Position
        </label>
        <input
          type="text"
          name="internship"
          id="position"
          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
          value={internship.designation}
          onChange={(e)=>{setinternship({...internship,designation:e.target.value})}}

        />
      {/* </div> */}

      {/* <div className="flex gap-3"> */}
        {/* <div className="mt-2"> */}
          <label
            htmlFor="startdate"
            className="font-semibold text-gray-300"
          >
            Start Date
          </label>
          <input
            type="date"
            name="internship"
            id="startdate"
            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
            value={internship.from}
            onChange={(e)=>{setinternship({...internship,from:e.target.value})}}
  
          />
        {/* </div> */}
        {/* <div className="mt-2"> */}
          <label
            htmlFor="enddate"
            className="font-semibold text-gray-300"
          >
            End Date
          </label>
          <input
            type="date"
            name="internship"
            id="enddate"
            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
            value={internship.to}
            onChange={(e)=>{setinternship({...internship,to:e.target.value})}}
  
          />
        {/* </div> */}
      {/* </div> */}
      {/* <div className="mt-2"> */}
        <label
          htmlFor="summary"
          className="font-semibold text-gray-300"
        >
          Summary
        </label>
        <textarea
          name="internship"
          id="summary"
          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
          value={internship.summary.data}
          onChange={(e)=>{setinternship({...internship,summary:{data:e.target.value}})}}

        />
      {/* </div> */}
      {/* <div className="flex justify-center"> */}
        {/* <button>Submit</button> */}
        <button
          onClick={addInternship}
          className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
        >
          Submit
        </button>
        
      {/* </div> */}
        </form>  
      
      {/* <div className="ml-1 mt-1">
        {details.work.map((item, index) => (
          <div className="flex" key={item.company}>
            <div className="ml-5 mt-1">
              <p className="tracking-[2px] my-1">{item.company}</p>
            </div>
            <button
              onClick={() => {
                deleteInternship(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div> */}
    </div>
  </div>
  </div>
  )
}
