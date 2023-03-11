import React, { useContext, useEffect, useState } from "react";
import Loading from "../../../components/Loading";
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
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function Berlin() {
  const user = useUser();
  const { details, setdetails, setdemo, demo } = useContext(ResumeContext);
  const [change, setchange] = useState(false);
  const [colorpalette, setcolorpalette] = useState(false);

  var acount,
    ccount,
    ecount,
    hcount,
    icount,
    lcount,
    pcount,
    scount = 0;

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
  useEffect(() => {
    // document.getElementById("largeResume").style.color = "red"
  }, [0]);
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
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-slate-700 to-slate-800">
              <div className="flex border border-white">
                <div className="m-3 flex grow">
                  <div className="flex mt-1"></div>
                </div>
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
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                   <div>
                      <div className="h-auto p-10 border-b-4">
                        <div>
                          <h1 className="text-4xl font-sans font-semibold">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </h1>
                          <h1 className="text-sm text-gray-700 font-semibold mt-4">
                            {details.personal.role}
                          </h1>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 mt-10">
                        <div className="border-r-4 px-10">
                          <div>
                            <h1 className="text-2xl font-semibold">DETAILS</h1>
                            <hr className="w-[15%] h-1 bg-black"></hr>
                            <h1 className="text-sm font-semibold pt-3">
                              DOB
                              <span className="text-sm text-gray-700">
                                {" : "}
                                {details.personal.dob}
                              </span>
                            </h1>
                            <h1 className="text-sm font-semibold pt-3">
                              PHONE
                              <span className="text-sm text-gray-700">
                                {" : "}
                                {details.personal.phone}
                              </span>
                            </h1>
                            <h1 className="text-sm font-semibold pt-3">
                              EMAIL
                              <span className="text-sm text-gray-700">
                                {" : "}
                                {details.personal.email}
                              </span>
                            </h1>
                            {details.social.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <div
                                    className="text-sm font-semibold pt-3"
                                    key={item.network}
                                  >
                                    <a href="{item.url}">{item.network}</a>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                          {details.education.length != 0 && (
                            <div>
                              {details.education.filter(
                                (education) => education.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    EDUCATION
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.education.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div
                                          className="my-5"
                                          key={item.institution}
                                        >
                                          <span className="text-sm font-bold">
                                            {item.institution}
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            {item.fieldOfStudy}{" "}
                                            <span className="text-xs font-semibold text-gray-700">
                                              ({item.startDate} to{" "}
                                              {item.endDate})
                                            </span>
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}

                          {details.skills.length != 0 && (
                            <div className="">
                              {details.skills.filter((skills) => skills.enabled)
                                .length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-2">
                                    SKILLS
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.skills.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.awards.length != 0 && (
                            <div className="">
                              {details.awards.filter((awards) => awards.enabled)
                                .length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-2">
                                    AWARDS
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.awards.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.hobbies.length != 0 && (
                            <div>
                              {details.hobbies.filter(
                                (hobbies) => hobbies.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    HOBBIES
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.hobbies.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.languages.length != 0 && (
                            <div>
                              {details.languages.filter(
                                (languages) => languages.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    LANGUAGES
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.languages.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="col-span-2 px-10">
                          {details.personal.objective != 0 && (
                            <div className="border-b-2">
                              <h1 className="text-2xl font-semibold">
                                PROFILE
                              </h1>
                              <hr className="w-[8%] h-1 bg-black"></hr>
                              <p className="text-sm text-gray-700 py-5">
                                {details.personal.objective}
                              </p>
                            </div>
                          )}
                          {details.work.length != 0 && (
                            <div className="border-b-2">
                              {details.work.filter((work) => work.enabled)
                                .length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    EMPLOYMENT HISTORY
                                  </h1>
                                  <hr className="w-[8%] h-1 bg-black"></hr>
                                  {details.work.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div
                                          className="my-5"
                                          key={item.company}
                                        >
                                          <span className="text-sm font-bold mt-10">
                                            {item.company}
                                            {" - "}
                                            <span className="text-sm font-bold mt-10">
                                              {item.designation}
                                            </span>
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            ({item.from} to {item.to})
                                          </p>
                                          <p class="text-sm text-gray-700">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.projects.length != 0 && (
                            <div className="border-b-2">
                              {details.projects.filter(
                                (projects) => projects.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    PROJECTS
                                  </h1>
                                  <hr className="w-[8%] h-1 bg-black"></hr>
                                  {details.projects.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div className="my-5" key={item.name}>
                                          <span className="text-sm font-bold mt-10">
                                            <a href="{item.website}">
                                              {item.name}
                                            </a>
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            ({item.from} to {item.to})
                                          </p>
                                          <p class="text-sm text-gray-700">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.certifications.length != 0 && (
                            <div>
                              {details.certifications.filter(
                                (certifications) => certifications.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    CERTIFICATIONS
                                  </h1>
                                  <hr className="w-[8%] h-1 bg-black"></hr>
                                  {details.certifications.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div className="my-5" key={item.title}>
                                          <span className="text-sm font-bold mt-10">
                                            {item.title}
                                            {" - "}
                                            <span className="text-sm font-bold mt-10">
                                              {item.issuer}
                                            </span>
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            ({item.date})
                                          </p>
                                          <p class="text-sm text-gray-700">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ;
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
                  <div className="m-5 flex grow">
                    <div className="flex mt-1">
                      <div
                        className="w-8 h-8 border-[2px] border-white bg-red-500 mx-1 rounded-full"
                        onClick={() => {
                          setColor("red");
                        }}
                      ></div>
                      <div
                        className="w-8 h-8 border-[2px] border-white bg-gray-500 rounded-full"
                        onClick={() => {
                          setColor("gray");
                        }}
                      ></div>
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div>
                      <div className="h-auto p-10 border-b-4">
                        <div>
                          <h1 className="text-4xl font-sans font-semibold">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </h1>
                          <h1 className="text-sm text-gray-700 font-semibold mt-4">
                            {details.personal.role}
                          </h1>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 mt-10">
                        <div className="border-r-4 px-10">
                          <div>
                            <h1 className="text-2xl font-semibold">DETAILS</h1>
                            <hr className="w-[15%] h-1 bg-black"></hr>
                            <h1 className="text-sm font-semibold pt-3">
                              DOB
                              <span className="text-sm text-gray-700">
                                {" : "}
                                {details.personal.dob}
                              </span>
                            </h1>
                            <h1 className="text-sm font-semibold pt-3">
                              PHONE
                              <span className="text-sm text-gray-700">
                                {" : "}
                                {details.personal.phone}
                              </span>
                            </h1>
                            <h1 className="text-sm font-semibold pt-3">
                              EMAIL
                              <span className="text-sm text-gray-700">
                                {" : "}
                                {details.personal.email}
                              </span>
                            </h1>
                            {details.social.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <div
                                    className="text-sm font-semibold pt-3"
                                    key={item.network}
                                  >
                                    <a href="{item.url}">{item.network}</a>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                          {details.education.length != 0 && (
                            <div>
                              {details.education.filter(
                                (education) => education.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    EDUCATION
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.education.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div
                                          className="my-5"
                                          key={item.institution}
                                        >
                                          <span className="text-sm font-bold">
                                            {item.institution}
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            {item.fieldOfStudy}{" "}
                                            <span className="text-xs font-semibold text-gray-700">
                                              ({item.startDate} to{" "}
                                              {item.endDate})
                                            </span>
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}

                          {details.skills.length != 0 && (
                            <div className="">
                              {details.skills.filter((skills) => skills.enabled)
                                .length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-2">
                                    SKILLS
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.skills.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.awards.length != 0 && (
                            <div className="">
                              {details.awards.filter((awards) => awards.enabled)
                                .length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-2">
                                    AWARDS
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.awards.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.hobbies.length != 0 && (
                            <div>
                              {details.hobbies.filter(
                                (hobbies) => hobbies.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    HOBBIES
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.hobbies.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.languages.length != 0 && (
                            <div>
                              {details.languages.filter(
                                (languages) => languages.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    LANGUAGES
                                  </h1>
                                  <hr className="w-[15%] h-1 bg-black"></hr>
                                  {details.languages.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div key={item.name}>
                                          <h1 className="text-sm text-gray-800 pt-2">
                                            {item.name}
                                          </h1>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="col-span-2 px-10">
                          {details.personal.objective != 0 && (
                            <div className="border-b-2">
                              <h1 className="text-2xl font-semibold">
                                PROFILE
                              </h1>
                              <hr className="w-[8%] h-1 bg-black"></hr>
                              <p className="text-sm text-gray-700 py-5">
                                {details.personal.objective}
                              </p>
                            </div>
                          )}
                          {details.work.length != 0 && (
                            <div className="border-b-2">
                              {details.work.filter((work) => work.enabled)
                                .length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    EMPLOYMENT HISTORY
                                  </h1>
                                  <hr className="w-[8%] h-1 bg-black"></hr>
                                  {details.work.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div
                                          className="my-5"
                                          key={item.company}
                                        >
                                          <span className="text-sm font-bold mt-10">
                                            {item.company}
                                            {" - "}
                                            <span className="text-sm font-bold mt-10">
                                              {item.designation}
                                            </span>
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            ({item.from} to {item.to})
                                          </p>
                                          <p class="text-sm text-gray-700">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.projects.length != 0 && (
                            <div className="border-b-2">
                              {details.projects.filter(
                                (projects) => projects.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    PROJECTS
                                  </h1>
                                  <hr className="w-[8%] h-1 bg-black"></hr>
                                  {details.projects.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div className="my-5" key={item.name}>
                                          <span className="text-sm font-bold mt-10">
                                            <a href="{item.website}">
                                              {item.name}
                                            </a>
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            ({item.from} to {item.to})
                                          </p>
                                          <p class="text-sm text-gray-700">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                          {details.certifications.length != 0 && (
                            <div>
                              {details.certifications.filter(
                                (certifications) => certifications.enabled
                              ).length > 0 && (
                                <>
                                  <h1 className="text-2xl font-semibold pt-5">
                                    CERTIFICATIONS
                                  </h1>
                                  <hr className="w-[8%] h-1 bg-black"></hr>
                                  {details.certifications.map((item) => (
                                    <>
                                      {item.enabled == true && (
                                        <div className="my-5" key={item.title}>
                                          <span className="text-sm font-bold mt-10">
                                            {item.title}
                                            {" - "}
                                            <span className="text-sm font-bold mt-10">
                                              {item.issuer}
                                            </span>
                                          </span>
                                          <p className="text-xs py-1 font-semibold text-gray-700">
                                            ({item.date})
                                          </p>
                                          <p class="text-sm text-gray-700">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    ;
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
