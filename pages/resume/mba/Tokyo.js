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
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function Tokyo() {
  const user = useUser();
  const { details, setdetails, setdemo, demo } =
    useContext(ResumeContext);
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

  function printDocument() {
    console.log("inside");
    // var input = document.getElementById('smallResume');
    var input;
    if (open == "closed") {
      input = document.getElementById("smallResume");
    } else {
      input = document.getElementById("largeResume");
      console.log("om");
    }
    console.log(input);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("download.pdf");
      // pdf.output('dataurlnewwindow');
    });
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
                  <div className={`${colorpalette ? "block" : "hidden"} mt-[50px] ml-[-50px] lg:ml-[50px] absolute z-40`}>
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
                    onClick={printDocument}
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
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-300px] h-[297mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                  <div>
                    <div className="flex bg-red-700 w-[210mm]">
                      <img
                        className="rounded-full p-10 w-48"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                        alt="ProfilePhoto"
                      />
                      <div className="text-white m-1 py-12">
                        <h1 className="text-3xl text-white font-semibold m-1">
                          {details.personal.firstName}{" "}
                          {details.personal.lastName}
                        </h1>
                        <h1 className="text-sm m-1">{details.personal.role}</h1>
                      </div>
                    </div>
                    <div className="flex justify-around p-3 border-b-2">
                      <div className="font-semibold">
                        {details.personal.email}
                      </div>
                      <div className="font-semibold">
                        {details.personal.phone}
                      </div>
                      <div className="font-semibold">
                        {details.personal.dob}
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 h-[230mm] border-r-2 p-8">
                        {details.personal.objective.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold heading">Profile</h1>
                            <p className="text-sm font-semibold ml-3">
                              {details.personal.objective}
                            </p>
                          </div>
                        )}
                        {details.work.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1 heading">
                              Employment History
                            </h1>
                            {details.work.map((item) => (
                              <div className="my-1 ml-3" key={item.company}>
                                <span className="text-sm font-bold">
                                  ● {item.company}
                                  {" - "}
                                  <span className="text-sm font-semibold mt-10">
                                    {item.designation}
                                  </span>
                                </span>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.from} to {item.to})
                                </p>
                                <p class="text-sm font-semibold">
                                  {item.summary.data}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.education.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1 heading">
                              Education
                            </h1>
                            {details.education.map((item) => (
                              <div className="my-1 ml-3" key={item.institution}>
                                <span className="text-sm font-bold">
                                  ● {item.institution}
                                  {" - "}
                                  <span className="text-sm font-semibold mt-10">
                                    {item.fieldOfStudy}
                                  </span>
                                </span>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.startDate} to {item.endDate})
                                </p>
                                <p class="text-sm font-semibold">
                                  {item.summary.data}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.projects.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1 heading">
                              Projects
                            </h1>
                            {details.projects.map((item) => (
                              <div className="my-1 ml-3" key={item.name}>
                                <h1 className="text-sm font-bold">
                                  ● {item.name}
                                </h1>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.from} to {item.to})
                                </p>
                                <a
                                  href="{`${item.website}`}"
                                  class="text-sm font-semibold"
                                >
                                  {item.website}
                                </a>
                                <p class="text-sm font-semibold">
                                  {item.summary.data}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1 heading">
                              Certifications
                            </h1>
                            {details.certifications.map((item) => (
                              <div className="my-1 ml-3" key={item.title}>
                                <span className="text-sm font-semibold">
                                  ● {item.title}
                                  {" - "}
                                  <span className="text-sm font-semibold mt-10">
                                    {item.issuer}
                                  </span>
                                </span>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.date})
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        {details.skills.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1 heading">
                              Skills
                            </h1>
                            {details.skills.map((item) => (
                              <div className="ml-2" key={item.name}>
                                <h1 className="text-sm font-semibold m-1">
                                  ● {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.social.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1 heading">
                              Social
                            </h1>
                            {details.social.map((item) => (
                              <div className="ml-2" key={item.network}>
                                <a
                                  href="{`${item.url}`}"
                                  className="text-sm font-semibold m-1"
                                >
                                  ● {item.url}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1 heading">
                              Awards
                            </h1>
                            <div className="ml-2">
                              {details.awards.map((item) => (
                                <div className="py-1" key={item.name}>
                                  <h1 className="text-sm font-bold relative m-1">
                                    ● {item.name}
                                  </h1>
                                  <p className="text-sm font-semibold m-1">
                                    {item.awarder}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {details.hobbies.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1 heading">
                              Hobbies
                            </h1>
                            {details.hobbies.map((item) => (
                              <div className="ml-2" key={item.name}>
                                <h1 className="text-sm font-semibold relative m-1">
                                  ● {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.languages.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1 heading">
                              Languages
                            </h1>
                            {details.languages.map((item) => (
                              <div className="ml-2" key={item.name}>
                                <h1 className="text-sm font-semibold relative m-1">
                                  ● {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>
                  {`.heading{
                    color:${color.hex}
                  }`}
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
                  <button
                    className="text-white border border-white p-2 rounded-md"
                    onClick={() => {
                      setcolorpalette(!colorpalette);
                    }}
                  >
                    COLOR
                  </button>
                  <div className={`${colorpalette ? "block" : "hidden"} ml-[50px] absolute z-40`}>
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
                      onClick={printDocument}
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-100px] xl:scale-[0.9] xl:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[297mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div>
                      <div className="flex bg-red-700 w-[210mm]">
                        <img
                          className="rounded-full p-10 w-48"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                          alt="ProfilePhoto"
                        />
                        <div className="text-white m-1 py-12">
                          <h1 className="text-3xl text-white font-semibold m-1">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </h1>
                          <h1 className="text-sm m-1">
                            {details.personal.role}
                          </h1>
                        </div>
                      </div>
                      <div className="flex justify-around p-3 border-b-2">
                        <div className="font-semibold">
                          {details.personal.email}
                        </div>
                        <div className="font-semibold">
                          {details.personal.phone}
                        </div>
                        <div className="font-semibold">
                          {details.personal.dob}
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="col-span-2 h-[230mm] border-r-2 p-8">
                          {details.personal.objective.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold heading">Profile</h1>
                              <p className="text-sm font-semibold ml-3">
                                {details.personal.objective}
                              </p>
                            </div>
                          )}
                          {details.work.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1 heading">
                                Employment History
                              </h1>
                              {details.work.map((item) => (
                                <div className="my-1 ml-3" key={item.company}>
                                  <span className="text-sm font-bold">
                                    ● {item.company}
                                    {" - "}
                                    <span className="text-sm font-semibold mt-10">
                                      {item.designation}
                                    </span>
                                  </span>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.from} to {item.to})
                                  </p>
                                  <p class="text-sm font-semibold">
                                    {item.summary.data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.education.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1 heading">
                                Education
                              </h1>
                              {details.education.map((item) => (
                                <div
                                  className="my-1 ml-3"
                                  key={item.institution}
                                >
                                  <span className="text-sm font-bold">
                                    ● {item.institution}
                                    {" - "}
                                    <span className="text-sm font-semibold mt-10">
                                      {item.fieldOfStudy}
                                    </span>
                                  </span>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.startDate} to {item.endDate})
                                  </p>
                                  <p class="text-sm font-semibold">
                                    {item.summary.data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.projects.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1 heading">
                                Projects
                              </h1>
                              {details.projects.map((item) => (
                                <div className="my-1 ml-3" key={item.name}>
                                  <h1 className="text-sm font-bold">
                                    ● {item.name}
                                  </h1>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.from} to {item.to})
                                  </p>
                                  <a
                                    href="{`${item.website}`}"
                                    class="text-sm font-semibold"
                                  >
                                    {item.website}
                                  </a>
                                  <p class="text-sm font-semibold">
                                    {item.summary.data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.certifications.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1 heading">
                                Certifications
                              </h1>
                              {details.certifications.map((item) => (
                                <div className="my-1 ml-3" key={item.title}>
                                  <span className="text-sm font-semibold">
                                    ● {item.title}
                                    {" - "}
                                    <span className="text-sm font-semibold mt-10">
                                      {item.issuer}
                                    </span>
                                  </span>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.date})
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          {details.skills.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1 heading">
                                Skills
                              </h1>
                              {details.skills.map((item) => (
                                <div className="ml-2" key={item.name}>
                                  <h1 className="text-sm font-semibold m-1">
                                    ● {item.name}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.social.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1 heading">
                                Social
                              </h1>
                              {details.social.map((item) => (
                                <div className="ml-2" key={item.network}>
                                  <a
                                    href="{`${item.url}`}"
                                    className="text-sm font-semibold m-1"
                                  >
                                    ● {item.url}
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.awards.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1 heading">
                                Awards
                              </h1>
                              <div className="ml-2">
                                {details.awards.map((item) => (
                                  <div className="py-1" key={item.name}>
                                    <h1 className="text-sm font-bold relative m-1">
                                      ● {item.name}
                                    </h1>
                                    <p className="text-sm font-semibold m-1">
                                      {item.awarder}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {details.hobbies.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1 heading">
                                Hobbies
                              </h1>
                              {details.hobbies.map((item) => (
                                <div className="ml-2" key={item.name}>
                                  <h1 className="text-sm font-semibold relative m-1">
                                    ● {item.name}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.languages.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1 heading">
                                Languages
                              </h1>
                              {details.languages.map((item) => (
                                <div className="ml-2" key={item.name}>
                                  <h1 className="text-sm font-semibold relative m-1">
                                    ● {item.name}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <style jsx>
                    {`.heading{
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
