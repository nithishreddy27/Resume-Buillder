import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Stylish() {
  const user = useUser();
  const { details, setdetails } = useContext(ResumeContext);

  useEffect(() => {
    if (user) {
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
  }, [user]);

  const [open, setopen] = useState("semiopen");

  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <button
                className="h-10 w-10 mx-auto block lg:hidden"
                onClick={toggleResume}
              >
                DETAILS
              </button>
              <div className="flex justify-center ">

                
                {/* Small Resume */}



               
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar/>
                
              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex justify-center ">


                  
                  {/* large resume */}

     <div className="bg-zinc-800 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row">
      <div className=" min-w-[210mm] h-[282mm] ">
        <div className="flex">
          <div className="pl-5"></div>
          <div className="flex-col mt-[10%] pb-3 pl-1 w-[40%] bg-white  ">
            <div className="flex bg-white  text-black mt-10 ">
              <img
                className="w-[60%] h-[50%] pl-[10%] mb-3 "
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>
            </div>
            <div className="flex-col bg-zinc-200">
              <span className=" text-3xl font-extrabold pl-7 pr-1 pt-[12%] tracking-wide font-serif ">
                {details.personal.firstName} {details.personal.lastName}
              </span>
              <p className="  text-2xl pl-7  text tracking-wider font-thin mb-3">
                {details.personal.role}
              </p>
            </div>

            {/* network */}
           
            <div  className="p-2 ">
              <p className="text-black font-bold tracking-wider  p-1 mx-2 my-1">SOCIAL</p>
              <div className="ml-3">
                <p>{details.personal.phone}</p>
                <p>{details.personal.email}</p>
              </div>
            </div>
            
            
            {/* SKILLS */}
            {details.skills.length != 0 && (
            <div  className="p-2 ">
              <p className="text-black font-bold tracking-wider  p-1 mx-2 my-1">
                SKILLS
              </p>
              {details.skills.map((item) => (
                <div key={item.name}>
                  <span className="text-base font-semibold ">
                    <li>
                      {item.name} - {item.level}
                    </li>
                  </span>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            )}


            {details.languages.length != 0 && (
            <div className="text-base">
              <p className="text-black font-bold tracking-wider  p-1 mx-3 my-1">
                LANGUAGES
              </p>
              {details.languages.map((item) => (
                <div  key={item.name}>
                  <p className="ml-6">
                    {item.name} : {item.fluency}
                  </p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            )}

            {/* AWARDS */}
            {details.awards.length != 0 && (
            <div  className="mt-5">
              <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                AWARDS
              </p>
              {details.awards.map((item) => (
                <div className="text-sm pt-2 ml-3">
                  <li className="font-bold">{item.name} <span className="right-0 font-semibold pl-3">[{item.date}]</span></li>
                  <p ></p>
                  <p className="pl-3">{item.awarder}</p>
                  <p className="pl-3 ">{item.summary.data}</p>
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            )}


             {/* WORK  */}
            {details.work.length != 0 && ( 
            <div  >
            <p className="text-black font-bold tracking-wider   p-1 mx-2 mt-2 ">
              WORK
            </p>
            {details.work.map((item) => (
              <div className="m-1 ml-4">
                <Link href={`${item.website}`}>
                  <p className=" font-semibold text-base tracking-wider">
                    {item.company} <span></span>
                  </p>
                </Link>
                
                <p>{item.designation}</p>

                <p>{item.summary.enabled}</p>
              </div>
            ))}
                </div>
             )}
          </div>

          {/* PROFILE */}
          {details.personal.objective.length != 0 && ( 
          <div className="flex w-[60%] mt-14 ml-3 mr-3">
            <div className="flex-col">
              <div>
                <p className=" text-white font-semibold text-xl tracking-wide  p-1  mt-3 ">
                  PROFILE
                </p>
                <hr></hr>

                <p className="text-sm text-white p-1 pt-4">
                  {details.personal.objective}
                </p>
              </div>
              

              {/* EDUCATION */}
              {details.education.length != 0 && ( 
              <div className="p-2 ">
                <p className=" text-white font-semibold text-xl tracking-wide  p-1  mt-3 ">
                  EDUCATION
                </p>
                <hr></hr>
                {details.education.map((item) => (
                  <div className="text-sm p-2 text-white ">
                    <p className="font-semibold text-lg text-white ">
                      {item.institution}  <span className="absolute text-sm right-5"> [{item.startDate}] - [{item.endDate}] </span>
                    </p>
                    <p className="text-white">{item.typeOfDegree} - {item.fieldOfStudy} </p>
                    <p className="text-white">GPA - {item.gpa}</p>
                    <p className="text-white">{item.summary.enabled}</p>
                    <p className="text-white">{item.enabled}</p>
                  </div>
                ))}
              </div>
              )}

              {/* PROJECTS */}
              {details.projects.length != 0 && ( 
              <div className="  p-3">
                <p className=" text-white font-semibold text-xl tracking-wide  p-1  mt-3 ">
                  PROJECTS
                </p>
                <hr></hr>
                {details.projects.map((item) => (
                  <div key={item.name} className="p-1 text-white ">
                     <p className="font-bold  text-white tracking-wider">
                        {item.name} <span className="ml-3 absolute right-5 text-xs text-white">[{item.from}] - [{item.to}]</span> 
                      </p>
                    <Link href={`${item.website}`}>
                      <p>{item.website}</p>
                    </Link>
                    <p>{item.summary.data}</p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
              )}


              {/* CERTIFICATION */}
              {details.certifications.length != 0 && ( 
              <div >
                <p className=" text-white font-semibold text-xl tracking-wide ml-3 p-1  mt-3 ">
                  CERTIFICATION
                </p>
                <hr></hr>
                {details.certifications.map((item) => (
                  <div key={item.title} className="pt-4 text-white ml-4 ">
                    
                    <p className="font-semibold text-lg  text-white">{item.title}<span className=" right-5 absolute text-sm text-white">[{item.date}]</span></p>
                    <p></p>
                    <p className=" text-white m-1">{item.issuer}</p>
                    <p className="text-sm m-1">{item.summary.data}</p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
              )}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>


                  
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
