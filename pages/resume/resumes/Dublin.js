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
import { AiFillPrinter, AiFillDatabase } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineColorLens, MdOutlineDocumentScanner } from "react-icons/md";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { HiOutlineDocumentSearch } from "react-icons/hi";

import { RxHobbyKnife } from "react-icons/rx";

import "react-color-palette/lib/css/styles.css";

export default function Dublin() {
  const user = useUser();
  const { details, setdetails, setdemo, demo } = useContext(ResumeContext);
  const [change, setchange] = useState(false);
  const [colorpalette, setcolorpalette] = useState(false);
  const [ftw, setftw] = useState(true);

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
            <div className="mx-auto w-full bg-cover lg:w-3/4 xl:w-3/5 bg-gradient-to-b from-slate-700 to-slate-800 ">
              <div className="border-b border-r border-gray-300 py-2 top-[-5px] fixed lg:sticky w-[100%] lg:w-[100%] z-30  bg-slate-700">
                <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                  {/* <h1>Provast</h1> */}
                  <img
                    src="https://www.provast.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=2048&q=75"
                    width={180}
                    height={55}
                  />
                  <button
                    className=" block lg:hidden  text-white p-1 mr-[20%] md:mr-[10%] mt-1 border border-white rounded-md"
                    onClick={toggleResume}
                  >
                    <TbListDetails className="text-2xl text-gray-400"></TbListDetails>
                  </button>

                  {/* <div>
                      <button>Preview</button>
                    </div> */}
                </div>
              </div>
              <div className="flex justify-center  shadow-lg  mt-[75px] mx-2 w-[97%] rounded-md fixed bg-slate-700 z-30">
                <div className="m-3 flex">
                  <button
                    className="text-white p-2 rounded-md"
                    onClick={() => {
                      setcolorpalette(!colorpalette);
                    }}
                  >
                    <MdOutlineColorLens className="text-2xl text-gray-200"></MdOutlineColorLens>
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
                    className="cursor-pointer text-white p-1 mx-1 rounded"
                  >
                    <AiFillPrinter className="text-2xl"></AiFillPrinter>
                  </button>

                  <button
                    className="text-white  p-1 mx-1 rounded"
                    onClick={() => setdemo(!demo)}
                  >
                    <AiFillDatabase className="text-2xl text-gray-400"></AiFillDatabase>
                  </button>
                </div>
              </div>
              <div className="flex justify-center z-0">
               {/* Small Resume */}
               <div
                  className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[100px] sm:mt-[10px] mx-[-210px] mt-[-150px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover z-0 overflow-hidden drop-shadow-2xl flex flex-row"
                  id="smallResume"
                  // style={{ color: color.hex }}
                >
                  <div className="flex">
                    <div className="first w-[85mm] h-[297mm] bg-emerald-700">
                      <div className="photobg bg-slate-300 w-[200px] h-[200px] relative top-16 left-16"></div>
                      <div className="photo">
                        <img
                          src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                          className="w-[200px] h-[200px] relative top-[-124px] left-[75px]"
                        ></img>
                      </div>
                      <div className="firstone w-[85mm] relative top-[-100px]">
                        <div className="personal">
                          <div className="dob pl-10 pt-3 text-white">
                            <i className="bx bxs-calendar pr-4 text-lg text-white"></i>
                            <span className="text-base relative bottom-[3px] text-white">
                              {details.personal.dob}
                            </span>
                          </div>
                          <div className="phone pl-10 pt-3 text-white">
                            <i className="bx bxs-phone pr-4 text-lg text-white"></i>
                            <span class="text-base relative bottom-1 text-white">
                              {details.personal.phone}
                            </span>
                          </div>
                          <div className="mail pl-10 pt-3 pb-2 text-white">
                            <i className="bx bxs-envelope pr-4 text-lg text-white"></i>
                            <span class="text-base relative bottom-1 text-white">
                              {details.personal.email}
                            </span>
                          </div>
                          <div className="social px-14 grid grid-cols-6 pb-4">
                            {details.social.map((item) => (
                              <>
                                {item.enabled && (
                                  <div className="pr-2 pt-1" key={item.network}>
                                    <h1>
                                      <Link href={`${item.url}`}>
                                        <img
                                          src={
                                            "https://www." +
                                            item.network +
                                            ".com/favicon.ico"
                                          }
                                          className="w-5 grayscale-[40%]"
                                        ></img>
                                      </Link>
                                    </h1>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                        {details.education.length != 0 &&
                          details.education.filter(
                            (education) => education.enabled
                          ).length > 0 && (
                            <div className="education">
                              <h2 className="text-center text-xl font-sans font-bold text-zinc-200 heading">
                                E D U C A T I O N
                              </h2>
                              {details.education.map((item) => (
                                <>
                                  {item.enabled && (
                                    <p
                                      className="pl-10 pr-5 pt-5"
                                      key={item.institution}
                                    >
                                      <span className="font-medium text-white">
                                        {item.institution}
                                      </span>
                                      <span className="text-white"> in </span>
                                      <span className="font-medium text-white">
                                        {item.fieldOfStudy}
                                        <br />({item.startDate} to{" "}
                                        {item.endDate})
                                      </span>
                                      <br />
                                      <i className="bx bxs-graduation text-white"></i>
                                      <span className="text-white">
                                        {" "}
                                        {item.typeOfDegree} in{" "}
                                        {item.fieldOfStudy} ({item.gpa})
                                      </span>
                                    </p>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.certifications.length != 0 &&
                          details.certifications.filter(
                            (certifications) => certifications.enabled
                          ).length > 0 && (
                            <div className="certifications">
                              <h2 className="text-center text-xl font-sans font-bold pt-3 text-zinc-200 pb-3 heading">
                                C E R T I F I C A T I O N S
                              </h2>
                              {details.certifications.map((item) => (
                                <>
                                  {item.enabled && (
                                    <p
                                      className="pl-10 pr-5 pt-1 text-white"
                                      key={item.title}
                                    >
                                      <i className="bx bxs-square text-xs pr-3 text-white"></i>
                                      <span className="text-white">
                                        {item.title} from {item.issuer}
                                      </span>
                                    </p>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.skills.length != 0 &&
                          details.skills.filter((skills) => skills.enabled)
                            .length > 0 && (
                            <div className="skills">
                              <div className="pl-10">
                                <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300 heading">
                                  S K I L L S
                                </h2>
                                {details.skills.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <span
                                        className="pr-2 text-white"
                                        key={item.name}
                                      >
                                        {item.name}{" "}
                                      </span>
                                    )}
                                  </>
                                ))}
                              </div>
                            </div>
                          )}
                        {details.languages.length != 0 &&
                          details.languages.filter(
                            (languages) => languages.enabled
                          ).length > 0 && (
                            <div className="languages">
                              <div className="pl-10">
                                <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300 heading">
                                  L A N G U A G E S
                                </h2>
                                {details.languages.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <span
                                        className="pr-2 text-white"
                                        key={item.name}
                                      >
                                        {item.name}{" "}
                                      </span>
                                    )}
                                  </>
                                ))}
                              </div>
                            </div>
                          )}
                        {details.hobbies.length != 0 &&
                          details.hobbies.filter((hobbies) => hobbies.enabled)
                            .length > 0 && (
                            <div className="skills">
                              <div className="pl-10">
                                <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300 heading">
                                  H O B B I E S
                                </h2>
                                {details.hobbies.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <span
                                        className="pr-2 text-white"
                                        key={item.name}
                                      >
                                        {item.name}{" "}
                                      </span>
                                    )}
                                  </>
                                ))}
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="second bg-emerald-100 w-[125mm] h-[297mm]">
                      <div className="name">
                        <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600 font-serif">
                          <h1>{details.personal.firstName}</h1>
                          <h1>{details.personal.lastName}</h1>
                          <h2 className="text-lg font-normal py-3">
                            {details.personal.role}
                          </h2>
                        </div>
                      </div>
                      {details.personal.objective.length != 0 && (
                        <div className="career-objective">
                          <h2 className="text-center text-xl font-sans font-bold pt-3 heading">
                            C A R E E R O B J E C T I V E
                          </h2>
                          <p className="pl-10 pr-5 pt-2 text-xs">
                            {details.personal.objective}
                          </p>
                        </div>
                      )}
                      {details.work.length != 0 &&
                        details.work.filter((work) => work.enabled).length >
                          0 && (
                          <div className="experience">
                            <h2 className="text-center text-xl font-sans font-bold pt-5 heading">
                              E X P E R I E N C E
                            </h2>
                            {details.work.map((item) => (
                              <>
                                {item.enabled && (
                                  <p
                                    className="pl-10 pr-5 pt-2"
                                    key={item.company}
                                  >
                                    <span className="font-medium text-lg pr-3">
                                      {item.designation} in {item.company}
                                    </span>
                                    <br></br>({item.from} to {item.to})<br />
                                    <Link href={`${item.website}`}>
                                      {item.website}
                                    </Link>
                                    <br></br>
                                    <span className="text-sm">
                                      {item.summary.data}
                                    </span>
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                      {details.projects.length != 0 &&
                        details.projects.filter((projects) => projects.enabled)
                          .length > 0 && (
                          <div className="projects">
                            <h2 className="text-center text-xl font-sans font-bold pt-2 heading">
                              P R O J E C T S
                            </h2>
                            {details.projects.map((item) => (
                              <>
                                {item.enabled && (
                                  <p
                                    className="pl-10 pr-5 pt-1"
                                    key={item.name}
                                  >
                                    <span className="font-medium text-lg pr-3">
                                      {item.name}
                                    </span>{" "}
                                    ({item.from} to {item.to})<br />
                                    <a href={item.website}>{item.website}</a>
                                    <br></br>
                                    <span className="text-sm">
                                      {item.summary.data}
                                    </span>
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                      {details.awards.length != 0 &&
                        details.awards.filter((awards) => awards.enabled)
                          .length > 0 && (
                          <div className="awards">
                            <h2 className="text-center text-xl font-sans font-bold pt-2 heading">
                              A W A R D S
                            </h2>
                            {details.awards.map((item) => (
                              <>
                                {item.enabled && (
                                  <p
                                    className="pl-10 pr-5 pt-1"
                                    key={item.name}
                                  >
                                    <i className="bx bxs-award pr-1"></i>
                                    <span className="font-medium">
                                      {item.name}
                                    </span>{" "}
                                    from {item.awarder}
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
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
          )}

          {open == "semiopen" && (
            <>
              <SideBar />
              {/* PREVIEW */}
              <div
                className="lg:hidden text-white border border-white rounded-lg p-2 hover:border-orange-700 hover:text-orange-700 fixed right-[25%] md:right-[16%] top-4 "
                onClick={toggleResume}
              >
                <HiOutlineDocumentSearch></HiOutlineDocumentSearch>
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex h-[80px] shadow-lg justify-end ">
                  <div className="m-5 flex gap-3">
                    <div className="group flex items-center relative">
                      <button
                        className="text-white p-1  rounded-md"
                        onClick={() => {
                          setcolorpalette(!colorpalette);
                        }}
                      >
                        <MdOutlineColorLens className="text-3xl text-gray-200"></MdOutlineColorLens>
                      </button>
                      <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        set color
                      </span>
                    </div>
                    <div className="group flex items-center relative">
                      <button
                        className="text-white p-1  rounded-md"
                        onClick={() => {
                          setftw(false);
                        }}
                      >
                        <MdOutlineDocumentScanner className="text-2xl text-gray-200"></MdOutlineDocumentScanner>
                      </button>
                      <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        fit to screen
                      </span>
                    </div>
                    <div className="group flex items-center relative">
                      <button
                        className="text-white p-1  rounded-md"
                        onClick={() => {
                          setftw(true);
                        }}
                      >
                        <TbArrowAutofitWidth className="text-2xl text-gray-200"></TbArrowAutofitWidth>
                      </button>
                      <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        fit to width
                      </span>
                    </div>
                    <div className="group flex items-center relative justify-center">
                      <button
                        onClick={lprintDocument}
                        className="flex-shrink-0 inline-flex items-center justify-center text-gray-200 hover:text-gray-500  mx-2"
                      >
                        <AiFillPrinter className="text-2xl"></AiFillPrinter>
                        <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                          print
                        </span>
                      </button>
                    </div>
                    <div className="group flex items-center relative justify-center">
                      <button
                        onClick={() => setdemo(!demo)}
                        className=" flex-shrink-0 inline-flex items-center justify-center text-gray-200 hover:text-gray-500"
                      >
                        <AiFillDatabase className="text-2xl"></AiFillDatabase>
                        <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                          set demo data
                        </span>
                      </button>
                    </div>
                    <div
                      className={`${
                        colorpalette ? "block" : "hidden"
                      } mt-[50px] absolute z-40`}
                    >
                      {/* <button className="w-5 h-5" style={{backgroundColor:"#9b2121"}}
                      onClick={()=>{
                        // setColor("hex","#9b2121")
                        console.log("clicked",color)
                        // setColor( )  
                      }}
                      >

                      </button> */}
                      <ColorPicker
                        width={250}
                        height={100}
                        color={color}
                        onChange={setColor}
                        hideHSV
                        dark
                      />
                      ;
                    </div>
                  </div>
                  <div className="m-5 flex justify-center">
                    {/* <button
                      onClick={lprintDocument}
                      className="cursor-pointer text-white mx-5 border border-white p-2 rounded"
                    >
                      <AiFillPrinter></AiFillPrinter>
                     
                    </button> */}

                    {/* <button
                      className="text-white border border-white p-2 rounded"
                      onClick={() => setdemo(!demo)}
                    >
                      <AiFillDatabase></AiFillDatabase>
                    </button> */}
                  </div>
                </div>

                <div className="flex justify-center ">
                  {/* large resume */}

                  <div
                    className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[10px] lg:scale-[0.6] lg:mt-[-180px] ${
                      ftw
                        ? "xl:scale-[0.9] xl:mt-[-30px]"
                        : "xl:scale-[0.6] xl:mt-[-180px]"
                    }  sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                    id="largeResume"
                    // style={{ color: color.hex }}
                  >
                    <div className="flex">
                      <div className="first w-[85mm] h-[297mm] bg-emerald-700">
                        <div className="photobg bg-slate-300 w-[200px] h-[200px] relative top-16 left-16"></div>
                        <div className="photo">
                          <img
                            src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                            className="w-[200px] h-[200px] relative top-[-124px] left-[75px]"
                          ></img>
                        </div>
                        <div className="firstone w-[85mm] relative top-[-100px]">
                          <div className="personal">
                            <div className="dob pl-10 pt-3 text-white">
                              <i className="bx bxs-calendar pr-4 text-lg text-white"></i>
                              <span className="text-base relative bottom-[3px] text-white">
                                {details.personal.dob}
                              </span>
                            </div>
                            <div className="phone pl-10 pt-3 text-white">
                              <i className="bx bxs-phone pr-4 text-lg text-white"></i>
                              <span class="text-base relative bottom-1 text-white">
                                {details.personal.phone}
                              </span>
                            </div>
                            <div className="mail pl-10 pt-3 pb-2 text-white">
                              <i className="bx bxs-envelope pr-4 text-lg text-white"></i>
                              <span class="text-base relative bottom-1 text-white">
                                {details.personal.email}
                              </span>
                            </div>
                            <div className="social px-14 grid grid-cols-6 pb-4">
                              {details.social.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div
                                      className="pr-2 pt-1"
                                      key={item.network}
                                    >
                                      <h1>
                                        <Link href={`${item.url}`}>
                                          <img
                                            src={
                                              "https://www." +
                                              item.network +
                                              ".com/favicon.ico"
                                            }
                                            className="w-5 grayscale-[40%]"
                                          ></img>
                                        </Link>
                                      </h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </div>
                          {details.education.length != 0 &&
                            details.education.filter(
                              (education) => education.enabled
                            ).length > 0 && (
                              <div className="education">
                                <h2 className="text-center text-xl font-sans font-bold text-zinc-200 heading">
                                  E D U C A T I O N
                                </h2>
                                {details.education.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <p
                                        className="pl-10 pr-5 pt-5"
                                        key={item.institution}
                                      >
                                        <span className="font-medium text-white">
                                          {item.institution}
                                        </span>
                                        <span className="text-white"> in </span>
                                        <span className="font-medium text-white">
                                          {item.fieldOfStudy}
                                          <br />({item.startDate} to{" "}
                                          {item.endDate})
                                        </span>
                                        <br />
                                        <i className="bx bxs-graduation text-white"></i>
                                        <span className="text-white">
                                          {" "}
                                          {item.typeOfDegree} in{" "}
                                          {item.fieldOfStudy} ({item.gpa})
                                        </span>
                                      </p>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          {details.certifications.length != 0 &&
                            details.certifications.filter(
                              (certifications) => certifications.enabled
                            ).length > 0 && (
                              <div className="certifications">
                                <h2 className="text-center text-xl font-sans font-bold pt-3 text-zinc-200 pb-3 heading">
                                  C E R T I F I C A T I O N S
                                </h2>
                                {details.certifications.map((item) => (
                                  <>
                                    {item.enabled && (
                                      <p
                                        className="pl-10 pr-5 pt-1 text-white"
                                        key={item.title}
                                      >
                                        <i className="bx bxs-square text-xs pr-3 text-white"></i>
                                        <span className="text-white">
                                          {item.title} from {item.issuer}
                                        </span>
                                      </p>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          {details.skills.length != 0 &&
                            details.skills.filter((skills) => skills.enabled)
                              .length > 0 && (
                              <div className="skills">
                                <div className="pl-10">
                                  <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300 heading">
                                    S K I L L S
                                  </h2>
                                  {details.skills.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <span
                                          className="pr-2 text-white"
                                          key={item.name}
                                        >
                                          {item.name}{" "}
                                        </span>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.languages.length != 0 &&
                            details.languages.filter(
                              (languages) => languages.enabled
                            ).length > 0 && (
                              <div className="languages">
                                <div className="pl-10">
                                  <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300 heading">
                                    L A N G U A G E S
                                  </h2>
                                  {details.languages.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <span
                                          className="pr-2 text-white"
                                          key={item.name}
                                        >
                                          {item.name}{" "}
                                        </span>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.hobbies.length != 0 &&
                            details.hobbies.filter((hobbies) => hobbies.enabled)
                              .length > 0 && (
                              <div className="skills">
                                <div className="pl-10">
                                  <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300 heading">
                                    H O B B I E S
                                  </h2>
                                  {details.hobbies.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <span
                                          className="pr-2 text-white"
                                          key={item.name}
                                        >
                                          {item.name}{" "}
                                        </span>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="second bg-emerald-100 w-[125mm] h-[297mm]">
                        <div className="name">
                          <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600 font-serif">
                            <h1>{details.personal.firstName}</h1>
                            <h1>{details.personal.lastName}</h1>
                            <h2 className="text-lg font-normal py-3">
                              {details.personal.role}
                            </h2>
                          </div>
                        </div>
                        {details.personal.objective.length != 0 && (
                          <div className="career-objective">
                            <h2 className="text-center text-xl font-sans font-bold pt-3 heading">
                              C A R E E R O B J E C T I V E
                            </h2>
                            <p className="pl-10 pr-5 pt-2 text-xs">
                              {details.personal.objective}
                            </p>
                          </div>
                        )}
                        {details.work.length != 0 &&
                          details.work.filter((work) => work.enabled).length >
                            0 && (
                            <div className="experience">
                              <h2 className="text-center text-xl font-sans font-bold pt-5 heading">
                                E X P E R I E N C E
                              </h2>
                              {details.work.map((item) => (
                                <>
                                  {item.enabled && (
                                    <p
                                      className="pl-10 pr-5 pt-2"
                                      key={item.company}
                                    >
                                      <span className="font-medium text-lg pr-3">
                                        {item.designation} in {item.company}
                                      </span>
                                      <br></br>({item.from} to {item.to})<br />
                                      <Link href={`${item.website}`}>
                                        {item.website}
                                      </Link>
                                      <br></br>
                                      <span className="text-sm">
                                        {item.summary.data}
                                      </span>
                                    </p>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.projects.length != 0 &&
                          details.projects.filter(
                            (projects) => projects.enabled
                          ).length > 0 && (
                            <div className="projects">
                              <h2 className="text-center text-xl font-sans font-bold pt-2 heading">
                                P R O J E C T S
                              </h2>
                              {details.projects.map((item) => (
                                <>
                                  {item.enabled && (
                                    <p
                                      className="pl-10 pr-5 pt-1"
                                      key={item.name}
                                    >
                                      <span className="font-medium text-lg pr-3">
                                        {item.name}
                                      </span>{" "}
                                      ({item.from} to {item.to})<br />
                                      <a href={item.website}>{item.website}</a>
                                      <br></br>
                                      <span className="text-sm">
                                        {item.summary.data}
                                      </span>
                                    </p>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        {details.awards.length != 0 &&
                          details.awards.filter((awards) => awards.enabled)
                            .length > 0 && (
                            <div className="awards">
                              <h2 className="text-center text-xl font-sans font-bold pt-2 heading">
                                A W A R D S
                              </h2>
                              {details.awards.map((item) => (
                                <>
                                  {item.enabled && (
                                    <p
                                      className="pl-10 pr-5 pt-1"
                                      key={item.name}
                                    >
                                      <i className="bx bxs-award pr-1"></i>
                                      <span className="font-medium">
                                        {item.name}
                                      </span>{" "}
                                      from {item.awarder}
                                    </p>
                                  )}
                                </>
                              ))}
                            </div>
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
            </>
          )}
        </div>
      )}
    </>
  );
}
