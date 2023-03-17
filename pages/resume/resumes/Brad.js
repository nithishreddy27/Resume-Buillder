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

import { RxHobbyKnife } from "react-icons/rx";

import "react-color-palette/lib/css/styles.css";

export default function Brad() {
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
            <div className="mx-auto w-full bg-cover lg:w-3/4 xl:w-3/5 bg-gradient-to-b from-slate-700 to-slate-800">
              <div className="border-b border-r border-gray-300 py-2 top-[-5px] fixed lg:sticky w-[100%] lg:w-[100%] z-40 bg-slate-700">
                <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                  {/* <h1>Provast</h1> */}
                  <img
                    src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=1920&q=75"
                    width={220}
                    height={55}
                  />
                  {/* <div>
                      <button>Preview</button>
                    </div> */}
                </div>
              </div>
              <div className="flex border border-white mt-[80px] w-[150%]">
                <div className="m-3 flex">
                  <button
                    className="text-white border border-white p-2 rounded-md"
                    onClick={() => {
                      setcolorpalette(!colorpalette);
                    }}
                  >
                    COLOR
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
                  <button
                    className=" block lg:hidden  text-white p-1 mx-1 rounded-md"
                    onClick={toggleResume}
                  >
                    <TbListDetails className="text-2xl text-gray-400"></TbListDetails>
                  </button>
                </div>
              </div>
              <div className="flex justify-center ">
                {/* Small Resume */}
                <div
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-300px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                  id="smallResume"
                  // style={{ color: color.hex }}
                ></div>
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

              <div
                className="lg:hidden text-white border border-white rounded-lg p-2 hover:border-orange-700 hover:text-orange-700 absolute left-[10%] top-[92px] "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex h-[80px] shadow-lg justify-center">
                  <div className="m-5 flex grow-[0.8] gap-3">
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
                  <div className="m-5 flex justify-center grow-[0.5]">
                    {/* <button
                      onClick={lprintDocument}
                      className="cursor-pointer text-white mx-5 border border-white p-2 rounded"
                    >
                      <AiFillPrinter></AiFillPrinter>
                     
                    </button> */}

                    <div className="group flex items-center relative justify-center">
                      <button
                        onClick={lprintDocument}
                        className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-200 hover:text-gray-500  mx-2"
                      >
                        <AiFillPrinter className="text-2xl"></AiFillPrinter>
                        <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                          print
                        </span>
                      </button>
                    </div>

                    {/* <button
                      className="text-white border border-white p-2 rounded"
                      onClick={() => setdemo(!demo)}
                    >
                      <AiFillDatabase></AiFillDatabase>
                    </button> */}
                    <div className="group flex items-center relative justify-center">
                      <button
                        onClick={() => setdemo(!demo)}
                        className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-200 hover:text-gray-500 mx-2"
                      >
                        <AiFillDatabase className="text-2xl"></AiFillDatabase>
                        <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                          set demo data
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center ">
                  {/* large resume */}

                  <div
                    className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.6] lg:mt-[-180px] ${
                      ftw
                        ? "xl:scale-[0.9] xl:mt-[-30px]"
                        : "xl:scale-[0.6] xl:mt-[-150px]"
                    }  sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                    id="largeResume"
                    // style={{ color: color.hex }}
                  >
                    <div className="p-7">
                      <div className="flex items-center justify-between">
                        <div className="w-[20%]">
                          <div className="w-36 h-36 rounded-md overflow-hidden mr-4">
                            <img
                              //   src={profile?.image}
                              className="rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="h-36 flex flex-col justify-center px-4 w-[80%] border">
                          <div className="font-bold text-white uppercase text-3xl">
                            <span className="mr-2">{details.firstName}</span>
                            <span>{details.lastName}</span>
                          </div>
                          <p className="text-md font-semibold tracking-wide text-white">
                            {details.personal.role}
                          </p>
                          <p className="text-xs mt-1 font-semibold tracking-wide text-white">
                            {details.personal.email} &middot;{" "}
                            {details.personal.phone}
                          </p>
                        </div>
                      </div>
                      <div className="px-8 py-4">
                        {details.personal.objective != 0 && (
                          <div className="w-full">
                            <h4 className="inline italic text-lg font-bold border-b-4 border-gray-700">
                              Profile Summary
                            </h4>
                            <h4 className="markdown text-[13.5px] tracking-wide mt-3 mb-4">
                              {objective}
                            </h4>
                          </div>
                        )}
                        {details.education.length != 0 &&
                          details.education.filter(
                            (education) => education.enabled
                          ).length > 0 && (
                            <div className="mt-4">
                              <h4 className="inline italic text-lg font-bold border-b-4 border-gray-700">
                                Education
                              </h4>
                              <div className="mt-3">
                                {details.education.map((item) => (
                                  <div key={item.institution} className="mb-2">
                                    <div>
                                      <div className="flex flex-col justify-between">
                                        <div className="text-[16px] font-semibold">
                                          {item.fieldOfStudy} from{" "}
                                          {item.institution}, with {item.gpa}{" "}
                                          CGPA.
                                        </div>
                                        <div className="uppercase text-sm text-gray-400 font-semibold tracking-widest mb-1">
                                          {/* {`${
                                            months[
                                              new Date(
                                                item.startDate
                                              )?.getMonth() + 1
                                            ]
                                          } ${new Date(
                                            item.startDate
                                          )?.getFullYear()} - ${
                                            months[
                                              new Date(
                                                item.endDate
                                              )?.getMonth() + 1
                                            ]
                                          } ${new Date(
                                            item.endDate
                                          )?.getFullYear()}`} */}
                                        </div>
                                      </div>
                                      <div className="markdown text-[13px]">
                                        {item.summary.data}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        {/* {projects?.filter((project) => project?.enabled)
                          ?.length > 0 && (
                          <div className="mt-4">
                            <h4 className="inline italic text-lg font-bold border-b-4 border-gray-700">
                              Projects
                            </h4>
                            <div className="mt-3">
                              {projects
                                ?.filter((project) => project?.enabled === true)
                                .map((project) => (
                                  <div key={project?._id} className="mb-2">
                                    <div>
                                      <div className="flex justify-between">
                                        <div className="text-[16px] font-semibold">
                                          {project?.name}
                                        </div>
                                        <div className="relative font-semibold text-sm ">
                                          <div>{project?.website}</div>
                                          <div className="absolute w-full bottom-1 left-0 border-t border-gray-500"></div>
                                        </div>
                                      </div>
                                      {project?.summary?.enabled && (
                                        <div className="markdown capitalize text-[13px]">
                                          {project?.summary?.data}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                        {skills?.filter((skill) => skill?.enabled)?.length >
                          0 && (
                          <div className="mt-4">
                            <h4 className="inline italic text-lg font-bold border-b-4 border-gray-700">
                              Skills
                            </h4>
                            <div className="mt-3 grid grid-cols-2 gap-1">
                              {skills
                                ?.filter((skill) => skill?.enabled === true)
                                .map((skill) => (
                                  <div key={skill?._id} className="mb-2">
                                    <div className="flex flex-col justify-between">
                                      <div className="text-xs font-semibold">
                                        {skill?.name}
                                      </div>
                                      <div className="relative w-11/12 h-2 border-2">
                                        <div
                                          className={`${
                                            skill?.level === "Beginner"
                                              ? "w-[25%]"
                                              : skill?.level === "Intermediate"
                                              ? "w-[55%] "
                                              : skill?.level === "Expert"
                                              ? "w-full"
                                              : ""
                                          } absolute h-full top-0 left-0 bg-gray-800`}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                        {languages?.filter((language) => language?.enabled)
                          ?.length > 0 && (
                          <div className="mt-4">
                            <h4 className="inline italic text-lg font-bold border-b-4 border-gray-700">
                              Languages
                            </h4>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                              {languages
                                ?.filter(
                                  (langauge) => langauge?.enabled === true
                                )
                                .map((language) => (
                                  <div
                                    key={language?._id}
                                    className="w-11/12 flex items-center justify-between"
                                  >
                                    <span className="font-semibold">
                                      {language?.name}
                                    </span>
                                    <span className="text-sm">
                                      {language?.fluency}
                                    </span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )} */}
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
