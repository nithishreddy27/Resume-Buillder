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
import ReactDOM from "react-dom";
import { ColorPicker, useColor } from "react-color-palette";
import { AiFillPrinter, AiFillDatabase } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineColorLens, MdOutlineDocumentScanner } from "react-icons/md";
import { TbArrowAutofitWidth } from "react-icons/tb"
import { HiOutlineDocumentSearch } from "react-icons/hi"

import { RxHobbyKnife } from "react-icons/rx";

import "react-color-palette/lib/css/styles.css";

export default function Classic() {
  const user = useUser();
  const { details, setdetails, setdemo, demo } = useContext(ResumeContext);
  const [change, setchange] = useState(false);
  const [colorpalette, setcolorpalette] = useState(false);
  const [ftw,setftw]=useState(true);

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

  function lprintDocument() {
    const printContents = document.getElementById("largeResume").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
  function sprintDocument() {
    const printContents = document.getElementById("smallResume").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  //responsiveness
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  const [color, setColor] = useColor("hex", "#121212");

  useEffect(() => {
    console.log("color:", color);
    // settextColor()
  }, [color]);

  return (
    <>
      {details && user && (
        <div className="flex">
          {console.log("details inside div")}
          {/* <div>
            <ColorPicker
              width={456}
              height={228}
              color={color}
              onChange={setColor}
              hideHSV
              dark
            />
            ;
          </div> */}
          {open == "closed" && (
            <div className="mx-auto w-full bg-cover lg:w-3/4 xl:w-3/5 bg-gradient-to-b from-slate-700 to-slate-800 ">
              <div className="border-b border-r border-gray-300 py-2 top-[-5px] fixed lg:sticky w-[100%] lg:w-[100%] z-30  bg-slate-700">
                <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                  {/* <h1>Provast</h1> */}
                  <img
                    src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=1920&q=75"
                    width={180}
                    height={55}
                  />
                  <button
                    className=" block lg:hidden  text-white p-1 mr-[20%] md:mr-[10%] mt-1 border border-white rounded-md"
                    onClick={toggleResume}
                  >
                    <TbListDetails className="text-2xl text-gray-400"></TbListDetails>
                  </button>
                  
                  
                  {/* <div>
                      <button>Preview</button>
                    </div> */}
                </div>
              </div>
              <div className="flex justify-center  shadow-lg  mt-[75px] mx-2 w-[97%] rounded-md fixed bg-slate-700 z-30">
                <div className="m-3 flex">
                  <button
                    className="text-white p-2 rounded-md"
                    onClick={() => {
                      setcolorpalette(!colorpalette);
                    }}
                  >
                    <MdOutlineColorLens className="text-2xl text-gray-200"></MdOutlineColorLens>
                  </button>
                  <div
                    className={`${
                      colorpalette ? "block" : "hidden"
                    } mt-[50px] ml-[-50px] lg:ml-[50px] absolute z-40`}
                  >
                    <ColorPicker
                      width={300}
                      height={100}
                      color={color}
                      onChange={setColor}
                      hideHSV
                      dark
                    />
                    ;
                  </div>
                  <button
                    onClick={sprintDocument}
                    className="cursor-pointer text-white p-1 mx-1 rounded"
                  >
                    <AiFillPrinter className="text-2xl"></AiFillPrinter>
                  </button>

                  <button
                    className="text-white  p-1 mx-1 rounded"
                    onClick={() => setdemo(!demo)}
                  >
                    <AiFillDatabase className="text-2xl text-gray-400"></AiFillDatabase>
                  </button>
                  
                </div>
              </div>
              <div className="flex justify-center z-0">
                {/* Small Resume */}
                <div
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                  id="smallResume"
                >
                  <div className="bg-gray-200 w-[100%]  ">
                    <div className="space-x-2 m-4 border-separate">
                      <div className="flex pt-3 pb-2 border-b-4 bg-white border-solid text-black  ">
                        <img
                          className="w-[20%] h-[30] p-3 pb-5 pl-7"
                          src="https://randomuser.me/api/portraits/women/71.jpg"
                        ></img>
                        {/* personal detail */}
                        <div className="m-auto">
                          <p className=" text-center text-black text-4xl tracking-widest font-serif m-4 mt-5 ml-8">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </p>
                          <p className="  text-2xl  text-black font-thin  tracking-wider mb-3 ml-10 ">
                            {details.personal.role}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="m-3">
                      <div className="flex gap-3 ">
                        <div className=" min-w-[50%]">
                          <div className=" m-4 ">
                            {details.personal.objective != 0 && (
                              <>
                                <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">
                                  PROFILE
                                </p>
                                <p className="text-sm p-1 pt-4">
                                  {details.personal.objective}
                                </p>
                              </>
                            )}
                          </div>
                          <div>
                            {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">PERSONAL</span> */}

                            {/* HOBBIES */}
                            {details.hobbies.length != 0 &&
                              details.hobbies.filter(
                                (hobbies) => hobbies.enabled
                              ).length > 0 && (
                                <div className="m-3">
                                  <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">
                                    HOBBIES
                                  </p>
                                  {details.hobbies.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          key={item.name}
                                          className="p-1 font-serif text-base font-bold pl-4"
                                        >
                                          <li>{item.name}</li>
                                          <p>{item.enabled}</p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </div>
                              )}

                            {/* LANGUAGES */}
                            {details.languages.length != 0 &&
                              details.languages.filter(
                                (languages) => languages.enabled
                              ).length > 0 && (
                                <div className="m-3">
                                  <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">
                                    LANGUAGES
                                  </p>
                                  {details.languages.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          key={item.name}
                                          className="pt-2 pl-4"
                                        >
                                          <li className="font-bold text-base font-serif tracking-wide">
                                            {item.name} - {item.fluency}
                                          </li>
                                          <p>{item.enabled}</p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </div>
                              )}

                            {/* EDUCATION */}
                            {details.education.length != 0 &&
                              details.education.filter(
                                (education) => education.enabled
                              ).length > 0 && (
                                <div className="p-2 ">
                                  <p className="bg-gray-800 tracking-widest text-center rounded-md text-white p-1 m-1 ">
                                    EDUCATION
                                  </p>

                                  {details.education.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          key={item.institution}
                                          className="text-base p-2 pl-4"
                                        >
                                          <p className="font-semibold text-lg">
                                            {item.institution}
                                          </p>
                                          <p className="text-sm">
                                            {" "}
                                            [{item.startDate}] - [{item.endDate}
                                            ]
                                          </p>
                                          <p>{item.fieldOfStudy}</p>
                                          <p>
                                            {item.typeOfDegree} {item.gpa}
                                          </p>
                                          <p>{item.summary.data}</p>
                                          <p>{item.summary.enabled}</p>
                                          <p>{item.enabled}</p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </div>
                              )}

                            {/* SKILLS */}
                            {details.skills.length != 0 &&
                              details.skills.filter((skills) => skills.enabled)
                                .length > 0 && (
                                <div className="p-2 ">
                                  <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                                    SKILLS
                                  </p>
                                  {details.skills.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          key={item.name}
                                          className=" pl-4 font-serif"
                                        >
                                          <li className="text-base font-semibold p-1">
                                            {item.name} - {item.level}
                                          </li>
                                          <p>{item.enabled}</p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </div>
                              )}
                          </div>

                          {details.projects.length != 0 &&
                            details.projects.filter(
                              (projects) => projects.enabled
                            ).length > 0 && (
                              <div className="  p-3">
                                <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                                  PROJECTS
                                </p>
                                {details.projects.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div
                                        key={item.name}
                                        className="p-1 pl-5 "
                                      >
                                        <p className="font-bold font-serif text-base ">
                                          {item.name}
                                        </p>
                                        <Link href={`{item.website}$`}>
                                          <p className="font-semibold text-sm tracking-wider">
                                            {item.website}
                                          </p>
                                        </Link>
                                        <p className="text-sm">
                                          {item.summary.data}
                                        </p>
                                        <p>{item.summary.enabled}</p>
                                        <p>{item.enabled}</p>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                        </div>
                        <div className="  min-w-[50%] ">
                          {/* NETWORK */}
                          <div className="m-4">
                            <>
                              <h1 className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md heading">
                                NETWORK
                              </h1>
                              <div className="pl-4">
                                <p className=" font-semibold text-md tracking-wider">
                                  {details.personal.phone}
                                </p>
                                <p className=" font-semibold text-md tracking-wider">
                                  {details.personal.email}
                                </p>
                              </div>
                            </>

                            {/* INTERNSHIPS */}
                            {details.work.length != 0 &&
                              details.work.filter((work) => work.enabled)
                                .length > 0 && (
                                <>
                                  <p className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md heading">
                                    INTERNSHIPs
                                  </p>
                                  {details.work.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div key={item.company} className="m-2">
                                          <Link href={`{item.website}$`}>
                                            <span className="font-bold text-lg font-serif tracking-wide">
                                              {item.company}
                                              <span className=" font-bold font-sans text-xs ml-9">
                                                [{item.from}] - [{item.to}]
                                              </span>{" "}
                                            </span>
                                          </Link>
                                          <p className=" font-medium">
                                            {item.designation}
                                          </p>
                                          <p className="">
                                            {item.summary.data}
                                          </p>
                                          <p className="text-sm">
                                            {item.summary.enabled}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}

                            {/* AWARDS */}
                            <div>
                              {details.awards.length != 0 &&
                                details.awards.filter(
                                  (awards) => awards.enabled
                                ).length > 0 && (
                                  <div className="mt-5">
                                    <p className="bg-gray-800 text-white tracking-widest rounded-md text-center  p-1 m-1 heading">
                                      AWARDS
                                    </p>
                                    {details.awards.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div key={item.name} className=" m-2">
                                            <p className="font-bold font-serif text-lg tracking-wide">
                                              {item.name}
                                            </p>
                                            <p className="font-medium">
                                              Awarder : {item.awarder}{" "}
                                              <span className=" font-bold text-gray-600 font-sans text-xs right-5  absolute">
                                                [{item.date}]
                                              </span>
                                            </p>
                                            <p className="text-sm">
                                              {item.summary.data}
                                            </p>
                                            <p>{item.summary.enabled}</p>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {/* CERTIFICATIONS */}
                              {details.certifications.length != 0 &&
                                details.certifications.filter(
                                  (certifications) => certifications.enabled
                                ).length > 0 && (
                                  <div className="mt-5">
                                    <p className="bg-gray-800 tracking-widest rounded-md mt-2 text-center text-white p-1 m-1 heading">
                                      CERTIFICATION
                                    </p>
                                    {details.certifications.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div
                                            key={item.title}
                                            className="pl-2 pt-1"
                                          >
                                            <p className="font-semibold font-serif text-lg">
                                              {item.title}{" "}
                                            </p>
                                            <p className="font-bold text-gray-600 font">
                                              {item.issuer}{" "}
                                              <span className=" font-bold font-sans text-xs absolute right-6">
                                                [{item.date}]
                                              </span>{" "}
                                            </p>
                                            <p className="text-sm">
                                              {item.summary.data}
                                            </p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>
                  {`
                    .heading {
                      color: ${color.hex};
                    }
                  `}
                </style>
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar />
              {/* PREVIEW */}
              <div
                className="lg:hidden text-white border border-white rounded-lg p-2 hover:border-orange-700 hover:text-orange-700 fixed right-[25%] md:right-[16%] top-4 "
                onClick={toggleResume}
              >
                <HiOutlineDocumentSearch></HiOutlineDocumentSearch>
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex h-[80px] shadow-lg justify-end ">
                  <div className="m-5 flex gap-3">
                    <div className="group flex items-center relative">
                      <button
                        className="text-white p-1  rounded-md"
                        onClick={() => {
                          setcolorpalette(!colorpalette);
                        }}
                      >
                        <MdOutlineColorLens className="text-3xl text-gray-200"></MdOutlineColorLens>
                      </button>
                      <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        set color
                      </span>
                    </div>
                    <div className="group flex items-center relative">
                      <button className="text-white p-1  rounded-md"
                        onClick={()=>{setftw(false)}}>
                        <MdOutlineDocumentScanner className="text-2xl text-gray-200"></MdOutlineDocumentScanner>
                      </button>
                      <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        fit to screen
                      </span>
                    </div>
                    <div className="group flex items-center relative">
                      <button className="text-white p-1  rounded-md"
                      onClick={()=>{setftw(true)}}>
                        <TbArrowAutofitWidth className="text-2xl text-gray-200"></TbArrowAutofitWidth>
                      </button>
                      <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        fit to width
                      </span>
                    </div>
                    <div className="group flex items-center relative justify-center">
                      <button
                        onClick={lprintDocument}
                        className="flex-shrink-0 inline-flex items-center justify-center text-gray-200 hover:text-gray-500  mx-2"
                      >
                        <AiFillPrinter className="text-2xl"></AiFillPrinter>
                        <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                          print
                        </span>
                      </button>
                    </div>
                    <div className="group flex items-center relative justify-center">
                      <button
                        onClick={() => setdemo(!demo)}
                        className=" flex-shrink-0 inline-flex items-center justify-center text-gray-200 hover:text-gray-500"
                      >
                        <AiFillDatabase className="text-2xl"></AiFillDatabase>
                        <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                          set demo data
                        </span>
                      </button>
                    </div>
                    <div
                      className={`${
                        colorpalette ? "block" : "hidden"
                      } ml-[50px] absolute z-40`}
                    >
                      {/* <button className="w-5 h-5" style={{backgroundColor:"#9b2121"}}
                      onClick={()=>{
                        // setColor("hex","#9b2121")
                        console.log("clicked",color)
                        // setColor( )  
                      }}
                      >

                      </button> */}
                      <ColorPicker
                        width={300}
                        height={100}
                        color={color}
                        onChange={setColor}
                        hideHSV
                        dark
                      />
                      ;
                    </div>
                  </div>
                  <div className="m-5 flex justify-center">
                    {/* <button
                      onClick={lprintDocument}
                      className="cursor-pointer text-white mx-5 border border-white p-2 rounded"
                    >
                      <AiFillPrinter></AiFillPrinter>
                     
                    </button> */}

                    

                    {/* <button
                      className="text-white border border-white p-2 rounded"
                      onClick={() => setdemo(!demo)}
                    >
                      <AiFillDatabase></AiFillDatabase>
                    </button> */}
                    
                  </div>
                </div>

                <div className="flex justify-center ">
                  {/* large resume */}
 <div
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div className="bg-gray-200 w-[100%]  ">
                      <div className="space-x-2 m-4 border-separate">
                        <div className="flex pt-3 pb-2 border-b-4 bg-white border-solid text-black  ">
                          <img
                            className="w-[20%] h-[30] p-3 pb-5 pl-7"
                            src="https://randomuser.me/api/portraits/women/71.jpg"
                          ></img>
                          {/* personal detail */}
                          <div className="m-auto">
                            <p className=" text-center text-black text-4xl tracking-widest font-serif m-4 mt-5 ml-8">
                              {details.personal.firstName}{" "}
                              {details.personal.lastName}
                            </p>
                            <p className="  text-2xl  text-black font-thin  tracking-wider mb-3 ml-10 ">
                              {details.personal.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="m-3">
                        <div className="flex gap-3 ">
                          <div className=" min-w-[50%]">
                            <div className=" m-4 ">
                              {details.personal.objective != 0 && (
                                <>
                                  <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">
                                    PROFILE
                                  </p>
                                  <p className="text-sm p-1 pt-4">
                                    {details.personal.objective}
                                  </p>
                                </>
                              )}
                            </div>
                            <div>
                              {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">PERSONAL</span> */}

                              {/* HOBBIES */}
                              {details.hobbies.length != 0 &&
                                details.hobbies.filter(
                                  (hobbies) => hobbies.enabled
                                ).length > 0 && (
                                  <div className="m-3">
                                    <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">
                                      HOBBIES
                                    </p>
                                    {details.hobbies.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div
                                            key={item.name}
                                            className="p-1 font-serif text-base font-bold pl-4"
                                          >
                                            <li>{item.name}</li>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {/* LANGUAGES */}
                              {details.languages.length != 0 &&
                                details.languages.filter(
                                  (languages) => languages.enabled
                                ).length > 0 && (
                                  <div className="m-3">
                                    <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center">
                                      LANGUAGES
                                    </p>
                                    {details.languages.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div
                                            key={item.name}
                                            className="pt-2 pl-4"
                                          >
                                            <li className="font-bold text-base font-serif tracking-wide">
                                              {item.name} - {item.fluency}
                                            </li>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {/* EDUCATION */}
                              {details.education.length != 0 &&
                                details.education.filter(
                                  (education) => education.enabled
                                ).length > 0 && (
                                  <div className="p-2 ">
                                    <p className="bg-gray-800 tracking-widest text-center rounded-md text-white p-1 m-1 ">
                                      EDUCATION
                                    </p>

                                    {details.education.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div
                                            key={item.institution}
                                            className="text-base p-2 pl-4"
                                          >
                                            <p className="font-semibold text-lg">
                                              {item.institution}
                                            </p>
                                            <p className="text-sm">
                                              {" "}
                                              [{item.startDate}] - [
                                              {item.endDate}]
                                            </p>
                                            <p>{item.fieldOfStudy}</p>
                                            <p>
                                              {item.typeOfDegree} {item.gpa}
                                            </p>
                                            <p>{item.summary.data}</p>
                                            <p>{item.summary.enabled}</p>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {/* SKILLS */}
                              {details.skills.length != 0 &&
                                details.skills.filter(
                                  (skills) => skills.enabled
                                ).length > 0 && (
                                  <div className="p-2 ">
                                    <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                                      SKILLS
                                    </p>
                                    {details.skills.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div
                                            key={item.name}
                                            className=" pl-4 font-serif"
                                          >
                                            <li className="text-base font-semibold p-1">
                                              {item.name} - {item.level}
                                            </li>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}
                            </div>

                            {details.languages.length != 0 &&
                              details.languages.filter(
                                (languages) => languages.enabled
                              ).length > 0 && (
                                <div className="  p-3">
                                  <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                                    PROJECTS
                                  </p>
                                  {details.projects.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          key={item.name}
                                          className="p-1 pl-5 "
                                        >
                                          <p className="font-bold font-serif text-base ">
                                            {item.name}
                                          </p>
                                          <Link href={`{item.website}$`}>
                                            <p className="font-semibold text-sm tracking-wider">
                                              {item.website}
                                            </p>
                                          </Link>
                                          <p className="text-sm">
                                            {item.summary.data}
                                          </p>
                                          <p>{item.summary.enabled}</p>
                                          <p>{item.enabled}</p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </div>
                              )}
                          </div>
                          <div className="  min-w-[50%] ">
                            {/* NETWORK */}
                            <div className="m-4">
                              <>
                                <h1 className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md heading">
                                  NETWORK
                                </h1>
                                <div className="pl-4">
                                  <p className=" font-semibold text-md tracking-wider">
                                    {details.personal.phone}
                                  </p>
                                  <p className=" font-semibold text-md tracking-wider">
                                    {details.personal.email}
                                  </p>
                                </div>
                              </>

                              {/* INTERNSHIPS */}
                              {details.work.length != 0 &&
                                details.work.filter((work) => work.enabled)
                                  .length > 0 && (
                                  <>
                                    <p className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md heading">
                                      INTERNSHIPS
                                    </p>
                                    {details.work.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div
                                            key={item.company}
                                            className="m-2"
                                          >
                                            <Link href={`{item.website}$`}>
                                              <p className="font-bold text-lg font-serif tracking-wide relative">
                                                {item.company}
                                                <span className="font-sans text-xs absolute text-gray-700 right-0">
                                                  [{item.from}] - [{item.to}]
                                                </span>{" "}
                                              </p>
                                            </Link>
                                            <p className=" font-medium">
                                              {item.designation}
                                            </p>
                                            <p className="">
                                              {item.summary.data}
                                            </p>
                                            <p className="text-sm">
                                              {item.summary.enabled}
                                            </p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </>
                                )}

                              {/* AWARDS */}
                              <div>
                                {details.awards.length != 0 &&
                                  details.awards.filter(
                                    (awards) => awards.enabled
                                  ).length > 0 && (
                                    <div className="mt-5">
                                      <p className="bg-gray-800 tracking-widest rounded-md text-center  text-white p-1 m-1 heading">
                                        AWARDS
                                      </p>
                                      {details.awards.map((item) => (
                                        <>
                                          {item.enabled && (
                                            <div
                                              key={item.name}
                                              className=" m-2"
                                            >
                                              <p className="font-bold font-serif text-lg tracking-wide">
                                                {item.name}
                                              </p>
                                              <p className="font-medium">
                                                Awarder : {item.awarder}{" "}
                                                <span className=" font-bold text-gray-600 font-sans text-xs right-5  absolute">
                                                  [{item.date}]
                                                </span>
                                              </p>
                                              <p className="text-sm">
                                                {item.summary.data}
                                              </p>
                                              <p>{item.summary.enabled}</p>
                                              <p>{item.enabled}</p>
                                            </div>
                                          )}
                                        </>
                                      ))}
                                    </div>
                                  )}

                                {/* CERTIFICATIONS */}
                                {details.certifications.length != 0 &&
                                  details.certifications.filter(
                                    (certifications) => certifications.enabled
                                  ).length > 0 && (
                                    <div className="mt-5">
                                      <p className="bg-gray-800 tracking-widest rounded-md mt-2 text-center text-white p-1 m-1 heading">
                                        CERTIFICATION
                                      </p>
                                      {details.certifications.map((item) => (
                                        <>
                                          {item.enabled && (
                                            <div
                                              key={item.title}
                                              className="pl-2 pt-1"
                                            >
                                              <p className="font-semibold font-serif text-lg">
                                                {item.title}{" "}
                                              </p>
                                              <p className="font-bold text-gray-600 font relative">
                                                {item.issuer}{" "}
                                                <span className=" font-bold font-sans text-xs absolute right-1 ">
                                                  [{item.date}]
                                                </span>{" "}
                                              </p>
                                              <p className="text-sm">
                                                {item.summary.data}
                                              </p>
                                            </div>
                                          )}
                                        </>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
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
