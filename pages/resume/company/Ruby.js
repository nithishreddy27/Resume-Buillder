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
export default function Ruby() {
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
  // document.getElementById("smallResume")

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
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-300px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                  id="smallResume"
                  // style={{ color: color.hex }}
                >
                  <div className="flex align-middle justify-center bg-zinc-400">
                    <div className="container bg-white">
                      <div className="grid grid-cols-3">
                        <div className={`bg-${color}-700 `}>
                          <div className="ml-8 bg-gray-200 h-[285mm] p-4">
                            <div className="">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                                alt="ProfilePhoto"
                              />
                              <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                Personal Details
                              </h1>
                              <div>
                                <i className="bx bxs-user"></i>
                                <span class="text-sm font-semibold heading">
                                  {details.personal.firstName}{" "}
                                  {details.personal.lastName}
                                </span>
                              </div>
                              <div>
                                <i className="bx bxs-mail"></i>
                                <span class="text-sm font-semibold m-0.5">
                                  {details.personal.email}
                                </span>
                              </div>
                              <div>
                                <i className="bx bxs-phone"></i>
                                <span class="text-sm font-semibold m-0.5">
                                  {details.personal.phone}
                                </span>
                              </div>
                              <div>
                                <i className="bx bxs-calendar"></i>
                                <span class="text-sm font-semibold m-0.5">
                                  {details.personal.dob}
                                </span>
                              </div>

                              {details.social.length != 0 && (
                                <div>
                                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                    Social
                                  </h1>
                                  {details.social.map((item) => (
                                    <div
                                      className="text-sm font-semibold m-0.5"
                                      key={item.network}
                                    >
                                      <a href="{item.url}">{item.network}</a>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {details.skills.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                  Skills
                                </h1>
                                {details.skills.map((item) => (
                                  <div key={item.name}>
                                    <h1 className="text-sm font-semibold m-0.5">
                                      {item.name} - {item.level}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.awards.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                  Awards
                                </h1>
                                {details.awards.map((item) => (
                                  <div className="py-1" key={item.name}>
                                    <h1 className="text-sm font-bold relative m-0.5">
                                      {item.name}
                                      <span className="right-0 text-sm text-red-700 absolute">
                                        {item.startDate} - {item.endDate}
                                      </span>
                                    </h1>
                                    <p className="text-sm font-semibold m-0.5">
                                      {item.awarder}
                                    </p>
                                    <p>{item.summary.data}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.hobbies.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 ">
                                  Hobbies
                                </h1>
                                {details.hobbies.map((item) => (
                                  <div key={item.name}>
                                    <h1 className="text-sm font-semibold m-0.5">
                                      {item.name}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.languages.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                  Languages
                                </h1>
                                {details.languages.map((item) => (
                                  <div key={item.name}>
                                    <h1 className="text-sm font-semibold m-0.5">
                                      {item.name} - {item.level}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-span-2 p-6">
                          <h1 className="text-red-700 text-4xl heading ">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </h1>

                          {details.personal.objective.length != 0 && (
                            <div>
                              <h1 className="text-red-700 text-xl font-semibold mt-4 heading">
                                Profile
                              </h1>
                              <p className="text-sm">
                                {details.personal.objective}
                              </p>
                            </div>
                          )}

                          {details.work.length != 0 && (
                            <div>
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                Work
                              </h1>
                              {details.work.map((item) => (
                                <div key={item.company} className="py-1">
                                  <h1 className="text-sm font-bold relative">
                                    {item.company}
                                    <span className="text-sm text-red-700 absolute right-0 heading">
                                      {item.from} - {item.to}
                                    </span>
                                  </h1>
                                  <p className="text-sm font-semibold">
                                    {item.designation}
                                  </p>
                                  <p class="text-sm">{item.summary.data}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {details.education.length != 0 && (
                            <div>
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                Education
                              </h1>
                              {details.education.map((item) => (
                                <div className="py-1" key={item.institution}>
                                  <h1 className="text-sm font-bold relative">
                                    {item.institution}
                                    <span className="text-sm text-red-700 absolute right-0 heading">
                                      {item.startDate} - {item.endDate}
                                    </span>
                                  </h1>
                                  <p className="text-sm font-semibold">
                                    {} {item.fieldOfStudy} - [ {item.gpa} ]
                                  </p>
                                  <p class="text-sm">{item.summary.data}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {details.projects.length != 0 && (
                            <div>
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                Projects
                              </h1>
                              {details.projects.map((item) => (
                                <div className="py-1" key={item}>
                                  <h1 className="text-sm font-bold relative">
                                    {item.name}
                                    <span className="text-sm text-red-700 absolute right-0 heading">
                                      {item.from} - {item.to}
                                    </span>
                                  </h1>
                                  <p className="text-sm font-semibold">
                                    {item.website}
                                  </p>
                                  <p class="text-sm">{item.summary.data}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {details.certifications.length != 0 && (
                            <div>
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                Certifications
                              </h1>
                              {details.certifications.map((item) => (
                                <div className="py-1" key={item.title}>
                                  <h1 className="text-sm font-bold relative">
                                    {item.title}
                                    <span className="text-sm text-red-700 absolute right-0 heading">
                                      {item.date}
                                    </span>
                                  </h1>
                                  <p className="text-sm font-semibold">
                                    {item.issuer}
                                  </p>
                                  <p className="text-sm ">
                                    {item.summary.data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
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
                    <div className="flex align-middle justify-center bg-zinc-400">
                      <div className="container bg-white">
                        <div className="flex">
                          <h1 className="back bg-red-700 h-[285mm] w-[4%] heading"></h1>
                          <div className=" bg-gray-200 w-[31%] h-[285mm] p-4">
                            <div className="">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                                alt="ProfilePhoto"
                              />
                              <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                Personal Details
                              </h1>
                              <div>
                                <i className="bx bxs-user"></i>
                                <span className="text-sm font-semibold heading">
                                  {details.personal.firstName}{" "}
                                  {details.personal.lastName}
                                </span>
                              </div>
                              <div>
                                <i className="bx bxs-mail"></i>
                                <span class="text-sm font-semibold m-0.5">
                                  {details.personal.email}
                                </span>
                              </div>
                              <div>
                                <i className="bx bxs-phone"></i>
                                <span class="text-sm font-semibold m-0.5">
                                  {details.personal.phone}
                                </span>
                              </div>
                              <div>
                                <i className="bx bxs-calendar"></i>
                                <span class="text-sm font-semibold m-0.5">
                                  {details.personal.dob}
                                </span>
                              </div>

                              {details.social.length != 0 && (
                                <div>
                                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                    Social
                                  </h1>
                                  {details.social.map((item) => (
                                    <div
                                      className="text-sm font-semibold m-0.5"
                                      key={item.network}
                                    >
                                      <a href="{item.url}">{item.network}</a>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {details.skills.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                  Skills
                                </h1>
                                {details.skills.map((item) => (
                                  <div key={item.name}>
                                    <h1 className="text-sm font-semibold m-0.5">
                                      {item.name} - {item.level}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.awards.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1 heading">
                                  Awards
                                </h1>
                                {details.awards.map((item) => (
                                  <div className="py-1" key={item.name}>
                                    <h1 className="text-sm font-bold relative m-0.5">
                                      {item.name}
                                      <span className="right-0 text-sm text-red-700 absolute">
                                        {item.startDate} - {item.endDate}
                                      </span>
                                    </h1>
                                    <p className="text-sm font-semibold m-0.5">
                                      {item.awarder}
                                    </p>
                                    <p>{item.summary.data}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.hobbies.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                  Hobbies
                                </h1>
                                {details.hobbies.map((item) => (
                                  <div key={item.name}>
                                    <h1 className="text-sm font-semibold m-0.5">
                                      {item.name}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.languages.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                  Languages
                                </h1>
                                {details.languages.map((item) => (
                                  <div key={item.name}>
                                    <h1 className="text-sm font-semibold m-0.5">
                                      {item.name} - {item.level}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="w-[65%] p-6">
                            <h1 className="text-red-700 text-4xl heading">
                              {details.personal.firstName}{" "}
                              {details.personal.lastName}
                            </h1>

                            {details.personal.objective.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-4 heading">
                                  Profile
                                </h1>
                                <p className="text-sm">
                                  {details.personal.objective}
                                </p>
                              </div>
                            )}

                            {details.work.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                  Work
                                </h1>
                                {details.work.map((item) => (
                                  <div key={item.company} className="py-1">
                                    <h1 className="text-sm font-bold relative">
                                      {item.company}
                                      <span className="text-sm text-red-700 absolute right-0 heading">
                                        {item.from} - {item.to}
                                      </span>
                                    </h1>
                                    <p className="text-sm font-semibold">
                                      {item.designation}
                                    </p>
                                    <p class="text-sm">{item.summary.data}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.education.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                  Education
                                </h1>
                                {details.education.map((item) => (
                                  <div className="py-1" key={item.institution}>
                                    <h1 className="text-sm font-bold relative">
                                      {item.institution}
                                      <span className="text-sm text-red-700 absolute right-0 heading">
                                        {item.startDate} - {item.endDate}
                                      </span>
                                    </h1>
                                    <p className="text-sm font-semibold">
                                      {} {item.fieldOfStudy} - [ {item.gpa} ]
                                    </p>
                                    <p class="text-sm">{item.summary.data}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.projects.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                  Projects
                                </h1>
                                {details.projects.map((item) => (
                                  <div className="py-1" key={item}>
                                    <h1 className="text-sm font-bold relative">
                                      {item.name}
                                      <span className="text-sm text-red-700 absolute right-0 heading">
                                        {item.from} - {item.to}
                                      </span>
                                    </h1>
                                    <p className="text-sm font-semibold">
                                      {item.website}
                                    </p>
                                    <p class="text-sm">{item.summary.data}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {details.certifications.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1 heading">
                                  Certifications
                                </h1>
                                {details.certifications.map((item) => (
                                  <div className="py-1" key={item.title}>
                                    <h1 className="text-sm font-bold relative">
                                      {item.title}
                                      <span className="text-sm text-red-700 absolute right-0 heading">
                                        {item.date}
                                      </span>
                                    </h1>
                                    <p className="text-sm font-semibold">
                                      {item.issuer}
                                    </p>
                                    <p className="text-sm ">
                                      {item.summary.data}
                                    </p>
                                  </div>
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
                        .back {
                          background-color: ${color.hex};
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
