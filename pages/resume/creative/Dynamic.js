import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactDOM from 'react-dom';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function Dynamic() {
  const user = useUser();
  const { details, setdetails , setdemo ,demo} = useContext(ResumeContext);
  const [change, setchange] = useState(false)


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
  }, [user , change]);

  
  useEffect(()=>{
    setchange(!change)
  },[demo])

  
  
  const [open, setopen] = useState("semiopen");


//PDF document

  function printDocument() {
    console.log("inside")
    // var input = document.getElementById('smallResume');
    var input
    if(open == "closed"){
      input = document.getElementById('smallResume');
      
    }
    else{
      input = document.getElementById('largeResume');
      console.log("om");
      
    }
    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'JPEG',0,0,width,height);
      pdf.save("download.pdf");
      // pdf.output('dataurlnewwindow');
    });  
  }

  // document.getElementById("smallResume")
 

  useEffect(()=>{
  // document.getElementById("largeResume").style.color = "red"

  },[0])


  //responsiveness
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  const [color, setColor] = useColor("hex", "#121212");
  useEffect(()=>{
    console.log("color:",color);
    // settextColor()
  },[color])
  


  return (
    <>
      {details && user && (
        <div className="flex p-10">
          {/* <div >
        <ColorPicker width={456} height={228} 
                   color={color} 
                   onChange={setColor} hideHSV dark />;
        
    </div>   */}
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <button
                className="h-10 w-10 mx-auto block lg:hidden"
                onClick={toggleResume}
              >
                DETAILS
              </button>
              <div className="flex justify-center ">

                <div>
                <button onClick={printDocument} className="cursor-pointer text-white mx-5">Print</button>

                  <button onClick={()=>setdemo(!demo)}>LOAD</button>
                </div>

                {/* Small Resume */}
                <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row" id="smallResume" style={{color:color.hex}}>
                  <div className=" w-[35%] bg-gray-200 p-6">
                    <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
                      <img
                        src="https://randomuser.me/api/portraits/men/40.jpg"
                        alt=""
                        className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                      />
                    </div>
                    <div className="mt-48">
                      <h1 className="text-2xl font-semibold tracking-[2px]">
                        CONTACT
                      </h1>
                      <hr className="h-[2px] bg-black my-1" />
                      {
                        <>
                          <div className="flex">
                            <span>
                              <img
                                src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                                className="w-5 h-5"
                              />
                            </span>
                            <h1 className="mx-4">{details.personal.phone}</h1>
                          </div>
                          <div className="flex my-1">
                            <span>
                              <img
                                src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                                className="w-7 h-7"
                              />
                            </span>
                            <h1 className="mx-2">{details.personal.email}</h1>
                          </div>

                          {details.social.length != 0 && (
                            <>
                              {details.social.map((item) => (
                                <div className="my-3 flex" key={item.network}>
                                  <span>
                                    <img
                                      src={
                                        "https://www." +
                                        item.network +
                                        ".com/favicon.ico"
                                      }
                                      alt=""
                                      className="w-5 grayscale-[40%]"
                                    />
                                  </span>

                                  <Link href={item.url}>
                                    <span className="mx-4">
                                      {item.username}
                                    </span>
                                  </Link>
                                </div>
                              ))}
                            </>
                          )}
                        </>
                      }
                    </div>
                    {details.skills.length != 0 && (
                      <div className="mt-4">
                        <h1 className="text-2xl font-semibold tracking-[2px]">
                          SKILLS
                        </h1>
                        <hr className="h-[2px] bg-black my-1" />
                        {details.skills.map((item) => (
                          <li className="mx-4" key={item.name}>
                            {item.name}
                          </li>
                        ))}
                      </div>
                    )}

                    {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
                    {details.languages.length != 0 && (
                      <div className="mt-4">
                        <h1 className="text-2xl font-semibold tracking-[2px]">
                          LANGUAGES
                        </h1>
                        <hr className="h-[2px] bg-black my-1" />
                        {details.languages.map((item) => (
                          <p className="my-2" key={item.name}>
                            {item.name}
                          </p>
                        ))}
                      </div>
                    )}
                    {details.hobbies.length != 0 && (
                      <div className="mt-4">
                        <h1 className="text-2xl font-semibold tracking-[2px]">
                          HOBBIES
                        </h1>
                        <hr className="h-[2px] bg-black my-1" />
                        {details.hobbies.map((item) => (
                          <p className="my-2" key={item.name}>
                            {item.name}
                          </p>
                        ))}
                      </div>
                    )}
                    {details.awards.length != 0 && (
                      <>
                        <h1 className="text-2xl font-semibold tracking-[2px]">
                          AWARADS
                        </h1>
                        <hr className="h-[2px] bg-black my-1" />
                        {details.awards.map((item) => (
                          <div className="my-2" key={item.name}>
                            <span className="font-semibold text-[15px]">
                              {item.name} ({item.date})
                            </span>
                            <span className="mx-2 text-[15px]"></span>
                            <p className="mx-4">
                              {item.summary.data.slice(0, 38)}
                            </p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <div className=" w-[70%] pt-10 px-5 ">
                    <div>
                      <h1 className="text-5xl font-semibold tracking-wider">
                        {details.personal.firstName}
                      </h1>
                      <h1 className="text-3xl  tracking-[4px] mt-2">
                        {details.personal.lastName}
                      </h1>
                      {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                    </div>

                    <div className="mt-12">
                      {details.personal.objective.length != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px]">
                            OBJECTIVE
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          <p className="text-sm">
                            {details.personal.objective}
                          </p>
                        </>
                      )}

                      {details.work.length != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px] mt-5">
                            WORK
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />

                          <div className="ml-1 mt-1">
                            {details.work.map((item) => (
                              <div className="flex" key={item.company}>
                                <div className="pt-1">
                                  <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                  <div className="w-1 bg-black h-24 m-1"></div>
                                </div>
                                <div className="ml-5 mt-1">
                                  <p className="font-semibold">
                                    {item.from.slice(0, 4)} -{" "}
                                    {item.to.slice(0, 4)}
                                  </p>
                                  <p className="tracking-[2px] my-1">
                                    {item.company}
                                  </p>
                                  <p className="font-bold">
                                    {item.designation}
                                  </p>
                                  <p className="mb-4 text-sm">
                                    {item.summary.data}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {details.projects.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-5">
                              PROJECTS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />

                            <div className="ml-1 mt-1">
                              {details.projects.map((item) => (
                                <div className="flex" key={item.name}>
                                  <div className="pt-1">
                                    <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                    <div className="w-1 bg-black h-24 m-1"></div>
                                  </div>
                                  <div className="ml-5 mt-1">
                                    <p className="font-semibold">
                                      {item.from}  to {" "}
                                      {item.to}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.name}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.domain}
                                    </p>
                                  
                                    <p className="mb-4 text-sm">
                                      {item.summary.data}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                      {details.education.length != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px] mt-3">
                            EDUCACTION
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          <div className="ml-1 mt-1">
                            {details.education.map((item) => (
                              <div className="flex" key={item.institution}>
                                <div className="flex">
                                  <div className="pt-1">
                                    <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                    <div className="w-1 bg-black h-28 m-1"></div>
                                  </div>
                                  <div className="ml-5 mt-1">
                                    <p className="font-semibold">
                                      {item.startDate.slice(0, 4)} -{" "}
                                      {item.endDate.slice(0, 4)}
                                    </p>
                                    <p className="tracking-[2px]">
                                      {item.institution}
                                    </p>
                                    <p className="font-bold">
                                      {item.fieldOfStudy}
                                    </p>
                                    <p className="">{item.typeOfDegree}</p>
                                    <p className="mb-4 font-semibold">
                                      GPA-{item.gpa}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {details.certifications.length != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px] mt-3">
                            CERTIFICATIONS
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          <div className="ml-1 mt-1">
                            {details.certifications.map((item) => (
                              <div className="flex" key={item.institution}>
                                <div className="flex">
                                  <div className="pt-1">
                                    <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                    <div className="w-1 bg-black h-10 m-1"></div>
                                  </div>
                                  <div className="ml-5 mt-1">
                                    <p className="tracking-[2px]">
                                      {item.certificateTitle}
                                    </p>
                                    <p className="font-bold">
                                      {item.certificateDate}
                                    </p>
                                    <p className="">{item.issuer}</p>
                                    <p className="mb-4 font-semibold">
                                      {item.summary.data}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
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
                  <div>
                <button onClick={printDocument} className="cursor-pointer text-white mx-5">Print</button>

                  <button className="text-white" onClick={()=>setdemo(!demo)}>LOAD</button>
                </div>


                  <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row" id="largeResume" style={{color:color.hex}}>
                    <div className=" w-[35%] bg-gray-200 p-6">
                      <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
                        <img
                          src="https://randomuser.me/api/portraits/men/40.jpg"
                          alt=""
                          className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                        />
                      </div>
                      <div className="mt-48">
                        <h1 className="text-2xl font-semibold tracking-[2px]">
                          CONTACT
                        </h1>
                        <hr className="h-[2px] bg-black my-1" />
                        {
                          <>
                            <div className="flex">
                              <span>
                                <img
                                  src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                                  className="w-5 h-5"
                                />
                              </span>
                              <h1 className="mx-4">{details.personal.phone}</h1>
                            </div>
                            <div className="flex my-1">
                              <span>
                                <img
                                  src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                                  className="w-7 h-7"
                                />
                              </span>
                              <h1 className="mx-2">{details.personal.email}</h1>
                            </div>

                            {details.social.length != 0 && (
                              <>
                                {details.social.map((item) => (
                                  <div className="my-3 flex" key={item.network}>
                                    <span>
                                      <img
                                        src={
                                          "https://www." +
                                          item.network +
                                          ".com/favicon.ico"
                                        }
                                        alt=""
                                        className="w-5 grayscale-[40%]"
                                      />
                                    </span>

                                    <Link href={item.url}>
                                      <span className="mx-4">
                                        {item.username}
                                      </span>
                                    </Link>
                                  </div>
                                ))}
                              </>
                            )}
                          </>
                        }
                      </div>
                      {details.skills.length != 0 && (
                        <div className="mt-4">
                          <h1 className="text-2xl font-semibold tracking-[2px]">
                            SKILLS
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.skills.map((item) => (
                            <li className="mx-4" key={item.name}>
                              {item.name}
                            </li>
                          ))}
                        </div>
                      )}

                      {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
                      {details.languages.length != 0 && (
                        <div className="mt-4">
                          <h1 className="text-2xl font-semibold tracking-[2px]">
                            LANGUAGES
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.languages.map((item) => (
                            <p className="my-2" key={item.name}>
                              {item.name}
                            </p>
                          ))}
                        </div>
                      )}
                      {details.hobbies.length != 0 && (
                        <div className="mt-4">
                          <h1 className="text-2xl font-semibold tracking-[2px]">
                            HOBBIES
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.hobbies.map((item) => (
                            <p className="my-2" key={item.name}>
                              {item.name}
                            </p>
                          ))}
                        </div>
                      )}
                      {details.awards.length != 0 && (
                        <>
                          <h1 className="text-2xl font-semibold tracking-[2px]">
                            AWARADS
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.awards.map((item) => (
                            <div className="my-2" key={item.name}>
                              <span className="font-semibold text-[15px]">
                                {item.name} ({item.date})
                              </span>
                              <span className="mx-2 text-[15px]"></span>
                              <p className="mx-4">
                                {item.summary.data.slice(0, 38)}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <div className=" w-[70%] pt-10 px-5 ">
                      <div>
                        <h1 className="text-5xl font-semibold tracking-wider">
                          {details.personal.firstName}
                        </h1>
                        <h1 className="text-3xl  tracking-[4px] mt-2">
                          {details.personal.lastName}
                        </h1>
                        {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                      </div>

                      <div className="mt-12">
                        {details.personal.objective.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px]">
                              OBJECTIVE
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            <p className="text-sm">
                              {details.personal.objective}
                            </p>
                          </>
                        )}

                        {details.work.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-5">
                              WORK
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />

                            <div className="ml-1 mt-1">
                              {details.work.map((item) => (
                                <div className="flex" key={item.company}>
                                  <div className="pt-1">
                                    <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                    <div className="w-1 bg-black h-24 m-1"></div>
                                  </div>
                                  <div className="ml-5 mt-1">
                                    <p className="font-semibold">
                                      {item.from.slice(0, 4)} -{" "}
                                      {item.to.slice(0, 4)}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.company}
                                    </p>
                                    <p className="font-bold">
                                      {item.designation}
                                    </p>
                                    <p className="mb-4 text-sm">
                                      {item.summary.data}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}


                {details.projects.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-5">
                              PROJECTS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />

                            <div className="ml-1 mt-1">
                              {details.projects.map((item) => (
                                <div className="flex" key={item.name}>
                                  <div className="pt-1">
                                    <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                    <div className="w-1 bg-black h-24 m-1"></div>
                                  </div>
                                  <div className="ml-5 mt-1">
                                    <p className="font-semibold">
                                      {item.from}  to {" "}
                                      {item.to}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.name}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.domain}
                                    </p>
                                  
                                    <p className="mb-4 text-sm">
                                      {item.summary.data}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}




                        {details.education.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-3">
                              EDUCACTION
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            <div className="ml-1 mt-1">
                              {details.education.map((item) => (
                                <div className="flex" key={item.institution}>
                                  <div className="flex">
                                    <div className="pt-1">
                                      <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                      <div className="w-1 bg-black h-28 m-1"></div>
                                    </div>
                                    <div className="ml-5 mt-1">
                                      <p className="font-semibold">
                                        {item.startDate.slice(0, 4)} -{" "}
                                        {item.endDate.slice(0, 4)}
                                      </p>
                                      <p className="tracking-[2px]">
                                        {item.institution}
                                      </p>
                                      <p className="font-bold">
                                        {item.fieldOfStudy}
                                      </p>
                                      <p className="">{item.typeOfDegree}</p>
                                      <p className="mb-4 font-semibold">
                                        GPA-{item.gpa}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {details.certifications.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-3">
                              CERTIFICATIONS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            <div className="ml-1 mt-1">
                              {details.certifications.map((item) => (
                                <div className="flex" key={item.institution}>
                                  <div className="flex">
                                    <div className="pt-1">
                                      <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                      <div className="w-1 bg-black h-20 m-1"></div>
                                    </div>
                                    <div className="ml-5 mt-1">
                                      <p className="tracking-[2px]">
                                        {item.title}
                                      </p>
                                      <p className="font-bold">
                                        {item.date}
                                      </p>
                                      <p className="">{item.issuer}</p>
                                      <p className="mb-4 font-semibold">
                                        {item.summary.data}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
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
