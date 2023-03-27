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

export default function Professional() {
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
                  <div>
                      <div className="first">
                        <div className="w-[150mm] h-[150px] bg-black ml-[60mm] mt-[50px]">
                          <div className="name text-white bg-black">
                            <h1 className="pl-[100px] pt-[20px] text-3xl font-bold text-white bg-black">
                              {details.personal.firstName}
                              <span className="pl-4 font-medium text-white bg-black">
                                {details.personal.lastName}
                              </span>
                            </h1>
                            <h2 className="text-white pl-[100px] pt-2 text-xl bg-black">
                              {details.personal.role}
                            </h2>
                          </div>
                          <div className="pl-16 pt-2">
                            <div className="social pl-10 pt-1 flex relative">
                              {details.social.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div className="pr-2" key={item.network}>
                                      <span>
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
                                      </span>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="photo relative top-[-170px] left-[80px]">
                          <img
                            src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                            className="w-[200px] h-[200px] rounded-full border-[12px] border-black"
                          ></img>
                        </div>
                        <div className="career-objective w-[180mm] relative top-[-170px] left-[80px] text-sm">
                          {details.personal.objective}
                        </div>
                      </div>
                      <div className="second relative top-[-170px] flex">
                        <div className="third  w-[320px]">
                          <div className="contact">
                            <div className="dob pl-14 pt-5">
                              <i className="bx bxs-calendar pr-4 text-lg"></i>
                              <span className="text-base relative bottom-[3px]">
                                {details.personal.dob}
                              </span>
                            </div>
                            <div className="phone pl-14 pt-1">
                              <i className="bx bxs-phone pr-4 text-lg"></i>
                              <span className="text-base relative bottom-1">
                                {details.personal.phone}
                              </span>
                            </div>
                            <div className="mail pl-14 pt-1">
                              <i className="bx bxs-envelope pr-4 text-lg"></i>
                              <span className="text-base relative bottom-1">
                                {details.personal.email}
                              </span>
                            </div>
                          </div>
                          {details.education.length != 0 &&
                            details.education.filter(
                              (education) => education.enabled
                            ).length > 0 && (
                              <div className="education">
                                <div className="pb-2">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-3 pb-1 border-b-[4px] mx-6 border-black heading">
                                    E D U C A T I O N
                                  </h2>
                                  {details.education.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <p
                                          className="pl-10 pr-5 pt-2"
                                          key={item.institution}
                                        >
                                          <span className="font-medium">
                                            {item.institution}
                                          </span>{" "}
                                          in{" "}
                                          <span className="font-medium">
                                            {item.fieldOfStudy}
                                            <br />({item.startDate} to{" "}
                                            {item.endDate})
                                          </span>
                                          <br />
                                          <i className="bx bxs-graduation"></i>{" "}
                                          {item.typeOfDegree} in{" "}
                                          {item.fieldOfStudy} ({item.gpa})
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.certifications.length != 0 &&
                            details.certifications.filter(
                              (certifications) => certifications.enabled
                            ).length > 0 && (
                              <div className="certifications">
                                <div className="pb-2">
                                  <h2 className="text-center text-xl font-serif font-semibold border-b-[4px] mx-6 border-black pt-2 pb-1 heading">
                                    C E R T I F I C A T I O N S
                                  </h2>
                                  {details.certifications.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <p
                                          className="pl-10 pr-2 pt-2"
                                          key={item.title}
                                        >
                                          <i className="bx bxs-square text-xs pr-3"></i>
                                          {item.title} from {item.issuer}
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.skills.length != 0 &&
                            details.skills.filter((skills) => skills.enabled)
                              .length > 0 && (
                              <div className="skills">
                                <div className="pl-5 pb-5">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-1 pb-1 border-b-[4px] mx-1 border-black heading">
                                    S K I L L S
                                  </h2>
                                  <div className="pt-1 pl-3">
                                    {details.skills.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <span
                                            className="pr-2"
                                            key={item.name}
                                          >
                                            {item.name}{" "}
                                          </span>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          {details.hobbies.length != 0 &&
                            details.hobbies.filter((hobbies) => hobbies.enabled)
                              .length > 0 && (
                              <div className="skills">
                                <div className="pl-5 pb-5">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-1 pb-1 border-b-[4px] mx-1 border-black heading">
                                    H O B B I E S
                                  </h2>
                                  <div className="pt-1 pl-3">
                                    {details.hobbies.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <span
                                            className="pr-2"
                                            key={item.name}
                                          >
                                            {item.name}{" "}
                                          </span>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          {details.languages.length != 0 &&
                            details.languages.filter(
                              (languages) => languages.enabled
                            ).length > 0 && (
                              <div className="skills">
                                <div className="pl-5 pb-5">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-1 pb-1 border-b-[4px] mx-1 border-black heading">
                                    L A N G U A G E S
                                  </h2>
                                  <div className="pt-1 pl-3">
                                    {details.languages.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <span
                                            className="pr-2"
                                            key={item.name}
                                          >
                                            {item.name}{" "}
                                          </span>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                        </div>
                        <div className="fourth w-[500px]">
                          {details.work.length != 0 &&
                            details.work.filter((work) => work.enabled).length >
                              0 && (
                              <div className="experience">
                                <h2 className="text-center text-xl font-serif font-semibold pt-5 border-b-[4px] mx-1 border-black heading">
                                  E X P E R I E N C E
                                </h2>
                                <div className="pb-1">
                                  {details.work.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <p
                                          className="pl-10 pr-5 pt-1"
                                          key={item.company}
                                        >
                                          <span className="font-medium text-lg pr-3">
                                            {item.designation} in {item.company}
                                          </span>
                                          <br></br>({item.from} to {item.to})
                                          <br />
                                          <Link href={`${item.website}`}>
                                            {item.website}
                                          </Link>
                                          <br></br>
                                          <span className="text-xs">
                                            {item.summary.data}
                                          </span>
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.projects.length != 0 &&
                            details.projects.filter(
                              (projects) => projects.enabled
                            ).length > 0 && (
                              <div className="projects">
                                <h2 className="text-center text-xl font-serif font-semibold pt-3 border-b-[4px] mx-1 border-black heading">
                                  P R O J E C T S
                                </h2>
                                <div className="pb-2">
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
                                          <Link href={`${item.website}`}>
                                            {item.website}
                                          </Link>
                                          <br></br>
                                          <span className="text-xs">
                                            {item.summary.data}
                                          </span>
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.awards.length != 0 &&
                            details.awards.filter((awards) => awards.enabled)
                              .length > 0 && (
                              <div className="awards">
                                <h2 className="text-center text-xl font-serif font-semibold pt-1 border-b-[4px] mx-1 border-black heading">
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
                    <div>
                      <div className="first">
                        <div className="w-[150mm] h-[150px] bg-black ml-[60mm] mt-[50px]">
                          <div className="name text-white bg-black">
                            <h1 className="pl-[100px] pt-[20px] text-3xl font-bold text-white bg-black">
                              {details.personal.firstName}
                              <span className="pl-4 font-medium text-white bg-black">
                                {details.personal.lastName}
                              </span>
                            </h1>
                            <h2 className="text-white pl-[100px] pt-2 text-xl bg-black">
                              {details.personal.role}
                            </h2>
                          </div>
                          <div className="pl-16 pt-2">
                            <div className="social pl-10 pt-1 flex relative">
                              {details.social.map((item) => (
                                <>
                                  {item.enabled && (
                                    <div className="pr-2" key={item.network}>
                                      <span>
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
                                      </span>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="photo relative top-[-170px] left-[80px]">
                          <img
                            src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                            className="w-[200px] h-[200px] rounded-full border-[12px] border-black"
                          ></img>
                        </div>
                        <div className="career-objective w-[180mm] relative top-[-170px] left-[80px] text-sm">
                          {details.personal.objective}
                        </div>
                      </div>
                      <div className="second relative top-[-170px] flex">
                        <div className="third  w-[320px]">
                          <div className="contact">
                            <div className="dob pl-14 pt-5">
                              <i className="bx bxs-calendar pr-4 text-lg"></i>
                              <span className="text-base relative bottom-[3px]">
                                {details.personal.dob}
                              </span>
                            </div>
                            <div className="phone pl-14 pt-1">
                              <i className="bx bxs-phone pr-4 text-lg"></i>
                              <span className="text-base relative bottom-1">
                                {details.personal.phone}
                              </span>
                            </div>
                            <div className="mail pl-14 pt-1">
                              <i className="bx bxs-envelope pr-4 text-lg"></i>
                              <span className="text-base relative bottom-1">
                                {details.personal.email}
                              </span>
                            </div>
                          </div>
                          {details.education.length != 0 &&
                            details.education.filter(
                              (education) => education.enabled
                            ).length > 0 && (
                              <div className="education">
                                <div className="pb-2">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-3 pb-1 border-b-[4px] mx-6 border-black heading">
                                    E D U C A T I O N
                                  </h2>
                                  {details.education.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <p
                                          className="pl-10 pr-5 pt-2"
                                          key={item.institution}
                                        >
                                          <span className="font-medium">
                                            {item.institution}
                                          </span>{" "}
                                          in{" "}
                                          <span className="font-medium">
                                            {item.fieldOfStudy}
                                            <br />({item.startDate} to{" "}
                                            {item.endDate})
                                          </span>
                                          <br />
                                          <i className="bx bxs-graduation"></i>{" "}
                                          {item.typeOfDegree} in{" "}
                                          {item.fieldOfStudy} ({item.gpa})
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.certifications.length != 0 &&
                            details.certifications.filter(
                              (certifications) => certifications.enabled
                            ).length > 0 && (
                              <div className="certifications">
                                <div className="pb-2">
                                  <h2 className="text-center text-xl font-serif font-semibold border-b-[4px] mx-6 border-black pt-2 pb-1 heading">
                                    C E R T I F I C A T I O N S
                                  </h2>
                                  {details.certifications.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <p
                                          className="pl-10 pr-2 pt-2"
                                          key={item.title}
                                        >
                                          <i className="bx bxs-square text-xs pr-3"></i>
                                          {item.title} from {item.issuer}
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.skills.length != 0 &&
                            details.skills.filter((skills) => skills.enabled)
                              .length > 0 && (
                              <div className="skills">
                                <div className="pl-5 pb-5">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-1 pb-1 border-b-[4px] mx-1 border-black heading">
                                    S K I L L S
                                  </h2>
                                  <div className="pt-1 pl-3">
                                    {details.skills.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <span
                                            className="pr-2"
                                            key={item.name}
                                          >
                                            {item.name}{" "}
                                          </span>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          {details.hobbies.length != 0 &&
                            details.hobbies.filter((hobbies) => hobbies.enabled)
                              .length > 0 && (
                              <div className="skills">
                                <div className="pl-5 pb-5">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-1 pb-1 border-b-[4px] mx-1 border-black heading">
                                    H O B B I E S
                                  </h2>
                                  <div className="pt-1 pl-3">
                                    {details.hobbies.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <span
                                            className="pr-2"
                                            key={item.name}
                                          >
                                            {item.name}{" "}
                                          </span>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          {details.languages.length != 0 &&
                            details.languages.filter(
                              (languages) => languages.enabled
                            ).length > 0 && (
                              <div className="skills">
                                <div className="pl-5 pb-5">
                                  <h2 className="text-center text-xl font-serif font-semibold pt-1 pb-1 border-b-[4px] mx-1 border-black heading">
                                    L A N G U A G E S
                                  </h2>
                                  <div className="pt-1 pl-3">
                                    {details.languages.map((item) => (
                                      <>
                                        {item.enabled && (
                                          <span
                                            className="pr-2"
                                            key={item.name}
                                          >
                                            {item.name}{" "}
                                          </span>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                        </div>
                        <div className="fourth w-[500px]">
                          {details.work.length != 0 &&
                            details.work.filter((work) => work.enabled).length >
                              0 && (
                              <div className="experience">
                                <h2 className="text-center text-xl font-serif font-semibold pt-5 border-b-[4px] mx-1 border-black heading">
                                  E X P E R I E N C E
                                </h2>
                                <div className="pb-1">
                                  {details.work.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <p
                                          className="pl-10 pr-5 pt-1"
                                          key={item.company}
                                        >
                                          <span className="font-medium text-lg pr-3">
                                            {item.designation} in {item.company}
                                          </span>
                                          <br></br>({item.from} to {item.to})
                                          <br />
                                          <Link href={`${item.website}`}>
                                            {item.website}
                                          </Link>
                                          <br></br>
                                          <span className="text-xs">
                                            {item.summary.data}
                                          </span>
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.projects.length != 0 &&
                            details.projects.filter(
                              (projects) => projects.enabled
                            ).length > 0 && (
                              <div className="projects">
                                <h2 className="text-center text-xl font-serif font-semibold pt-3 border-b-[4px] mx-1 border-black heading">
                                  P R O J E C T S
                                </h2>
                                <div className="pb-2">
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
                                          <Link href={`${item.website}`}>
                                            {item.website}
                                          </Link>
                                          <br></br>
                                          <span className="text-xs">
                                            {item.summary.data}
                                          </span>
                                        </p>
                                      )}
                                    </>
                                  ))}
                                </div>
                              </div>
                            )}
                          {details.awards.length != 0 &&
                            details.awards.filter((awards) => awards.enabled)
                              .length > 0 && (
                              <div className="awards">
                                <h2 className="text-center text-xl font-serif font-semibold pt-1 border-b-[4px] mx-1 border-black heading">
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
