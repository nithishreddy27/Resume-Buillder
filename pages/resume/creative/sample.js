import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Tokyo() {
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
                <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row">
                  <div>
                    <div className="flex bg-red-700">
                      <img
                        className="rounded-full p-10 w-48"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                        alt="ProfilePhoto"
                      />
                      <div className="text-white m-1 py-12">
                        <h1 className="text-3xl text-white font-semibold m-1">
                          {details.personal.firstName}{" "}
                          {details.personal.lastName}
                        </h1>
                        <h1 className="text-sm m-1">{details.personal.role}</h1>
                      </div>
                    </div>
                    <div className="flex justify-around p-3 border-b-2">
                      <div className="font-semibold">
                        {details.personal.email}
                      </div>
                      <div className="font-semibold">
                        {details.personal.phone}
                      </div>
                      <div className="font-semibold">
                        {details.personal.dob}
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 h-[230mm] border-r-2 p-8">
                        {details.personal.objective.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold">Profile</h1>
                            <p className="text-sm font-semibold ml-3">
                              {details.personal.objective}
                            </p>
                          </div>
                        )}
                        {details.work.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1">
                              Employment History
                            </h1>
                            {details.work.map((item) => (
                              <div className="my-1 ml-3" key={item.company}>
                                <span className="text-sm font-bold">
                                  ● {item.company}
                                  {" - "}
                                  <span className="text-sm font-semibold mt-10">
                                    {item.designation}
                                  </span>
                                </span>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.from} to {item.to})
                                </p>
                                <p class="text-sm font-semibold">
                                  {item.summary.data}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.education.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1">
                              Education
                            </h1>
                            {details.education.map((item) => (
                              <div className="my-1 ml-3" key={item.institution}>
                                <span className="text-sm font-bold">
                                  ● {item.institution}
                                  {" - "}
                                  <span className="text-sm font-semibold mt-10">
                                    {item.fieldOfStudy}
                                  </span>
                                </span>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.startDate} to {item.endDate})
                                </p>
                                <p class="text-sm font-semibold">
                                  {item.summary.data}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.projects.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1">
                              Projects
                            </h1>
                            {details.projects.map((item) => (
                              <div className="my-1 ml-3" key={item.name}>
                                <h1 className="text-sm font-bold">
                                  ● {item.name}
                                </h1>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.from} to {item.to})
                                </p>
                                <a
                                  href="{`${item.website}`}"
                                  class="text-sm font-semibold"
                                >
                                  {item.website}
                                </a>
                                <p class="text-sm font-semibold">
                                  {item.summary.data}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-4 mb-1">
                              Certifications
                            </h1>
                            {details.certifications.map((item) => (
                              <div className="my-1 ml-3" key={item.title}>
                                <span className="text-sm font-semibold">
                                  ● {item.title}
                                  {" - "}
                                  <span className="text-sm font-semibold mt-10">
                                    {item.issuer}
                                  </span>
                                </span>
                                <p className="text-xs py-1 font-semibold text-gray-500">
                                  ({item.date})
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        {details.skills.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1">
                              Skills
                            </h1>
                            {details.skills.map((item) => (
                              <div className="ml-2" key={item.name}>
                                <h1 className="text-sm font-semibold m-1">
                                  ● {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.social.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1">
                              Social
                            </h1>
                            {details.social.map((item) => (
                              <div className="ml-2" key={item.network}>
                                <a
                                  href="{`${item.url}`}"
                                  className="text-sm font-semibold m-1"
                                >
                                  ● {item.url}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1">
                              Awards
                            </h1>
                            <div className="ml-2">
                              {details.awards.map((item) => (
                                <div className="py-1" key={item.name}>
                                  <h1 className="text-sm font-bold relative m-1">
                                    ● {item.name}
                                  </h1>
                                  <p className="text-sm font-semibold m-1">
                                    {item.awarder}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {details.hobbies.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1">
                              Hobbies
                            </h1>
                            {details.hobbies.map((item) => (
                              <div className="ml-2" key={item.name}>
                                <h1 className="text-sm font-semibold relative m-1">
                                  ● {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.languages.length && (
                          <div>
                            <h1 className="text-lg font-bold mt-5 mb-1">
                              Languages
                            </h1>
                            {details.languages.map((item) => (
                              <div className="ml-2" key={item.name}>
                                <h1 className="text-sm font-semibold relative m-1">
                                  ● {item.name}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar />

              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex justify-center ">
                  {/* large resume */}

                  <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row">
                    <div>
                      <div className="flex bg-red-700">
                        <img
                          className="rounded-full p-10 w-48"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                          alt="ProfilePhoto"
                        />
                        <div className="text-white m-1 py-12">
                          <h1 className="text-3xl text-white font-semibold m-1">
                            {details.personal.firstName}{" "}
                            {details.personal.lastName}
                          </h1>
                          <h1 className="text-sm m-1">
                            {details.personal.role}
                          </h1>
                        </div>
                      </div>
                      <div className="flex justify-around p-3 border-b-2">
                        <div className="font-semibold">
                          {details.personal.email}
                        </div>
                        <div className="font-semibold">
                          {details.personal.phone}
                        </div>
                        <div className="font-semibold">
                          {details.personal.dob}
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="col-span-2 h-[230mm] border-r-2 p-8">
                          {details.personal.objective.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold">Profile</h1>
                              <p className="text-sm font-semibold ml-3">
                                {details.personal.objective}
                              </p>
                            </div>
                          )}
                          {details.work.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1">
                                Employment History
                              </h1>
                              {details.work.map((item) => (
                                <div className="my-1 ml-3" key={item.company}>
                                  <span className="text-sm font-bold">
                                    ● {item.company}
                                    {" - "}
                                    <span className="text-sm font-semibold mt-10">
                                      {item.designation}
                                    </span>
                                  </span>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.from} to {item.to})
                                  </p>
                                  <p class="text-sm font-semibold">
                                    {item.summary.data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.education.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1">
                                Education
                              </h1>
                              {details.education.map((item) => (
                                <div
                                  className="my-1 ml-3"
                                  key={item.institution}
                                >
                                  <span className="text-sm font-bold">
                                    ● {item.institution}
                                    {" - "}
                                    <span className="text-sm font-semibold mt-10">
                                      {item.fieldOfStudy}
                                    </span>
                                  </span>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.startDate} to {item.endDate})
                                  </p>
                                  <p class="text-sm font-semibold">
                                    {item.summary.data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.projects.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1">
                                Projects
                              </h1>
                              {details.projects.map((item) => (
                                <div className="my-1 ml-3" key={item.name}>
                                  <h1 className="text-sm font-bold">
                                    ● {item.name}
                                  </h1>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.from} to {item.to})
                                  </p>
                                  <a
                                    href="{`${item.website}`}"
                                    class="text-sm font-semibold"
                                  >
                                    {item.website}
                                  </a>
                                  <p class="text-sm font-semibold">
                                    {item.summary.data}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.certifications.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-4 mb-1">
                                Certifications
                              </h1>
                              {details.certifications.map((item) => (
                                <div className="my-1 ml-3" key={item.title}>
                                  <span className="text-sm font-semibold">
                                    ● {item.title}
                                    {" - "}
                                    <span className="text-sm font-semibold mt-10">
                                      {item.issuer}
                                    </span>
                                  </span>
                                  <p className="text-xs py-1 font-semibold text-gray-500">
                                    ({item.date})
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          {details.skills.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1">
                                Skills
                              </h1>
                              {details.skills.map((item) => (
                                <div className="ml-2" key={item.name}>
                                  <h1 className="text-sm font-semibold m-1">
                                    ● {item.name}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.social.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1">
                                Social
                              </h1>
                              {details.social.map((item) => (
                                <div className="ml-2" key={item.network}>
                                  <a
                                    href="{`${item.url}`}"
                                    className="text-sm font-semibold m-1"
                                  >
                                    ● {item.url}
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.awards.length != 0 && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1">
                                Awards
                              </h1>
                              <div className="ml-2">
                                {details.awards.map((item) => (
                                  <div className="py-1" key={item.name}>
                                    <h1 className="text-sm font-bold relative m-1">
                                      ● {item.name}
                                    </h1>
                                    <p className="text-sm font-semibold m-1">
                                      {item.awarder}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {details.hobbies.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1">
                                Hobbies
                              </h1>
                              {details.hobbies.map((item) => (
                                <div className="ml-2" key={item.name}>
                                  <h1 className="text-sm font-semibold relative m-1">
                                    ● {item.name}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.languages.length && (
                            <div>
                              <h1 className="text-lg font-bold mt-5 mb-1">
                                Languages
                              </h1>
                              {details.languages.map((item) => (
                                <div className="ml-2" key={item.name}>
                                  <h1 className="text-sm font-semibold relative m-1">
                                    ● {item.name}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
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
