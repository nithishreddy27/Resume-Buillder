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

export default function Ruby() {
  const user = useUser();
  const { details, setdetails, setdemo, demo, color, setcolor } =
    useContext(ResumeContext);
  const [change, setchange] = useState(false);

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
    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("download.pdf");
      // pdf.output('dataurlnewwindow');
    });
  }

  //responsiveness
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <div className="flex border border-white">
                <div className="m-3 flex grow">
                  <div className="flex mt-1">
                    <div
                      className="w-8 h-8 border-[2px] border-white bg-red-500 mx-1 rounded-full"
                      onClick={() => {
                        setcolor("red");
                      }}
                    ></div>
                    <div
                      className="w-8 h-8 border-[2px] border-white bg-gray-500 rounded-full"
                      onClick={() => {
                        setcolor("gray");
                      }}
                    ></div>
                  </div>
                </div>
                <div className="m-3 flex">
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
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                  id="smallResume"
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
                              <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
                                Personal Details
                              </h1>
                              <div>
                                <i className="bx bxs-user"></i>
                                <span class="text-sm font-semibold ">
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
                                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
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
                                <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
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
                                <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
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
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
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
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
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
                          <h1 className="text-red-700 text-4xl font-">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </h1>

                          {details.personal.objective.length != 0 && (
                            <div>
                              <h1 className="text-red-700 text-xl font-semibold mt-4">
                                Profile
                              </h1>
                              <p className="text-sm">
                                {details.personal.objective}
                              </p>
                            </div>
                          )}

                          {details.work.length != 0 && (
                            <div>
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                Work
                              </h1>
                              {details.work.map((item) => (
                                <div key={item.company} className="py-1">
                                  <h1 className="text-sm font-bold relative">
                                    {item.company}
                                    <span className="text-sm text-red-700 absolute right-0">
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
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                Education
                              </h1>
                              {details.education.map((item) => (
                                <div className="py-1" key={item.institution}>
                                  <h1 className="text-sm font-bold relative">
                                    {item.institution}
                                    <span className="text-sm text-red-700 absolute right-0">
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
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                Projects
                              </h1>
                              {details.projects.map((item) => (
                                <div className="py-1" key={item}>
                                  <h1 className="text-sm font-bold relative">
                                    {item.name}
                                    <span className="text-sm text-red-700 absolute right-0">
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
                              <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                Certifications
                              </h1>
                              {details.certifications.map((item) => (
                                <div className="py-1" key={item.title}>
                                  <h1 className="text-sm font-bold relative">
                                    {item.title}
                                    <span className="text-sm text-red-700 absolute right-0">
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
                          setcolor("red");
                        }}
                      ></div>
                      <div
                        className="w-8 h-8 border-[2px] border-white bg-gray-500 rounded-full"
                        onClick={() => {
                          setcolor("gray");
                        }}
                      ></div>
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
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
                                <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
                                  Personal Details
                                </h1>
                                <div>
                                  <i className="bx bxs-user"></i>
                                  <span class="text-sm font-semibold ">
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
                                    <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
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
                                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
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
                                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
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
                                  <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
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
                                  <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
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
                            <h1 className="text-red-700 text-4xl font-">
                              {details.personal.firstName}{" "}
                              {details.personal.lastName}
                            </h1>

                            {details.personal.objective.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-4">
                                  Profile
                                </h1>
                                <p className="text-sm">
                                  {details.personal.objective}
                                </p>
                              </div>
                            )}

                            {details.work.length != 0 && (
                              <div>
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                  Work
                                </h1>
                                {details.work.map((item) => (
                                  <div key={item.company} className="py-1">
                                    <h1 className="text-sm font-bold relative">
                                      {item.company}
                                      <span className="text-sm text-red-700 absolute right-0">
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
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                  Education
                                </h1>
                                {details.education.map((item) => (
                                  <div className="py-1" key={item.institution}>
                                    <h1 className="text-sm font-bold relative">
                                      {item.institution}
                                      <span className="text-sm text-red-700 absolute right-0">
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
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                  Projects
                                </h1>
                                {details.projects.map((item) => (
                                  <div className="py-1" key={item}>
                                    <h1 className="text-sm font-bold relative">
                                      {item.name}
                                      <span className="text-sm text-red-700 absolute right-0">
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
                                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                                  Certifications
                                </h1>
                                {details.certifications.map((item) => (
                                  <div className="py-1" key={item.title}>
                                    <h1 className="text-sm font-bold relative">
                                      {item.title}
                                      <span className="text-sm text-red-700 absolute right-0">
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
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
