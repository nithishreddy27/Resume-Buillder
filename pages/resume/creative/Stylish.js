import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Stylish() {
  const user = useUser();
  const { details, setdetails, setdemo, demo, color, setcolor } =
    useContext(ResumeContext);
  const [change, setchange] = useState(false);

  //to add email fname and lname
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
  }, [user, change]);

  useEffect(() => {
    setchange(!change);
  }, [demo]);

  const [open, setopen] = useState("semiopen");

  //PDF document

  function printDocument() {
    console.log("inside");
    // var input = document.getElementById('smallResume');
    var input;
    if (open == "closed") {
      input = document.getElementById("smallResume");
    } else {
      input = document.getElementById("largeResume");
      console.log("om");
    }
    console.log(input);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("download.pdf");
      // pdf.output('dataurlnewwindow');
    });
  }

  //responsiveness
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
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-slate-700 to-slate-800">
              <div className="flex border border-white">
                <div className="m-3 flex grow">
                  <div className="flex mt-1">
                    <div
                      className="w-8 h-8 border-[2px] border-white bg-red-500 mx-1 rounded-full"
                      onClick={() => {
                        setcolor("red");
                      }}
                    ></div>
                    <div
                      className="w-8 h-8 border-[2px] border-white bg-gray-500 rounded-full"
                      onClick={() => {
                        setcolor("gray");
                      }}
                    ></div>
                  </div>
                </div>
                <div className="m-3 flex">
                  <button
                    onClick={printDocument}
                    className="cursor-pointer text-white border border-white p-1 mx-1 rounded"
                  >
                    PRINT
                  </button>

                  <button
                    className="text-white border border-white p-1 mx-1 rounded"
                    onClick={() => setdemo(!demo)}
                  >
                    LOAD
                  </button>
                  <button
                    className=" block lg:hidden border border-white text-white p-1 mx-1 rounded-md"
                    onClick={toggleResume}
                  >
                    DETAILS
                  </button>
                </div>
              </div>
              <div className="flex justify-center ">
                {/* Small Resume */}
                <div
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-300px] max-h-[297mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                  <div className="flex " >
          <img className="h-[38mm] p-1   m-2" src="https://randomuser.me/api/portraits/women/71.jpg"></img>
        
      {/* {details.social.length != 0 && (
       <div key={item.network}>
        {details.social.map((item) => (
          <div key={item.network} className="mx-3 ml-5 pb-4  mt-3 ">
            <span> */}
              {/* <Link href={item.url}>
                <img
                  src={"https://www." + item.network + ".com/favicon.ico"}
                  className="w-5 "
                />
              </Link> */}
            {/* </span>
          </div>
        ))}
      </div>
      )} */}

    
      <div className=" m-3 mt-2 right-0 w-full    ">
        
          <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 heading">PROFILE</p>
          <p className="text-sm text-black p-3 pl-2 pt-2">{details.personal.objective}</p>
        
        </div>
  </div>
  <div className="flex-col bg-black pt-3 p-4">
        <span className="  text-3xl  bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
          {details.personal.role}
        </span>
        <span className=" text-5xl pl-[10%] text-white tracking-wide text-right font-serif ">
          {details.personal.firstName} {details.personal.lastName}
        </span>
      </div>
                </div>
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar />

              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex">
                  <div className="m-5 flex grow">
                    <div className="flex mt-1">
                      <div
                        className="w-8 h-8 border-[2px] border-white bg-red-500 mx-1 rounded-full"
                        onClick={() => {
                          setcolor("red");
                        }}
                      ></div>
                      <div
                        className="w-8 h-8 border-[2px] border-white bg-gray-500 rounded-full"
                        onClick={() => {
                          setcolor("gray");
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="m-5">
                    <button
                      onClick={printDocument}
                      className="cursor-pointer text-white mx-5 border border-white p-2 rounded"
                    >
                      PRINT
                    </button>

                    <button
                      className="text-white border border-white p-2 rounded"
                      onClick={() => setdemo(!demo)}
                    >
                      LOAD
                    </button>
                  </div>
                </div>

                <div className="flex justify-center ">
                  {/* large resume */}

                  <div
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-100px] xl:scale-[0.9] xl:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[297mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                   <div className=" w-[210mm] ">
      
      <div className="flex " >
        <img className="h-[38mm] p-1   m-2" src="https://randomuser.me/api/portraits/women/71.jpg"></img>
      
    {/* {details.social.length != 0 && (
     <div key={item.network}>
      {details.social.map((item) => (
        <div key={item.network} className="mx-3 ml-5 pb-4  mt-3 ">
          <span> */}
            {/* <Link href={item.url}>
              <img
                src={"https://www." + item.network + ".com/favicon.ico"}
                className="w-5 "
              />
            </Link> */}
          {/* </span>
        </div>
      ))}
    </div>
    )} */}

  
    <div className=" m-3 mt-2 right-0 w-full    ">
      
        <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 heading ">PROFILE</p>
        <p className="text-sm text-black p-3 pl-2 pt-2">{details.personal.objective}</p>
      
      </div>
</div>
<div className="flex-col bg-black pt-3 p-4">
      <span className="  text-3xl  bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
        {details.personal.role}
      </span>
      <span className=" text-5xl pl-[10%] text-white tracking-wide text-right font-serif ">
        {details.personal.firstName} {details.personal.lastName}
      </span>
    </div>

<div className=" flex">
  <div className=" h-[222mm] bg-gradient-to-t from-gray-300 w-[40%]">
  <div className="">
  <div className="flex  text-lg m-4">
    <div className="font-col">
    {details.skills.length != 0 && (
      <div className="p-2 ">
        <p className="text-black text-lg font-bold tracking-wider pb-3 heading">
          SKILLS
        </p>
        {details.skills.map((item) => (
          <div key={item.name} className="ml-2">
            <span className="text-lg  ">
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
       <div className="text-lg pb-2">
        <p className="text-black font-bold tracking-wider  p-1 px-3 py-1 heading">
          LANGUAGES
        </p>
        {details.languages.map((item) => (
          <div key={item.name} className="ml-4">
            <li className="">
              {item.name} : {item.fluency}
            </li>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
     )}


    {details.awards.length != 0 && (
      <div className="pt-2 pb-2  ">
        <p className="text-black font-bold tracking-wider  p-1 mx-2 heading">
          AWARDS
        </p>
        {details.awards.map((item) => (
          <div key={item.name} className="text-lg  ml-3">
            <li className="font-semibold">{item.awarder}</li>
            <p className="text-sm"> [{item.date}] </p>
            <p>{item.name}</p>
            <p className="text-sm pr-3">{item.summary.data}</p>
            <p className="text-sm">{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}

     {details.hobbies.length != 0 && (
       <div className="text-lg pb-2">
        <p className="text-black font-bold tracking-wider  p-1 px-3 py-1 heading">
          HOBBIES
        </p>
        {details.hobbies.map((item) => (
          <div key={item.name}>
            <li className="pl-6">
              {item.name}
            </li>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
     )}

    {details.projects.length != 0 && (
      <div className=" pt-1 pb-3 ">
        <p className="text-black font-bold tracking-wider  p-1 px-2 pt-3 heading  ">
        PROJECTS
        </p>
        
        {details.projects.map((item) => (
          <div key={item.name} className="pl-1">
          <div className=" ml-2 text-black ">
            <p className="tracking-wide font-semibold">{item.name}</p>
          <p className="text-sm">
          [{item.from}] - [{item.to}]
          </p>

          <Link href={item.website}>
          <p className=" ml-1 text-sm">
          {item.website}
          </p>
          </Link>
          <p className="pr-2 text-sm  ">{item.summary.data}</p>
          <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
            <p className="p-2"> </p>
            </div>
            </div>
            ))}
          </div>
          
       )}
       
          </div>
         </div>
         </div>
    </div>
    <div className="w-[70%]">
    {details.education.length != 0 && (  
      <div className="pl-2 ">
        <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 heading">
          EDUCATION
        </p>
        <hr></hr>
        {details.education.map((item) => (
          <div key={item.institution} className="text-base p-2 text-black ">
            <p className="font-semibold text-black ">
              {item.institution} 
              <span className="absolute right-3">[{item.startDate} - {item.endDate}]</span>
            </p>
            <p>{item.fieldOfStudy}</p>
            <p>{item.typeOfDegree}</p>
            <p>{item.gpa}</p>
            <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}


    {details.work.length != 0 && (  
      <div className="pl-2 ">
        <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 heading">
          INTERNSHIP
        </p>
        <hr></hr>
        {details.work.map((item) => (
          <div key={item.company} className="text-base p-2 text-black ">
            <p className="font-semibold text-black ">
              {item.company} 
              {/* <span className="absolute right-0">[{item.startDate} - {item.endDate}]</span> */}
            </p>
            <p>{item.designation}</p>
            <p>{item.summary.data}</p>
            {/* <p>{item.gpa}</p> */}
            <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}



    {details.certifications.length != 0 && (
      <div>
        <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-1 heading">
          CERTIFICATION
        </p>
        <hr className="m-2"></hr>
        {details.certifications.map((item) => (
          <div key={item.title} className="pt-4 text-black mx-3 ">
            <p className="font-semibold ">
              {item.title} <span className="right-0 absolute pr-4">[{item.date}]</span>
            </p>
            
            <p>{item.issuer}</p>
            <p>{item.summary.data}</p>
            <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
    )}

    {/* 
      <div className=" pt-1 pb-3 bg-gray-200">
        <p className="text-black font-bold tracking-wider  p-1 px-2 pt-3   ">
        PROJECTS
        </p>
        
        {resume.projects.map((item) => (
          <div className=" ml-2 text-black ">
          <p className="">
          [{item.from}] - [{item.to}]
          </p>
          <Link href={item.website}>
          <p className="font-semibold ml-1 tracking-wider">
          {item.name}
          </p>
          </Link>
          
          <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
            <p className="p-2"> </p>
            </div>
            ))}
          </div> */}
    </div>
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
