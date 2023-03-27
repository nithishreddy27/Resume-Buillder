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

export default function Elegant() {
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
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[100px] sm:mt-[10px] mx-[-210px] mt-[-150px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover z-0 overflow-hidden drop-shadow-2xl flex flex-row"
                  id="smallResume"
                >
                  <div className="absolute mt-10 z-10 w-[210mm] flex bg-gradient-to-r from-gray-300 to-slate-50">
                    <img
                      className="rounded-full ml-10 border-[12px] border-cyan-800 w-48"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                      alt="ProfilePhoto"
                    />
                    <div className="m-14">
                      <h1 className="text-4xl font-semibold">
                        {details.personal.firstName} {details.personal.lastName}
                      </h1>
                      <h1>{details.personal.role}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 w-[100%] z-0 h-[297mm]">
                    <div className="bg-cyan-800 text-white">
                      <div className="mt-64 mx-6">
                        <div>
                          <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                            CONTACTS
                          </h1>
                          <h1 className="text-white">
                            {details.personal.email}
                          </h1>
                          <h1 className="text-white">
                            {details.personal.phone}
                          </h1>
                          <h1 className="text-white">{details.personal.dob}</h1>
                        </div>
                        {details.social.length != 0 &&
                          details.social.filter((social) => social.enabled)
                            .length > 0 && (
                            <div>
                              <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                                SOCIAL
                              </h1>
                              {details.social.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      className="pr-2 pt-1"
                                      key={item.network}
                                    >
                                      <h1>
                                        <Link href={`${item.url}`}>
                                          {item.network}
                                        </Link>
                                      </h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.skills.length != 0 &&
                          details.skills.filter((skills) => skills.enabled)
                            .length > 0 && (
                            <div>
                              <h1 className="border-2 border-white text-white mt-5 mb-3 flex justify-center align-middle py-2 heading">
                                SKILLS
                              </h1>
                              {details.skills.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      className="flex justify-between"
                                      key={item.name}
                                    >
                                      <h1 className="text-white">
                                        {item.name}
                                      </h1>
                                      <h1 className="text-xs py-1 text-white">
                                        {item.level}
                                      </h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.awards.length != 0 &&
                          details.awards.filter((awards) => awards.enabled)
                            .length > 0 && (
                            <div>
                              <h1 className="border-2 border-white text-white mt-5 mb-3 flex justify-center align-middle py-2 heading">
                                AWARDS
                              </h1>
                              {details.awards.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      className="flex justify-between"
                                      key={item.name}
                                    >
                                      <h1 className="text-white">
                                        {item.name} from {item.awarder}
                                      </h1>
                                      <h1 className="text-xs py-1 text-white">
                                        {item.level}
                                      </h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.hobbies.length != 0 &&
                          details.hobbies.filter((hobbies) => hobbies.enabled)
                            .length > 0 && (
                            <div>
                              <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                                HOBBIES
                              </h1>
                              {details.hobbies.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div key={item.name}>
                                      <h1 className="text-white">
                                        {item.name}
                                      </h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.languages.length != 0 &&
                          details.languages.filter(
                            (languages) => languages.enabled
                          ).length && (
                            <div>
                              <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                                LANGUAGES
                              </h1>
                              {details.languages.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div key={item.name}>
                                      <h1 className="text-white">
                                        {item.name}
                                      </h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="col-span-2 text-black">
                      <div className="mt-64 mx-6">
                        {details.personal.objective.length != 0 && (
                          <div>
                            <h1 className="text-xl border-b-2 border-black mb-3 heading">
                              PROFILE
                            </h1>
                            <p className="text-sm">
                              {details.personal.objective}
                            </p>
                          </div>
                        )}
                        {details.education.length != 0 &&
                          details.education.filter(
                            (education) => education.enabled
                          ).length > 0 && (
                            <div>
                              <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                EDUCATION
                              </h1>
                              {details.education.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      className="py-1"
                                      key={item.institution}
                                    >
                                      <h1 className="font-semibold relative">
                                        {item.institution}
                                        <span className="absolute right-0 text-xs">
                                          {item.startDate} - {item.endDate}
                                        </span>
                                      </h1>
                                      <p className="text-sm">
                                        {item.fieldOfStudy}
                                      </p>
                                      <p class="">{item.summary.data}</p>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.work.length != 0 &&
                          details.work.filter((work) => work.enabled).length >
                            0 && (
                            <div>
                              <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                WORK EXPERIENCE
                              </h1>
                              {details.work.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div className="py-1" key={item.company}>
                                      <h1 className="font-semibold relative">
                                        {item.company}
                                        <span className="absolute right-0 text-xs">
                                          {item.from} - {item.to}
                                        </span>
                                      </h1>
                                      <p className="text-sm">
                                        {item.designation}
                                      </p>
                                      <p class="">{item.summary.data}</p>
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
                            <div>
                              <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                PROJECTS
                              </h1>
                              {details.projects.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div className="py-1" key={item.name}>
                                      <h1 className="font-semibold relative">
                                        {item.name}
                                        <span className="absolute right-0 text-xs">
                                          {item.from} - {item.to}
                                        </span>
                                      </h1>
                                      <p className="text-sm">{item.website}</p>
                                      <p className="mr-5">
                                        {item.summary.data}
                                      </p>
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
                              <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                CERTIFICATIONS
                              </h1>
                              {details.certifications.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div className="py-1" key={item.title}>
                                      <h1 className="font-semibold relative">
                                        {item.issuer}
                                        <span className="absolute right-0 text-xs">
                                          {item.date}
                                        </span>
                                      </h1>
                                      <p className="text-sm">
                                        {item.designation}
                                      </p>
                                      {/* <p class="">{item.summary.data}</p> */}
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
                    <div className="absolute mt-10 z-10 w-[210mm] flex bg-gradient-to-r from-gray-300 to-slate-50">
                      <img
                        className="rounded-full ml-10 border-[12px] border-cyan-800 w-48"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                        alt="ProfilePhoto"
                      />
                      <div className="m-14">
                        <h1 className="text-4xl font-semibold">
                          {details.personal.firstName}{" "}
                          {details.personal.lastName}
                        </h1>
                        <h1>{details.personal.role}</h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 w-[100%] z-0 h-[297mm]">
                      <div className="bg-cyan-800 text-white">
                        <div className="mt-64 mx-6">
                          <div>
                            <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                              CONTACTS
                            </h1>
                            <h1 className="text-white">
                              {details.personal.email}
                            </h1>
                            <h1 className="text-white">
                              {details.personal.phone}
                            </h1>
                            <h1 className="text-white">
                              {details.personal.dob}
                            </h1>
                          </div>
                          {details.social.length != 0 &&
                            details.social.filter((social) => social.enabled)
                              .length > 0 && (
                              <div>
                                <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                                  SOCIAL
                                </h1>
                                {details.social.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div
                                        className="pr-2 pt-1"
                                        key={item.network}
                                      >
                                        <h1>
                                          <Link href={`${item.url}`}>
                                            {item.network}
                                          </Link>
                                        </h1>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          {details.skills.length != 0 &&
                            details.skills.filter((skills) => skills.enabled)
                              .length > 0 && (
                              <div>
                                <h1 className="border-2 border-white text-white mt-5 mb-3 flex justify-center align-middle py-2 heading">
                                  SKILLS
                                </h1>
                                {details.skills.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div
                                        className="flex justify-between"
                                        key={item.name}
                                      >
                                        <h1 className="text-white">
                                          {item.name}
                                        </h1>
                                        <h1 className="text-xs py-1 text-white">
                                          {item.level}
                                        </h1>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          {details.awards.length != 0 &&
                            details.awards.filter((awards) => awards.enabled)
                              .length > 0 && (
                              <div>
                                <h1 className="border-2 border-white text-white mt-5 mb-3 flex justify-center align-middle py-2 heading">
                                  AWARDS
                                </h1>
                                {details.awards.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div
                                        className="flex justify-between"
                                        key={item.name}
                                      >
                                        <h1 className="text-white">
                                          {item.name} from {item.awarder}
                                        </h1>
                                        <h1 className="text-xs py-1 text-white">
                                          {item.level}
                                        </h1>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          {details.hobbies.length != 0 &&
                            details.hobbies.filter((hobbies) => hobbies.enabled)
                              .length > 0 && (
                              <div>
                                <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                                  HOBBIES
                                </h1>
                                {details.hobbies.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div key={item.name}>
                                        <h1 className="text-white">
                                          {item.name}
                                        </h1>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          {details.languages.length != 0 &&
                            details.languages.filter(
                              (languages) => languages.enabled
                            ).length && (
                              <div>
                                <h1 className="border-2 border-white  mt-5 mb-3 flex justify-center align-middle py-2 text-white heading">
                                  LANGUAGES
                                </h1>
                                {details.languages.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div key={item.name}>
                                        <h1 className="text-white">
                                          {item.name}
                                        </h1>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-span-2 text-black">
                        <div className="mt-64 mx-6">
                          {details.personal.objective.length != 0 && (
                            <div>
                              <h1 className="text-xl border-b-2 border-black mb-3 heading">
                                PROFILE
                              </h1>
                              <p className="text-sm">
                                {details.personal.objective}
                              </p>
                            </div>
                          )}
                          {details.education.length != 0 &&
                            details.education.filter(
                              (education) => education.enabled
                            ).length > 0 && (
                              <div>
                                <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                  EDUCATION
                                </h1>
                                {details.education.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div
                                        className="py-1"
                                        key={item.institution}
                                      >
                                        <h1 className="font-semibold relative">
                                          {item.institution}
                                          <span className="absolute right-0 text-xs">
                                            {item.startDate} - {item.endDate}
                                          </span>
                                        </h1>
                                        <p className="text-sm">
                                          {item.fieldOfStudy}
                                        </p>
                                        <p class="">{item.summary.data}</p>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          {details.work.length != 0 &&
                            details.work.filter((work) => work.enabled).length >
                              0 && (
                              <div>
                                <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                  WORK EXPERIENCE
                                </h1>
                                {details.work.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div className="py-1" key={item.company}>
                                        <h1 className="font-semibold relative">
                                          {item.company}
                                          <span className="absolute right-0 text-xs">
                                            {item.from} - {item.to}
                                          </span>
                                        </h1>
                                        <p className="text-sm">
                                          {item.designation}
                                        </p>
                                        <p class="">{item.summary.data}</p>
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
                              <div>
                                <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                  PROJECTS
                                </h1>
                                {details.projects.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div className="py-1" key={item.name}>
                                        <h1 className="font-semibold relative">
                                          {item.name}
                                          <span className="absolute right-0 text-xs">
                                            {item.from} - {item.to}
                                          </span>
                                        </h1>
                                        <p className="text-sm">
                                          {item.website}
                                        </p>
                                        <p className="mr-5">
                                          {item.summary.data}
                                        </p>
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
                                <h1 className="text-xl border-b-2 border-black mb-3 mt-5 heading">
                                  CERTIFICATIONS
                                </h1>
                                {details.certifications.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <div className="py-1" key={item.title}>
                                        <h1 className="font-semibold relative">
                                          {item.issuer}
                                          <span className="absolute right-0 text-xs">
                                            {item.date}
                                          </span>
                                        </h1>
                                        <p className="text-sm">
                                          {item.designation}
                                        </p>
                                        {/* <p class="">{item.summary.data}</p> */}
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
                  <style jsx>
                    {`
                    .heading{
                      color:${color.hex}
                    }`}
                  </style>

                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
