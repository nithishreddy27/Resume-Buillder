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
export default function Dynamic() {
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
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                  <div className="w-[35%] z-10 bg-slate-800 h-[100] p-5">
                    <div className="mt-44">
                      <h1 className="text-2xl  tracking-[2px] text-white heading">
                        CONTACT
                      </h1>
                      <hr className="h-[2px] bg-black my-2" />
                      <div className="flex">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/phone-icon-16.png"
                            className="w-5 h-5"
                          />
                        </span>
                        <h1 className="mx-4 text-white">
                          {details.personal.phone}
                        </h1>
                      </div>
                      <div className="flex my-1">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/icon-email-icon-clip-art-at-clker-com-vector-qafaq-e-mail-icon-trace--0.png"
                            className="w-7 h-7"
                          />
                        </span>
                        <h1 className="mx-2 text-white">
                          {details.personal.email}
                        </h1>
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
                              className="w-5 grayscale-[40%]   "
                            />
                          </span>

                          <Link href={item.url}>
                            <span className="mx-4 text-white">
                              {item.username}
                            </span>
                          </Link>
                        </div>
                      ))}
                      <h1 className="text-2xl mt-4 tracking-[2px] text-white heading">
                        SKILLS
                      </h1>
                      <hr className="h-[2px] bg-black my-2" />

                      {details.skills.length != 0 && (
                        <div>
                          {details.skills.map((item) => (
                            <div className="flex" key={item.name}>
                              <p className="mx-1   text-white my-2 w-[70%] text-sm">
                                {item.name}
                              </p>
                              {item.level == "Beginner" && (
                                // <p className="text-white"></p>
                                <div className="w-[40%] h-2 relative rounded-md left-0 bg-white   mt-5">
                                  <div className="w-[66%] absolute right-0 bg-black h-2"></div>
                                </div>
                              )}
                              {item.level == "Intermediate" && (
                                <div className="w-[40%] h-2 relative rounded-md left-0 bg-white  mt-5">
                                  <div className="w-[33%] absolute right-0 bg-black h-2"></div>
                                </div>
                              )}
                              {
                                item.level == "Expert" && (
                                  <div className="w-[40%] h-2 relative rounded-md  left-0 bg-white  mt-5">
                                    <div className="w-[1%] absolute right-0 bg-black h-2"></div>
                                  </div>
                                )
                                // <p className="text-white">exp</p>
                              }
                            </div>
                          ))}
                        </div>
                      )}

                      {details.hobbies.length != 0 && (
                        <div className="mt-5">
                          <h1 className="text-2xl  text-white  tracking-[2px] heading">
                            HOBBIES
                          </h1>
                          <hr className="h-[2px] my-1" />
                          {details.hobbies.map((item) => (
                            <p className="my-2 text-white" key={item.name}>
                              {item.name}
                            </p>
                          ))}
                        </div>
                      )}

                      {details.languages.length != 0 && (
                        <div className="mt-5">
                          <h1 className="text-2xl  text-white  tracking-[2px] heading">
                            LANGUAGES
                          </h1>
                          <hr className="h-[2px] my-1" />
                          {details.languages.map((item) => (
                            <p className="my-2 text-white" key={item.name}>
                              {item.name}
                            </p>
                          ))}
                        </div>
                      )}

                      {details.awards.length != 0 && (
                        <>
                          {" "}
                          <h1 className="text-2xl  tracking-[2px] text-white mt-5 heading">
                            AWARADS
                          </h1>
                          <hr className="h-[2px] bg-black mt-1 mb-4 " />
                          {details.awards.map((item) => (
                            <div className="my-2" key={item.name}>
                              <span className="font-semibold text-[15px] text-white">
                                {item.name}
                              </span>

                              <p className="mx-4 text-white opacity-60">
                                {item.summary.data.slice(0, 38)}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="w-[65%] z-10 bg-slate-300 p-5">
                    {details.personal.objective.length != 0 && (
                      <div className="mt-48">
                        <div className="flex mb-2">
                          <h1 className="text-xl font-semibold tracking-[1px] heading">
                            OBJECTIVE
                          </h1>
                          <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                        </div>
                        <p className="text-sm">{details.personal.objective}</p>
                      </div>
                    )}
                    {details.work.length != 0 && (
                      <div className="mt-5">
                        <div className="flex">
                          <h1 className="text-xl font-semibold tracking-[1px] heading">
                            EMPLOYMENT HISTORY
                          </h1>
                          <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                        </div>
                        {details.work.map((item) => (
                          <div className="mt-4" key={item.company}>
                            <h1 className="font-semibold">
                              {item.company}{" "}
                              <span className="font-medium">
                                ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                              </span>{" "}
                            </h1>

                            <p className="ml-5">{item.website}</p>
                            <p className="ml-5 my-1">{item.summary.data}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {details.education.length != 0 && (
                      <div className="mt-5">
                        <div className="flex">
                          <h1 className="text-xl font-semibold tracking-[1px] heading">
                            EDUCATION
                          </h1>
                          <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                        </div>
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
                      </div>
                    )}
                    {details.projects.length != 0 && (
                      <div className="mt-5">
                        <div className="flex mb-2">
                          <h1 className="text-xl font-semibold tracking-[1px] heading">
                            PROJECTS
                          </h1>
                          <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                        </div>
                        {details.projects.map((item) => (
                          <div className="mt-4" key={item.name}>
                            <Link href={item.website}>
                              <h1 className="font-semibold">
                                {item.name}{" "}
                                <span className="font-medium">
                                  ({item.from.slice(0, 4)}-{item.to.slice(0, 4)}
                                  )
                                </span>{" "}
                              </h1>{" "}
                            </Link>

                            <span className="ml-5 text-sm">
                              {item.summary.data}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {details.certifications.length != 0 && (
                      <div className="mt-2">
                        <div className="flex mb-2">
                          <h1 className="text-xl font-semibold tracking-[1px] heading">
                            CERTIFICATIONS
                          </h1>
                          <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                        </div>
                        {details.certifications.map((item) => (
                          <p className="my-2" key={item.title}>
                            {item.title}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="absolute w-[100%] h-28 bg-cyan-800 z-20 top-9 flex">
                    <div>
                      {
                        <>
                          <h1 className="text-3xl mt-7 ml-24 font-semibold tracking-widest text-white ">
                            {details.personal.firstName.concat(
                              "  " + details.personal.lastName
                            )}
                          </h1>
                          <p className="mt-2 ml-36 tracking-widest text-white">
                            {details.personal.role}
                          </p>
                        </>
                      }
                    </div>
                  </div>
                  <img
                    src="https://randomuser.me/api/portraits/men/40.jpg"
                    alt=""
                    className=" absolute top-6 right-10 z-30 h-32 rounded-full border-white border-4  "
                  />
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-170px] xl:scale-[0.9] xl:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div className="w-[35%] z-10 bg-slate-800 h-[100] p-5">
                      <div className="mt-44">
                        <h1 className="text-2xl  tracking-[2px] text-white heading">
                          CONTACT
                        </h1>
                        <hr className="h-[2px] bg-black my-2" />
                        <div className="flex">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/phone-icon-16.png"
                              className="w-5 h-5"
                            />
                          </span>
                          <h1 className="mx-4 text-white">
                            {details.personal.phone}
                          </h1>
                        </div>
                        <div className="flex my-1">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/icon-email-icon-clip-art-at-clker-com-vector-qafaq-e-mail-icon-trace--0.png"
                              className="w-7 h-7"
                            />
                          </span>
                          <h1 className="mx-2 text-white">
                            {details.personal.email}
                          </h1>
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
                                className="w-5 grayscale-[40%]   "
                              />
                            </span>

                            <Link href={item.url}>
                              <span className="mx-4 text-white">
                                {item.username}
                              </span>
                            </Link>
                          </div>
                        ))}
                        <h1 className="text-2xl mt-4 tracking-[2px] text-white heading">
                          SKILLS
                        </h1>
                        <hr className="h-[2px] bg-black my-2" />

                        {details.skills.length != 0 && (
                          <div>
                            {details.skills.map((item) => (
                              <div className="flex" key={item.name}>
                                <p className="mx-1   text-white my-2 w-[70%] text-sm">
                                  {item.name}
                                </p>
                                {item.level == "Beginner" && (
                                  // <p className="text-white"></p>
                                  <div className="w-[40%] h-2 relative rounded-md left-0 bg-white   mt-5">
                                    <div className="w-[66%] absolute right-0 bg-black h-2"></div>
                                  </div>
                                )}
                                {item.level == "Intermediate" && (
                                  <div className="w-[40%] h-2 relative rounded-md left-0 bg-white  mt-5">
                                    <div className="w-[33%] absolute right-0 bg-black h-2"></div>
                                  </div>
                                )}
                                {
                                  item.level == "Expert" && (
                                    <div className="w-[40%] h-2 relative rounded-md  left-0 bg-white  mt-5">
                                      <div className="w-[1%] absolute right-0 bg-black h-2"></div>
                                    </div>
                                  )
                                  // <p className="text-white">exp</p>
                                }
                              </div>
                            ))}
                          </div>
                        )}

                        {details.hobbies.length != 0 && (
                          <div className="mt-5">
                            <h1 className="text-2xl  text-white  tracking-[2px] heading">
                              HOBBIES
                            </h1>
                            <hr className="h-[2px] my-1" />
                            {details.hobbies.map((item) => (
                              <p className="my-2 text-white" key={item.name}>
                                {item.name}
                              </p>
                            ))}
                          </div>
                        )}

                        {details.languages.length != 0 && (
                          <div className="mt-5">
                            <h1 className="text-2xl  text-white  tracking-[2px] heading">
                              LANGUAGES
                            </h1>
                            <hr className="h-[2px] my-1" />
                            {details.languages.map((item) => (
                              <p className="my-2 text-white" key={item.name}>
                                {item.name}
                              </p>
                            ))}
                          </div>
                        )}

                        {details.awards.length != 0 && (
                          <>
                            {" "}
                            <h1 className="text-2xl  tracking-[2px] text-white mt-5 heading">
                              AWARADS
                            </h1>
                            <hr className="h-[2px] bg-black mt-1 mb-4 " />
                            {details.awards.map((item) => (
                              <div className="my-2" key={item.name}>
                                <span className="font-semibold text-[15px] text-white">
                                  {item.name}
                                </span>

                                <p className="mx-4 text-white opacity-60">
                                  {item.summary.data.slice(0, 38)}
                                </p>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="w-[65%] z-10 bg-slate-300 p-5">
                      {details.personal.objective.length != 0 && (
                        <div className="mt-48">
                          <div className="flex mb-2">
                            <h1 className="text-xl font-semibold tracking-[1px] heading">
                              OBJECTIVE
                            </h1>
                            <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                          </div>
                          <p className="text-sm">
                            {details.personal.objective}
                          </p>
                        </div>
                      )}
                      {details.work.length != 0 && (
                        <div className="mt-5">
                          <div className="flex">
                            <h1 className="text-xl font-semibold tracking-[1px] heading">
                              EMPLOYMENT HISTORY
                            </h1>
                            <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                          </div>
                          {details.work.map((item) => (
                            <div className="mt-4" key={item.company}>
                              <h1 className="font-semibold">
                                {item.company}{" "}
                                <span className="font-medium">
                                  ({item.from.slice(0, 4)}-{item.to.slice(0, 4)}
                                  )
                                </span>{" "}
                              </h1>

                              <p className="ml-5">{item.website}</p>
                              <p className="ml-5 my-1">{item.summary.data}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.education.length != 0 && (
                        <div className="mt-5">
                          <div className="flex">
                            <h1 className="text-xl font-semibold tracking-[1px] heading">
                              EDUCATION
                            </h1>
                            <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                          </div>
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
                        </div>
                      )}
                      {details.projects.length != 0 && (
                        <div className="mt-5">
                          <div className="flex mb-2">
                            <h1 className="text-xl font-semibold tracking-[1px] heading">
                              PROJECTS
                            </h1>
                            <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                          </div>
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

                              <span className="ml-5 text-sm">
                                {item.summary.data}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.certifications.length != 0 && (
                        <div className="mt-2">
                          <div className="flex mb-2">
                            <h1 className="text-xl font-semibold tracking-[1px] heading">
                              CERTIFICATIONS
                            </h1>
                            <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                          </div>
                          {details.certifications.map((item) => (
                            <p className="my-2" key={item.title}>
                              {item.title}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="absolute w-[100%] h-28 bg-cyan-800 z-20 top-9 flex">
                      <div>
                        {
                          <>
                            <h1 className="text-3xl mt-7 ml-24 font-semibold tracking-widest text-white ">
                              {details.personal.firstName.concat(
                                "  " + details.personal.lastName
                              )}
                            </h1>
                            <p className="mt-2 ml-36 tracking-widest text-white">
                              {details.personal.role}
                            </p>
                          </>
                        }
                      </div>
                    </div>
                    <img
                      // src="https://randomuser.me/api/portraits/men/40.jpg"
                      src="https://res.cloudinary.com/dhqhq0szn/image/upload/v1676532396/my-uploads/kejobl0bix99ynkl8snb.jpg"
                      alt=""
                      className=" absolute top-6 right-10 z-30 h-32 rounded-full border-white border-4  "
                    />
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
