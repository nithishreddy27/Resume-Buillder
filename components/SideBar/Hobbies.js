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

export default function Hobbies() {
  const [harrow, setharrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [hobbies, sethobbies] = useState({
    name: "",
  });
  function addHobby(event) {
    event.preventDefault();
    const hob = hobbies;
    const arr = [];
    details.hobbies.map((item) => {
      arr.push(item);
    });
    arr.push(hob);
    // console.log("first", hob);
    sethobbies({ ...details, hobbies: arr });

    sethobbies({
      name: "",
    });
  }

  function deleteHobby(index) {
    const arr = [];
    details.hobbies.map((item, i) => {
      if (i != index) arr.push(item);
    });

    setdetails({ ...details, hobbies: arr });
  }

  function updateHobby(index) {
    details.hobbies.map((item, i) => {
      if (i == index) {
        sethobbies({
          name: item.name,
        });
      }
    });
  }
  return (
    <div>
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
            <div className="ml-1  p-2 my-2 border border-white">
              {details.hobbies.map((item, index) => (
                <>
                  <div className="flex">
                    <li className="my-2 font-semibold grow" key={item.name}>
                      {item.name}
                    </li>
                    <button
                      className="mr-2"
                      onClick={() => {
                        deleteHobby(index);
                        setharrow(true)
                      }}
                    >
                      <button onClick={() => updateHobby(index)}>
                        <FaEdit></FaEdit>
                      </button>
                      
                    </button>
                    <button onClick={() => {
                        deleteHobby(index);
                      }}>
                      <AiFillDelete></AiFillDelete>
                    </button>
                    <div className=" ml-2">
                      <input
                        class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-200 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-orange-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div className={`${harrow ? "block" : "hidden"}`}>
          <form onSubmit={addHobby}>
            <label htmlFor="hobbyTitle" className="font-semibold text-gray-300">
              Title
            </label>

            <input
              type="text"
              name="language"
              id="hobbyTitle"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={hobbies.name}
              onChange={(e) => {
                sethobbies({ ...hobbies, name: e.target.value });
              }}
            />

            {/* <button onClick={addHobby}>Submit</button> */}
            <button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
            >
              Submit
            </button>
          </form>
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
  );
}
