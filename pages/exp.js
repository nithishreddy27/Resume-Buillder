import React, { useState, useContext } from "react";
import ResumeContext from "../context/ResumeContext";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Link from "next/link";
export default function exp() {
  const [open, setopen] = useState("semiopen");
  const [arrow, setarrow] = useState(false);
  const [iarrow, setiarrow] = useState(false);
  const [earrow, setearrow] = useState(false);
  const [skarrow, setskarrow] = useState(false);
  const [larrow, setlarrow] = useState(false);
  const [harrow, setharrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      <div className="flex">
        {/* {open == "open" && (
            <>
             <div className='h-screen w-[50%] bg-purple-300'>
            
             </div>
            <div className='h-screen w-[50%] bg-green-300'>
                
            </div>
            </>
        )} */}
        {open == "closed" && (
          <div className="h-screen w-[100%] bg-green-300 fixed">
            <button
              className="h-10 w-10 mx-auto block lg:hidden"
              onClick={toggleResume}
            >
              Click
            </button>
            <div></div>
            <div className="bg-slate-50 w-[210mm] h-[285mm] min-w-[210mm] overflow-auto drop-shadow-2xl flex flex-row">
              <div className=" w-[45%] h-[100%] bg-gray-200 p-6">
                <div className="bg-slate-800 w-[144px] h-[200px] absolute top-0 left-0">
                  <img
                    src="https://randomuser.me/api/portraits/men/40.jpg"
                    alt=""
                    className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                  />
                </div>
                <div className="mt-48">
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    CONTACT
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {
                    <>
                      <div className="flex">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                            className="w-5 h-5"
                          />
                        </span>
                        <h1 className="mx-4">{details.personal.phone}</h1>
                      </div>
                      <div className="flex my-1">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                            className="w-7 h-7"
                          />
                        </span>
                        <h1 className="mx-2">{details.personal.email}</h1>
                      </div>
                      {details.social.map((item) => (
                        <div className="my-3 flex" key={item.network}>
                          <span>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              alt=""
                              className="w-5 grayscale-[40%]"
                            />
                          </span>

                          <Link href={item.url}>
                            <span className="mx-4">{item.username}</span>
                          </Link>
                        </div>
                      ))}
                      {
                        // console.log(details)
                        console.log("re", details)
                      }
                    </>
                  }
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    SKILLS
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.skills.map((item) => (
                    <li className="mx-4" key={item.name}>
                      {item.name}
                    </li>
                  ))}
                </div>

                {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    LANGUAGES
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.languages.map((item) => (
                    <p className="my-2" key={item.name}>
                      {item.name}
                    </p>
                  ))}
                </div>
                <h1 className="text-2xl font-semibold tracking-[2px]">
                  AWARADS
                </h1>
                <hr className="h-[2px] bg-black my-1" />
                {details.awards.map((item) => (
                  <div className="my-2" key={item.name}>
                    <span className="font-semibold text-[15px]">
                      {item.name} ({item.date.slice(0, 4)})
                    </span>
                    <span className="mx-2 text-[15px]"></span>
                    <p className="mx-4">{item.summary.data.slice(0, 38)}</p>
                  </div>
                ))}
              </div>
              <div className=" w-[70%] pt-10 px-5 ">
                <div>
                  <h1 className="text-5xl font-semibold tracking-wider">
                    {details.personal.firstName}
                  </h1>
                  <h1 className="text-3xl  tracking-[4px] mt-2">
                    {details.personal.lastName}
                  </h1>
                  {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                </div>

                <div className="mt-12">
                  <h1 className="text-xl font-bold tracking-[1px]">
                    OBJECTIVE
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  <p className="text-sm">{details.personal.objective}</p>

                  <h1 className="text-xl font-bold tracking-[1px] mt-5">
                    WORK
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />

                  <div className="ml-1 mt-1">
                    {details.work.map((item) => (
                      <div className="flex" key={item.company}>
                        <div className="pt-1">
                          <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-black h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold">
                            {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                          </p>
                          <p className="tracking-[2px] my-1">{item.company}</p>
                          <p className="font-bold">{item.designation}</p>
                          <p className="mb-4 text-sm">{item.summary.data}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h1 className="text-xl font-bold tracking-[1px] mt-3">
                    EDUCACTION
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  <div className="ml-1 mt-1">
                    {details.education.map((item) => (
                      <div className="flex" key={item.institution}>
                        <div className="flex">
                          <div className="pt-1">
                            <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                            <div className="w-1 bg-black h-28 m-1"></div>
                          </div>
                          <div className="ml-5 mt-1">
                            <p className="font-semibold">
                              {item.startDate.slice(0, 4)} -{" "}
                              {item.endDate.slice(0, 4)}
                            </p>
                            <p className="tracking-[2px]">{item.institution}</p>
                            <p className="font-bold">{item.fieldOfStudy}</p>
                            <p className="">{item.typeOfDegree}</p>
                            <p className="mb-4 font-semibold">GPA-{item.gpa}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {open == "semiopen" && (
          <>
            <div className="h-screen relative w-[250%] lg:w-[100%] bg-white transition-all overflow-y-scroll ">
              <div className="lg:hidden" onClick={toggleResume}>
                Tog
              </div>
              <div className=" m-5 sm:m-10 md:mx-20 lg:mx-28">
                <form action="" className="">
                  <h1 className="font-bold text-xl shadow-md p-2 rounded-md">
                    Personal Details:
                  </h1>
                  <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                    <div className="mt-5">
                      <label htmlFor="firstName" className="font-semibold">
                        First Name
                      </label>
                      <div className="my-2">
                        <input
                          type="text"
                          name="personal"
                          id="firstName"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          //   value={details.personal.firstName}
                          //   onChange={updateForm}
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
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          //   value={details.personal.lastName}
                          //   onChange={updateForm}
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
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          //   value={details.phone.lastName}
                          //   onChange={updateForm}
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
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          //   value={details.personal.email}
                          //   onChange={updateForm}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="objective" className="font-semibold">
                      Objective
                    </label>
                    <div className="my-2">
                      <textarea
                        name="personal"
                        id="objective"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        //   value={details.personal.objective}
                        //   onChange={updateForm}
                      />
                    </div>
                  </div>
                </form>

                <div className="mt-5 shadow-md p-2 rounded-md">
                  <div className="flex gap-6 ">
                    <h1 className="font-bold text-xl ">Social Networks:</h1>
                    <div
                      className="pt-2"
                      onClick={() => {
                        setarrow(!arrow);
                      }}
                    >
                      {arrow == true && (
                        <div>
                          <AiOutlineCaretUp></AiOutlineCaretUp>
                        </div>
                      )}
                      {arrow == false && (
                        <div>
                          <AiOutlineCaretDown></AiOutlineCaretDown>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${arrow ? "block" : "hidden"}`}>
                    <div className="mt-5">
                      <label htmlFor="network" className="font-semibold">
                        Network
                      </label>

                      <input
                        type="text"
                        name="social"
                        id="network"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="url" className="font-semibold">
                        Url
                      </label>
                      <input
                        type="text"
                        name="social"
                        id="url"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="network" className="font-semibold">
                        Username
                      </label>
                      <input
                        type="text"
                        name="social"
                        id="username"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="flex justify-center">
                      {/* <button onClick={socialChange}>Submit</button> */}
                      <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 shadow-md p-2 rounded-md">
                  <div className="flex gap-[76px]">
                    <h1 className="font-bold text-xl">Internships</h1>
                    <div
                      className="pt-2"
                      onClick={() => {
                        setiarrow(!iarrow);
                      }}
                    >
                      {iarrow == true && (
                        <div>
                          <AiOutlineCaretUp></AiOutlineCaretUp>
                        </div>
                      )}
                      {iarrow == false && (
                        <div>
                          <AiOutlineCaretDown></AiOutlineCaretDown>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${iarrow ? "block" : "hidden"}`}>
                    <div className="mt-5">
                      <label htmlFor="company" className="font-semibold">
                        Company
                      </label>

                      <input
                        type="text"
                        name="internship"
                        id="company"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="position" className="font-semibold">
                        Position
                      </label>
                      <input
                        type="text"
                        name="internship"
                        id="position"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="fieldOfStudy" className="font-semibold">
                        Field Of Study
                      </label>
                      <input
                        type="text"
                        name="internship"
                        id="fieldOfStudy"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="mt-2">
                        <label htmlFor="startdate" className="font-semibold">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name="internship"
                          id="startdate"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="enddate" className="font-semibold">
                          End Date
                        </label>
                        <input
                          type="date"
                          name="internship"
                          id="enddate"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <label htmlFor="summary" className="font-semibold">
                        Summary
                      </label>
                      <textarea
                        name="internship"
                        id="summary"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="flex justify-center">
                      {/* <button onClick={addInternship}>Submit</button> */}
                      <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="mt-5 shadow-md p-2 rounded-md">
                    <div className="flex gap-[86px]">
                      <h1 className="font-bold text-xl">Education</h1>
                      <div
                        className="pt-2"
                        onClick={() => {
                          setearrow(!earrow);
                        }}
                      >
                        {earrow == true && (
                          <div>
                            <AiOutlineCaretUp></AiOutlineCaretUp>
                          </div>
                        )}
                        {earrow == false && (
                          <div>
                            <AiOutlineCaretDown></AiOutlineCaretDown>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`${earrow ? "block" : "hidden"}`}>
                      <div className="mt-5">
                        <label htmlFor="TypeOfDegree" className="font-semibold">
                          Type Of Degree
                        </label>

                        <input
                          type="text"
                          name="education"
                          id="TypeOfDegree"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="school" className="font-semibold">
                          School
                        </label>
                        <input
                          type="text"
                          name="education"
                          id="school"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="fieldOfStudy" className="font-semibold">
                          Field Of Study
                        </label>
                        <input
                          type="text"
                          name="education"
                          id="fieldOfStudy"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="grade" className="font-semibold">
                          Grade
                        </label>
                        <input
                          type="text"
                          name="education"
                          id="grade"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="mt-2">
                          <label htmlFor="startdate" className="font-semibold">
                            Start Date
                          </label>
                          <input
                            type="date"
                            name="education"
                            id="startdate"
                            className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                        <div className="mt-2">
                          <label htmlFor="enddate" className="font-semibold">
                            End Date
                          </label>
                          <input
                            type="date"
                            name="education"
                            id="enddate"
                            className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="summary" className="font-semibold">
                          Summary
                        </label>
                        <textarea
                          name="education"
                          id="summary"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>
                      <div className="flex justify-center">
                        {/* <button onClick={addEducation}>Submit</button> */}
                        <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 shadow-md p-2 rounded-md">
                  <div className="flex gap-[125px]">
                    <h1 className="font-bold text-xl">Skills:</h1>
                    <div
                      className="pt-2"
                      onClick={() => {
                        setskarrow(!skarrow);
                      }}
                    >
                      {skarrow == true && (
                        <div>
                          <AiOutlineCaretUp></AiOutlineCaretUp>
                        </div>
                      )}
                      {skarrow == false && (
                        <div>
                          <AiOutlineCaretDown></AiOutlineCaretDown>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${skarrow ? "block" : "hidden"}`}>
                    <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                      <div className="mt-5">
                        <label htmlFor="awardTitle" className="font-semibold">
                          Title
                        </label>

                        <input
                          type="text"
                          name="skill"
                          id="skillTitle"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>

                      <div className="mt-2 sm:mt-5">
                        <label htmlFor="skillLevel" className="font-semibold">
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
                      {/* <button onClick={socialChange}>Submit</button> */}
                      <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5 shadow-md p-2 rounded-md">
                  <div className="flex gap-[89px]">
                    <h1 className="font-bold text-xl">Language</h1>
                    <div
                      className="pt-2"
                      onClick={() => {
                        setlarrow(!larrow);
                      }}
                    >
                      {larrow == true && (
                        <div>
                          <AiOutlineCaretUp></AiOutlineCaretUp>
                        </div>
                      )}
                      {larrow == false && (
                        <div>
                          <AiOutlineCaretDown></AiOutlineCaretDown>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${larrow ? "block" : "hidden"}`}>
                    <div className="sm:grid sm:grid-cols-2 gap-2">
                      <div className="mt-5">
                        <label
                          htmlFor="languageTitle"
                          className="font-semibold"
                        >
                          Title
                        </label>

                        <input
                          type="text"
                          name="language"
                          id="languageTitle"
                          className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        />
                      </div>

                      <div className="mt-2 sm:mt-5">
                        <label
                          htmlFor="languageLevel"
                          className="font-semibold"
                        >
                          Level
                        </label>
                        <select
                          name="language"
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
                      {/* <button onClick={addLanguage}>Submit</button> */}
                      <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5 shadow-md p-2 rounded-md">
                  <div className="flex gap-[114px]">
                    <h1 className="font-bold text-xl">Hobby</h1>
                    <div
                      className="pt-2"
                      onClick={() => {
                        setharrow(!harrow);
                      }}
                    >
                      {harrow == true && (
                        <div>
                          <AiOutlineCaretUp></AiOutlineCaretUp>
                        </div>
                      )}
                      {harrow == false && (
                        <div>
                          <AiOutlineCaretDown></AiOutlineCaretDown>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${harrow ? "block" : "hidden"}`}>
                    <div className="mt-5">
                      <label htmlFor="hobbyTitle" className="font-semibold">
                        Title
                      </label>

                      <input
                        type="text"
                        name="language"
                        id="hobbyTitle"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>

                    <div className="flex justify-center">
                      {/* <button onClick={addHobby}>Submit</button> */}
                      <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block h-screen  w-[100%] bg-purple-300">
              hiiiiiiiiiiiiii
              <div className="bg-slate-50 w-[210mm] h-[285mm] overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
                <div className=" w-[35%] bg-gray-200 p-6">
                  <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
                    <img
                      src="https://randomuser.me/api/portraits/men/40.jpg"
                      alt=""
                      className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                    />
                  </div>
                  <div className="mt-48">
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      CONTACT
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    {
                      <>
                        <div className="flex">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                              className="w-5 h-5"
                            />
                          </span>
                          <h1 className="mx-4">{details.personal.phone}</h1>
                        </div>
                        <div className="flex my-1">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                              className="w-7 h-7"
                            />
                          </span>
                          <h1 className="mx-2">{details.personal.email}</h1>
                        </div>
                        {details.social.map((item) => (
                          <div className="my-3 flex" key={item.network}>
                            <span>
                              <img
                                src={
                                  "https://www." +
                                  item.network +
                                  ".com/favicon.ico"
                                }
                                alt=""
                                className="w-5 grayscale-[40%]"
                              />
                            </span>

                            <Link href={item.url}>
                              <span className="mx-4">{item.username}</span>
                            </Link>
                          </div>
                        ))}
                        {
                          // console.log(details)
                          console.log("re", details)
                        }
                      </>
                    }
                  </div>
                  <div className="mt-4">
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      SKILLS
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    {details.skills.map((item) => (
                      <li className="mx-4" key={item.name}>
                        {item.name}
                      </li>
                    ))}
                  </div>

                  {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
                  <div className="mt-4">
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      LANGUAGES
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    {details.languages.map((item) => (
                      <p className="my-2" key={item.name}>
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    AWARADS
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.awards.map((item) => (
                    <div className="my-2" key={item.name}>
                      <span className="font-semibold text-[15px]">
                        {item.name} ({item.date.slice(0, 4)})
                      </span>
                      <span className="mx-2 text-[15px]"></span>
                      <p className="mx-4">{item.summary.data.slice(0, 38)}</p>
                    </div>
                  ))}
                </div>
                <div className=" w-[70%] pt-10 px-5 ">
                  <div>
                    <h1 className="text-5xl font-semibold tracking-wider">
                      {details.personal.firstName}
                    </h1>
                    <h1 className="text-3xl  tracking-[4px] mt-2">
                      {details.personal.lastName}
                    </h1>
                    {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                  </div>

                  <div className="mt-12">
                    <h1 className="text-xl font-bold tracking-[1px]">
                      OBJECTIVE
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <p className="text-sm">{details.personal.objective}</p>

                    <h1 className="text-xl font-bold tracking-[1px] mt-5">
                      WORK
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />

                    <div className="ml-1 mt-1">
                      {details.work.map((item) => (
                        <div className="flex" key={item.company}>
                          <div className="pt-1">
                            <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                            <div className="w-1 bg-black h-32 m-1"></div>
                          </div>
                          <div className="ml-5 mt-1">
                            <p className="font-semibold">
                              {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                            </p>
                            <p className="tracking-[2px] my-1">
                              {item.company}
                            </p>
                            <p className="font-bold">{item.designation}</p>
                            <p className="mb-4 text-sm">{item.summary.data}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h1 className="text-xl font-bold tracking-[1px] mt-3">
                      EDUCACTION
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <div className="ml-1 mt-1">
                      {details.education.map((item) => (
                        <div className="flex" key={item.institution}>
                          <div className="flex">
                            <div className="pt-1">
                              <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                              <div className="w-1 bg-black h-28 m-1"></div>
                            </div>
                            <div className="ml-5 mt-1">
                              <p className="font-semibold">
                                {item.startDate.slice(0, 4)} -{" "}
                                {item.endDate.slice(0, 4)}
                              </p>
                              <p className="tracking-[2px]">
                                {item.institution}
                              </p>
                              <p className="font-bold">{item.fieldOfStudy}</p>
                              <p className="">{item.typeOfDegree}</p>
                              <p className="mb-4 font-semibold">
                                GPA-{item.gpa}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
