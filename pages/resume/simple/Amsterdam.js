import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';





export default function Amsterdam() {
  const user = useUser();
  const { details, setdetails } = useContext(ResumeContext);



 function printDocument() {
    console.log("inside")
    const input = document.getElementById('largeResume');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }


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
  }, [user]);

 
  const [open, setopen] = useState("semiopen");

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
              <div className="flex justify-center" >
              <div className="mb5">
                <button onClick={printDocument} className="cursor-pointer">Print</button>
              </div>
                {/* Small Resume */}

                <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row" >
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

                  <div className="w-[40%] h-[285mm] bg-gray-200">
                    <div className="mt-56 mx-10 flex flex-col">
                      <div>
                        <h4 className="font-bold tracking-[4px]">CONTACTS</h4>
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
                          <h4 className="font-bold tracking-[4px] mt-4">
                            EDUCATION
                          </h4>
                          <hr className="w-[100%] h-1 bg-black my-2" />

                          {details.education.map((item) => (
                            <div
                              className="flex flex-col"
                              key={item.institution}
                            >
                              <span className="text-black font-semibold mt-4">
                                {item.institution}
                              </span>
                              <span className="mb-2 font-semibold">
                                ({item.startDate} {item.endDate})
                              </span>

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
                          <h4 className="font-bold tracking-[4px]">SKILLS</h4>
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
                          <h4 className="font-bold tracking-[4px]">AWARDS</h4>
                          <hr className="w-[100%] h-1 bg-black my-2" />
                          {details.awards.map((item) => (
                            <>
                              <span
                                className="font-semibold mt-1"
                                key={item.name}
                              >
                                {item.name}({item.date})
                              </span>
                              <span className="mb-3">{item.awarder}</span>
                            </>
                          ))}
                        </>
                      )}
                    </div>
                    <div className="mx-10 flex flex-col mt-4">
                      {details.hobbies.length != 0 && (
                        <>
                          <h4 className="font-bold tracking-[4px]">HOBBIES</h4>
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
                          <h4 className="font-bold tracking-[4px]">
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
                        <h2 className="font-bold tracking-[4px]">OBJECTIVE</h2>
                        <hr className="w-[100%] h-1 bg-black my-1" />
                        <p className="my-4">{details.personal.objective}</p>
                      </>
                    )}

                    {details.projects.length != 0 && (
                      <>
                        <h2 className="font-bold tracking-[4px]">PROJECTS</h2>
                        <hr className="w-[100%] h-1 bg-black my-1" />

                        {details.projects.map((item) => (
                          <>
                            <div className="my-4">
                              <span className="text-black font-bold mt-3">
                                {item.name} ({" "}
                                <span className="text-black font-semibold">
                                  {item.from} to {item.to}
                                </span>{" "}
                                ){" "}
                              </span>

                              <p className="ml-4 mt-2">{item.summary.data}</p>
                            </div>
                          </>
                        ))}
                      </>
                    )}

                    {details.work.length != 0 && (
                      <>
                        <h2 className="font-bold tracking-[4px]">WORK</h2>
                        <hr className="w-[100%] h-1 bg-black my-1" />
                        {details.work.map((item) => (
                          <>
                            <div className="flex flex-col" key={item.company}>
                              {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                              <span className="text-black font-bold mt-3">
                                {item.company}{" "}
                                <span className="font-semibold">
                                  ({item.from} to {item.to})
                                </span>
                              </span>
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
                        <h2 className="font-bold tracking-[4px]">
                          CERTIFICATIONS
                        </h2>
                        <hr className="w-[100%] h-1 bg-black my-1" />
                        {details.certifications.map((item) => (
                          <>
                            <div className="flex flex-col" key={item.title}>
                              {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                              <span className="text-black font-bold mt-3">
                                {item.title}
                                <span className="font-semibold">
                                  {item.date}
                                </span>
                              </span>
                              <span className="text-black font-semibold mx-4">
                                {item.issuer}
                              </span>
                              {/* <p className="ml-4">{item.summary.data}</p> */}
                            </div>
                          </>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar/>
              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex justify-center ">

                <div className="mb5">
                <button onClick={printDocument} className="cursor-pointer text-white ">Print</button>
              </div>
                  {/* large resume */}

                  <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row" id="largeResume">
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

                    <div className="w-[40%] h-[285mm] bg-gray-200">
                      <div className="mt-56 mx-10 flex flex-col">
                        <div>
                          <h4 className="font-bold tracking-[4px]">CONTACTS</h4>
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
                            <h4 className="font-bold tracking-[4px] mt-4">
                              EDUCATION
                            </h4>
                            <hr className="w-[100%] h-1 bg-black my-2" />

                            {details.education.map((item) => (
                              <div
                                className="flex flex-col"
                                key={item.institution}
                              >
                                <span className="text-black font-semibold mt-4">
                                  {item.institution}
                                </span>
                                <span className="mb-2 font-semibold">
                                  ({item.startDate} {item.endDate})
                                </span>

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
                            <h4 className="font-bold tracking-[4px]">SKILLS</h4>
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
                            <h4 className="font-bold tracking-[4px]">AWARDS</h4>
                            <hr className="w-[100%] h-1 bg-black my-2" />
                            {details.awards.map((item) => (
                              <>
                                <span
                                  className="font-semibold mt-1"
                                  key={item.name}
                                >
                                  {item.name}({item.date})
                                </span>
                                <span className="mb-3">{item.awarder}</span>
                              </>
                            ))}
                          </>
                        )}
                      </div>
                      <div className="mx-10 flex flex-col mt-4">
                        {details.hobbies.length != 0 && (
                          <>
                            <h4 className="font-bold tracking-[4px]">
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
                            <h4 className="font-bold tracking-[4px]">
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
                          <h2 className="font-bold tracking-[4px]">
                            OBJECTIVE
                          </h2>
                          <hr className="w-[100%] h-1 bg-black my-1" />
                          <p className="my-4">{details.personal.objective}</p>
                        </>
                      )}

                      {details.projects.length != 0 && (
                        <>
                          <h2 className="font-bold tracking-[4px]">PROJECTS</h2>
                          <hr className="w-[100%] h-1 bg-black my-1" />

                          {details.projects.map((item) => (
                            <>
                              <div className="my-4">
                                <span className="text-black font-bold mt-3">
                                  {item.name} ({" "}
                                  <span className="text-black font-semibold">
                                    {item.from} to {item.to}
                                  </span>{" "}
                                  ){" "}
                                </span>

                                <p className="ml-4 mt-2">{item.summary.data}</p>
                              </div>
                            </>
                          ))}
                        </>
                      )}

                      {details.work.length != 0 && (
                        <>
                          <h2 className="font-bold tracking-[4px]">WORK</h2>
                          <hr className="w-[100%] h-1 bg-black my-1" />
                          {details.work.map((item) => (
                            <>
                              <div className="flex flex-col" key={item.company}>
                                {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                                <span className="text-black font-bold mt-3">
                                  {item.company}{" "}
                                  <span className="font-semibold">
                                    ({item.from} to {item.to})
                                  </span>
                                </span>
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
                          <h2 className="font-bold tracking-[4px]">
                            CERTIFICATIONS
                          </h2>
                          <hr className="w-[100%] h-1 bg-black my-1" />
                          {details.certifications.map((item) => (
                            <>
                              <div className="flex flex-col" key={item.title}>
                                {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                                <span className="text-black font-bold mt-3">
                                  {item.title}
                                  <span className="font-semibold">
                                    {item.date}
                                  </span>
                                </span>
                                <span className="text-black font-semibold mx-4">
                                  {item.issuer}
                                </span>
                                {/* <p className="ml-4">{item.summary.data}</p> */}
                              </div>
                            </>
                          ))}
                        </>
                      )}
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
