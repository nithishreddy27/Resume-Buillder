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

export default function Awards() {
  const [awarrow, setawarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [awards, setawards] = useState({
    name: "",
    awarder: "",
    date: "",
    summary: { data: "" },
  });
  function addAward(event) {
    event.preventDefault();
    const awa = awards;
    const arr = [];
    details.awards.map((item) => {
      arr.push(item);
    });
    arr.push(awa);
    setdetails({ ...details, awards: arr });

    setawards({
      name: "",
      awarder: "",
      date: "",
      summary: { data: "" },
    });
  }

  function deleteAward(index) {
    const arr = [];
    details.awards.map((item, i) => {
      if (i != index) {
        arr.push(item);
      }
    });
    setdetails({ ...details, awards: arr });
  }
  function updateAward(index) {
    details.awards.map((item, i) => {
      if (i == index) {
        setawards({
          name: item.name,
          awarder: item.awarder,
          date: item.date,
          summary: { data: "" },
        });
      }
    });
  }
  return (
    <div>
      <div className="mt-5 shadow-md p-2 rounded-md">
        <div className="flex">
          <h1 className="font-bold text-xl grow" id="awards">
            Awards
          </h1>
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
                <span className="font-semibold grow">{item.name}</span>
                <button
                  className="mr-2"
                  onClick={() => {
                    deleteAward(index);
                  }}
                >
                  <button onClick={() => updateAward(index)}>Update</button>

                  <AiFillDelete></AiFillDelete>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={`${awarrow ? "block" : "hidden"}`}>
          <form onSubmit={addAward}>
            <label htmlFor="awardTitle" className="font-semibold">
              Title
            </label>

            <input
              type="text"
              name="award"
              id="awardTitle"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={awards.name}
              onChange={(e) => {
                setawards({ ...awards, name: e.target.value });
              }}
            />

            <label htmlFor="awarder" className="font-semibold text-gray-300">
              Awarder
            </label>
            <input
              type="text"
              name="award"
              id="awarder"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={awards.awarder}
              onChange={(e) => {
                setawards({ ...awards, awarder: e.target.value });
              }}
            />
            <label htmlFor="awardDate" className="font-semibold text-gray-300">
              Date
            </label>
            <input
              type="date"
              name="award"
              id="awardDate"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={awards.date}
              onChange={(e) => {
                setawards({ ...awards, date: e.target.value });
              }}
            />
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
              value={awards.summary.data}
              onChange={(e) => {
                setawards({
                  ...awards,
                  summary: { data: e.target.value },
                });
              }}
            />
            {/* <button onClick={addInternship}>Submit</button> */}
            <button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
            >
              Submit
            </button>
          </form>

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
    </div>
  );
}
