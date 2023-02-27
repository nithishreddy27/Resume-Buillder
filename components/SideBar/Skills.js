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
import { FaLanguage, FaAward, FaEdit } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
// import {GrProjects} from "react-icons/gr"
import { GiSkills } from "react-icons/gi";
import { RxHobbyKnife } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";

export default function Skills() {
  const [skarrow, setskarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [skills, setskills] = useState({
    name: "",
    level: "",
  });
  function addSkill(event) {
    event.preventDefault();
    const ski = skills;
    const arr = [];
    details.skills.map((item) => {
      arr.push(item);
    });
    arr.push(ski);
    setdetails({ ...details, skills: arr });

    setskills({
      name: "",
      level: "",
    });
  }

  function deleteSkill(index) {
    const arr = [];
    details.skills.map((item, i) => {
      if (i != index) arr.push(item);
    });

    setdetails({ ...details, skills: arr });
  }

  function updateSkills(index) {
    details.skills.map((item, i) => {
      if (i == index) {
        setskills({
          name: item.name,
          level: item.name,
        });
      }
    });
  }
  return (
    <div>
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
                        className="mr-2 text-xl"
                        onClick={() => {
                          deleteSkill(index);
                          setskarrow(true);
                        }}
                      >
                        <button onClick={() => updateSkills(index)}>
                          <FaEdit></FaEdit>
                        </button>
                        
                      </button>
                      <button className="text-xl">
                        <AiFillDelete></AiFillDelete>
                      </button>
                      <div className="mt-[9px] ml-2">
                      <input
                        class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-200 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-orange-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div className={`${skarrow ? "block" : "hidden"}`}>
          <form onSubmit={addSkill}>
            <label htmlFor="awardTitle" className="font-semibold text-gray-300">
              Title
            </label>

            <input
              type="text"
              name="skill"
              id="skillTitle"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={skills.name}
              onChange={(e) => {
                setskills({ ...skills, name: e.target.value });
              }}
            />

            <label htmlFor="skillLevel" className="font-semibold text-gray-300">
              Level
            </label>
            <select
              name="skillValue"
              className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
              id="skillLevel"
              value={skills.level}
              onChange={(e) => {
                setskills({ ...skills, level: e.target.value });
              }}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advance">Advance</option>
            </select>
            <button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
