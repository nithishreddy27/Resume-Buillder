import React, { useState, useContext } from "react";
import ResumeContext from "../context/ResumeContext";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlinePlus,
  AiFillProject
} from "react-icons/ai";
import {CgProfile} from "react-icons/cg"
import {MdSocialDistance,MdOutlineSpeakerNotes} from "react-icons/md"
import {FaLanguage,FaAward} from "react-icons/fa"
import {SiGooglescholar} from "react-icons/si"
import {GrProjects} from "react-icons/gr"
import {GiSkills} from "react-icons/gi"
import {RxHobbyKnife} from "react-icons/rx"
import Nav from "./nav";

import Link from "next/link";
export default function exp() {
  const [open, setopen] = useState("semiopen");
  const [arrow, setarrow] = useState(false);
  const [iarrow, setiarrow] = useState(false);
  const [earrow, setearrow] = useState(false);
  const [skarrow, setskarrow] = useState(false);
  const [larrow, setlarrow] = useState(false);
  const [harrow, setharrow] = useState(false);
  const [parrow, setparrow] = useState(false);
  const [awarrow, setawarrow] = useState(false);
  const [carrow, setcarrow] = useState(false);
  
  const { details, setdetails } = useContext(ResumeContext);
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      <div className="flex">
        {/* {open == "open" && (
            <>
             <div className='h-screen w-[50%] bg-purple-300'>
            
             </div>
            <div className='h-screen w-[50%] bg-green-300'>
                
            </div>
            </>
        )} */}
        {open == "closed" && (
          <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-green-300">
            <button
              className="h-10 w-10 mx-auto block lg:hidden"
              onClick={toggleResume}
            >
              Click
            </button>
            <div className="flex justify-center ">
              <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row">
                <div className=" w-[45%] h-[100%] bg-gray-200 p-6">
                  <div className="bg-slate-800 w-[144px] h-[200px] absolute top-0 left-0">
                    <img
                      src="https://randomuser.me/api/portraits/men/40.jpg"
                      alt=""
                      className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                    />
                  </div>
                  <div className="mt-48">
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      CONTACT
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    {
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
                                className="w-5 grayscale-[40%]"
                              />
                            </span>

                            <Link href={item.url}>
                              <span className="mx-4">{item.username}</span>
                            </Link>
                          </div>
                        ))}
                        {
                          // console.log(details)
                          console.log("re", details)
                        }
                      </>
                    }
                  </div>
                  <div className="mt-4">
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      SKILLS
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    {details.skills.map((item) => (
                      <li className="mx-4" key={item.name}>
                        {item.name}
                      </li>
                    ))}
                  </div>

                 
                  <div className="mt-4">
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      LANGUAGES
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    {details.languages.map((item) => (
                      <p className="my-2" key={item.name}>
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    AWARADS
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.awards.map((item) => (
                    <div className="my-2" key={item.name}>
                      <span className="font-semibold text-[15px]">
                        {item.name} ({item.date.slice(0, 4)})
                      </span>
                      <span className="mx-2 text-[15px]"></span>
                      <p className="mx-4">{item.summary.data.slice(0, 38)}</p>
                    </div>
                  ))}
                </div>
                <div className=" w-[70%] pt-10 px-5 ">
                  <div>
                    <h1 className="text-5xl font-semibold tracking-wider">
                      {details.personal.firstName}
                    </h1>
                    <h1 className="text-3xl  tracking-[4px] mt-2">
                      {details.personal.lastName}
                    </h1>
                    {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                  </div>

                  <div className="mt-12">
                    <h1 className="text-xl font-bold tracking-[1px]">
                      OBJECTIVE
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <p className="text-sm">{details.personal.objective}</p>

                    <h1 className="text-xl font-bold tracking-[1px] mt-5">
                      WORK
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />

                    <div className="ml-1 mt-1">
                      {details.work.map((item) => (
                        <div className="flex" key={item.company}>
                          <div className="pt-1">
                            <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                            <div className="w-1 bg-black h-32 m-1"></div>
                          </div>
                          <div className="ml-5 mt-1">
                            <p className="font-semibold">
                              {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                            </p>
                            <p className="tracking-[2px] my-1">
                              {item.company}
                            </p>
                            <p className="font-bold">{item.designation}</p>
                            <p className="mb-4 text-sm">{item.summary.data}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h1 className="text-xl font-bold tracking-[1px] mt-3">
                      EDUCACTION
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <div className="ml-1 mt-1">
                      {details.education.map((item) => (
                        <div className="flex" key={item.institution}>
                          <div className="flex">
                            <div className="pt-1">
                              <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                              <div className="w-1 bg-black h-28 m-1"></div>
                            </div>
                            <div className="ml-5 mt-1">
                              <p className="font-semibold">
                                {item.startDate.slice(0, 4)} -{" "}
                                {item.endDate.slice(0, 4)}
                              </p>
                              <p className="tracking-[2px]">
                                {item.institution}
                              </p>
                              <p className="font-bold">{item.fieldOfStudy}</p>
                              <p className="">{item.typeOfDegree}</p>
                              <p className="mb-4 font-semibold">
                                GPA-{item.gpa}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        )}
        {open == "semiopen" && (
          <>
            <div className="h-screen bg-fixed scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 relative w-[250%] lg:w-[60%] text-white border-r border-gray-300 bg-gradient-to-b from-slate-800 to-slate-700 z-0 transition-all overflow-y-scroll ">
              <div className="">
                <div className="border-b border-r border-gray-300 py-2 top-[-5px] fixed lg:static w-[100%] lg:w-[100%] z-40 bg-slate-800">
                  <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                    {/* <h1>Provast</h1> */}
                    <img
                      src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=1920&q=75"
                      width={220}
                      height={55}
                    />
                    {/* <div>
                      <button>Preview</button>
                    </div> */}
                    <div className="lg:hidden" onClick={toggleResume}>
                      Tog
                    </div>
                  </div>
                </div>
              </div>
              <div className="block lg:flex">
                <div className=" fixed lg:flex flex-col hidden   min-h-screen ml-3 mt-[80px] z-0">
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#personaldetails"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <CgProfile></CgProfile>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#socialnetworks"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <MdSocialDistance></MdSocialDistance>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#obj"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <MdOutlineSpeakerNotes></MdOutlineSpeakerNotes>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#education"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <SiGooglescholar></SiGooglescholar>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#projects"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <AiFillProject></AiFillProject>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#awards"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <FaAward></FaAward>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#skills"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <GiSkills></GiSkills>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#hobbies"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <RxHobbyKnife></RxHobbyKnife>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                  <div class=" flex items-center relative justify-center">
                    <a
                      href="#languages"
                      id="1"
                      class="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
                    >
                      <FaLanguage></FaLanguage>
                      <span class="hidden hover:inline-block capitalize text-xs font-bold tracking-wide">
                        profile
                      </span>
                    </a>
                  </div>
                </div>
                <div className=" mb-5 mx-5    sm:m-10 md:mx-20 lg:mx-16 ">
                  <form action="" className="">
                    <h1 id="personaldetails" className="font-bold text-xl border-b border-gray-300 py-1 font-sans tracking-wide mt-24 lg:mt-0">
                      Personal Details:
                    </h1>
                    <div className="sm:grid sm:grid-cols-2 sm:gap-2 text-gray-400">
                      <div className="mt-5">
                        <label htmlFor="firstName" className="font-semibold">
                          First Name
                        </label>
                        <div className="my-2">
                          <input
                            type="text"
                            name="personal"
                            id="firstName"
                            className="shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                            //   value={details.personal.firstName}
                            //   onChange={updateForm}
                          />
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-5">
                        <label htmlFor="lastName" className="font-semibold">
                          Last Name
                        </label>
                        <div className="my-2">
                          <input
                            type="text"
                            name="personal"
                            id="lastName"
                            className="shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                            //   value={details.personal.lastName}
                            //   onChange={updateForm}
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="phone" className="font-semibold">
                          Phone
                        </label>
                        <div className="my-2">
                          <input
                            type="text"
                            name="personal"
                            id="phone"
                            className="shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                            //   value={details.phone.lastName}
                            //   onChange={updateForm}
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="email" className="font-semibold">
                          Email
                        </label>
                        <div className="my-2">
                          <input
                            type="text"
                            name="personal"
                            id="email"
                            className="shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                            //   value={details.personal.email}
                            //   onChange={updateForm}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label
                        id="obj"
                        htmlFor="objective"
                        className="font-semibold text-gray-400"
                      >
                        Objective
                      </label>
                      <div className="my-2">
                        <textarea
                          name="personal"
                          id="objective"
                          className="shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          //   value={details.personal.objective}
                          //   onChange={updateForm}
                        />
                      </div>
                    </div>
                  </form>

                  <div className="mt-5 shadow-md p-2 rounded-md" id="socialnetworks">
                    <div className="flex flex-row">
                      <h1  className="font-bold text-xl grow">
                        Social Networks:
                      </h1>
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setarrow(!arrow);
                        }}
                      >
                        {arrow == true && (
                          <div className="">
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Hide
                              </button>
                            </div>
                          </div>
                        )}
                        {arrow == false && (
                          <div class="flex justify-end grow">
                            <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                              <span class="mr-2">
                                <AiOutlinePlus></AiOutlinePlus>
                              </span>
                              Add
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${arrow ? "block" : "hidden"}`}>
                      <div className="mt-5 text-gray-400">
                        <label htmlFor="network" className="font-semibold">
                          Network
                        </label>

                        <input
                          type="text"
                          name="social"
                          id="network"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="url"
                          className="font-semibold text-gray-400"
                        >
                          Url
                        </label>
                        <input
                          type="text"
                          name="social"
                          id="url"
                          className="block shadow appearance-none bg-slate-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="network"
                          className="font-semibold text-gray-400"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          name="social"
                          id="username"
                          className="block shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={socialChange}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex">
                      <h1 className="font-bold text-xl grow">Internships</h1>
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setiarrow(!iarrow);
                        }}
                      >
                        {iarrow == true && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Hide
                              </button>
                            </div>
                          </div>
                        )}
                        {iarrow == false && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Add
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${iarrow ? "block" : "hidden"}`}>
                      <div className="mt-5 text-gray-300">
                        <label htmlFor="company" className="font-semibold">
                          Company
                        </label>

                        <input
                          type="text"
                          name="internship"
                          id="company"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="position"
                          className="font-semibold text-gray-300"
                        >
                          Position
                        </label>
                        <input
                          type="text"
                          name="internship"
                          id="position"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="fieldOfStudy"
                          className="font-semibold text-gray-300"
                        >
                          Field Of Study
                        </label>
                        <input
                          type="text"
                          name="internship"
                          id="fieldOfStudy"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-2">
                          <label
                            htmlFor="startdate"
                            className="font-semibold text-gray-300"
                          >
                            Start Date
                          </label>
                          <input
                            type="date"
                            name="internship"
                            id="startdate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="enddate"
                            className="font-semibold text-gray-300"
                          >
                            End Date
                          </label>
                          <input
                            type="date"
                            name="internship"
                            id="enddate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="summary"
                          className="font-semibold text-gray-300"
                        >
                          Summary
                        </label>
                        <textarea
                          name="internship"
                          id="summary"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={addInternship}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex ">
                      <h1 id="education" className="font-bold text-xl grow">Education</h1>
                     
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setearrow(!earrow);
                        }}
                      >
                        {earrow == true && (
                          <div>
                            <div>
                              <div class="flex justify-center">
                                <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                  <span class="mr-2">
                                    <AiOutlinePlus></AiOutlinePlus>
                                  </span>
                                  Hide
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        {earrow == false && (
                          <div>
                            <div>
                              <div class="flex justify-center">
                                <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                  <span class="mr-2">
                                    <AiOutlinePlus></AiOutlinePlus>
                                  </span>
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`${earrow ? "block" : "hidden"}`}>
                      <div className="mt-5">
                        <label
                          htmlFor="TypeOfDegree"
                          className="font-semibold text-gray-300"
                        >
                          Type Of Degree
                        </label>

                        <input
                          type="text"
                          name="education"
                          id="TypeOfDegree"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="school"
                          className="font-semibold text-gray-300"
                        >
                          School
                        </label>
                        <input
                          type="text"
                          name="education"
                          id="school"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="fieldOfStudy"
                          className="font-semibold text-gray-300"
                        >
                          Field Of Study
                        </label>
                        <input
                          type="text"
                          name="education"
                          id="fieldOfStudy"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="grade"
                          className="font-semibold text-gray-300"
                        >
                          Grade
                        </label>
                        <input
                          type="text"
                          name="education"
                          id="grade"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-2">
                          <label
                            htmlFor="startdate"
                            className="font-semibold text-gray-300"
                          >
                            Start Date
                          </label>
                          <input
                            type="date"
                            name="education"
                            id="startdate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="enddate"
                            className="font-semibold text-gray-300"
                          >
                            End Date
                          </label>
                          <input
                            type="date"
                            name="education"
                            id="enddate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="summary"
                          className="font-semibold text-gray-300"
                        >
                          Summary
                        </label>
                        <textarea
                          name="education"
                          id="summary"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={addEducation}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex ">
                      <h1 id="certifications" className="font-bold text-xl grow">Certifications</h1>
                     
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setcarrow(!carrow);
                        }}
                      >
                        {carrow == true && (
                          <div>
                            <div>
                              <div class="flex justify-center">
                                <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                  <span class="mr-2">
                                    <AiOutlinePlus></AiOutlinePlus>
                                  </span>
                                  Hide
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        {carrow == false && (
                          <div>
                            <div>
                              <div class="flex justify-center">
                                <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                  <span class="mr-2">
                                    <AiOutlinePlus></AiOutlinePlus>
                                  </span>
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`${carrow ? "block" : "hidden"}`}>
                      <div className="mt-5">
                        <label
                          htmlFor="TypeOfDegree"
                          className="font-semibold text-gray-300"
                        >
                          Title
                        </label>

                        <input
                          type="text"
                          name="certifications"
                          id="TypeOfDegree"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="school"
                          className="font-semibold text-gray-300"
                        >
                          Issuer
                        </label>
                        <input
                          type="text"
                          name="certifications"
                          id="school"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      
                      
                      <div className="flex gap-3">
                        <div className="mt-2">
                          <label
                            htmlFor="startdate"
                            className="font-semibold text-gray-300"
                          >
                            Start Date
                          </label>
                          <input
                            type="date"
                            name="certifications"
                            id="startdate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                        
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="summary"
                          className="font-semibold text-gray-300"
                        >
                          Summary
                        </label>
                        <textarea
                          name="certifications"
                          id="summary"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={addEducation}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex">
                      <h1 className="font-bold text-xl grow">Projects</h1>
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setparrow(!parrow);
                        }}
                      >
                        {parrow == true && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Hide
                              </button>
                            </div>
                          </div>
                        )}
                        {parrow == false && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Add
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${parrow ? "block" : "hidden"}`}>
                      <div className="mt-5 text-gray-300">
                        <label htmlFor="company" className="font-semibold">
                          Company
                        </label>

                        <input
                          type="text"
                          name="internship"
                          id="company"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      
                      <div className="mt-2">
                        <label
                          htmlFor="fieldOfStudy"
                          className="font-semibold text-gray-300"
                        >
                          Field Of Study
                        </label>
                        <input
                          type="text"
                          name="internship"
                          id="fieldOfStudy"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-2">
                          <label
                            htmlFor="startdate"
                            className="font-semibold text-gray-300"
                          >
                            Start Date
                          </label>
                          <input
                            type="date"
                            name="internship"
                            id="startdate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="enddate"
                            className="font-semibold text-gray-300"
                          >
                            End Date
                          </label>
                          <input
                            type="date"
                            name="internship"
                            id="enddate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="summary"
                          className="font-semibold text-gray-300"
                        >
                          Summary
                        </label>
                        <textarea
                          name="internship"
                          id="summary"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={addInternship}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex">
                      <h1 className="font-bold text-xl grow">Awards</h1>
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setawarrow(!awarrow);
                        }}
                      >
                        {awarrow == true && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Hide
                              </button>
                            </div>
                          </div>
                        )}
                        {awarrow == false && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Add
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${awarrow ? "block" : "hidden"}`}>
                      <div className="mt-5 text-gray-300">
                        <label htmlFor="company" className="font-semibold">
                          Company
                        </label>

                        <input
                          type="text"
                          name="internship"
                          id="company"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      
                      <div className="mt-2">
                        <label
                          htmlFor="fieldOfStudy"
                          className="font-semibold text-gray-300"
                        >
                          Field Of Study
                        </label>
                        <input
                          type="text"
                          name="internship"
                          id="fieldOfStudy"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-2">
                          <label
                            htmlFor="startdate"
                            className="font-semibold text-gray-300"
                          >
                            Start Date
                          </label>
                          <input
                            type="date"
                            name="internship"
                            id="startdate"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                        
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="summary"
                          className="font-semibold text-gray-300"
                        >
                          Summary
                        </label>
                        <textarea
                          name="internship"
                          id="summary"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={addInternship}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex">
                      <h1 id="skills" className="font-bold text-xl grow">Skills:</h1>
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setskarrow(!skarrow);
                        }}
                      >
                        {skarrow == true && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Hide
                              </button>
                            </div>
                          </div>
                        )}
                        {skarrow == false && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Add
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${skarrow ? "block" : "hidden"}`}>
                      <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                        <div className="mt-5">
                          <label
                            htmlFor="awardTitle"
                            className="font-semibold text-gray-300"
                          >
                            Title
                          </label>

                          <input
                            type="text"
                            name="skill"
                            id="skillTitle"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>

                        <div className="mt-2 sm:mt-5">
                          <label
                            htmlFor="skillLevel"
                            className="font-semibold text-gray-300"
                          >
                            Level
                          </label>
                          <select
                            name="skillValue"
                            className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                            id="skillLevel"
                          >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advance">Advance</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={socialChange}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex">
                      <h1 className="font-bold text-xl grow" id="languages">Language</h1>
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setlarrow(!larrow);
                        }}
                      >
                        {larrow == true && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Hide
                              </button>
                            </div>
                          </div>
                        )}
                        {larrow == false && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Add
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${larrow ? "block" : "hidden"}`}>
                      <div className="sm:grid sm:grid-cols-2 gap-2">
                        <div className="mt-5">
                          <label
                            htmlFor="languageTitle"
                            className="font-semibold text-gray-300"
                          >
                            Title
                          </label>

                          <input
                            type="text"
                            name="language"
                            id="languageTitle"
                            className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>

                        <div className="mt-2 sm:mt-5">
                          <label
                            htmlFor="languageLevel"
                            className="font-semibold"
                          >
                            Level
                          </label>
                          <select
                            name="language"
                            className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                            id="skillLevel"
                          >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advance">Advance</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={addLanguage}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex">
                      <h1 className="font-bold text-xl grow" id="hobbies">Hobby</h1>
                      <div
                        className="pt-[-15px] mt-[-10px]"
                        onClick={() => {
                          setharrow(!harrow);
                        }}
                      >
                        {harrow == true && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Hide
                              </button>
                            </div>
                          </div>
                        )}
                        {harrow == false && (
                          <div>
                            <div class="flex justify-center">
                              <button class="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                                <span class="mr-2">
                                  <AiOutlinePlus></AiOutlinePlus>
                                </span>
                                Add
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${harrow ? "block" : "hidden"}`}>
                      <div className="mt-5">
                        <label
                          htmlFor="hobbyTitle"
                          className="font-semibold text-gray-300"
                        >
                          Title
                        </label>

                        <input
                          type="text"
                          name="language"
                          id="hobbyTitle"
                          className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>

                      <div className="flex justify-center">
                        {/* <button onClick={addHobby}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
              
              <div className="flex justify-center ">
                <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row">
                  <div className=" w-[45%] h-[100%] bg-gray-200 p-6">
                    <div className="bg-slate-800 w-[144px] h-[200px] absolute top-0 left-0">
                      <img
                        src="https://randomuser.me/api/portraits/men/40.jpg"
                        alt=""
                        className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                      />
                    </div>
                    <div className="mt-48">
                      <h1 className="text-2xl font-semibold tracking-[2px]">
                        CONTACT
                      </h1>
                      <hr className="h-[2px] bg-black my-1" />
                      {
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
                                  className="w-5 grayscale-[40%]"
                                />
                              </span>

                              <Link href={item.url}>
                                <span className="mx-4">{item.username}</span>
                              </Link>
                            </div>
                          ))}
                          {
                            // console.log(details)
                            console.log("re", details)
                          }
                        </>
                      }
                    </div>
                    <div className="mt-4">
                      <h1 className="text-2xl font-semibold tracking-[2px]">
                        SKILLS
                      </h1>
                      <hr className="h-[2px] bg-black my-1" />
                      {details.skills.map((item) => (
                        <li className="mx-4" key={item.name}>
                          {item.name}
                        </li>
                      ))}
                    </div>

                    {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
                    <div className="mt-4">
                      <h1 className="text-2xl font-semibold tracking-[2px]">
                        LANGUAGES
                      </h1>
                      <hr className="h-[2px] bg-black my-1" />
                      {details.languages.map((item) => (
                        <p className="my-2" key={item.name}>
                          {item.name}
                        </p>
                      ))}
                    </div>
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      AWARADS
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    {details.awards.map((item) => (
                      <div className="my-2" key={item.name}>
                        <span className="font-semibold text-[15px]">
                          {item.name} ({item.date.slice(0, 4)})
                        </span>
                        <span className="mx-2 text-[15px]"></span>
                        <p className="mx-4">{item.summary.data.slice(0, 38)}</p>
                      </div>
                    ))}
                  </div>
                  <div className=" w-[70%] pt-10 px-5 ">
                    <div>
                      <h1 className="text-5xl font-semibold tracking-wider">
                        {details.personal.firstName}
                      </h1>
                      <h1 className="text-3xl  tracking-[4px] mt-2">
                        {details.personal.lastName}
                      </h1>
                      {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                    </div>

                    <div className="mt-12">
                      <h1 className="text-xl font-bold tracking-[1px]">
                        OBJECTIVE
                      </h1>
                      <hr className="h-[2px] bg-black my-1" />
                      <p className="text-sm">{details.personal.objective}</p>

                      <h1 className="text-xl font-bold tracking-[1px] mt-5">
                        WORK
                      </h1>
                      <hr className="h-[2px] bg-black my-1" />

                      <div className="ml-1 mt-1">
                        {details.work.map((item) => (
                          <div className="flex" key={item.company}>
                            <div className="pt-1">
                              <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                              <div className="w-1 bg-black h-32 m-1"></div>
                            </div>
                            <div className="ml-5 mt-1">
                              <p className="font-semibold">
                                {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                              </p>
                              <p className="tracking-[2px] my-1">
                                {item.company}
                              </p>
                              <p className="font-bold">{item.designation}</p>
                              <p className="mb-4 text-sm">
                                {item.summary.data}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <h1 className="text-xl font-bold tracking-[1px] mt-3">
                        EDUCACTION
                      </h1>
                      <hr className="h-[2px] bg-black my-1" />
                      <div className="ml-1 mt-1">
                        {details.education.map((item) => (
                          <div className="flex" key={item.institution}>
                            <div className="flex">
                              <div className="pt-1">
                                <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                <div className="w-1 bg-black h-28 m-1"></div>
                              </div>
                              <div className="ml-5 mt-1">
                                <p className="font-semibold">
                                  {item.startDate.slice(0, 4)} -{" "}
                                  {item.endDate.slice(0, 4)}
                                </p>
                                <p className="tracking-[2px]">
                                  {item.institution}
                                </p>
                                <p className="font-bold">{item.fieldOfStudy}</p>
                                <p className="">{item.typeOfDegree}</p>
                                <p className="mb-4 font-semibold">
                                  GPA-{item.gpa}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
