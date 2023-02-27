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
export default function Blue() {
  const user = useUser();
  const { details, setdetails, setdemo, demo} =
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
                  <div className="flex mt-1">
                    
                  </div>
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
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h[285mm] h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                  <div
                    className={`h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10`}
                  >
                    <img
                      src="https://randomuser.me/api/portraits/men/40.jpg"
                      alt=""
                      className="rounded-full h-40 mb-5 mx-auto"
                    />
                    <>
                      <div className="flex">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                            className="w-5 h-5"
                          />
                        </span>
                        <h1 className="mx-4">{details.personal.phone}</h1>
                      </div>
                      <div className="flex my-1">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                            className="w-7 h-7"
                          />
                        </span>
                        <h1 className="mx-2">{details.personal.email}</h1>
                      </div>
                      {details.social.map((item) => (
                        <div className="my-3 flex" key={item.network}>
                          <span>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              alt=""
                              srcset=""
                              className="w-5 grayscale-[40%]"
                            />
                          </span>

                          <Link href={item.url}>
                            <span className="mx-4">{item.username}</span>
                          </Link>
                        </div>
                      ))}
                    </>
                    {details.skills.length != 0 && (
                      <>
                        <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                          SKILLS
                        </h1>

                        <div className="my-2">
                          {details.skills.map((item) => (
                            <div className="flex" key={item.name}>
                              <h1 className="">{item.name}</h1>
                              <p className="absolute right-5">{item.level}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {details.languages.length != 0 && (
                      <>
                        <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                          LANGUAGES
                        </h1>
                        <div className="my-2">
                          {details.languages.map((item) => (
                            <div className="flex" key={item.name}>
                              <h1 className="">{item.name}</h1>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {details.hobbies.length != 0 && (
                      <>
                        <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                          HOBBIES
                        </h1>
                        <div className="my-2">
                          {details.hobbies.map((item) => (
                            <div className="flex" key={item.name}>
                              <h1 className="">{item.name}</h1>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {details.awards.length != 0 && (
                      <>
                        <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                          AWARDS
                        </h1>
                        <div className="my-2">
                          {details.awards.map((item) => (
                            <div className="flex" key={item.name}>
                              <span className=" text-[15px] my-1">
                                {item.name}{" "}
                                <span className="">({item.date})</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {/* <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">HOBBIES</h1>
            {details.hobbies.map((item) => (
              <p className="my-2">{item.name}</p>
            ))}
          </div> */}
                    {details.certifications.length != 0 && (
                      <>
                        <div className="mt-4">
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
                            CERTIFICATIONS
                          </h1>
                          {details.certifications.map((item) => (
                            <p className="my-2" key={item.name}>
                              {item.title}
                            </p>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    className={`w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10`}
                  >
                    <h1 className="text-3xl ml-[50%] font-bold tracking-widest">
                      {details.personal.firstName}{" "}
                      <span>{details.personal.lastName}</span>
                    </h1>
                    <h1 className="ml-[58%] my-2 tracking-widest">
                      {details.personal.role}
                    </h1>
                    <div className="absolute mt-10  left-[330px] w-[57%] h-[100%]">
                      {details.personal.objective != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px] heading">
                            OBJECTIVE
                          </h1>
                          <p>{details.personal.objective}</p>
                        </>
                      )}
                      {details.education.length != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px] heading">
                            EDUCATION
                          </h1>
                          {details.education.map((item) => (
                            <div className="mt-4" key={item.institution}>
                              <h1 className="font-semibold">
                                {item.institution}{" "}
                                <span className="font-medium">
                                  ({item.startDate.slice(0, 4)}-
                                  {item.endDate.slice(0, 4)})
                                </span>{" "}
                              </h1>

                              <p className="ml-5">{item.typeOfDegree}</p>
                              <p className="ml-5 my-1">{item.summary.data}</p>
                              <p className="ml-5">GPA-{item.gpa}</p>
                            </div>
                          ))}
                        </>
                      )}

                      {details.work.length != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                            WORK
                          </h1>
                          {details.work.map((item) => (
                            <div className="mt-4" key={item.company}>
                              <h1 className="font-semibold">
                                {item.company}{" "}
                                <span className="font-medium">
                                  ({item.from.slice(0, 4)}-{item.to.slice(0, 4)}
                                  )
                                </span>{" "}
                              </h1>

                              <span className="ml-5 tracking-wider font-semibold">
                                {item.designation}
                              </span>
                              <span className="ml-5 text-sm">
                                {item.summary.data}
                              </span>
                            </div>
                          ))}
                        </>
                      )}
                      {details.projects.length != 0 && (
                        <div>
                          <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                            PROJECTS
                          </h1>
                          {details.projects.map((item) => (
                            <div className="mt-4" key={item.name}>
                              <Link href={item.website}>
                                <h1 className="font-semibold">
                                  {item.name}{" "}
                                  <span className="font-medium">
                                    ({item.from.slice(0, 4)}-
                                    {item.to.slice(0, 4)})
                                  </span>{" "}
                                </h1>{" "}
                              </Link>

                              <span className="ml-5 tracking-wider font-semibold">
                                {item.designation}
                              </span>
                              <span className="ml-5 text-sm">
                                {item.summary.data}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <style jsx>
                  {`
                  .heading{
                    color:${color.hex};
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
                  <div className="m-5 grow">
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div
                      className={`h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10`}
                    >
                      <img
                        src="https://randomuser.me/api/portraits/men/40.jpg"
                        alt=""
                        className="rounded-full h-40 mb-5 mx-auto"
                      />
                      <>
                        <div className="flex">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                              className="w-5 h-5"
                            />
                          </span>
                          <h1 className="mx-4">{details.personal.phone}</h1>
                        </div>
                        <div className="flex my-1">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                              className="w-7 h-7"
                            />
                          </span>
                          <h1 className="mx-2">{details.personal.email}</h1>
                        </div>
                        {details.social.map((item) => (
                          <div className="my-3 flex" key={item.network}>
                            <span>
                              <img
                                src={
                                  "https://www." +
                                  item.network +
                                  ".com/favicon.ico"
                                }
                                alt=""
                                srcset=""
                                className="w-5 grayscale-[40%]"
                              />
                            </span>

                            <Link href={item.url}>
                              <span className="mx-4">{item.username}</span>
                            </Link>
                          </div>
                        ))}
                      </>
                      {details.skills.length != 0 && (
                        <>
                          <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                            SKILLS
                          </h1>

                          <div className="my-2">
                            {details.skills.map((item) => (
                              <div className="flex" key={item.name}>
                                <h1 className="">{item.name}</h1>
                                <p className="absolute right-5">{item.level}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {details.languages.length != 0 && (
                        <>
                          <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                            LANGUAGES
                          </h1>
                          <div className="my-2">
                            {details.languages.map((item) => (
                              <div className="flex" key={item.name}>
                                <h1 className="">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {details.hobbies.length != 0 && (
                        <>
                          <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                            HOBBIES
                          </h1>
                          <div className="my-2">
                            {details.hobbies.map((item) => (
                              <div className="flex" key={item.name}>
                                <h1 className="">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {details.awards.length != 0 && (
                        <>
                          <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                            AWARDS
                          </h1>
                          <div className="my-2">
                            {details.awards.map((item) => (
                              <div className="flex" key={item.name}>
                                <span className=" text-[15px] my-1">
                                  {item.name}{" "}
                                  <span className="">({item.date})</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {/* <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">HOBBIES</h1>
            {details.hobbies.map((item) => (
              <p className="my-2">{item.name}</p>
            ))}
          </div> */}
                      {details.certifications.length != 0 && (
                        <>
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              CERTIFICATIONS
                            </h1>
                            {details.certifications.map((item) => (
                              <p className="my-2" key={item.name}>
                                {item.title}
                              </p>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <div
                      className={`w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10`}
                    >
                      <h1 className="text-3xl ml-[50%] font-bold tracking-widest">
                        {details.personal.firstName}{" "}
                        <span>{details.personal.lastName}</span>
                      </h1>
                      <h1 className="ml-[58%] my-2 tracking-widest">
                        {details.personal.role}
                      </h1>
                      <div className="absolute mt-10  left-[330px] w-[57%] h-[100%]">
                        {details.personal.objective != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] heading">
                              OBJECTIVE
                            </h1>
                            <p>{details.personal.objective}</p>
                          </>
                        )}
                        {details.education.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] heading">
                              EDUCATION
                            </h1>
                            {details.education.map((item) => (
                              <div className="mt-4" key={item.institution}>
                                <h1 className="font-semibold">
                                  {item.institution}{" "}
                                  <span className="font-medium">
                                    ({item.startDate.slice(0, 4)}-
                                    {item.endDate.slice(0, 4)})
                                  </span>{" "}
                                </h1>

                                <p className="ml-5">{item.typeOfDegree}</p>
                                <p className="ml-5 my-1">{item.summary.data}</p>
                                <p className="ml-5">GPA-{item.gpa}</p>
                              </div>
                            ))}
                          </>
                        )}

                        {details.work.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                              WORK
                            </h1>
                            {details.work.map((item) => (
                              <div className="mt-4" key={item.company}>
                                <h1 className="font-semibold">
                                  {item.company}{" "}
                                  <span className="font-medium">
                                    ({item.from.slice(0, 4)}-
                                    {item.to.slice(0, 4)})
                                  </span>{" "}
                                </h1>

                                <span className="ml-5 tracking-wider font-semibold">
                                  {item.designation}
                                </span>
                                <span className="ml-5 text-sm">
                                  {item.summary.data}
                                </span>
                              </div>
                            ))}
                          </>
                        )}
                        {details.projects.length != 0 && (
                          <div>
                            <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                              PROJECTS
                            </h1>
                            {details.projects.map((item) => (
                              <div className="mt-4" key={item.name}>
                                <Link href={item.website}>
                                  <h1 className="font-semibold">
                                    {item.name}{" "}
                                    <span className="font-medium">
                                      ({item.from.slice(0, 4)}-
                                      {item.to.slice(0, 4)})
                                    </span>{" "}
                                  </h1>{" "}
                                </Link>

                                <span className="ml-5 tracking-wider font-semibold">
                                  {item.designation}
                                </span>
                                <span className="ml-5 text-sm">
                                  {item.summary.data}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <style jsx>
                    {`
                    .heading{
                      color:${color.hex};
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
