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
import "react-color-palette/lib/css/styles.css";



export default function Dynamic() {
  const user = useUser();
  const { details, setdetails, setdemo, demo } = useContext(ResumeContext);
  const [change, setchange] = useState(false);
  const [colorpalette, setcolorpalette] = useState(false);

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
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-slate-700 to-slate-800">
              <div className="flex border border-white">
                
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
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-300px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                  id="smallResume"
                  // style={{ color: color.hex }}
                >
                 <div className="flex">
                      <div className=" w-[35%] bg-gray-200 p-6">
                        <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
                          <img
                            src="https://randomuser.me/api/portraits/men/40.jpg"
                            alt=""
                            className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                          />
                        </div>
                        <div className="mt-48">
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
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
                                <h1 className="mx-4">
                                  {details.personal.phone}
                                </h1>
                              </div>
                              <div className="flex my-1">
                                <span>
                                  <img
                                    src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                                    className="w-7 h-7"
                                  />
                                </span>
                                <h1 className="mx-2">
                                  {details.personal.email}
                                </h1>
                              </div>

                              {details.social.length != 0 && (
                                <>
                                  {details.social.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          className="my-3 flex"
                                          key={item.network}
                                        >
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
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </>
                          }
                        </div>
                        {details.skills.length != 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              SKILLS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.skills.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <li className="mx-4" key={item.name}>
                                    {item.name}
                                  </li>
                                )}
                              </>
                            ))}
                          </div>
                        )}

                        {details.languages.length != 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              LANGUAGES
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.languages.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <p className="my-2" key={item.name}>
                                    {item.name}
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              HOBBIES
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.hobbies.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <p className="my-2" key={item.name}>
                                    {item.name}
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <>
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              AWARADS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.awards.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <div className="my-2" key={item.name}>
                                    <span className="font-semibold text-[15px]">
                                      {item.name} ({item.date})
                                    </span>
                                    <span className="mx-2 text-[15px]"></span>
                                    <p className="mx-4">
                                      {item.summary.data.slice(0, 38)}
                                    </p>
                                  </div>
                                )}
                              </>
                            ))}
                          </>
                        )}
                      </div>
                      <div className={` w-[70%] pt-10 px-5`}>
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
                              <h1 className="text-xl font-bold tracking-[1px] heading">
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
                              <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                                WORK
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />

                              <div className="ml-1 mt-1">
                                {details.work.map((item) => (
                                  <>
                                    {item.enabled == true && (
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
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}

                          {details.projects.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                                PROJECTS
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />

                              <div className="ml-1 mt-1">
                                {details.projects.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <div className="pt-1">
                                          <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                          <div className="w-1 bg-black h-24 m-1"></div>
                                        </div>
                                        <div className="ml-5 mt-1">
                                          <p className="font-semibold">
                                            {item.from} to {item.to}
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
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}

                          {details.education.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                                EDUCACTION
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              <div className="ml-1 mt-1">
                                {details.education.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div
                                        className="flex"
                                        key={item.institution}
                                      >
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
                                            <p className="">
                                              {item.typeOfDegree}
                                            </p>
                                            <p className="mb-4 font-semibold">
                                              GPA-{item.gpa}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}

                          {details.certifications.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                                CERTIFICATIONS
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              <div className="ml-1 mt-1">
                                {details.certifications.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div
                                        className="flex"
                                        key={item.institution}
                                      >
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
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
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

              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex">
                  <div className="m-5 grow">
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
                      } ml-[50px] absolute z-40`}
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
                  </div>
                  <div className="m-5">
                    <button
                      onClick={lprintDocument}
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
                    // style={{ color: color.hex }}
                  >
                    <div className="flex">
                      <div className=" w-[35%] bg-gray-200 p-6">
                        <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
                          <img
                            src="https://randomuser.me/api/portraits/men/40.jpg"
                            alt=""
                            className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                          />
                        </div>
                        <div className="mt-48">
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
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
                                <h1 className="mx-4">
                                  {details.personal.phone}
                                </h1>
                              </div>
                              <div className="flex my-1">
                                <span>
                                  <img
                                    src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                                    className="w-7 h-7"
                                  />
                                </span>
                                <h1 className="mx-2">
                                  {details.personal.email}
                                </h1>
                              </div>

                              {details.social.length != 0 && (
                                <>
                                  {details.social.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          className="my-3 flex"
                                          key={item.network}
                                        >
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
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </>
                          }
                        </div>
                        {details.skills.length != 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              SKILLS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.skills.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <li className="mx-4" key={item.name}>
                                    {item.name}
                                  </li>
                                )}
                              </>
                            ))}
                          </div>
                        )}

                        {details.languages.length != 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              LANGUAGES
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.languages.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <p className="my-2" key={item.name}>
                                    {item.name}
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              HOBBIES
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.hobbies.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <p className="my-2" key={item.name}>
                                    {item.name}
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <>
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              AWARADS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {details.awards.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <div className="my-2" key={item.name}>
                                    <span className="font-semibold text-[15px]">
                                      {item.name} ({item.date})
                                    </span>
                                    <span className="mx-2 text-[15px]"></span>
                                    <p className="mx-4">
                                      {item.summary.data.slice(0, 38)}
                                    </p>
                                  </div>
                                )}
                              </>
                            ))}
                          </>
                        )}
                      </div>
                      <div className={` w-[70%] pt-10 px-5`}>
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
                              <h1 className="text-xl font-bold tracking-[1px] heading">
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
                              <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                                WORK
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />

                              <div className="ml-1 mt-1">
                                {details.work.map((item) => (
                                  <>
                                    {item.enabled == true && (
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
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}

                          {details.projects.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                                PROJECTS
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />

                              <div className="ml-1 mt-1">
                                {details.projects.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <div className="pt-1">
                                          <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                          <div className="w-1 bg-black h-24 m-1"></div>
                                        </div>
                                        <div className="ml-5 mt-1">
                                          <p className="font-semibold">
                                            {item.from} to {item.to}
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
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}

                          {details.education.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                                EDUCACTION
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              <div className="ml-1 mt-1">
                                {details.education.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div
                                        className="flex"
                                        key={item.institution}
                                      >
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
                                            <p className="">
                                              {item.typeOfDegree}
                                            </p>
                                            <p className="mb-4 font-semibold">
                                              GPA-{item.gpa}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}

                          {details.certifications.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                                CERTIFICATIONS
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              <div className="ml-1 mt-1">
                                {details.certifications.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div
                                        className="flex"
                                        key={item.institution}
                                      >
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
                                    )}
                                  </>
                                ))}
                              </div>
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
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

// import React, { useContext, useEffect, useState } from "react";
// import { demoResume } from "../../../lib/data";
// import Image from "next/image";
// import Link from "next/link";
// import ResumeContext from "../../../context/ResumeContext";
// import { useFieldArray, useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { useUser } from "../../../lib/hooks";
// import SideBar from "../../../components/SideBar";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { ColorPicker, useColor } from "react-color-palette";
// import "react-color-palette/lib/css/styles.css";

// export default function Square() {
//   const user = useUser();
//   const { details, setdetails, setdemo, demo} =
//     useContext(ResumeContext);
//   const [change, setchange] = useState(false);
//   const [colorpalette, setcolorpalette] = useState(false);
//   //to add email fname and lname
//   useEffect(() => {
//     if (user) {
//       setdetails({
//         ...details,
//         personal: {
//           ...details.personal,
//           email: user.email,
//           firstName: user.profile.firstName,
//           lastName: user.profile.lastName,
//         },
//       });
//     }
//   }, [user, change]);

//   useEffect(() => {
//     setchange(!change);
//   }, [demo]);

//   const [open, setopen] = useState("semiopen");

//   //PDF document

//   function lprintDocument() {
//     const printContents = document.getElementById("largeResume").innerHTML;
//     const originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//   }
//   function sprintDocument() {
//     const printContents = document.getElementById("smallResume").innerHTML;
//     const originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//   }

//    useEffect(() => {
//     // document.getElementById("largeResume").style.color = "red"
//   }, [0]);

//   //responsiveness
//   function toggleResume() {
//     if (open == "semiopen") {
//       setopen("closed");
//     } else {
//       setopen("semiopen");
//     }
//   }

//   const [color, setColor] = useColor("hex", "#121212");
//   useEffect(() => {
//     console.log("color:", color);
//     // settextColor()
//   }, [color]);
//   return (
//     <>
//       {details && user && (
//         <div className="flex">
//           {open == "closed" && (
//             <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-slate-700 to-slate-800">
//               <div className="flex border border-white">
                
//                 <div className="m-3 flex">
//                   <button
//                     className="text-white border border-white p-2 rounded-md"
//                     onClick={() => {
//                       setcolorpalette(!colorpalette);
//                     }}
//                   >
//                     COLOR
//                   </button>
//                   <div className={`${colorpalette ? "block" : "hidden"} mt-[50px] ml-[-50px] lg:ml-[50px] absolute z-40`}>
//                     <ColorPicker
//                       width={300}
//                       height={100}
//                       color={color}
//                       onChange={setColor}
//                       hideHSV
//                       dark
//                     />
//                     ;
//                   </div>
//                   <button
//                     onClick={sprintDocument}
//                     className="cursor-pointer text-white border border-white p-1 mx-1 rounded"
//                   >
//                     PRINT
//                   </button>

//                   <button
//                     className="text-white border border-white p-1 mx-1 rounded"
//                     onClick={() => setdemo(!demo)}
//                   >
//                     LOAD
//                   </button>
//                   <button
//                     className=" block lg:hidden border border-white text-white p-1 mx-1 rounded-md"
//                     onClick={toggleResume}
//                   >
//                     DETAILS
//                   </button>
//                 </div>
//               </div>
//               <div className="flex justify-center ">
//                 {/* Small Resume */}
//                 <div
//                   className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-300px] max-h-[297mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
//                   id="smallResume"
//                 >
//                   <div className="flex">
//                   <div className="w-[40%] bg-slate-300">
//                     <div className="photo">
//                       <div className="px-20 pt-10 pb-5">
//                         <img
//                           src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
//                           className="w-[100px] h-[100px]"
//                         ></img>
//                       </div>
//                     </div>
//                     <div className="personal ">
//                       <div className="dob pl-10 pt-3">
//                         <i className="bx bxs-calendar pr-4 text-lg"></i>
//                         <span className="text-base relative bottom-[3px]">
//                           {details.personal.dob}
//                         </span>
//                       </div>
//                       <div className="phone pl-10 pt-1">
//                         <i className="bx bxs-phone pr-4 text-lg"></i>
//                         <span className="text-base relative bottom-1">
//                           {details.personal.phone}
//                         </span>
//                       </div>
//                       <div className="mail pl-10 pt-1">
//                         <i className="bx bxs-envelope pr-4 text-lg"></i>
//                         <span className="text-base relative bottom-1">
//                           {details.personal.email}
//                         </span>
//                       </div>
//                       <div className="social px-14 grid grid-cols-6 pb-4">
//                         {details.social.map((item) => (
//                           <div className="pr-2 pt-1" key={item.network}>
//                             <h1>
//                               <Link href={`${item.url}`}>
//                                 <img
//                                   src={
//                                     "https://www." +
//                                     item.network +
//                                     ".com/favicon.ico"
//                                   }
//                                   className="w-5 grayscale-[40%]"
//                                 ></img>
//                               </Link>
//                             </h1>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     {details.education.length != 0 && (
//                       <div className="education">
//                         <h2 className="text-center text-xl font-serif font-medium underline heading">
//                           E D U C A T I O N
//                         </h2>
//                         {details.education.map((item) => (
//                           <p className="pl-10 pr-5 pt-5" key={item.institution}>
//                             <span className="font-medium">
//                               {item.institution}
//                             </span>
//                             <span className="font-medium">
//                               <br />({item.startDate} to {item.endDate})
//                             </span>
//                             <br />
//                             <i className="bx bxs-graduation"></i>{" "}
//                             {item.typeOfDegree} in {item.fieldOfStudy} (
//                             {item.gpa})
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                     {details.certifications.length != 0 && (
//                       <div className="certifications">
//                         <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                           C E R T I F I C A T I O N S
//                         </h2>
//                         {details.certifications.map((item) => (
//                           <p className="pl-10 pr-5 pt-3" key={item.title}>
//                             <i className="bx bxs-square text-xs pr-3"></i>
//                             {item.title} from {item.issuer}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                     {details.skills.length != 0 && (
//                       <div className="skills">
//                         <div className="pl-10">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5 heading">
//                             S K I L L S
//                           </h2>
//                           {details.skills.map((item) => (
//                             <span className="pr-2" key={item.name}>
//                               {item.name}{" "}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                     {details.hobbies.length != 0 && (
//                       <div className="skills">
//                         <div className="pl-10">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5 heading">
//                             H O B B I E S
//                           </h2>
//                           {details.hobbies.map((item) => (
//                             <span className="pr-2" key={item.name}>
//                               {item.name}{" "}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                     {details.languages.length != 0 && (
//                       <div className="skills">
//                         <div className="pl-10">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5 heading">
//                             L A N G U A G E S
//                           </h2>
//                           {details.languages.map((item) => (
//                             <span className="pr-2" key={item.name}>
//                               {item.name}{" "}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="bg-slate-100 w-[60%]">
//                     <div className="name">
//                       <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600">
//                         <h1>{details.personal.firstName}</h1>
//                         <h1>{details.personal.lastName}</h1>
//                         <h2 className="text-lg font-normal py-3">
//                           {details.personal.role}
//                         </h2>
//                       </div>
//                     </div>
//                     {details.personal.objective.length != 0 && (
//                       <div className="career-objective">
//                         <h2 className="text-center text-xl font-serif font-medium underline pt-6 heading">
//                           C A R E E R O B J E C T I V E
//                         </h2>
//                         <p className="pl-10 pr-5 pt-5">
//                           {details.personal.objective}
//                         </p>
//                       </div>
//                     )}
//                     {details.work.length != 0 && (
//                       <div className="experience">
//                         <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                           E X P E R I E N C E
//                         </h2>
//                         {details.work.map((item) => (
//                           <p className="pl-10 pr-5 pt-5" key={item.company}>
//                             <span className="font-medium text-lg pr-3">
//                               {item.designation} in {item.company}
//                             </span>
//                             <br></br>({item.from} to {item.to})<br />
//                             <Link href={`${item.website}`}>{item.website}</Link>
//                             <p className="pr-5">{item.summary.data}</p>
//                             <br></br>
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                     {details.projects.length != 0 && (
//                       <div className="projects">
//                         <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                           P R O J E C T S
//                         </h2>
//                         {details.projects.map((item) => (
//                           <p className="pl-10 pr-5 pt-5" key={item.name}>
//                             <span className="font-medium text-lg pr-3">
//                               {item.name}
//                             </span>{" "}
//                             ({item.from} to {item.to})<br />
//                             <Link href={item.website}>{item.website}</Link>
//                             <br></br>
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                     {details.certifications.length != 0 && (
//                       <div className="awards">
//                         <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                           C E R T I F I C A T I O N S
//                         </h2>
//                         {details.certifications.map((item) => (
//                           <p className="pl-10 pr-5 pt-3" key={item.title}>
//                             <i className="bx bxs-award pr-1"></i>
//                             <span className="font-medium">
//                               {item.title}
//                             </span>{" "}
//                             from {item.issuer}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                     {details.awards.length != 0 && (
//                       <div className="awards">
//                         <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                           A W A R D S
//                         </h2>
//                         {details.awards.map((item) => (
//                           <p className="pl-10 pr-5 pt-3" key={item.name}>
//                             <i className="bx bxs-award pr-1"></i>
//                             <span className="font-medium">
//                               {item.name}
//                             </span>{" "}
//                             from {item.awarder}
//                           </p>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   </div>
//                 </div>
//                 <style jsx>
//                   {`
//                   .heading{
//                     color:${color.hex}
//                   }`}
//                 </style>
//               </div>
//             </div>
//           )}

//           {open == "semiopen" && (
//             <div>
//               <SideBar />

//               <div
//                 className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
//                 onClick={toggleResume}
//               >
//                 PREVIEW
//               </div>

//               <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
//                 <div className="flex">
//                   <div className="m-5 grow">
//                     <button
//                     className="text-white border border-white p-2 rounded-md"
//                     onClick={() => {
//                       setcolorpalette(!colorpalette);
//                     }}
//                   >
//                     COLOR
//                   </button>
//                   <div className={`${colorpalette ? "block" : "hidden"} ml-[50px] absolute z-40`}>
//                     <ColorPicker
//                       width={300}
//                       height={100}
//                       color={color}
//                       onChange={setColor}
//                       hideHSV
//                       dark
//                     />
//                     ;
//                   </div>
//                   </div>
//                   <div className="m-5">
//                     <button
//                       onClick={lprintDocument}
//                       className="cursor-pointer text-white mx-5 border border-white p-2 rounded"
//                     >
//                       PRINT
//                     </button>

//                     <button
//                       className="text-white border border-white p-2 rounded"
//                       onClick={() => setdemo(!demo)}
//                     >
//                       LOAD
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex justify-center ">
//                   {/* large resume */}

//                   <div
//                     className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-100px] xl:scale-[0.9] xl:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[297mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
//                     id="largeResume"
//                   >
//                     <div className="flex">
//                     <div className="w-[40%] bg-slate-300">
//                       <div className="photo">
//                         <div className="px-20 pt-10 pb-5">
//                           <img
//                             src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
//                             className="w-[100px] h-[100px]"
//                           ></img>
//                         </div>
//                       </div>
//                       <div className="personal">
//                         <div className="dob pl-10 pt-3">
//                           <i className="bx bxs-calendar pr-4 text-lg"></i>
//                           <span className="text-base relative bottom-[3px]">
//                             {details.personal.dob}
//                           </span>
//                         </div>
//                         <div className="phone pl-10 pt-1">
//                           <i className="bx bxs-phone pr-4 text-lg"></i>
//                           <span className="text-base relative bottom-1">
//                             {details.personal.phone}
//                           </span>
//                         </div>
//                         <div className="mail pl-10 pt-1">
//                           <i className="bx bxs-envelope pr-4 text-lg"></i>
//                           <span className="text-base relative bottom-1">
//                             {details.personal.email}
//                           </span>
//                         </div>
//                         <div className="social px-14 grid grid-cols-6 pb-4">
//                           {details.social.map((item) => (
//                             <div className="pr-2 pt-1" key={item.network}>
//                               <h1>
//                                 <Link href={`${item.url}`}>
//                                   <img
//                                     src={
//                                       "https://www." +
//                                       item.network +
//                                       ".com/favicon.ico"
//                                     }
//                                     className="w-5 grayscale-[40%]"
//                                   ></img>
//                                 </Link>
//                               </h1>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       {details.education.length != 0 && (
//                         <div className="education">
//                           <h2 className="text-center text-xl font-serif font-medium underline heading">
//                             E D U C A T I O N
//                           </h2>
//                           {details.education.map((item) => (
//                             <p
//                               className="pl-10 pr-5 pt-5"
//                               key={item.institution}
//                             >
//                               <span className="font-medium">
//                                 {item.institution}
//                               </span>
//                               <span className="font-medium">
//                                 <br />({item.startDate} to {item.endDate})
//                               </span>
//                               <br />
//                               <i className="bx bxs-graduation"></i>{" "}
//                               {item.typeOfDegree} in {item.fieldOfStudy} (
//                               {item.gpa})
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                       {details.certifications.length != 0 && (
//                         <div className="certifications">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                             C E R T I F I C A T I O N S
//                           </h2>
//                           {details.certifications.map((item) => (
//                             <p className="pl-10 pr-5 pt-3" key={item.title}>
//                               <i className="bx bxs-square text-xs pr-3"></i>
//                               {item.title} from {item.issuer}
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                       {details.skills.length != 0 && (
//                         <div className="skills">
//                           <div className="pl-10">
//                             <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5 heading">
//                               S K I L L S
//                             </h2>
//                             {details.skills.map((item) => (
//                               <span className="pr-2" key={item.name}>
//                                 {item.name}{" "}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                       {details.hobbies.length != 0 && (
//                         <div className="skills">
//                           <div className="pl-10">
//                             <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5 heading">
//                               H O B B I E S
//                             </h2>
//                             {details.hobbies.map((item) => (
//                               <span className="pr-2" key={item.name}>
//                                 {item.name}{" "}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                       {details.languages.length != 0 && (
//                         <div className="skills">
//                           <div className="pl-10">
//                             <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5 heading">
//                               L A N G U A G E S
//                             </h2>
//                             {details.languages.map((item) => (
//                               <span className="pr-2" key={item.name}>
//                                 {item.name}{" "}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                     <div className="bg-slate-100 w-[60%]">
//                       <div className="name">
//                         <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600">
//                           <h1>{details.personal.firstName}</h1>
//                           <h1>{details.personal.lastName}</h1>
//                           <h2 className="text-lg font-normal py-3">
//                             {details.personal.role}
//                           </h2>
//                         </div>
//                       </div>
//                       {details.personal.objective.length != 0 && (
//                         <div className="career-objective">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-6 heading">
//                             C A R E E R O B J E C T I V E
//                           </h2>
//                           <p className="pl-10 pr-5 pt-5">
//                             {details.personal.objective}
//                           </p>
//                         </div>
//                       )}
//                       {details.work.length != 0 && (
//                         <div className="experience">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                             E X P E R I E N C E
//                           </h2>
//                           {details.work.map((item) => (
//                             <p className="pl-10 pr-5 pt-5" key={item.company}>
//                               <span className="font-medium text-lg pr-3">
//                                 {item.designation} in {item.company}
//                               </span>
//                               <br></br>({item.from} to {item.to})<br />
//                               <Link href={`${item.website}`}>
//                                 {item.website}
//                               </Link>
//                               <p className="pr-5">{item.summary.data}</p>
//                               <br></br>
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                       {details.projects.length != 0 && (
//                         <div className="projects">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                             P R O J E C T S
//                           </h2>
//                           {details.projects.map((item) => (
//                             <p className="pl-10 pr-5 pt-5" key={item.name}>
//                               <span className="font-medium text-lg pr-3">
//                                 {item.name}
//                               </span>{" "}
//                               ({item.from} to {item.to})<br />
//                               <Link href={item.website}>{item.website}</Link>
//                               <br></br>
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                       {details.certifications.length != 0 && (
//                         <div className="awards">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                             C E R T I F I C A T I O N S
//                           </h2>
//                           {details.certifications.map((item) => (
//                             <p className="pl-10 pr-5 pt-3" key={item.title}>
//                               <i className="bx bxs-award pr-1"></i>
//                               <span className="font-medium">
//                                 {item.title}
//                               </span>{" "}
//                               from {item.issuer}
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                       {details.awards.length != 0 && (
//                         <div className="awards">
//                           <h2 className="text-center text-xl font-serif font-medium underline pt-5 heading">
//                             A W A R D S
//                           </h2>
//                           {details.awards.map((item) => (
//                             <p className="pl-10 pr-5 pt-3" key={item.name}>
//                               <i className="bx bxs-award pr-1"></i>
//                               <span className="font-medium">
//                                 {item.name}
//                               </span>{" "}
//                               from {item.awarder}
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                     </div>
//                   </div>
//                   <style jsx>
//                     {`
//                     .heading{
//                       color:${color.hex}
//                     }`}
//                   </style>
//                 </div>
//               </div>
//             </div>
      
//           )}

          
//         </div>
//       )}
//     </>
//   );
// }
