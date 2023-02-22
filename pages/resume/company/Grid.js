import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Dynamic() {
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

                  <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row  ">
  <div className="bg-gray-300  overflow-auto drop-shadow-2xl  min-w-[210mm]">
    <div className="m-4 mt-10 mb-5  ">
      <div className="flex ml-4 mr-4 space-x-3 ">
        <div className="w-[37%] bg-white rounded-md p-3 ">
          {/* personal details */}
          <div>
            <div>
              <img
                className="w-[85%] h-[30] p-1 pl-7 ml-4  pb-2 bg- rounded-lg"
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>
              <p className="font-semibold text-2xl text pl-2 pb-1 font-sans tracking-wide text-center">
                {details.personal.firstName} {details.personal.lastName}
              </p>
              {/* <p className="text-sm">{resume.personal.dob}</p> */}

              {/* <p className="text-sm">{resume.personal.email}</p> */}
              <div>
                <div className=" pb-2 flex bg-gray-200 rounded-full">
                  {details.social.map((item) => (
                    <div key={item.network} className="mx-3 mt-2  justify-around">
                      <span>
                        <Link href={item.url}>
                          {/* <img
                            src={
                              "https://www." +
                              item.network +
                              ".com/favicon.ico"
                            }
                            className="w-5 "
                          /> */}
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm pt-2 from-neutral-700">
                  {details.personal.phone}
                </p>
              
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

              {details.languages.length != 0 && (
                <div className="text-sm">
                  <p className="text-m font-semibold">LANGUAGES</p>
                  {details.languages.map((item) => (
                    <div key={item.name}>
                      <p>
                        {item.name} : {item.fluency}
                      </p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}

              </div>
            </div>
          </div>
        </div>
        {/* objective */}

        <div className="bg-white w-[70%]  rounded-md p-3 ">
          <p className="font-semibold text-3xl p-2 pb-3 bg-gray-200 rounded-full text-center">
            {details.personal.role}
          </p>

          {details.personal.objective.length != 0 && (
              <>
            <span className="font-bold  m-2 rounded tracking-wide">
            PROFILE
            </span>
            <br></br>
            <div>
             <p className="text-sm">{details.personal.objective}</p>
            </div>
            </>
          )}
            <hr className="m-2"></hr>

            {details.awards.length != 0 && (
            <div>
            <p className="font-bold  m-2 rounded ">AWARDS</p>
            {details.awards.map((item) => (
              <div key={item.name} className="text-sm p-1">
                <p className="font-semibold">
                  {item.name} - [{item.date}]
                </p>
                <p>{item.awarder}</p>

                {/* <p>{item.summary.data}</p> */}
                <p>{item.summary.enabled}</p>
                <p>{item.enabled}</p>
              </div>
            ))}
          </div>
            )}
        </div>
      </div>
    </div>

    
    <div className="flex space-x-3 m-4 ">
    {details.education.length != 0 && (
      <div className="b-[60%] rounded-md ml-4 mr-1 bg-white p-2">
        <p className="font-bold  m-2 tracking-wide ">EDUCATION</p>
        {details.education.map((item) => (
          <div key={item.institution} className="text-sm p-1">
            <p className="font-semibold">
              {item.institution} [{item.startDate} - {item.endDate}]
            </p>
            <p>{item.fieldOfStudy}</p>
            <p>{item.typeOfDegree}</p>
            <p>{item.gpa}</p>

            {/* <p>{item.summary.data}</p> */}
            <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
      )}

      {details.work.length != 0 && (
      <div className="bg-white w-[47%] rounded-md p-3 pr-1 ">
        <p className="font-bold tracking-wide  ">WORK</p>
        <p className="p-2"></p>
        {details.work.map((item) => (
          <div key={item.company}>
            <Link href={item.website}>
              <p className="text-blue-400">{item.company} </p>
            </Link>
            <p>
              {" "}
              [ {item.from}] - [{item.to}]
            </p>
            <p>{item.designation}</p>
            {/* <p>{item.summary.data}</p> */}
            <p>{item.summary.enabled}</p>
          </div>
        ))}
      </div>
      )}
    </div>
   <div className="flex space-x-3 m-4 ">
   {/* <div className="bg-white w-[40%] rounded-md ml-4 p-2">
      <p className="font-bold tracking-wide m-2">PROJECTS</p>
      {details.projects.map((item) => (
      <div key className="p-1">
          <Link href={item.website}>
          <p className="text-black font-bold">{item.name}</p>
          </Link>
          <p>
          [{item.from}]- [{item.to}]
          </p> */}
            {/* <p>{item.summary.data}</p> */}
            {/* <p>{item.summary.enabled}</p>
            <p>{item.enabled}</p>
          </div>
        ))}
      </div> */}

      {details.certifications.length != 0 && (
      <div className="bg-white w-[54%] rounded-md ml-5 p-2">
        <p className="font-bold  m-2 tracking-wide">CERTIFICATION</p>
        {details.certifications.map((item) => (
          <div key={item.title}>
            <p className="font-semibold">
              {item.title} {item.date}
            </p>
            <p></p>
            <p>{item.issuer}</p>
            {/* <p>{item.summary.data}</p> */}
           
            <p>{item.enabled}</p>
          </div>
        ))}
      </div>
      )}
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
