import React, { useState, useContext } from "react";
import ResumeContext from "../../context/ResumeContext";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlinePlus,
  AiFillProject,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdSocialDistance, MdOutlineSpeakerNotes } from "react-icons/md";
import { FaLanguage, FaAward } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
// import {GrProjects} from "react-icons/gr"
import { GiSkills } from "react-icons/gi";
import { RxHobbyKnife } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";

import SocailMedia from "./SocailMedia";
import Internship from "./Internship";
import Education from "./Education";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Awards from "./Awards";
export default function SideBar() {
  const [open, setopen] = useState("semiopen");
  const [arrow, setarrow] = useState(false);
  const [earrow, setearrow] = useState(false);
  const [skarrow, setskarrow] = useState(false);
  const [larrow, setlarrow] = useState(false);
  const [harrow, setharrow] = useState(false);
  const [parrow, setparrow] = useState(false);
  const [awarrow, setawarrow] = useState(false);
  const [carrow, setcarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [editSocial, seteditSocial] = useState(false);

  function updateForm(event) {
    const n = event.target.name;
    const i = event.target.id;
    setdetails({ ...details, [n]: { ...details[n], [i]: event.target.value } });
  }

  function addSkill() {
    const skill = {
      name: document.getElementById("skillTitle").value,
      level: document.getElementById("skillLevel").value,
    };
    const arr = [];
    details.skills.map((item) => {
      arr.push(item);
    });
    // console.log('skill',skill)
    arr.push(skill);
    setdetails({ ...details, skills: arr });

    (document.getElementById("skillTitle").value = ""),
      (document.getElementById("skillLevel").value = "");
  }

  function deleteSkill(index) {
    console.log("network", index);
    const arr = [];
    details.skills.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, skills: arr });
  }

  function addLanguage() {
    const language = {
      name: document.getElementById("languageTitle").value,
      level: document.getElementById("languageLevel").value,
    };
    const arr = [];
    details.languages.map((item) => {
      arr.push(item);
    });
    // console.log('skill',language)
    arr.push(language);
    setdetails({ ...details, languages: arr });
    (document.getElementById("languageTitle").value = ""),
      (document.getElementById("languageLevel").value = "");
  }

  function deleteLanguage(index) {
    console.log("network", index);
    const arr = [];
    details.languages.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, languages: arr });
  }

  function addHobby() {
    const hobby = {
      name: document.getElementById("hobbyTitle").value,
    };
    const arr = [];
    details.hobbies.map((item) => {
      arr.push(item);
    });
    // console.log('hobby',hobby)
    arr.push(hobby);
    setdetails({ ...details, hobbies: arr });

    document.getElementById("hobbyTitle").value = "";
  }

  function deleteHobby(index) {
    console.log("network", index);
    const arr = [];
    details.hobbies.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, hobbies: arr });
  }

  return (
    <>
      {/* sidebar */}

      <div className="h-screen bg-fixed relative w-[250%] lg:w-[60%] text-white border-r border-gray-300 bg-gradient-to-b from-slate-800 to-slate-700 z-0 transition-all overflow-y-scroll  scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 ">
        <div>
          <div className="border-b border-r border-gray-300 py-2 top-[-5px] fixed lg:sticky w-[100%] lg:w-[100%] z-40 bg-slate-800">
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
            </div>
          </div>
        </div>
        <div className="block lg:flex">
          <div className=" fixed lg:flex flex-col hidden   min-h-screen ml-3 mt-[80px] z-0">
            <div className="group  flex items-center relative justify-center">
              <a
                href="#personaldetails"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <CgProfile></CgProfile>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  profile
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#socialnetworks"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <MdSocialDistance></MdSocialDistance>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  social
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#obj"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <MdOutlineSpeakerNotes></MdOutlineSpeakerNotes>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  objective
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#education"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <SiGooglescholar></SiGooglescholar>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  education
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#projects"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <AiFillProject></AiFillProject>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  projects
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#awards"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <FaAward></FaAward>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  awards
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#skills"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <GiSkills></GiSkills>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  skills
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#hobbies"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <RxHobbyKnife></RxHobbyKnife>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  hobbies
                </span>
              </a>
            </div>
            <div className="group flex items-center relative justify-center">
              <a
                href="#languages"
                id="1"
                className="mb-2  flex-shrink-0 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 my-5 mx-2"
              >
                <FaLanguage></FaLanguage>
                <span className="absolute top-10 left-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  languages
                </span>
              </a>
            </div>
          </div>
          <div className=" mb-5 mx-5    sm:m-10 md:mx-20 lg:mx-16 ">
            <form action="" className="">
              <h1
                id="personaldetails"
                className="font-bold text-xl border-b border-gray-300 py-1 font-sans tracking-wide mt-24 lg:mt-0"
              >
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
                      value={details.personal.firstName}
                      onChange={() => {
                        console.log("no");
                      }}
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
                      value={details.personal.lastName}
                      onChange={() => {
                        console.log("no");
                      }}
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
                      value={details.personal.phone}
                      onChange={updateForm}
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
                      value={details.personal.email}
                      onChange={() => console.log("noo")}
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
                    value={details.personal.objective}
                    onChange={updateForm}
                  />
                </div>
              </div>
            </form>

            <SocailMedia />

            <Internship />

            {/* Education  */}

            <Education />

            {/* Certifications  */}

            <Certifications />

            {/* Projects  */}

            <Projects />

            {/* awards  */}

            <Awards />

            {/* skills */}

            <div className="mt-5 shadow-md p-2 rounded-md">
              <div className="flex">
                <h1 id="skills" className="font-bold text-xl grow">
                  Skills
                </h1>
                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setskarrow(!skarrow);
                  }}
                >
                  {skarrow == true && (
                    <div>
                      <div className="flex justify-center">
                        <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                          <span className="mr-2">
                            <AiOutlinePlus></AiOutlinePlus>
                          </span>
                          Hide
                        </button>
                      </div>
                    </div>
                  )}
                  {skarrow == false && (
                    <div>
                      <div className="flex justify-center">
                        <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                          <span className="mr-2">
                            <AiOutlinePlus></AiOutlinePlus>
                          </span>
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                {details.skills.length != 0 && (
                  <div className="mt-1 ml-1">
                    {details.skills.map((item, index) => (
                      <>
                        <div className="border border-white my-2 mx-2">
                          <div className=" my-1 px-2 flex">
                            <li className="grow py-2" key={item.name}>
                              {item.name}
                            </li>
                            <button
                              className="mr-2"
                              onClick={() => {
                                deleteSkill(index);
                              }}
                            >
                              <AiFillDelete></AiFillDelete>
                            </button>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
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
                  <button
                    onClick={addSkill}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Languages  */}

            <div className="mt-5 shadow-md p-2 rounded-md">
              <div className="flex">
                <h1 className="font-bold text-xl grow" id="languages">
                  Language
                </h1>
                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setlarrow(!larrow);
                  }}
                >
                  {larrow == true && (
                    <div>
                      <div className="flex justify-center">
                        <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                          <span className="mr-2">
                            <AiOutlinePlus></AiOutlinePlus>
                          </span>
                          Hide
                        </button>
                      </div>
                    </div>
                  )}
                  {larrow == false && (
                    <div>
                      <div className="flex justify-center">
                        <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                          <span className="mr-2">
                            <AiOutlinePlus></AiOutlinePlus>
                          </span>
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                {details.languages.length != 0 && (
                  <div className="ml-1  p-2 my-2 border border-white">
                    {details.languages.map((item, index) => (
                      <>
                        <div className="flex">
                          <li
                            className="my-2 font-semibold grow"
                            key={item.name}
                          >
                            {item.name}
                          </li>
                          <button
                            className="mr-2"
                            onClick={() => {
                              deleteLanguage(index);
                            }}
                          >
                            <AiFillDelete></AiFillDelete>
                          </button>
                        </div>
                      </>
                    ))}
                  </div>
                )}
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
                    <label htmlFor="languageLevel" className="font-semibold">
                      Level
                    </label>
                    <select
                      name="language"
                      className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                      id="languageLevel"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advance">Advance</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center">
                  {/* <button onClick={addLanguage}>Submit</button> */}
                  <button
                    onClick={addLanguage}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
                {/* <div>
                  {details.languages.length != 0 && (
                    <div className="mt-4">
                      {details.languages.map((item, index) => (
                        <>
                          <p className="my-2" key={item.name}>
                            {item.name}
                          </p>
                          <button
                            onClick={() => {
                              deleteLanguage(index);
                            }}
                          >
                            Delete
                          </button>
                        </>
                      ))}
                    </div>
                  )}
                </div> */}
              </div>
            </div>

            {/* hobbies  */}

            <div className="mt-5 shadow-md p-2 rounded-md">
              <div className="flex">
                <h1 className="font-bold text-xl grow" id="hobbies">
                  Hobby
                </h1>
                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setharrow(!harrow);
                  }}
                >
                  {harrow == true && (
                    <div>
                      <div className="flex justify-center">
                        <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                          <span className="mr-2">
                            <AiOutlinePlus></AiOutlinePlus>
                          </span>
                          Hide
                        </button>
                      </div>
                    </div>
                  )}
                  {harrow == false && (
                    <div>
                      <div className="flex justify-center">
                        <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                          <span className="mr-2">
                            <AiOutlinePlus></AiOutlinePlus>
                          </span>
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                {details.hobbies.length != 0 && (
                  <div className="my-2 border border-white">
                    {details.hobbies.map((item, index) => (
                      <>
                        <div className="flex p-3 ">
                          <li className="grow" key={item.name}>
                            {item.name}
                          </li>
                          <button
                            className="mr-2"
                            onClick={() => {
                              deleteHobby(index);
                            }}
                          >
                            <AiFillDelete></AiFillDelete>
                          </button>
                        </div>
                      </>
                    ))}
                  </div>
                )}
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
                  <button
                    onClick={addHobby}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
                {/* <div>
                  {details.hobbies.length != 0 && (
                    <div className="mt-4">
                      {details.hobbies.map((item, index) => (
                        <>
                          <p className="my-2" key={item.name}>
                            {item.name}
                          </p>
                          <button
                            onClick={() => {
                              deleteHobby(index);
                            }}
                          >
                            Delete
                          </button>
                        </>
                      ))}
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
