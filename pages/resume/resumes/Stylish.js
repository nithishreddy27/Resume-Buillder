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
import { TbArrowAutofitWidth } from "react-icons/tb";
import { HiOutlineDocumentSearch } from "react-icons/hi";

import { RxHobbyKnife } from "react-icons/rx";

import "react-color-palette/lib/css/styles.css";

export default function Stylish() {
  const user = useUser();
  const { details, setdetails, setdemo, demo } = useContext(ResumeContext);
  const [change, setchange] = useState(false);
  const [colorpalette, setcolorpalette] = useState(false);
  const [ftw, setftw] = useState(true);

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
                    src="https://www.provast.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=2048&q=75"
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
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[100px] sm:mt-[10px] mx-[-210px] mt-[-150px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover z-0 overflow-hidden drop-shadow-2xl flex flex-row"
                  id="smallResume"
                >
                  <div className=" w-[210mm] ">
                    <div className="flex ">
                      <img
                        className="h-[38mm] p-1   m-2"
                        src="https://randomuser.me/api/portraits/women/71.jpg"
                      ></img>

                      {details.social.length != 0 && (
                        <div>
                          {details.social.map((item) => (
                            <>
                              {item.enabled && (
                                <div
                                  key={item.network}
                                  className="mx-3 ml-5 pb-4  mt-3 "
                                >
                                  <span>
                                    <Link href={item.url}>
                                      <img
                                        src={
                                          "https://www." +
                                          item.network +
                                          ".com/favicon.ico"
                                        }
                                        className="w-5 "
                                      />
                                    </Link>
                                  </span>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )}

                      <div className=" m-3 mt-2 right-0 w-full    ">
                        <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 heading ">
                          PROFILE
                        </p>
                        {details.personal.objective != 0 && (
                          <p className="text-sm text-black p-3 pl-2 pt-2">
                            {details.personal.objective}
                          </p>
                        )}
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
                              {details.skills.length != 0 &&
                                details.skills.filter(
                                  (skills) => skills.enabled
                                ).length > 0 && (
                                  <div className="p-2 ">
                                    <p className="text-black text-lg font-bold tracking-wider pb-3 heading">
                                      SKILLS
                                    </p>
                                    {details.skills.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div key={item.name} className="ml-2">
                                            <span className="text-lg  ">
                                              <li>
                                                {item.name} - {item.level}
                                              </li>
                                            </span>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {details.languages.length != 0 &&
                                details.languages.filter(
                                  (languages) => languages.enabled
                                ).length > 0 && (
                                  <div className="text-lg pb-2">
                                    <p className="text-black font-bold tracking-wider  p-1 px-3 py-1 heading">
                                      LANGUAGES
                                    </p>
                                    {details.languages.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div key={item.name} className="ml-4">
                                            <li className="">
                                              {item.name} : {item.fluency}
                                            </li>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {details.awards.length != 0 &&
                                details.awards.filter(
                                  (awards) => awards.enabled
                                ).length > 0 && (
                                  <div className="pt-2 pb-2  ">
                                    <p className="text-black font-bold tracking-wider  p-1 mx-2 heading">
                                      AWARDS
                                    </p>
                                    {details.awards.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div
                                            key={item.name}
                                            className="text-lg  ml-3"
                                          >
                                            <li className="font-semibold">
                                              {item.awarder}
                                            </li>
                                            <p className="text-sm">
                                              {" "}
                                              [{item.date}]{" "}
                                            </p>
                                            <p>{item.name}</p>
                                            <p className="text-sm pr-3">
                                              {item.summary.data}
                                            </p>
                                            <p className="text-sm">
                                              {item.summary.enabled}
                                            </p>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {details.hobbies.length != 0 &&
                                details.hobbies.filter(
                                  (hobbies) => hobbies.enabled
                                ).length > 0 && (
                                  <div className="text-lg pb-2">
                                    <p className="text-black font-bold tracking-wider  p-1 px-3 py-1 heading">
                                      HOBBIES
                                    </p>
                                    {details.hobbies.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div key={item.name}>
                                            <li className="pl-6">
                                              {item.name}
                                            </li>
                                            <p>{item.enabled}</p>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                )}

                              {details.projects.length != 0 &&
                                details.projects.filter(
                                  (projects) => projects.enabled
                                ).length > 0 && (
                                  <div className=" pt-1 pb-3 ">
                                    <p className="text-black font-bold tracking-wider  p-1 px-2 pt-3 heading  ">
                                      PROJECTS
                                    </p>

                                    {details.projects.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <div key={item.name} className="pl-1">
                                            <div className=" ml-2 text-black ">
                                              <p className="tracking-wide font-semibold">
                                                {item.name}
                                              </p>
                                              <p className="text-sm">
                                                [{item.from}] - [{item.to}]
                                              </p>

                                              <Link href={item.website}>
                                                <p className=" ml-1 text-sm">
                                                  {item.website}
                                                </p>
                                              </Link>
                                              <p className="pr-2 text-sm  ">
                                                {item.summary.data}
                                              </p>
                                              <p>{item.summary.enabled}</p>
                                              <p>{item.enabled}</p>
                                              <p className="p-2"> </p>
                                            </div>
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
                      <div className="w-[70%]">
                        {details.education.length != 0 &&
                          details.education.filter(
                            (education) => education.enabled
                          ).length > 0 && (
                            <div className="pl-2 ">
                              <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 heading">
                                EDUCATION
                              </p>
                              <hr></hr>
                              {details.education.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      key={item.institution}
                                      className="text-base p-2 text-black "
                                    >
                                      <p className="font-semibold text-black ">
                                        {item.institution}
                                        <span className="absolute right-3">
                                          [{item.startDate} - {item.endDate}]
                                        </span>
                                      </p>
                                      <p>{item.fieldOfStudy}</p>
                                      <p>{item.typeOfDegree}</p>
                                      <p>{item.gpa}</p>
                                      <p>{item.summary.enabled}</p>
                                      <p>{item.enabled}</p>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}

                        {details.work.length != 0 &&
                          details.work.filter((work) => work.enabled).length >
                            0 && (
                            <div className="pl-2 ">
                              <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 heading">
                                INTERNSHIP
                              </p>
                              <hr></hr>
                              {details.work.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      key={item.company}
                                      className="text-base p-2 text-black "
                                    >
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
                                  )}
                                </>
                              ))}
                            </div>
                          )}

                        {details.certifications.length != 0 &&
                          details.certifications.filter(
                            (certifications) => certifications.enabled
                          ).length > 0 && (
                            <div>
                              <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-1 heading">
                                CERTIFICATION
                              </p>
                              <hr className="m-2"></hr>
                              {details.certifications.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      key={item.title}
                                      className="pt-4 text-black mx-3 "
                                    >
                                      <p className="font-semibold ">
                                        {item.title}{" "}
                                        <span className="right-0 absolute pr-4">
                                          [{item.date}]
                                        </span>
                                      </p>

                                      <p>{item.issuer}</p>
                                      <p>{item.summary.data}</p>
                                      <p>{item.summary.enabled}</p>
                                      <p>{item.enabled}</p>
                                    </div>
                                  )}
                                </>
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
                      <button
                        className="text-white p-1  rounded-md"
                        onClick={() => {
                          setftw(false);
                        }}
                      >
                        <MdOutlineDocumentScanner className="text-2xl text-gray-200"></MdOutlineDocumentScanner>
                      </button>
                      <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        fit to screen
                      </span>
                    </div>
                    <div className="group flex items-center relative">
                      <button
                        className="text-white p-1  rounded-md"
                        onClick={() => {
                          setftw(true);
                        }}
                      >
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
                      } mt-[50px] absolute z-40`}
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
                        width={250}
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
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[10px] lg:scale-[0.6] lg:mt-[-180px] ${
                    ftw
                      ? "xl:scale-[0.9] xl:mt-[-30px]"
                      : "xl:scale-[0.6] xl:mt-[-180px]"
                  }  sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                  id="largeResume"
                  // style={{ color: color.hex }}
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
<style jsx>
                      {`
                        .heading {
                          color: ${color.hex};
                        }
                      `}
                    </style>
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
