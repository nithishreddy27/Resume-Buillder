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

export default function Projects() {
  const [parrow, setparrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [projects, setprojects] = useState({
    name: "",
    website: "",
    from: "",
    to: "",
    summary: { data: "" },
  });
  function addProjects(event) {
    event.preventDefault();
    const pro = projects;
    const arr = [];
    details.projects.map((item) => {
      arr.push(item);
    });
    arr.push(pro);
    setdetails({ ...details, projects: arr });

    setprojects({
      name: "",
      website: "",
      from: "",
      to: "",
      summary: { data: "" },
    });
  }
  function deleteProjects(index) {
    const arr = [];
    details.projects.map((item, i) => {
      if (i != index) {
        arr.push(item);
      }
    });
    setdetails({ ...details, projects: arr });
  }
  function updateProjects(index) {
    details.projects.map((item, i) => {
      if (i == index) {
        setprojects({
          name: item.name,
          website: item.website,
          from: item.from,
          to: item.to,
          summary: { data: item.summary.data },
        });
      }
    });
  }
  return (
    <div>
      {" "}
      <div className="mt-5 shadow-md p-2 rounded-md">
        <div className="flex">
          <h1 className="font-bold text-xl grow" id="projects">
            Projects
          </h1>
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
                      <button onClick={() => updateProjects(index)}>
                        Update
                      </button>
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className={`${parrow ? "block" : "hidden"}`}>
          <form onSubmit={addProjects}>
            <label htmlFor="projectTitle" className="font-semibold">
              Title
            </label>

            <input
              type="text"
              name="project"
              id="projectTitle"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={projects.name}
              onChange={(e) => {
                setprojects({ ...projects, name: e.target.value });
              }}
            />
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
              value={projects.website}
              onChange={(e) => {
                setprojects({ ...projects, website: e.target.value });
              }}
            />
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
              value={projects.from}
              onChange={(e) => {
                setprojects({ ...projects, from: e.target.value });
              }}
            />
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
              value={projects.to}
              onChange={(e) => {
                setprojects({ ...projects, to: e.target.value });
              }}
            />
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
              value={projects.summary.data}
              onChange={(e) => {
                setprojects({
                  ...projects,
                  summary: { data: e.target.value },
                });
              }}
            />
            {/* <button onClick={addInternship}>Submit</button> */}
            <button type="submit" className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
