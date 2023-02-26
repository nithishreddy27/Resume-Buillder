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

export default function Education() {
  const [earrow, setearrow] = useState(false);
  const [education, seteducation] = useState({
    typeOfDegree: "",
    institution: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    gpa: "",
    summary: { data: "" },
  });
  const { details, setdetails } = useContext(ResumeContext);

  function addEducation(event) {
    event.preventDefault();
    const edu = education;
    const arr = [];
    details.education.map((item) => {
      arr.push(item);
    });
    arr.push(edu);
    setdetails({ ...details, education: arr });

    seteducation({
      typeOfDegree: "",
      institution: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      gpa: "",
      summary: { data: "" },
    });
  }

  function deleteEducation(index) {
    const arr = [];
    details.education.map((item, i) => {
      if (i != index) arr.push(item);
    });

    setdetails({ ...details, education: arr });
  }

  function updateEducation(index) {
    details.education.map((item, i) => {
      if (i == index) {
        seteducation({
          typeOfDegree: item.typeOfDegree,
          institution: item.institution,
          fieldOfStudy: item.fieldOfStudy,
          startDate: item.startDate,
          endDate: item.endDate,
          gpa: item.gpa,
          summary: { data: item.summary.data },
        });
      }
    });
  }

  return (
    <div>
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
                  <div
                    className="my-3 border border-white p-3"
                    key={item.typeOfDegree}
                  >
                    <div className="flex">
                      <div className="flex-col grow">
                      <p className=" font-semibold">{item.institution}</p>
                      <p className="font-thin">{item.fieldOfStudy}</p>
                      </div>
                      <button
                        className="mr-2 text-xl"
                        onClick={() => {
                          deleteEducation(index);
                          setearrow(true)
                        }}
                      >
                        <button onClick={() => updateEducation(index)}>
                          <FaEdit></FaEdit>
                        </button>

                        
                      </button>
                      <button className="text-xl"
                       onClick={() => {
                          deleteEducation(index);
                        }}>
                        <AiFillDelete></AiFillDelete>
                      </button>
                      <div className="mt-[13px] ml-2">
                      <input
                        class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-200 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-orange-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className={`${earrow ? "block" : "hidden"}`}>
          <form onSubmit={addEducation}>
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
              value={education.typeOfDegree}
              onChange={(e) => {
                seteducation({ ...education, typeOfDegree: e.target.value });
              }}
            />
            <label htmlFor="school" className="font-semibold text-gray-300">
              School
            </label>
            <input
              type="text"
              name="education"
              id="school"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={education.institution}
              onChange={(e) => {
                seteducation({ ...education, institution: e.target.value });
              }}
            />
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
              value={education.fieldOfStudy}
              onChange={(e) => {
                seteducation({ ...education, fieldOfStudy: e.target.value });
              }}
            />
            <label htmlFor="grade" className="font-semibold text-gray-300">
              Grade
            </label>
            <input
              type="text"
              name="education"
              id="grade"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={education.gpa}
              onChange={(e) => {
                seteducation({ ...education, gpa: e.target.value });
              }}
            />
            <label htmlFor="startdate" className="font-semibold text-gray-300">
              Start Date
            </label>
            <input
              type="date"
              name="education"
              id="Educationstartdate"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={education.startDate}
              onChange={(e) => {
                seteducation({ ...education, startDate: e.target.value });
              }}
            />
            <label htmlFor="enddate" className="font-semibold text-gray-300">
              End Date
            </label>
            <input
              type="date"
              name="education"
              id="Educationenddate"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={education.endDate}
              onChange={(e) => {
                seteducation({ ...education, endDate: e.target.value });
              }}
            />
            <label htmlFor="summary" className="font-semibold text-gray-300">
              Summary
            </label>
            <textarea
              name="education"
              id="summary"
              className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={education.summary.data}
              onChange={(e) => {
                seteducation({
                  ...education,
                  summary: { data: e.target.value },
                });
              }}
            />
            <button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
            >
              Submit
            </button>
          </form>

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
      </div>
    </div>
  );
}
