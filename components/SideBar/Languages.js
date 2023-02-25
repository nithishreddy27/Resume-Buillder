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

export default function Languages() {
  const [larrow, setlarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [languages, setlanguages] = useState({
    name: "",
    level: "",
  });
  function addLanguage(event) {
    event.preventDefault();
    const lan = languages;
    const arr = [];
    details.languages.map((item) => {
      arr.push(item);
    });
    arr.push(lan);
    setdetails({ ...details, languages: arr });

    setlanguages({
      name: "",
      level: "",
    });
  }

  function deleteLanguage(index) {
    const arr = [];
    details.languages.map((item, i) => {
      if (i != index) arr.push(item);
    });

    setdetails({ ...details, languages: arr });
  }

  function updateLanguage(index) {
    details.languages.map((item, i) => {
      if (i == index) {
        setlanguages({
          name: item.name,
          level: item.name,
        });
      }
    });
  }
  return (
    <div>
      {" "}
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
                      <button onClick={() => updateLanguage(index)}>
                        Update
                      </button>
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div className={`${larrow ? "block" : "hidden"}`}>
          <form onSubmit={addLanguage}>
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
              value={languages.name}
              onChange={(e) => {
                setlanguages({ ...languages, name: e.target.value });
              }}
            />

            <label htmlFor="languageLevel" className="font-semibold">
              Level
            </label>
            <select
              name="language"
              className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
              id="languageLevel"
              value={languages.level}
              onChange={(e) => {
                setlanguages({ ...languages, level: e.target.value });
              }}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advance">Advance</option>
            </select>
            {/* <button onClick={addLanguage}>Submit</button> */}
            <button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
            >
              Submit
            </button>
          </form>
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
    </div>
  );
}
