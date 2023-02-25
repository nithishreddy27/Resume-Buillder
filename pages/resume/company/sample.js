import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Assymetric() {
  const user = useUser();
  const { details, setdetails } = useContext(ResumeContext);

  useEffect(() => {
    if (user) {
      setdetails({
        ...details,
        personal: {
          ...details.personal,
          email: user.email,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
        },
      });
    }
  }, [user]);

  const [open, setopen] = useState("semiopen");

  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <button
                className="h-10 w-10 mx-auto block lg:hidden"
                onClick={toggleResume}
              >
                DETAILS
              </button>
              <div className="flex justify-center ">
                {/* Small Resume */}
               
                <div className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-300px] h-[297mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row`}>
      <div className="  bg-white w-[205mm]">
        <div className="flex m-2 ">
          <div className="m-2 ">
            <img
              className="w-[35mm] h-[30mm] pb-2"
              src="https://randomuser.me/api/portraits/women/71.jpg"
            ></img>
            <span className="  text-xl  bg-white   rounded-sm  text-black tracking-wide  font-semibold ">
              {details.personal.role}
            </span>
            
            {details.hobbies.length != 0 && (
            <div className="text-sm">
              <p className="text-m font-medium ">HOBBIES</p>
              {details.hobbies.map((item) => (
                <div key={item.name}>
                  <p>{item.name}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            )}

           {details.skills.length != 0 && (
            <div className="text-sm">
              <p className="text-m font-medium ">SKILLS</p>
              {details.skills.map((item) => (
                <div key={item.name}>
                  <span className="text-sm">
                    {item.name} - {item.level}
                  </span>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
           )}
          </div>
          <div className=" m-7 ">
            <p className="font-bold text-6xl text p-3 pl-2   pb-1 font-sans tracking-wider text-left">
              {details.personal.firstName} {details.personal.lastName}
            </p>
            <div className=" bg-gray-200 rounded-xl m-3 ml-[10%]">
              
            {details.personal.objective.length != 0 && (
              <>
              <p className=" text-black font-bold text-xl p-2 pt-2 pl-4 tracking-wid mt-5 ">
                PROFILE
              </p>          
              <p className="text-sm text-black p-3 pl-2 pt-2">
                {details.personal.objective}
              </p>
              </>
            )}
            </div>
          </div>
        </div>
        <hr className="border-1"></hr>
        <div className="flex space-x-4 m-4">
          <div flex-col>
          {details.education.length != 0 && (
            <div className="b-[50%] rounded-md  p-2">
              <p className="font-bold  m-2 ">EDUCATION</p>
              {details.education.map((item) => (
                <div key={item.institution} className="text-sm p-1">
                  <p className="font-semibold">
                    {item.institution} [{item.startDate} - {item.endDate}]
                  </p>
                  <p>{item.fieldOfStudy}</p>
                  <p>{item.typeOfDegree}</p>
                  <p>{item.gpa}</p>
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
              <div className="pb-3 pt-2">
                <p className="text-black font-bold tracking-wider  p-1 px-2 pt-2 ">
                  WORK
                </p>
                {details.work.map((item) => (
                  <div key={item.company} className="m-2">
                    <Link href={item.website}>
                      <p className=" font-semibold text-base tracking-wider">
                        {item.company}
                      </p>
                    </Link>
                    <p>
                      [ {item.from}] - [{item.to}]
                    </p>
                    <p>{item.designation}</p>

                    <p>{item.summary.enabled}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                  AWARDS:
                </p>
                {details.awards.map((item) => (
                  <div key={item.name} className="text-sm pt-4 ml-3">
                    <li className="font-semibold">
                      {item.name} - [{item.date}]
                    </li>
                    <p>{item.awarder}</p>
                    {/* <p>{item.summary.data}</p> */}
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>
          <div className="flex-col ">
          {details.projects.length != 0 && (
            <div className=" pt-1 pb-3 bg-gray-200 rounded-xl p-2 mt-5 mr-5">
              <p className="text-black font-bold tracking-wider  p-2 px-2 pt-3   ">
                PROJECTS
              </p>

              {details.projects.map((item) => (
                <div key={item.name} className=" text-black ">
                  <Link href={item.website}>
                    <p className="font-bold  tracking-wider">{item.name}</p>
                  </Link>
                  <p className="">
                    {item.from}- {item.to}
                  </p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                  <p className="p-2"> </p>
                </div>
              ))}
            </div>
          )}

           {details.certifications.length != 0 && (
            <div className=" pt-1 pb-3 bg-gray-200 rounded-xl mt-5 mr-4">
              <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-2 ">
                CERTIFICATION
              </p>

              {details.certifications.map((item) => (
                <div key={item.title} className="pt-4 text-black mx-3 ">
                  <p className="font-semibold">{item.title} </p>
                  <p>[{item.date}]</p>
                  <p></p>
                  <p>{item.issuer}</p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
           )}
            <div className="flex mt-4 m-4 bg-gray-200 rounded-xl">
              {details.social.map((item) => (
                <div key={item.network} className="mx-3 pb-4  mt-3 ">
                  <span className="">
                    <Link href={item.url}>
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        className="w-5 "
                      />
                    </Link>
                  </span>
                </div>
              ))}
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
              <SideBar/>
                
              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex justify-center ">


                  
                  {/* large resume */}

                  
                  <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row align-middle justify-center ">
      <div className="  bg-white w-[205mm]">
        <div className="flex m-2 ">
          <div className="m-2 ">
            <img
              className="w-[35mm] h-[30mm] pb-2"
              src="https://randomuser.me/api/portraits/women/71.jpg"
            ></img>
            <span className="  text-xl  bg-white   rounded-sm  text-black tracking-wide  font-semibold ">
              {details.personal.role}
            </span>
            
            {details.hobbies.length != 0 && (
            <div className="text-sm">
              <p className="text-m font-medium ">HOBBIES</p>
              {details.hobbies.map((item) => (
                <div key={item.name}>
                  <p>{item.name}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            )}

           {details.skills.length != 0 && (
            <div className="text-sm">
              <p className="text-m font-medium ">SKILLS</p>
              {details.skills.map((item) => (
                <div key={item.name}>
                  <span className="text-sm">
                    {item.name} - {item.level}
                  </span>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
           )}
          </div>
          <div className=" m-7 ">
            <p className="font-bold text-6xl text p-3 pl-2   pb-1 font-sans tracking-wider text-left">
              {details.personal.firstName} {details.personal.lastName}
            </p>
            <div className=" bg-gray-200 rounded-xl m-3 ml-[10%]">
              
            {details.personal.objective.length != 0 && (
              <>
              <p className=" text-black font-bold text-xl p-2 pt-2 pl-4 tracking-wid mt-5 ">
                PROFILE
              </p>          
              <p className="text-sm text-black p-3 pl-2 pt-2">
                {details.personal.objective}
              </p>
              </>
            )}
            </div>
          </div>
        </div>
        <hr className="border-1"></hr>
        <div className="flex space-x-4 m-4">
          <div flex-col>
          {details.education.length != 0 && (
            <div className="b-[50%] rounded-md  p-2">
              <p className="font-bold  m-2 ">EDUCATION</p>
              {details.education.map((item) => (
                <div key={item.institution} className="text-sm p-1">
                  <p className="font-semibold">
                    {item.institution} [{item.startDate} - {item.endDate}]
                  </p>
                  <p>{item.fieldOfStudy}</p>
                  <p>{item.typeOfDegree}</p>
                  <p>{item.gpa}</p>
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
              <div className="pb-3 pt-2">
                <p className="text-black font-bold tracking-wider  p-1 px-2 pt-2 ">
                  WORK
                </p>
                {details.work.map((item) => (
                  <div key={item.company} className="m-2">
                    <Link href={item.website}>
                      <p className=" font-semibold text-base tracking-wider">
                        {item.company}
                      </p>
                    </Link>
                    <p>
                      [ {item.from}] - [{item.to}]
                    </p>
                    <p>{item.designation}</p>

                    <p>{item.summary.enabled}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                  AWARDS:
                </p>
                {details.awards.map((item) => (
                  <div key={item.name} className="text-sm pt-4 ml-3">
                    <li className="font-semibold">
                      {item.name} - [{item.date}]
                    </li>
                    <p>{item.awarder}</p>
                    {/* <p>{item.summary.data}</p> */}
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>
          <div className="flex-col ">
          {details.projects.length != 0 && (
            <div className=" pt-1 pb-3 bg-gray-200 rounded-xl p-2 mt-5 mr-5">
              <p className="text-black font-bold tracking-wider  p-2 px-2 pt-3   ">
                PROJECTS
              </p>

              {details.projects.map((item) => (
                <div key={item.name} className=" text-black ">
                  <Link href={item.website}>
                    <p className="font-bold  tracking-wider">{item.name}</p>
                  </Link>
                  <p className="">
                    {item.from}- {item.to}
                  </p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                  <p className="p-2"> </p>
                </div>
              ))}
            </div>
          )}

           {details.certifications.length != 0 && (
            <div className=" pt-1 pb-3 bg-gray-200 rounded-xl mt-5 mr-4">
              <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-2 ">
                CERTIFICATION
              </p>

              {details.certifications.map((item) => (
                <div key={item.title} className="pt-4 text-black mx-3 ">
                  <p className="font-semibold">{item.title} </p>
                  <p>[{item.date}]</p>
                  <p></p>
                  <p>{item.issuer}</p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
           )}
            <div className="flex mt-4 m-4 bg-gray-200 rounded-xl">
              {details.social.map((item) => (
                <div key={item.network} className="mx-3 pb-4  mt-3 ">
                  <span className="">
                    <Link href={item.url}>
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        className="w-5 "
                      />
                    </Link>
                  </span>
                </div>
              ))}
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
      )}
    </>
  );
}