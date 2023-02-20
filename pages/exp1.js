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
          <div className="mx-auto w-full  max-w-3xl bg-green-300">
            <button
              className="h-10 w-10 mx-auto block lg:hidden"
              onClick={toggleResume}
            >
              Click
            </button>
            <div className="flex justify-center">
              <div className=" w-full h-full mx-[10%] my-[10%]">
                <div className="flex min-h-[500px] min-[444px]:min-h-[600px] min-[555px]:min-h-[700px] sm:min-h-[800px] md:min-h-[900px]">
                  <div className="1 bg-neutral-400 w-[40%]">
                    <div className="">
                      <img
                        src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                        className="w-[70%] h-full object-cover rounded-full mx-auto my-[10%]"
                      ></img>
                    </div>
                    <div className="px-[5%]">
                      <div className="">
                        <h1 className="text-[12px] flex  font-semibold underline min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                          Personal Details:
                        </h1>
                        <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                          <div className=" pt-[5%]">1985-11-01</div>
                          <div className=" pt-[2%]">+91 9392878988</div>
                          <div className=" pt-[2%]">sakshi@gmail.com</div>
                        </div>
                      </div>

                      <div className="technical-skills">
                        <h1 className="text-[12px] flex  font-semibold underline my-[5%] min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                          Technical Skills
                        </h1>
                        <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="2 bg-neutral-200 w-[60%]">
                    <div className="my-[10%]">
                      <div className="text-lg min-[444px]:text-[20px] min-[555px]:text-[22px] sm:text-[24px] md:text-[26px]">
                        <h1 className=" mx-[10%] my-[3%]">Sakshi</h1>
                        <h1 className=" mx-[10%]">Vuppalanchi</h1>
                      </div>
                      <h2 className="text-base min-[444px]:text-[18px] min-[555px]:text-[20px] sm:text-[22px] md:text-[24px] mx-[10%] mt-[3%]">
                        WEB DEVELOPER
                      </h2>
                    </div>
                    <div className="objective ml-[10%] mr-[5%]">
                      <h1 className="text-[12px] flex  font-semibold underline my-[5%] min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                        Objective
                      </h1>
                      <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                        Entry-level marketing professional, looking for a
                        full-time position where I can assist in creating
                        engaging social media content for viewers to learn about
                        a company's mission and products.
                      </div>
                    </div>

                    <div className="ml-[10%] mr-[5%]">
                      <h1 className="text-[12px] flex  font-semibold pt-[7%] underline min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                        Education:
                      </h1>
                      <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                        <div>
                          <div className=" font-medium">
                            University of pennysylvania in Computer Science
                          </div>
                          <div className="">(2015-04-10) to (2015-04-10)</div>
                          <div className="">
                            Master of science in computer science (7.5)
                          </div>
                        </div>
                        <div className="my-[5%]">
                          <div className=" font-medium">
                            University of pennysylvania in Computer Science
                          </div>
                          <div className="">(2015-04-10) to (2015-04-10)</div>
                          <div className="">
                            Master of science in computer science (7.5)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {open == "semiopen" && (
          <>
            <div className="h-screen lg:h-[300mm] relative w-[250%] xl:w-[50%] bg-white transition-all overflow-y-scroll ">
              <div className="xl:hidden" onClick={toggleResume}>
                Tog
              </div>
              <div className=" m-5 sm:m-10 md:mx-28 lg:mx-16">
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
                    <div className="flex lg:flex-col 2xl:flex-row gap-3">
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
                      <div className="flex lg:flex-col 2xl:flex-row gap-3">
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
            <div className="hidden xl:block h-[300mm]  w-[100%] bg-purple-300 overflow-scroll">
              hiiiiiiiiiiiiii
              {/* <div className="flex justify-center">
                <div className=" w-full h-full mx-[10%]">
                  <div className="flex">
                    <div className="1 bg-neutral-400 w-[40%]">
                      <div className="">
                        <img
                          src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                          className="w-[70%] h-full rounded-full mx-auto my-[10%]"
                        ></img>
                      </div>
                    </div>
                    <div className="2 bg-neutral-200 w-[60%]">
                      <h1 className="text-[2vw]">Sakshi</h1>
                      <h2>Vuppalanchi</h2>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="flex justify-center">
              <div className="  mx-[10%] my-[5%]">
                <div className="flex w-[210mm] h-[285mm]">
                  <div className="1 bg-neutral-400 w-[40%]">
                    <div className="">
                      <img
                        src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                        className="w-[70%] h-full object-cover rounded-full mx-auto my-[10%]"
                      ></img>
                    </div>
                    <div className="px-[5%]">
                      <div className="">
                        <h1 className="text-[12px] flex  font-semibold underline min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                          Personal Details:
                        </h1>
                        <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                          <div className=" pt-[5%]">1985-11-01</div>
                          <div className=" pt-[2%]">+91 9392878988</div>
                          <div className=" pt-[2%]">sakshi@gmail.com</div>
                        </div>
                      </div>

                      <div className="technical-skills">
                        <h1 className="text-[12px] flex  font-semibold underline my-[5%] min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                          Technical Skills
                        </h1>
                        <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                          <div className="py-[2%]">Java script</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="2 bg-neutral-200 w-[60%]">
                    <div className="my-[10%]">
                      <div className="text-lg min-[444px]:text-[20px] min-[555px]:text-[22px] sm:text-[24px] md:text-[26px]">
                        <h1 className=" mx-[10%] my-[3%]">Sakshi</h1>
                        <h1 className=" mx-[10%]">Vuppalanchi</h1>
                      </div>
                      <h2 className="text-base min-[444px]:text-[18px] min-[555px]:text-[20px] sm:text-[22px] md:text-[24px] mx-[10%] mt-[3%]">
                        WEB DEVELOPER
                      </h2>
                    </div>
                    <div className="objective ml-[10%] mr-[5%]">
                      <h1 className="text-[12px] flex  font-semibold underline my-[5%] min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                        Objective
                      </h1>
                      <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                        Entry-level marketing professional, looking for a
                        full-time position where I can assist in creating
                        engaging social media content for viewers to learn about
                        a company's mission and products.
                      </div>
                    </div>

                    <div className="ml-[10%] mr-[5%]">
                      <h1 className="text-[12px] flex  font-semibold pt-[7%] underline min-[444px]:text-[14px] min-[555px]:text-[16px] sm:text-[18px] md:text-[20px]">
                        Education:
                      </h1>
                      <div className="text-[8px] min-[444px]:text-[10px] min-[555px]:text-[12px] sm:text-[14px] md:text-[16px]">
                        <div>
                          <div className=" font-medium">
                            University of pennysylvania in Computer Science
                          </div>
                          <div className="">(2015-04-10) to (2015-04-10)</div>
                          <div className="">
                            Master of science in computer science (7.5)
                          </div>
                        </div>
                        <div className="my-[5%]">
                          <div className=" font-medium">
                            University of pennysylvania in Computer Science
                          </div>
                          <div className="">(2015-04-10) to (2015-04-10)</div>
                          <div className="">
                            Master of science in computer science (7.5)
                          </div>
                        </div>
                      </div>
                    </div>
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
