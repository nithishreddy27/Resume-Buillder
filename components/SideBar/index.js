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
import { FaEdit } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
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
import Skills from "./Skills";
import Languages from "./Languages";
import Hobbies from "./Hobbies";
export default function SideBar() {
  const [open, setopen] = useState("semiopen");
  
  const { details, setdetails } = useContext(ResumeContext);

  function updateForm(event) {
    const n = event.target.name;
    const i = event.target.id;
    setdetails({ ...details, [n]: { ...details[n], [i]: event.target.value } });
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
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dhqhq0szn/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log("data", data);
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
            <form
              action=""
              className=""
              method="post"
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
            >
              <h1
                id="personaldetails"
                className="font-bold text-xl border-b border-gray-300 py-1 font-sans tracking-wide mt-24 lg:mt-0"
              >
                Personal Details:
              </h1>
              <div className="mt-5">
                <label
                  htmlFor="firstName"
                  className="font-semibold text-gray-400"
                >
                  Upload Image
                </label>
                <div className="flex gap-5">
                  <label for="file" className="mt-5">
                    {imageSrc && (
                      <img
                      src={imageSrc}
                      
                      width="80"
                      height="80"
                    />
                    )}
                    {
                      !imageSrc && (
                        <img
                      src="https://www.provast.io/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1647117869%2Fuploads%2Fbphhxvmlcyyu2pntbikm.png&w=2048&q=75"
                      
                      width="80"
                      height="80"
                    />
                      )
                    }
                    

                    <input type="file" id="file" name="file" hidden />
                  </label>
                  {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            // <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
            <div className="my-9 w-[80%]">
            <input
              type="text"
              name="personal"
              id="imgurl"
              className="shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={uploadData.url}
            />
          </div>
          )}
                 
                </div>
              </div>
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

     <Skills />

     {/* Languages  */}

     <Languages />
     {/* hobbies  */}

     <Hobbies/>
   </div>
 </div>
</div>
    
    
    </>
  );
}
