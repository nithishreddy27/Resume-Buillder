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

export default function Amsterdam() {
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
                  <div className="absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
                    <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
                      {details.personal.firstName} {details.personal.lastName}
                    </h1>
                    <h1 className="mt-3">{details.personal.role}</h1>

                    <div className="mt-5 mb-4 flex  justify-center align-middle">
                      {details.social.length != 0 && (
                        <>
                          {details.social.map((item) => (
                            <div className="mx-5 mt-1" key={item.network}>
                              <span className="">
                                <Link href={item.url}>
                                  <img
                                    src={
                                      "https://www." +
                                      item.network +
                                      ".com/favicon.ico"
                                    }
                                    className="w-5 grayscale-[40%] "
                                  />
                                </Link>
                              </span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-[40%] h-[285mm] bg-gray-200">
                      <div className="mt-56 mx-10 flex flex-col">
                        <div>
                          <h4 className="font-bold tracking-[4px] heading">
                            CONTACTS
                          </h4>
                          <hr className="w-[100%] h-1 bg-black my-2" />
                          <p className="font-semibold my-2 ">
                            {details.personal.email}
                          </p>
                          <p className="font-semibold my-2">
                            {details.personal.phone}
                          </p>
                        </div>
                        {details.education.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] mt-2 heading">
                                EDUCATION
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />

                              {details.education.map((item) => (
                                <div
                                  className="flex flex-col"
                                  key={item.institution}
                                >
                                  <h1 className="text-black font-semibold mt-1">
                                    {item.institution}
                                  </h1>
                                  <h1 className="mb-2 font-semibold text-sm">
                                    [{item.startDate}] - [{item.endDate}]
                                  </h1>

                                  <span className="font-semibold">
                                    {item.typeOfDegree}
                                  </span>
                                  <span className="">{item.fieldOfStudy}</span>

                                  <span className="mb-4">
                                    <b>GPA - </b> {item.gpa}
                                  </span>
                                </div>
                              ))}
                            </>
                          )}
                      </div>
                      <div className="mx-10 flex flex-col mt-4">
                        {details.skills.length != 0 && (
                          <>
                            <h4 className="font-bold tracking-[4px] heading">
                              SKILLS
                            </h4>
                            <hr className="w-[100%] h-1 bg-black my-2" />
                            {details.skills.map((item) => (
                              <>
                                <div className="flex justify-between">
                                  <span
                                    className="font-semibold mt-1"
                                    key={item.name}
                                  >
                                    {item.name}
                                  </span>
                                  <span className=" mt-1 mb-3 ">
                                    {item.level}
                                  </span>
                                </div>
                              </>
                            ))}
                          </>
                        )}
                      </div>
                      <div className="mx-10 flex flex-col mt-4">
                      {details.awards.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] heading">
                                AWARDS
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {details.awards.map((item) => (
                                <>
                                  <h1
                                    className="font-semibold mt-1"
                                    key={item.name}
                                  >
                                    {item.name}</h1>
                                    <h1>
                                    [{item.date}]
                                  </h1>
                                  <span className="mb-3">{item.awarder}</span>
                                </>
                              ))}
                            </>
                          )}
                      </div>
                      <div className="mx-10 flex flex-col mt-4">
                        {details.hobbies.length != 0 && (
                          <>
                            <h4 className="font-bold tracking-[4px] heading">
                              HOBBIES
                            </h4>
                            <hr className="w-[100%] h-1 bg-black my-2" />
                            {details.hobbies.map((item) => (
                              <>
                                <span className="font-semibold mt-1">
                                  {item.name}
                                </span>
                              </>
                            ))}
                          </>
                        )}
                      </div>
                      <div className="mx-10 flex flex-col mt-4">
                        {details.languages.length != 0 && (
                          <>
                            <h4 className="font-bold tracking-[4px] heading">
                              LANGUAGES
                            </h4>
                            <hr className="w-[100%] h-1 bg-black my-2" />
                            {details.languages.map((item) => (
                              <>
                                <span
                                  className="font-semibold mt-1"
                                  key={item.name}
                                >
                                  {item.name}
                                </span>
                              </>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="w-[60%] mt-52 mx-10">
                      {details.personal.objective.length != 0 && (
                        <>
                          <h2 className="font-bold tracking-[4px] heading">
                            OBJECTIVE
                          </h2>
                          <hr className="w-[100%] h-1 bg-black my-1" />
                          <p className="my-4">{details.personal.objective}</p>
                        </>
                      )}
                      {details.projects.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] heading">
                              PROJECTS
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            {details.projects.map((item) => (
                              <>
                                <div className="my-4">
                                  <h1 className="text-black font-bold mt-3 relative">
                                    {item.name}{" "}
                                    <span className="text-black font-semibold text-xs absolute right-0">
                                      [{item.from} - {item.to}]
                                    </span>{" "}
                                  </h1>

                                  <p className="ml-4 mt-2">
                                    {item.summary.data}
                                  </p>
                                </div>
                              </>
                            ))}
                          </>
                        )}
                      {details.work.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] heading">
                              INTERNSHIP
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                      {details.work.map((item) => (
                        <>
                          <div className="flex flex-col" key={item.company}>
                            {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                            <h1 className="text-black relative  font-bold mt-3">
                              {item.company}{" "}
                              <span className="font-semibold text-xs absolute right-0">
                                [{item.from} - {item.to}]
                              </span>
                            </h1>
                            <span className="text-black font-semibold mx-4">
                              {item.designation}
                            </span>
                            <p className="ml-4">{item.summary.data}</p>
                          </div>
                        </>
                      ))}
                      </>
                      )}

                      {details.certifications.length != 0 && (
                        <>
                          <h2 className="font-bold tracking-[4px] heading">
                            CERTIFICATIONS
                          </h2>
                          <hr className="w-[100%] h-1 bg-black my-1" />
                          {details.certifications.map((item) => (
                            <>
                              <div className="flex flex-col" key={item.title}>
                                {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                                <span className="text-black font-bold mt-3">
                                  {item.title}
                                </span>

                                <h1 className="text-black font-semibold mx-4 relative">
                                  {item.issuer}
                                  <span className="font-semibold text-sm absolute right-0">
                                    [{item.date}]
                                  </span>
                                </h1>
                                {/* <p className="ml-4">{item.summary.data}</p> */}
                              </div>
                            </>
                          ))}
                        </>
                      )}
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
                  >
                    <div className="absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
                      <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
                        {details.personal.firstName} {details.personal.lastName}
                      </h1>
                      <h1 className="mt-3">{details.personal.role}</h1>

                      <div className="mt-5 mb-4 flex  justify-center align-middle">
                        {details.social.length != 0 && (
                          <>
                            {details.social.map((item) => (
                              <div className="mx-5 mt-1" key={item.network}>
                                <span className="">
                                  <Link href={item.url}>
                                    <img
                                      src={
                                        "https://www." +
                                        item.network +
                                        ".com/favicon.ico"
                                      }
                                      className="w-5 grayscale-[40%] "
                                    />
                                  </Link>
                                </span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-[40%] h-auto bg-gray-200">
                        <div className="mt-56 mx-10 flex flex-col">
                          <div>
                            <h4 className="font-bold tracking-[4px] heading">
                              CONTACTS
                            </h4>
                            <hr className="w-[100%] h-1 bg-black my-2" />
                            <p className="font-semibold my-2 ">
                              {details.personal.email}
                            </p>
                            <p className="font-semibold my-2">
                              {details.personal.phone}
                            </p>
                          </div>
                          {details.education.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] mt-2 heading">
                                EDUCATION
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />

                              {details.education.map((item) => (
                                <div
                                  className="flex flex-col"
                                  key={item.institution}
                                >
                                  <h1 className="text-black font-semibold mt-1">
                                    {item.institution}
                                  </h1>
                                  <h1 className="mb-2 font-semibold text-sm">
                                    [{item.startDate}] - [{item.endDate}]
                                  </h1>

                                  <span className="font-semibold">
                                    {item.typeOfDegree}
                                  </span>
                                  <span className="">{item.fieldOfStudy}</span>

                                  <span className="mb-4">
                                    <b>GPA - </b> {item.gpa}
                                  </span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                        <div className="mx-10 flex flex-col mt-4">
                          {details.skills.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] heading">
                                SKILLS
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {details.skills.map((item) => (
                                <>
                                  <div className="flex justify-between">
                                    <span
                                      className="font-semibold mt-1"
                                      key={item.name}
                                    >
                                      {item.name}
                                    </span>
                                    <span className=" mt-1 mb-3 ">
                                      {item.level}
                                    </span>
                                  </div>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                        <div className="mx-10 flex flex-col mt-4">
                          {details.awards.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] heading">
                                AWARDS
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {details.awards.map((item) => (
                                <>
                                  <h1
                                    className="font-semibold mt-1"
                                    key={item.name}
                                  >
                                    {item.name}
                                    </h1>
                                    <h1>
                                    [{item.date}]
                                    </h1>
                                  <span className="mb-3">{item.awarder}</span>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                        <div className="mx-10 flex flex-col mt-4">
                          {details.hobbies.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] heading">
                                HOBBIES
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {details.hobbies.map((item) => (
                                <>
                                  <span className="font-semibold mt-1">
                                    {item.name}
                                  </span>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                        <div className="mx-10 flex flex-col mt-4">
                          {details.languages.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] heading">
                                LANGUAGES
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {details.languages.map((item) => (
                                <>
                                  <span
                                    className="font-semibold mt-1"
                                    key={item.name}
                                  >
                                    {item.name}
                                  </span>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="w-[60%] h-auto mt-52 mx-10">
                        {details.personal.objective.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] heading">
                              OBJECTIVE
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            <p className="my-4">{details.personal.objective}</p>
                          </>
                        )}
                        {details.projects.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] heading">
                              PROJECTS
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            {details.projects.map((item) => (
                              <>
                                <div className="my-4">
                                  <h1 className="text-black font-bold mt-3 relative">
                                    {item.name}{" "}
                                    <span className="text-black font-semibold text-xs absolute right-0">
                                      [{item.from} - {item.to}]
                                    </span>{" "}
                                  </h1>

                                  <p className="ml-4 mt-2">
                                    {item.summary.data}
                                  </p>
                                </div>
                              </>
                            ))}
                          </>
                        )}

                        {details.work.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] heading">
                              WORK
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            {details.work.map((item) => (
                              <>
                                <div
                                  className="flex flex-col"
                                  key={item.company}
                                >
                                  {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                                  <h1 className="text-black relative  font-bold mt-3">
                                    {item.company}{" "}
                                    <span className="font-semibold text-xs absolute right-0">
                                      [{item.from} - {item.to}]
                                    </span>
                                  </h1>
                                  <span className="text-black font-semibold mx-4">
                                    {item.designation}
                                  </span>
                                  <p className="ml-4">{item.summary.data}</p>
                                </div>
                              </>
                            ))}
                          </>
                        )}
                        {details.certifications.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] heading">
                              CERTIFICATIONS
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            {details.certifications.map((item) => (
                              <>
                                <div className="flex flex-col" key={item.title}>
                                  {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                                  <span className="text-black font-bold mt-3">
                                    {item.title}
                                  </span>

                                  <h1 className="text-black font-semibold mx-4 relative">
                                    {item.issuer}
                                    <span className="font-semibold text-sm absolute right-0">
                                      [{item.date}]
                                    </span>
                                  </h1>
                                  {/* <p className="ml-4">{item.summary.data}</p> */}
                                </div>
                              </>
                            ))}
                          </>
                        )}
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
