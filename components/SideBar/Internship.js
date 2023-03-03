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
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export default function Internship() {
  const [iarrow, setiarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);

  const [internship, setinternship] = useState({
    company: "",
    designation: "",
    from: "",
    to: "",
    summary: { data: "" },
    enabled: true,
  });

  function addInternship(event) {
    event.preventDefault();
    const intern = internship;
    const arr = [];
    var count = 0;

    details.work.map((item) => {
      if (item.company == internship.company) {
        arr.push(intern);
        count = 1;
      } else {
        arr.push(item);
      }
    });
    // console.log('intern',intern)

    if (count == 0) {
      arr.push(intern);
    }
    setdetails({ ...details, work: arr });

    setinternship({
      company: "",
      designation: "",
      from: "",
      to: "",
      summary: { data: "" },
      enabled: true,
    });
  }

  function deleteInternship(index) {
    console.log("network", index);
    const arr = [];
    details.work.map((item, i) => {
      if (i != index) arr.push(item);
    });
    setdetails({ ...details, work: arr });
  }

  function updateInternship(index) {
    // console.log("in");
    details.work.map((item, i) => {
      if (i == index) {
        setinternship({
          company: item.company,
          designation: item.designation,
          from: item.from,
          to: item.to,
          summary: { data: item.summary.data },
          enabled: true,
        });
      }
    });
  }
  function toggleInternships(index) {
    setinternship(details.work[index]);
    const arr = [];
    if (details.work[index].enabled == true) {
      details.work.map((item, ind) => {
        if (index == ind) {
          item.enabled = false;
          arr.push(item);
        } else {
          arr.push(item);
        }
      });
      setdetails({ ...details, work: arr });
    } else {
      details.work.map((item, ind) => {
        if (index == ind) {
          item.enabled = true;
          arr.push(item);
        } else {
          arr.push(item);
        }
      });
      setdetails({ ...details, work: arr });
    }
    setinternship({
      company: "",
      designation: "",
      from: "",
      to: "",
      summary: { data: "" },
      enabled: true,
    });
    console.log("")
  }

  return (
    <div>
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
            <div className=" border border-white py-3 my-3 " key={item.company}>
              <div className="flex">
                <div className="ml-2 grow">
                  <p className="font-semibold ">{item.company}</p>
                </div>

                <button
                  className="mr-2 text-xl"
                  onClick={() => {
                    deleteInternship(index);
                  }}
                >
                  <button
                    onClick={() => {
                      updateInternship(index);
                      setiarrow(true);
                    }}
                  >
                    <FaEdit></FaEdit>
                  </button>
                </button>
                <button
                  className="mr-2 text-xl"
                  onClick={() => {
                    deleteInternship(index);
                  }}
                >
                  <AiFillDelete></AiFillDelete>
                </button>
                <div>
                  <input
                    class="mt-[6px] mr-5 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-200 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-orange-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={item.enabled}
                    defaultChecked
                    onChange={() => {
                      toggleInternships(index);
                    }}
                  />
                </div>
              </div>
              <div className=""></div>
            </div>
          ))}
        </div>
        <div className={`${iarrow ? "block" : "hidden"}`}>
          <form onSubmit={addInternship}>
            {/* <div className="mt-5 text-gray-300"> */}

            <label htmlFor="company" className="font-semibold">
              Company
            </label>

            <input
              type="text"
              name="internship"
              id="company"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={internship.company}
              onChange={(e) => {
                setinternship({ ...internship, company: e.target.value });
              }}
            />
            {/* </div> */}
            {/* <div className="mt-2"> */}
            <label htmlFor="position" className="font-semibold text-gray-300">
              Position
            </label>
            <input
              type="text"
              name="internship"
              id="position"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={internship.designation}
              onChange={(e) => {
                setinternship({ ...internship, designation: e.target.value });
              }}
            />
            {/* </div> */}

            {/* <div className="flex gap-3"> */}
            {/* <div className="mt-2"> */}
            <label htmlFor="startdate" className="font-semibold text-gray-300">
              Start Date
            </label>
            <input
              type="date"
              name="internship"
              id="startdate"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={internship.from}
              onChange={(e) => {
                setinternship({ ...internship, from: e.target.value });
              }}
            />
            {/* </div> */}
            {/* <div className="mt-2"> */}
            <label htmlFor="enddate" className="font-semibold text-gray-300">
              End Date
            </label>
            <input
              type="date"
              name="internship"
              id="enddate"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={internship.to}
              onChange={(e) => {
                setinternship({ ...internship, to: e.target.value });
              }}
            />
            {/* </div> */}
            {/* </div> */}
            {/* <div className="mt-2"> */}
            <label htmlFor="summary" className="font-semibold text-gray-300">
              Summary
            </label>
            <textarea
              name="internship"
              id="summary"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={internship.summary.data}
              onChange={(e) => {
                setinternship({
                  ...internship,
                  summary: { data: e.target.value },
                });
              }}
            />
            {/* </div> */}
            {/* <div className="flex justify-center"> */}
            {/* <button>Submit</button> */}
            <button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
            >
              Submit
            </button>

            {/* </div> */}
          </form>

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
    </div>
  );
}
