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

export default function Chrono() {
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
                    onClick={printDocument}
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
                  <div className="grid grid-cols-5">
                    <div className="col-span-2 border-2 border-solid border-black h-[255mm] ml-5 mt-20">
                      <img
                        className=" pt-4 w-52 absolute top-0 ml-10 border-2  border-gray-600 z-10"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                        alt="ProfilePhoto"
                      />

                      <div>
                        <h1 className="text-black mt-36 ml-16  font-medium text-3xl">
                          {details.personal.firstName}
                        </h1>
                        <h1 className="text-black ml-16 font-medium text-3xl">
                          {details.personal.lastName}
                        </h1>
                        <h6 className="font-normal text-xs ml-16 pt-2">
                          {details.personal.role}
                        </h6>
                      </div>
                      <div>
                        <h1 className="font-bold text-lg ml-16 pt-4 p-1">
                          contact
                        </h1>
                        <li className="font-normal ml-20">
                          {details.personal.email}
                        </li>
                        <li className="font-normal ml-20">
                          {details.personal.phone}
                        </li>
                        <li className="font-normal ml-20">
                          {details.personal.dob}
                        </li>
                      </div>
                      {details.skills.length != 0 && (
                        <div>
                          <h1 className="font-bold text-lg ml-16 pt-4">
                            skills
                          </h1>
                          {details.skills.map((item) => (
                            <div key={item.name}>
                              <h1 className="font-medium ml-16 p-2">
                                {item.name}
                              </h1>
                              <h1 className="text-sm ml-16 px-2">
                                {item.level}
                              </h1>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.social.length != 0 && (
                        <div>
                          <h1 className="font-bold  text-lg ml-16 pt-4">
                            Social Network
                          </h1>
                          {details.social.map((item) => (
                            <div className="ml-20 my-4 flex" key={item.network}>
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
                                <h1 className="ml-4">{item.username}</h1>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.hobbies.length != 0 && (
                        <div>
                          <h1 className="font-bold  text-lg ml-16 pt-2">
                            Hobbies
                          </h1>
                          {details.hobbies.map((item) => (
                            <div key={item.name}>
                              <h1 className="px-20 text-sm p-1">{item.name}</h1>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.languages.length != 0 && (
                        <div>
                          <h1 className="font-bold  text-lg ml-16 pt-2">
                            Languages
                          </h1>
                          {details.hobbies.map((item) => (
                            <div key={item.name}>
                              <h1 className="px-20 text-sm p-1">{item.name}</h1>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="col-span-3">
                      {details.personal.objective.length != 0 && (
                        <div>
                          <h1 className="font-medium text-xl ml-8 mt-20">
                            About
                          </h1>
                          <p className="ml-1 p-4 pt-1">
                            {details.personal.objective}
                          </p>
                        </div>
                      )}
                      {details.education.length != 0 && (
                        <div className="p-2 px-0">
                          <h1 className="font-medium text-xl ml-8 ">
                            Education
                          </h1>
                          {details.education.map((item) => (
                            <div key={item.institution}>
                              <h1 className="font-medium ml-8">
                                {item.institution}
                              </h1>
                              <h6 className="text-xs font-semibold ml-12">
                                {item.startDate} - {item.endDate}
                              </h6>
                              <li className="ml-14 font-semibold">
                                {item.fieldOfStudy}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.work.length != 0 && (
                        <div className="p-2 px-0">
                          <h1 className="font-medium text-xl ml-8 pt-2 ">
                            Work Experience
                          </h1>
                          {details.work.map((item) => (
                            <div className="p-1" key={item.company}>
                              <h1 className="font-medium ml-8 text-lg">
                                {item.company}
                              </h1>
                              <h2 className="font-semibold text-xs ml-8">
                                {item.from} - {item.to}
                              </h2>
                              <li className="ml-14 list-disc font-semibold">
                                {item.designation}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.projects.length != 0 && (
                        <div className="p-2 px-0">
                          <h1 className="font-medium text-xl ml-8 pt-2 ">
                            Projects
                          </h1>
                          {details.projects.map((item) => (
                            <div className="p-1" key={item.name}>
                              <h1 className="font-medium ml-8 text-lg">
                                {item.name}
                              </h1>
                              <h2 className="font-semibold text-xs ml-8">
                                {item.from} - {item.to}
                              </h2>
                              <li className="ml-14 list-disc font-semibold">
                                {item.website}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.certifications.length != 0 && (
                        <div>
                          <h1 className="font-medium text-xl ml-8 pt-2 ">
                            Certifications
                          </h1>
                          {details.certifications.map((item) => (
                            <div key={item.title}>
                              <h1 className="ml-8 text-normal font-semibold">
                                {item.title}
                              </h1>
                              <li className="ml-12 text-sm font-medium">
                                {item.issuer}
                              </li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.awards.length != 0 && (
                        <div>
                          <h1 className="font-medium text-xl ml-8 pt-2 ">
                            Awards
                          </h1>
                          {details.awards.map((item) => (
                            <div key={item.name}>
                              <h1 className="ml-8 text-normal font-semibold">
                                {item.name}
                              </h1>
                              <li className="ml-12 text-sm font-medium">
                                {item.awarder}
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
                <div className="flex justify-center ">
                  <div>
                    <button
                      onClick={printDocument}
                      className="cursor-pointer text-white mx-5"
                    >
                      Print
                    </button>

                    <button
                      className="text-white"
                      onClick={() => setdemo(!demo)}
                    >
                      LOAD
                    </button>
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

                  {/* large resume */}

                  <div
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div className="grid grid-cols-5">
                      <div className="col-span-2 border-2 border-solid border-black h-[255mm] ml-5 mt-20">
                        <img
                          className=" pt-4 w-52 absolute top-0 ml-10 border-2  border-gray-600 z-10"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                          alt="ProfilePhoto"
                        />

                        <div>
                          <h1 className="text-black mt-36 ml-16  font-medium text-3xl">
                            {details.personal.firstName}
                          </h1>
                          <h1 className="text-black ml-16 font-medium text-3xl">
                            {details.personal.lastName}
                          </h1>
                          <h6 className="font-normal text-xs ml-16 pt-2">
                            {details.personal.role}
                          </h6>
                        </div>
                        <div>
                          <h1 className="font-bold text-lg ml-16 pt-4 p-1">
                            contact
                          </h1>
                          <li className="font-normal ml-20">
                            {details.personal.email}
                          </li>
                          <li className="font-normal ml-20">
                            {details.personal.phone}
                          </li>
                          <li className="font-normal ml-20">
                            {details.personal.dob}
                          </li>
                        </div>
                        {details.skills.length != 0 && (
                          <div>
                            <h1 className="font-bold text-lg ml-16 pt-4">
                              skills
                            </h1>
                            {details.skills.map((item) => (
                              <div key={item.name}>
                                <h1 className="font-medium ml-16 p-2">
                                  {item.name}
                                </h1>
                                <h1 className="text-sm ml-16 px-2">
                                  {item.level}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.social.length != 0 && (
                          <div>
                            <h1 className="font-bold  text-lg ml-16 pt-4">
                              Social Network
                            </h1>
                            {details.social.map((item) => (
                              <div
                                className="ml-20 my-4 flex"
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
                                  <h1 className="ml-4">{item.username}</h1>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div>
                            <h1 className="font-bold  text-lg ml-16 pt-2">
                              Hobbies
                            </h1>
                            {details.hobbies.map((item) => (
                              <div key={item.name}>
                                <h1 className="px-20 text-sm p-1">
                                  {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.languages.length != 0 && (
                          <div>
                            <h1 className="font-bold  text-lg ml-16 pt-2">
                              Languages
                            </h1>
                            {details.hobbies.map((item) => (
                              <div key={item.name}>
                                <h1 className="px-20 text-sm p-1">
                                  {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="col-span-3">
                        {details.personal.objective.length != 0 && (
                          <div>
                            <h1 className="font-medium text-xl ml-8 mt-20">
                              About
                            </h1>
                            <p className="ml-1 p-4 pt-1">
                              {details.personal.objective}
                            </p>
                          </div>
                        )}
                        {details.education.length != 0 && (
                          <div className="p-2 px-0">
                            <h1 className="font-medium text-xl ml-8 ">
                              Education
                            </h1>
                            {details.education.map((item) => (
                              <div key={item.institution}>
                                <h1 className="font-medium ml-8">
                                  {item.institution}
                                </h1>
                                <h6 className="text-xs font-semibold ml-12">
                                  {item.startDate} - {item.endDate}
                                </h6>
                                <li className="ml-14 font-semibold">
                                  {item.fieldOfStudy}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.work.length != 0 && (
                          <div className="p-2 px-0">
                            <h1 className="font-medium text-xl ml-8 pt-2 ">
                              Work Experience
                            </h1>
                            {details.work.map((item) => (
                              <div className="p-1" key={item.company}>
                                <h1 className="font-medium ml-8 text-lg">
                                  {item.company}
                                </h1>
                                <h2 className="font-semibold text-xs ml-8">
                                  {item.from} - {item.to}
                                </h2>
                                <li className="ml-14 list-disc font-semibold">
                                  {item.designation}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.projects.length != 0 && (
                          <div className="p-2 px-0">
                            <h1 className="font-medium text-xl ml-8 pt-2 ">
                              Projects
                            </h1>
                            {details.projects.map((item) => (
                              <div className="p-1" key={item.name}>
                                <h1 className="font-medium ml-8 text-lg">
                                  {item.name}
                                </h1>
                                <h2 className="font-semibold text-xs ml-8">
                                  {item.from} - {item.to}
                                </h2>
                                <li className="ml-14 list-disc font-semibold">
                                  {item.website}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div>
                            <h1 className="font-medium text-xl ml-8 pt-2 ">
                              Certifications
                            </h1>
                            {details.certifications.map((item) => (
                              <div key={item.title}>
                                <h1 className="ml-8 text-normal font-semibold">
                                  {item.title}
                                </h1>
                                <li className="ml-12 text-sm font-medium">
                                  {item.issuer}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <div>
                            <h1 className="font-medium text-xl ml-8 pt-2 ">
                              Awards
                            </h1>
                            {details.awards.map((item) => (
                              <div key={item.name}>
                                <h1 className="ml-8 text-normal font-semibold">
                                  {item.name}
                                </h1>
                                <li className="ml-12 text-sm font-medium">
                                  {item.awarder}
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
