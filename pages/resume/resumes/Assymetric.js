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

import { RxHobbyKnife } from "react-icons/rx";

import "react-color-palette/lib/css/styles.css";

export default function Assymetric() {
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
            <div className="mx-auto w-full bg-cover lg:w-3/4 xl:w-3/5 bg-gradient-to-b from-slate-700 to-slate-800">
              <div className="border-b border-r border-gray-300 py-2 top-[-5px] fixed lg:sticky w-[100%] lg:w-[100%] z-40 bg-slate-700">
                <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                  {/* <h1>Provast</h1> */}
                  <img
                    src="https://www.provast.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=2048&q=75"
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
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                  id="smallResume"
                  style={{ color: color.hex }}
                >
                  <div className="  bg-white w-[205mm]">
                    <div className="flex m-2 ">
                      <div className="m-2 ">
                        <img
                          className="w-[35mm] h-[30mm] pb-2"
                          src="https://randomuser.me/api/portraits/women/71.jpg"
                        ></img>
                        <span className="  text-xl  bg-white   rounded-sm  text-black tracking-wide  font-semibold ">
                          {details.personal.role}
                        </span>

                        {details.hobbies.length != 0 && (
                          <div className="text-sm">
                            <p className="text-m font-medium ">HOBBIES</p>
                            {details.hobbies.map((item) => (
                              <div key={item.name}>
                                <p>{item.name}</p>
                                <p>{item.enabled}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {details.skills.length != 0 && (
                          <div className="text-sm">
                            <p className="text-m font-medium ">SKILLS</p>
                            {details.skills.map((item) => (
                              <div key={item.name}>
                                <span className="text-sm">
                                  {item.name} - {item.level}
                                </span>
                                <p>{item.enabled}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className=" m-7 ">
                        <p className="font-bold text-6xl text p-3 pl-2   pb-1 font-sans tracking-wider text-left">
                          {details.personal.firstName}{" "}
                          {details.personal.lastName}
                        </p>
                        <div className=" bg-gray-200 rounded-xl m-3 ml-[10%]">
                          {details.personal.objective.length != 0 && (
                            <>
                              <p className=" text-black font-bold text-xl p-2 pt-2 pl-4 tracking-wid mt-5 ">
                                PROFILE
                              </p>
                              <p className="text-sm text-black p-3 pl-2 pt-2">
                                {details.personal.objective}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <hr className="border-1"></hr>
                    <div className="flex space-x-4 m-4">
                      <div flex-col>
                        {details.education.length != 0 && (
                          <div className="b-[50%] rounded-md  p-2">
                            <p className="font-bold  m-2 ">EDUCATION</p>
                            {details.education.map((item) => (
                              <div
                                key={item.institution}
                                className="text-sm p-1"
                              >
                                <p className="font-semibold">
                                  {item.institution} [{item.startDate} -{" "}
                                  {item.endDate}]
                                </p>
                                <p>{item.fieldOfStudy}</p>
                                <p>{item.typeOfDegree}</p>
                                <p>{item.gpa}</p>
                                <p>{item.summary.enabled}</p>
                                <p>{item.enabled}</p>
                              </div>
                            ))}
                            <div className="pb-3 pt-2">
                              <p className="text-black font-bold tracking-wider  p-1 px-2 pt-2 ">
                                WORK
                              </p>
                              {details.work.map((item) => (
                                <div key={item.company} className="m-2">
                                  <Link href={item.website}>
                                    <p className=" font-semibold text-base tracking-wider">
                                      {item.company}
                                    </p>
                                  </Link>
                                  <p>
                                    [ {item.from}] - [{item.to}]
                                  </p>
                                  <p>{item.designation}</p>

                                  <p>{item.summary.enabled}</p>
                                </div>
                              ))}
                            </div>
                            <div className="pt-2">
                              <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                                AWARDS:
                              </p>
                              {details.awards.map((item) => (
                                <div
                                  key={item.name}
                                  className="text-sm pt-4 ml-3"
                                >
                                  <li className="font-semibold">
                                    {item.name} - [{item.date}]
                                  </li>
                                  <p>{item.awarder}</p>
                                  {/* <p>{item.summary.data}</p> */}
                                  <p>{item.summary.enabled}</p>
                                  <p>{item.enabled}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-col ">
                        {details.projects.length != 0 && (
                          <div className=" pt-1 pb-3 bg-gray-200 rounded-xl p-2 mt-5 mr-5">
                            <p className="text-black font-bold tracking-wider  p-2 px-2 pt-3   ">
                              PROJECTS
                            </p>

                            {details.projects.map((item) => (
                              <div key={item.name} className=" text-black ">
                                <Link href={item.website}>
                                  <p className="font-bold  tracking-wider">
                                    {item.name}
                                  </p>
                                </Link>
                                <p className="">
                                  {item.from}- {item.to}
                                </p>
                                {/* <p>{item.summary.data}</p> */}
                                <p>{item.summary.enabled}</p>
                                <p>{item.enabled}</p>
                                <p className="p-2"> </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {details.certifications.length != 0 && (
                          <div className=" pt-1 pb-3 bg-gray-200 rounded-xl mt-5 mr-4">
                            <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-2 ">
                              CERTIFICATION
                            </p>

                            {details.certifications.map((item) => (
                              <div
                                key={item.title}
                                className="pt-4 text-black mx-3 "
                              >
                                <p className="font-semibold">{item.title} </p>
                                <p>[{item.date}]</p>
                                <p></p>
                                <p>{item.issuer}</p>
                                {/* <p>{item.summary.data}</p> */}
                                <p>{item.summary.enabled}</p>
                                <p>{item.enabled}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex mt-4 m-4 bg-gray-200 rounded-xl">
                          {details.social.map((item) => (
                            <div
                              key={item.network}
                              className="mx-3 pb-4  mt-3 "
                            >
                              <span className="">
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
                          ))}
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                    id="largeResume"
                    style={{ color: color.hex }}
                  >
                    <div className="  bg-white w-[205mm]">
                      <div className="flex m-2 ">
                        <div className="m-2 ">
                          <img
                            className="w-[35mm] h-[30mm] pb-2"
                            src="https://randomuser.me/api/portraits/women/71.jpg"
                          ></img>
                          <span className="  text-xl  bg-white   rounded-sm  text-black tracking-wide  font-semibold ">
                            {details.personal.role}
                          </span>

                          {details.hobbies.length != 0 && (
                            <div className="text-sm">
                              <p className="text-m font-medium ">HOBBIES</p>
                              {details.hobbies.map((item) => (
                                <div key={item.name}>
                                  <p>{item.name}</p>
                                  <p>{item.enabled}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {details.skills.length != 0 && (
                            <div className="text-sm">
                              <p className="text-m font-medium ">SKILLS</p>
                              {details.skills.map((item) => (
                                <div key={item.name}>
                                  <span className="text-sm">
                                    {item.name} - {item.level}
                                  </span>
                                  <p>{item.enabled}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className=" m-7 ">
                          <p className="font-bold text-6xl text p-3 pl-2   pb-1 font-sans tracking-wider text-left">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </p>
                          <div className=" bg-gray-200 rounded-xl m-3 ml-[10%]">
                            {details.personal.objective.length != 0 && (
                              <>
                                <p className=" text-black font-bold text-xl p-2 pt-2 pl-4 tracking-wid mt-5 ">
                                  PROFILE
                                </p>
                                <p className="text-sm text-black p-3 pl-2 pt-2">
                                  {details.personal.objective}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <hr className="border-1"></hr>
                      <div className="flex space-x-4 m-4">
                        <div flex-col>
                          {details.education.length != 0 && (
                            <div className="b-[50%] rounded-md  p-2">
                              <p className="font-bold  m-2 ">EDUCATION</p>
                              {details.education.map((item) => (
                                <div
                                  key={item.institution}
                                  className="text-sm p-1"
                                >
                                  <p className="font-semibold">
                                    {item.institution} [{item.startDate} -{" "}
                                    {item.endDate}]
                                  </p>
                                  <p>{item.fieldOfStudy}</p>
                                  <p>{item.typeOfDegree}</p>
                                  <p>{item.gpa}</p>
                                  <p>{item.summary.enabled}</p>
                                  <p>{item.enabled}</p>
                                </div>
                              ))}
                              <div className="pb-3 pt-2">
                                <p className="text-black font-bold tracking-wider  p-1 px-2 pt-2 ">
                                  WORK
                                </p>
                                {details.work.map((item) => (
                                  <div key={item.company} className="m-2">
                                    <Link href={item.website}>
                                      <p className=" font-semibold text-base tracking-wider">
                                        {item.company}
                                      </p>
                                    </Link>
                                    <p>
                                      [ {item.from}] - [{item.to}]
                                    </p>
                                    <p>{item.designation}</p>

                                    <p>{item.summary.enabled}</p>
                                  </div>
                                ))}
                              </div>
                              <div className="pt-2">
                                <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                                  AWARDS:
                                </p>
                                {details.awards.map((item) => (
                                  <div
                                    key={item.name}
                                    className="text-sm pt-4 ml-3"
                                  >
                                    <li className="font-semibold">
                                      {item.name} - [{item.date}]
                                    </li>
                                    <p>{item.awarder}</p>
                                    {/* <p>{item.summary.data}</p> */}
                                    <p>{item.summary.enabled}</p>
                                    <p>{item.enabled}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-col ">
                          {details.projects.length != 0 && (
                            <div className=" pt-1 pb-3 bg-gray-200 rounded-xl p-2 mt-5 mr-5">
                              <p className="text-black font-bold tracking-wider  p-2 px-2 pt-3   ">
                                PROJECTS
                              </p>

                              {details.projects.map((item) => (
                                <div key={item.name} className=" text-black ">
                                  <Link href={item.website}>
                                    <p className="font-bold  tracking-wider">
                                      {item.name}
                                    </p>
                                  </Link>
                                  <p className="">
                                    {item.from}- {item.to}
                                  </p>
                                  {/* <p>{item.summary.data}</p> */}
                                  <p>{item.summary.enabled}</p>
                                  <p>{item.enabled}</p>
                                  <p className="p-2"> </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {details.certifications.length != 0 && (
                            <div className=" pt-1 pb-3 bg-gray-200 rounded-xl mt-5 mr-4">
                              <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-2 ">
                                CERTIFICATION
                              </p>

                              {details.certifications.map((item) => (
                                <div
                                  key={item.title}
                                  className="pt-4 text-black mx-3 "
                                >
                                  <p className="font-semibold">{item.title} </p>
                                  <p>[{item.date}]</p>
                                  <p></p>
                                  <p>{item.issuer}</p>
                                  {/* <p>{item.summary.data}</p> */}
                                  <p>{item.summary.enabled}</p>
                                  <p>{item.enabled}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="flex mt-4 m-4 bg-gray-200 rounded-xl">
                            {details.social.map((item) => (
                              <div
                                key={item.network}
                                className="mx-3 pb-4  mt-3 "
                              >
                                <span className="">
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
                            ))}
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
