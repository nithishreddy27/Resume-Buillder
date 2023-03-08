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

export default function Dynamic() {
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

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <button
                className="h-10 w-10 mx-auto block lg:hidden"
                onClick={toggleResume}
              >
                DETAILS
              </button>
              <div className="flex justify-center ">
                <div>
                  <button
                    onClick={sprintDocument}
                    className="cursor-pointer text-white mx-5"
                  >
                    Print
                  </button>

                  <button onClick={() => setdemo(!demo)}>LOAD</button>
                </div>

                <div>
                  <input type="text" name="color" id="color" />
                  <button
                    onClick={() =>
                      setcolor(document.getElementById("color").value)
                    }
                  >
                    color
                  </button>
                </div>

                {/* Small Resume */}
                <div
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                  <div className="w-[205mm] h-40 bg-blue-500 absolute z-0 mt-10">
                    <h1 className="text-white ml-80 mt-8 text-5xl">
                      {details.personal.firstName} {details.personal.lastName}
                    </h1>
                    <h6 className="text-white ml-80 mt-1 ">
                      {details.personal.role}
                    </h6>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="bg-slate-900 h-[285mm] ml-5 z-10">
                      <img
                        className="w-40 m-10 rounded-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                        alt="ProfilePhoto"
                      />
                      <div className="border-b-2 border-white m-6 px-3 py-1">
                        <h1 className="font-medium text-lg text-white heading ">
                          CONTACT
                        </h1>
                        <div className="m-2">
                          <h1 className="text-white">
                            {details.personal.email}
                          </h1>
                          <h1 className="text-white">
                            {details.personal.phone}
                          </h1>
                        </div>
                      </div>
                      {details.skills.length && (
                        <div className="border-b-2 border-white m-6 px-3 py-1">
                          <h1 className="font-medium text-lg text-white heading ">
                            SKILLS
                          </h1>
                          {details.skills.map((item) => (
                            <div key={item.name}>
                              <h1 className="font-normal   text-white">
                                {item.name}
                              </h1>
                              <li className="text-sm ml-4 text-white">
                                {item.level}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.social.length != 0 && (
                        <div className="border-b-2 border-white m-6 px-3 py-1">
                          <h1 className="font-medium text-lg text-white heading">
                            SOCIAL
                          </h1>
                          {details.social.map((item) => (
                            <div className="ml-4 my-4 flex" key={item.network}>
                              <img
                                src={
                                  "https://www." +
                                  item.network +
                                  ".com/favicon.ico"
                                }
                                alt=""
                                className="w-5 h-5"
                              />
                              <Link href={item.url}>
                                <h1 className="ml-4 text-white">
                                  {item.username}
                                </h1>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                      <div>
                        {details.awards.length != 0 && (
                          <div className="border-b-2 border-white m-6 px-3 py-1">
                            <h1 className="font-medium text-lg text-white heading">
                              AWARDS
                            </h1>
                            {details.awards.map((item) => (
                              <div className="m-2" key={item.name}>
                                <h1 className="text-white">{item.awarder}</h1>
                                <li className="text-white text-sm ml-4 ">
                                  {item.awarder}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div className="border-b-2 border-white m-6 px-3 py-1">
                            <h1 className="font-medium text-lg text-white heading">
                              HOBBIES
                            </h1>
                            {details.hobbies.map((item) => (
                              <div className="m-2" key={item.name}>
                                <h1 className="text-white">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.languages.length != 0 && (
                          <div className="border-white m-6 px-3 py-1">
                            <h1 className="font-medium text-lg text-white heading">
                              LANGUAGES
                            </h1>
                            {details.languages.map((item) => (
                              <div className="m-2" key={item.name}>
                                <h1 className="text-white">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="pt-48">
                        <div className="border-b-4 border-black m-4 p-5">
                          <h1 className="font-medium text-lg text-gray-600 heading">
                            ABOUT ME
                          </h1>
                          <p className="text-sm font-medium pt-1">
                            {details.personal.objective}
                          </p>
                        </div>
                      </div>
                      {details.work.length != 0 && (
                        <div className="border-b-4 border-black m-4 p-2">
                          <h1 className="font-medium text-lg text-gray-600 heading">
                            WORK EXPERIENCE
                          </h1>
                          {details.work.map((item) => (
                            <div className="p-1" key={item.company}>
                              <h1 className="font-medium ml-4 text-lg">
                                {item.company}
                              </h1>
                              <h2 className="font-semibold text-xs ml-4">
                                {item.from} - {item.to}
                              </h2>
                              <li className="ml-10 list-disc font-semibold">
                                {item.designation}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.education.length != 0 && (
                        <div className="border-b-4 border-black m-4 p-2">
                          <h1 className="font-medium text-lg text-gray-600 heading">
                            EDUCATION
                          </h1>
                          {details.education.map((item) => (
                            <div key={item.institution}>
                              <h1 className="font-medium ml-6">
                                {item.institution}
                              </h1>
                              <h6 className="text-xs font-semibold ml-6">
                                {item.startDate} - {item.endDate}
                              </h6>
                              <li className="ml-8 font-semibold">
                                {item.fieldOfStudy}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.projects.length != 0 && (
                        <div className="border-b-4 border-black m-4 p-2">
                          <h1 className="font-medium text-lg text-gray-600 heading">
                            PROJECTS
                          </h1>
                          {details.projects.map((item) => (
                            <div key={item.name}>
                              <h1 className="font-medium ml-6">{item.name}</h1>
                              <h6 className="text-xs font-semibold ml-6">
                                {item.from} - {item.to}
                              </h6>
                              <li className="ml-8 font-semibold">
                                {item.website}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.certifications.length != 0 && (
                        <div className="border-b-4 border-black m-4 p-2">
                          <h1 className="font-medium text-lg text-gray-600 heading">
                            CERTIFICATIONS
                          </h1>
                          {details.certifications.map((item) => (
                            <div key={item.title}>
                              <h1 className="font-medium ml-6">{item.title}</h1>
                              <h6 className="text-xs font-semibold ml-6">
                                {item.date}
                              </h6>
                              <li className="ml-8 font-semibold">
                                {item.summary.data}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.awards.length != 0 && (
                        <div className="border-black m-4 p-2">
                          <h1 className="font-medium text-lg text-gray-600 heading">
                            AWARDS
                          </h1>
                          {details.awards.map((item) => (
                            <div key={item.name}>
                              <h1 className="font-medium ml-6">{item.name}</h1>
                              <h6 className="text-xs font-semibold ml-6">
                                {item.date}
                              </h6>
                              <li className="ml-8 font-semibold">
                                {item.summary.data}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
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
                      <div className="w-8 h-8 border-[3px] border-white bg-red-500 mx-1"></div>
                      <div className="w-8 h-8 border-[3px] border-white bg-gray-500"></div>
                    </div>
                    <button
                      className="border border-white text-white
                      p-2 rounded-md ml-2"
                      onClick={() =>
                        setcolor(document.getElementById("color").value)
                      }
                    >
                      COLOR
                    </button>
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-170px] xl:scale-[0.9] xl:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div className="w-[205mm] h-40 bg-blue-500 absolute z-0 mt-10">
                      <h1 className="text-white ml-80 mt-8 text-5xl">
                        {details.personal.firstName} {details.personal.lastName}
                      </h1>
                      <h6 className="text-white ml-80 mt-1 ">
                        {details.personal.role}
                      </h6>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="bg-slate-900 h-[285mm] ml-5 z-10">
                        <img
                          className="w-40 m-10 rounded-lg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                          alt="ProfilePhoto"
                        />
                        <div className="border-b-2 border-white m-6 px-3 py-1">
                          <h1 className="font-medium text-lg text-white heading">
                            CONTACT
                          </h1>
                          <div className="m-2">
                            <h1 className="text-white">
                              {details.personal.email}
                            </h1>
                            <h1 className="text-white">
                              {details.personal.phone}
                            </h1>
                          </div>
                        </div>
                        {details.skills.length && (
                          <div className="border-b-2 border-white m-6 px-3 py-1">
                            <h1 className="font-medium text-lg text-white heading">
                              SKILLS
                            </h1>
                            {details.skills.map((item) => (
                              <div key={item.name}>
                                <h1 className="font-normal   text-white">
                                  {item.name}
                                </h1>
                                <li className="text-sm ml-4 text-white">
                                  {item.level}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.social.length != 0 && (
                          <div className="border-b-2 border-white m-6 px-3 py-1">
                            <h1 className="font-medium text-lg text-white heading">
                              SOCIAL
                            </h1>
                            {details.social.map((item) => (
                              <div
                                className="ml-4 my-4 flex"
                                key={item.network}
                              >
                                <img
                                  src={
                                    "https://www." +
                                    item.network +
                                    ".com/favicon.ico"
                                  }
                                  alt=""
                                  className="w-5 h-5"
                                />
                                <Link href={item.url}>
                                  <h1 className="ml-4 text-white">
                                    {item.username}
                                  </h1>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                        <div>
                          {details.awards.length != 0 && (
                            <div className="border-b-2 border-white m-6 px-3 py-1">
                              <h1 className="font-medium text-lg text-white heading">
                                AWARDS
                              </h1>
                              {details.awards.map((item) => (
                                <div className="m-2" key={item.name}>
                                  <h1 className="text-white">{item.awarder}</h1>
                                  <li className="text-white text-sm ml-4 ">
                                    {item.awarder}
                                  </li>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.hobbies.length != 0 && (
                            <div className="border-b-2 border-white m-6 px-3 py-1">
                              <h1 className="font-medium text-lg text-white heading">
                                HOBBIES
                              </h1>
                              {details.hobbies.map((item) => (
                                <div className="m-2" key={item.name}>
                                  <h1 className="text-white">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.languages.length != 0 && (
                            <div className="border-white m-6 px-3 py-1">
                              <h1 className="font-medium text-lg text-white heading">
                                LANGUAGES
                              </h1>
                              {details.languages.map((item) => (
                                <div className="m-2" key={item.name}>
                                  <h1 className="text-white">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="pt-48">
                          <div className="border-b-4 border-black m-4 p-5">
                            <h1 className="font-medium text-lg text-gray-600 heading">
                              ABOUT ME
                            </h1>
                            <p className="text-sm font-medium pt-1">
                              {details.personal.objective}
                            </p>
                          </div>
                        </div>
                        {details.work.length != 0 && (
                          <div className="border-b-4 border-black m-4 p-2">
                            <h1 className="font-medium text-lg text-gray-600 heading">
                              WORK EXPERIENCE
                            </h1>
                            {details.work.map((item) => (
                              <div className="p-1" key={item.company}>
                                <h1 className="font-medium ml-4 text-lg">
                                  {item.company}
                                </h1>
                                <h2 className="font-semibold text-xs ml-4">
                                  {item.from} - {item.to}
                                </h2>
                                <li className="ml-10 list-disc font-semibold">
                                  {item.designation}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.education.length != 0 && (
                          <div className="border-b-4 border-black m-4 p-2">
                            <h1 className="font-medium text-lg text-gray-600 heading">
                              EDUCATION
                            </h1>
                            {details.education.map((item) => (
                              <div key={item.institution}>
                                <h1 className="font-medium ml-6">
                                  {item.institution}
                                </h1>
                                <h6 className="text-xs font-semibold ml-6">
                                  {item.startDate} - {item.endDate}
                                </h6>
                                <li className="ml-8 font-semibold">
                                  {item.fieldOfStudy}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.projects.length != 0 && (
                          <div className="border-b-4 border-black m-4 p-2">
                            <h1 className="font-medium text-lg text-gray-600 heading">
                              PROJECTS
                            </h1>
                            {details.projects.map((item) => (
                              <div key={item.name}>
                                <h1 className="font-medium ml-6">
                                  {item.name}
                                </h1>
                                <h6 className="text-xs font-semibold ml-6">
                                  {item.from} - {item.to}
                                </h6>
                                <li className="ml-8 font-semibold">
                                  {item.website}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div className="border-b-4 border-black m-4 p-2">
                            <h1 className="font-medium text-lg text-gray-600 heading">
                              CERTIFICATIONS
                            </h1>
                            {details.certifications.map((item) => (
                              <div key={item.title}>
                                <h1 className="font-medium ml-6">
                                  {item.title}
                                </h1>
                                <h6 className="text-xs font-semibold ml-6">
                                  {item.date}
                                </h6>
                                <li className="ml-8 font-semibold">
                                  {item.summary.data}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <div className="border-black m-4 p-2">
                            <h1 className="font-medium text-lg text-gray-600 heading">
                              AWARDS
                            </h1>
                            {details.awards.map((item) => (
                              <div key={item.name}>
                                <h1 className="font-medium ml-6">
                                  {item.name}
                                </h1>
                                <h6 className="text-xs font-semibold ml-6">
                                  {item.date}
                                </h6>
                                <li className="ml-8 font-semibold">
                                  {item.summary.data}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
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
