import React, { useState, useContext } from "react";
import ResumeContext from "../context/ResumeContext";
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
export default function SideBar() {
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
  const [editSocial, seteditSocial] = useState(false)

  function updateForm(event) {
    const n = event.target.name;
    const i = event.target.id;
    setdetails({ ...details, [n]: { ...details[n], [i]: event.target.value } });
  }

  async function socialChange() {
    const sn = {
      network: document.getElementById("network").value,
      username: document.getElementById("username").value,
      url: document.getElementById("url").value,
    };
    const arr = [];
    details.social.map((item) => {
      arr.push(item);
    });
    arr.push(sn);
    setdetails({ ...details, social: arr });

    document.getElementById("network").value="",
    document.getElementById("username").value="",
    document.getElementById("url").value=""
  }

  function updateSocialNetwork(index){
    seteditSocial(true)
    var network = details.social[index]
    console.log(network)
    document.getElementById("network").value=network.network,
    document.getElementById("username").value=network.username,
    document.getElementById("url").value=network.url
  }

  function editSocialNetwrok(index){
    seteditSocial(false)
    const sn = {
      network: document.getElementById("network").value,
      username: document.getElementById("username").value,
      url: document.getElementById("url").value,
    };
    var arr = [];
    details.social.map((item,ind) => {
      if(ind == index){
        arr.push(sn)
      }
      else{
        arr.push(item);
      }
    });
    console.log(arr);
    setdetails({ ...details, social: arr });

    document.getElementById("network").value="",
    document.getElementById("username").value="",
    document.getElementById("url").value=""
  }

  function deleteSocialNetwork(index) {
    // console.log("network",network)
    const arr = [];
    details.social.map((item, i) => {
      if (i != index) {
        arr.push(item);
      }
    });
    setdetails({ ...details, social: arr });
  }

  function addInternship() {
    const intern = {
      company: document.getElementById("company").value,
      designation: document.getElementById("position").value,
      // website:document.getElementById("website").value,
      from: document.getElementById("startdate").value,
      to: document.getElementById("enddate").value,
      summary: {
        data: document.getElementById("summary").value,
      },
    };
    const arr = [];
    details.work.map((item) => {
      arr.push(item);
    });
    // console.log('intern',intern)
    arr.push(intern);
    setdetails({ ...details, work: arr });

    document.getElementById("company").value="",
    document.getElementById("position").value="",
    // website:document.getElementById("website").value,
    document.getElementById("startdate").value="",
    document.getElementById("enddate").value="",
    document.getElementById("summary").value=""
  }

  function deleteInternship(index) {
    console.log("network", index);
    const arr = [];
    details.work.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, work: arr });
  }

  function addEducation() {
    const education = {
      typeOfDegree: document.getElementById("TypeOfDegree").value,
      institution: document.getElementById("school").value,
      fieldOfStudy: document.getElementById("EducationFieldOfStudy").value,
      startDate: document.getElementById("Educationstartdate").value,
      endDate: document.getElementById("Educationenddate").value,
      gpa: document.getElementById("grade").value,
      summary: {
        data: document.getElementById("summary").value,
      },
    };
    const arr = [];
    details.education.map((item) => {
      arr.push(item);
    });
    // console.log('intern',education)
    arr.push(education);
    setdetails({ ...details, education: arr });


    document.getElementById("TypeOfDegree").value="",
    document.getElementById("school").value="",
    document.getElementById("EducationFieldOfStudy").value="",
    document.getElementById("Educationstartdate").value="",
    document.getElementById("Educationenddate").value="",
    document.getElementById("grade").value="",
    document.getElementById("summary").value=""
  }

  function deleteEducation(index) {
    const arr = [];
    details.education.map((item, i) => {
      if (i != index) arr.push(item);
    });

    setdetails({ ...details, education: arr });
  }

  function addAward() {
    const award = {
      name: document.getElementById("awardTitle").value,
      awarder: document.getElementById("awarder").value,
      date: document.getElementById("awardDate").value,
      summary: {
        data: document.getElementById("awardSummary").value,
      },
    };
    console.log("award", award);
    const arr = [];
    details.awards.map((item) => {
      arr.push(item);
    });
    // console.log('award',award)
    arr.push(award);
    setdetails({ ...details, awards: arr });

    document.getElementById("awardTitle").value="",
      document.getElementById("awarder").value="",
      document.getElementById("awardDate").value="",
         document.getElementById("awardSummary").value=""
  }

  function deleteAward(index) {
    const arr = [];
    details.awards.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, awards: arr });
  }

  function addCertificate() {
    const certificate = {
      title: document.getElementById("certificateTitle").value,
      issuer: document.getElementById("issuer").value,
      date: document.getElementById("certificateDate").value,
      summary: {
        data: document.getElementById("certificateSummary").value,
      },
    };
    console.log("award", certificate);
    const arr = [];
    details.certifications.map((item) => {
      arr.push(item);
    });
    // console.log('award',award)
    arr.push(certificate);
    setdetails({ ...details, certifications: arr });

    document.getElementById("certificateTitle").value="",
      document.getElementById("issuer").value="",
       document.getElementById("certificateDate").value="",
        document.getElementById("certificateSummary").value=""
  }

  function deleteCertificate(index) {
    console.log("network", index);
    const arr = [];
    details.certifications.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, certifications: arr });
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


    document.getElementById("skillTitle").value="",
    document.getElementById("skillLevel").value=""
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
    document.getElementById("languageTitle").value="",
    document.getElementById("languageLevel").value=""
  
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

    document.getElementById("hobbyTitle").value=""
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

  function addProjects() {

    const project = {
      name: document.getElementById("projectTitle").value,
      domain: document.getElementById("projectDomain").value,
      website: document.getElementById("projectWebsite").value,
      from: document.getElementById("projectstartdate").value,
      to: document.getElementById("projectenddate").value,
      summary: {
        data: document.getElementById("projectsummary").value,
      },
    };
    // console.log("award", certificate);
    const arr = [];
    details.projects.map((item) => {
      arr.push(item);
    });
    // console.log('award',award)
    arr.push(project);
    setdetails({ ...details, projects: arr });

    document.getElementById("projectTitle").value="",
     document.getElementById("projectDomain").value="",
     document.getElementById("projectWebsite").value="",
    document.getElementById("projectstartdate").value="",
     document.getElementById("projectenddate").value="",
      document.getElementById("projectsummary").value=""


  }
  function deleteProjects(index) {

    console.log("network", index);
    const arr = [];
    details.projects.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, projects: arr });
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
                      onChange={()=>console.log("noo")}
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

            <div className="mt-5 shadow-md p-2 rounded-md" id="socialnetworks">
              <div className="flex flex-row">
                <h1 className="font-bold text-xl grow">Social Networks:</h1>
                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setarrow(!arrow);
                  }}
                >
                  {arrow == true && (
                    <div className="">
                      <div className="flex justify-center">
                        <button className="align-right flex transition ease-in-out duration-0 hover:duration-150 items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                          <span className="mr-2">
                            <AiOutlinePlus></AiOutlinePlus>
                          </span>
                          Hide
                        </button>
                      </div>
                    </div>
                  )}
                  {arrow == false && (
                    <div className="flex justify-end grow">
                      <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                        <span className="mr-2">
                          <AiOutlinePlus></AiOutlinePlus>
                        </span>
                        Add
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {details.social.length != 0 && (
                  <>
                    {details.social.map((item, index) => (
                      <div
                        className="my-3 border border-white p-3 "
                        key={item.network}
                      >
                        <div className="flex">
                        <span>
                          <img
                            src={
                              "https://www." + item.network + ".com/favicon.ico"
                            }
                            alt=""
                            className="w-5 grayscale-[40%]"
                          />
                        </span>
                        <span className="px-2 mt-[-3px] font-semibold grow">{item.network}</span>
                          <button onClick={() => deleteSocialNetwork(index)}>
                          <AiFillDelete></AiFillDelete>
                        </button>
                        <button onClick={()=>updateSocialNetwork(index)}>Update</button>
                        
                        
                        </div>
                        <div className="block text-sm font-thin">
                          <Link href={item.url}>
                            <span className=" mt-[-4px]">
                              {item.username}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                )}
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
                  <label htmlFor="url" className="font-semibold text-gray-400">
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
                {editSocial && (

                    <button
                    onClick={socialChange}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Update
                  </button>
                        )}
                        {!editSocial && (

              <button
              onClick={editSocialNetwrok}
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
              >
              Submit
              </button>
                        )}
                  
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
                  {iarrow == false && (
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
              <div className="ml-1 mt-1">
                  {details.work.map((item, index) => (
                    <div className=" border border-white py-3 " key={item.company}>
                      <div className="flex">
                      <div className="ml-2 grow">
                        <p className="font-semibold ">{item.company}</p>
                      </div>
                      
                      <button className="mr-5"
                        onClick={() => {
                          deleteInternship(index);
                        }}
                      >
                        <AiFillDelete></AiFillDelete>
                      </button>
                      </div>
                      <div className="">
                        </div>

                    </div>
                  ))}
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
                  {/* <button>Submit</button> */}
                  <button
                    onClick={addInternship}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
                {/* <div className="ml-1 mt-1">
                  {details.work.map((item, index) => (
                    <div className="flex" key={item.company}>
                      <div className="ml-5 mt-1">
                        <p className="tracking-[2px] my-1">{item.company}</p>
                      </div>
                      <button
                        onClick={() => {
                          deleteInternship(index);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Education  */}

            <div className="mt-5 shadow-md p-2 rounded-md">
              <div className="flex ">
                <h1 id="education" className="font-bold text-xl grow">
                  Education
                </h1>

                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setearrow(!earrow);
                  }}
                >
                  {earrow == true && (
                    <div>
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
                    </div>
                  )}
                  {earrow == false && (
                    <div>
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
                    </div>
                  )}
                </div>
              </div>
              <div>
                {details.education.length != 0 && (
                  <>
                    <div className="ml-1 mt-1">
                      {details.education.map((item, index) => (
                        <div className="my-3 border border-white p-3" key={item.institution}>
                          <div className="flex">
                            <p className="grow font-semibold">{item.institution}</p>
                            <p className="font-bold">{item.fieldOfStudy}</p>

                            <button
                            className="mr-2"
                              onClick={() => {
                                deleteEducation(index);
                              }}
                            >
                              <AiFillDelete></AiFillDelete>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
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
                    htmlFor="EducationFieldOfStudy"
                    className="font-semibold text-gray-300"
                  >
                    Field Of Study
                  </label>
                  <input
                    type="text"
                    name="education"
                    id="EducationFieldOfStudy"
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
                      id="Educationstartdate"
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
                      id="Educationenddate"
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
                  <button
                    onClick={addEducation}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* <div>
                {details.education.length != 0 && (
                  <>
                    <div className="ml-1 mt-1">
                      {details.education.map((item, index) => (
                        <div className="flex" key={item.institution}>
                          <div className="flex justify-around p-10">
                            <p className="tracking-[2px]">{item.institution}</p>
                            <p className="font-bold">{item.fieldOfStudy}</p>

                            <button
                              onClick={() => {
                                deleteEducation(index);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div> */}
            </div>

            {/* Certifications  */}

            <div className="mt-5 shadow-md p-2 rounded-md">
              <div className="flex ">
                <h1 id="certifications" className="font-bold text-xl grow">
                  Certifications
                </h1>

                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setcarrow(!carrow);
                  }}
                >
                  {carrow == true && (
                    <div>
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
                    </div>
                  )}
                  {carrow == false && (
                    <div>
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
                    </div>
                  )}
                </div>
              </div>
              
              <div className={`${carrow ? "block" : "hidden"}`}>
                <div className="mt-5">
                  <label
                    htmlFor="certificateTitle"
                    className="font-semibold text-gray-300"
                  >
                    Title
                  </label>

                  <input
                    type="text"
                    name="certifications"
                    id="certificateTitle"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="issuer"
                    className="font-semibold text-gray-300"
                  >
                    Issuer
                  </label>
                  <input
                    type="text"
                    name="certifications"
                    id="issuer"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>

                <div className="flex gap-3">
                  <div className="mt-2">
                    <label
                      htmlFor="certificateDate"
                      className="font-semibold text-gray-300"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="certifications"
                      id="certificateDate"
                      className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="certificateSummary"
                    className="font-semibold text-gray-300"
                  >
                    Summary
                  </label>
                  <textarea
                    name="certifications"
                    id="certificateSummary"
                    className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <div className="flex justify-center">
                  {/* <button onClick={addEducation}>Submit</button> */}
                  <button
                    onClick={addCertificate}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
                <div className="ml-1 mt-1">
                  {details.certifications.map((item, index) => (
                    <div className="flex" key={item.institution}>
                      <div className="flex">
                        <p className="tracking-[2px]">{item.title}</p>
                        <button
                          onClick={() => {
                            deleteCertificate(index);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects  */}

            <div className="mt-5 shadow-md p-2 rounded-md">
              <div className="flex">
                <h1 className="font-bold text-xl grow" id="projects">Projects</h1>
                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setparrow(!parrow);
                  }}
                >
                  {parrow == true && (
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
                  {parrow == false && (
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
              {details.projects.length != 0 && (
                <>
                  <div className="ml-1 mt-1">
                    {details.projects.map((item, index) => (
                      <div className="my-3 p-3 border border-white" key={item.name}>
                        <div className="flex">
                          
                            <p className="grow font-semibold">{item.name}</p>
                            <button
                              className="mr-3"
                              onClick={() => {
                                deleteProjects(index);
                              }}
                            >
                              <AiFillDelete></AiFillDelete>
                            </button>
                          
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <div className={`${parrow ? "block" : "hidden"}`}>
                <div className="mt-5 text-gray-300">
                  <label htmlFor="projectTitle" className="font-semibold">
                    Title
                  </label>

                  <input
                    type="text"
                    name="project"
                    id="projectTitle"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="projectDomain"
                    className="font-semibold text-gray-300"
                  >
                    Field Of Study
                  </label>
                  <input
                    type="text"
                    name="project"
                    id="projectDomain"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="projectWebsite"
                    className="font-semibold text-gray-300"
                  >
                    GIT / Website Link
                  </label>
                  <input
                    type="text"
                    name="project"
                    id="projectWebsite"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <div className="flex gap-3">
                  <div className="mt-2">
                    <label
                      htmlFor="projectstartdate"
                      className="font-semibold text-gray-300"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="project"
                      id="projectstartdate"
                      className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="projectenddate"
                      className="font-semibold text-gray-300"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      name="project"
                      id="projectenddate"
                      className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="projectsummary"
                    className="font-semibold text-gray-300"
                  >
                    Summary
                  </label>
                  <textarea
                    name="project"
                    id="projectsummary"
                    className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <div className="flex justify-center">
                  {/* <button onClick={addInternship}>Submit</button> */}
                  <button
                    onClick={addProjects}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
              
            </div>

            {/* awards  */}

            <div className="mt-5 shadow-md p-2 rounded-md">
              <div className="flex">
                <h1 className="font-bold text-xl grow" id="awards">Awards</h1>
                <div
                  className="pt-[-15px] mt-[-10px]"
                  onClick={() => {
                    setawarrow(!awarrow);
                  }}
                >
                  {awarrow == true && (
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
                  {awarrow == false && (
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
              <div>
                  {details.awards.map((item, index) => (
                    <div className="my-2 p-3 border border-white" key={item.name}>
                      <div className="flex">
                      <span className="font-semibold grow">
                        {item.name}
                      </span>
                      <button
                        className="mr-2"
                        onClick={() => {
                          deleteAward(index);
                        }}
                      >
                        <AiFillDelete></AiFillDelete>
                      </button>
                      </div>
                    </div>
                  ))}
                </div>
              <div className={`${awarrow ? "block" : "hidden"}`}>
                <div className="mt-5 text-gray-300">
                  <label htmlFor="awardTitle" className="font-semibold">
                    Title
                  </label>

                  <input
                    type="text"
                    name="award"
                    id="awardTitle"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="awarder"
                    className="font-semibold text-gray-300"
                  >
                    Awarder
                  </label>
                  <input
                    type="text"
                    name="award"
                    id="awarder"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <div className="flex gap-3">
                  <div className="mt-2">
                    <label
                      htmlFor="awardDate"
                      className="font-semibold text-gray-300"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="award"
                      id="awardDate"
                      className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="awardSummary"
                    className="font-semibold text-gray-300"
                  >
                    Summary
                  </label>
                  <textarea
                    name="award"
                    id="awardSummary"
                    className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                </div>
                <div className="flex justify-center">
                  {/* <button onClick={addInternship}>Submit</button> */}
                  <button
                    onClick={addAward}
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Submit
                  </button>
                </div>

                {/* <div>
                  {details.awards.map((item, index) => (
                    <div className="my-2" key={item.name}>
                      <span className="font-semibold text-[15px]">
                        {item.name}
                      </span>
                      <button
                        onClick={() => {
                          deleteAward(index);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

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
                          <li className="my-2 font-semibold grow" key={item.name}>
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

