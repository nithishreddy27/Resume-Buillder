import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Casual() {
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

  function updateForm(event) {
    const n = event.target.name;
    const i = event.target.id;
    setdetails({ ...details, [n]: { ...details[n], [i]: event.target.value } });
  }

  async function socialChange() {
    const sn = {
      network: document.getElementById("network").value,
      username: document.getElementById("username").value,
      url: document.getElementById("url").value,
    };
    const arr = [];
    details.social.map((item) => {
      arr.push(item);
    });
    arr.push(sn);
    setdetails({ ...details, social: arr });
  }

  function deleteSocialNetwork(index) {
    // console.log("network",network)
    const arr = [];
    details.social.map((item, i) => {
      if (i != index) {
        arr.push(item);
      }
    });
    setdetails({ ...details, social: arr });
  }

  function addInternship() {
    const intern = {
      company: document.getElementById("company").value,
      designation: document.getElementById("position").value,
      // website:document.getElementById("website").value,
      from: document.getElementById("startdate").value,
      to: document.getElementById("enddate").value,
      summary: {
        data: document.getElementById("summary").value,
      },
    };
    const arr = [];
    details.work.map((item) => {
      arr.push(item);
    });
    // console.log('intern',intern)
    arr.push(intern);
    setdetails({ ...details, work: arr });
  }

  function deleteInternship(index) {
    console.log("network", index);
    const arr = [];
    details.work.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, work: arr });
  }

  function addEducation() {
    const education = {
      typeOfDegree: document.getElementById("TypeOfDegree").value,
      institution: document.getElementById("school").value,
      fieldOfStudy: document.getElementById("EducationFieldOfStudy").value,
      startDate: document.getElementById("Educationstartdate").value,
      endDate: document.getElementById("Educationenddate").value,
      gpa: document.getElementById("grade").value,
      summary: {
        data: document.getElementById("summary").value,
      },
    };
    const arr = [];
    details.education.map((item) => {
      arr.push(item);
    });
    // console.log('intern',education)
    arr.push(education);
    setdetails({ ...details, education: arr });
  }

  function deleteEducation(index) {
    console.log("network", index);
    const arr = [];
    details.education.map((item, i) => {
      if (i != index) arr.push(item);
    });

    setdetails({ ...details, education: arr });
  }

  function addAward() {
    const award = {
      name: document.getElementById("awardTitle").value,
      awarder: document.getElementById("awarder").value,
      date: document.getElementById("awardDate").value,
      summary: {
        data: document.getElementById("awardSummary").value,
      },
    };
    console.log("award", award);
    const arr = [];
    details.awards.map((item) => {
      arr.push(item);
    });
    // console.log('award',award)
    arr.push(award);
    setdetails({ ...details, awards: arr });
  }

  function deleteAward(index) {
    console.log("network", index);
    const arr = [];
    details.awards.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, awards: arr });
  }

  function addCertificate() {
    const certificate = {
      certificateTitle: document.getElementById("certificateTitle").value,
      issuer: document.getElementById("issuer").value,
      certificateDate: document.getElementById("certificateDate").value,
      summary: {
        data: document.getElementById("certificateSummary").value,
      },
    };
    console.log("award", certificate);
    const arr = [];
    details.certifications.map((item) => {
      arr.push(item);
    });
    // console.log('award',award)
    arr.push(certificate);
    setdetails({ ...details, certifications: arr });
  }

  function deleteCertificate(index) {
    console.log("network", index);
    const arr = [];
    details.certifications.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, certifications: arr });
  }

  function addSkill() {
    const skill = {
      name: document.getElementById("skillTitle").value,
      level: document.getElementById("skillLevel").value,
    };
    const arr = [];
    details.skills.map((item) => {
      arr.push(item);
    });
    // console.log('skill',skill)
    arr.push(skill);
    setdetails({ ...details, skills: arr });
  }

  function deleteSkill(index) {
    console.log("network", index);
    const arr = [];
    details.skills.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, skills: arr });
  }

  function addLanguage() {
    const language = {
      name: document.getElementById("languageTitle").value,
      level: document.getElementById("languageLevel").value,
    };
    const arr = [];
    details.languages.map((item) => {
      arr.push(item);
    });
    // console.log('skill',language)
    arr.push(language);
    setdetails({ ...details, languages: arr });
  }

  function deleteLanguage(index) {
    console.log("network", index);
    const arr = [];
    details.languages.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, languages: arr });
  }

  function addHobby() {
    const hobby = {
      name: document.getElementById("hobbyTitle").value,
    };
    const arr = [];
    details.hobbies.map((item) => {
      arr.push(item);
    });
    // console.log('hobby',hobby)
    arr.push(hobby);
    setdetails({ ...details, hobbies: arr });
  }

  function deleteHobby(index) {
    console.log("network", index);
    const arr = [];
    details.hobbies.map((item, i) => {
      if (i != index) arr.push(item);
    });
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details, hobbies: arr });
  }

  function addProjects() {}
  function deleteProjects(index) {}

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
                  <div className="grid grid-cols-3">
                    <div>
                      <div className="col-span-1 bg-gray-300 h-[285mm] w-[95%]">
                        <div>
                          <img
                            className="rounded-full w-[119px] ml-10 pt-3"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                            alt="ProfilePhoto"
                          />
                        </div>

                        <div>
                          <h1 className="font-medium px-8 py-6 text-orange-800 pt-4">
                            Details
                          </h1>
                          <h2 className=" font-medium px-8  text-black">
                            Phone
                          </h2>
                          <h6 className=" px-8 ">{details.personal.phone}</h6>
                          <h2 className=" font-medium px-8  text-black">
                            Email
                          </h2>
                          <h6 className=" px-8 ">{details.personal.email}</h6>
                          <h2 className=" font-medium px-8  text-black">
                            Date Of Birth
                          </h2>
                          <h6 className=" px-8 ">{details.personal.dob}</h6>
                        </div>
                        {details.skills.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-6 text-orange-800 pt-10">
                              Skills
                            </h1>
                            {details.skills.map((item) => (
                              <div key={item.name}>
                                <h1 className="font-medium ml-8">
                                  {item.name}
                                </h1>
                                <h2 className="ml-8">{item.level}</h2>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.social.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-6 text-orange-800 pt-10">
                              Social Network
                            </h1>
                            {details.social.map((item) => (
                              <div
                                className="ml-8 my-4 flex"
                                key={item.network}
                              >
                                <img
                                  src={
                                    "https://www." +
                                    item.network +
                                    ".com/favicon.ico"
                                  }
                                  alt=""
                                  className="w-5 h-5"
                                />
                                <Link href={item.url}>
                                  <h1 className="ml-4">{item.username}</h1>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 pt-10">
                              Hobbies
                            </h1>
                            {details.hobbies.map((item) => (
                              <div key={item.name}>
                                <h1 className="px-8">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.languages.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 pt-10">
                              Languages
                            </h1>
                            {details.languages.map((item) => (
                              <div key={item.name}>
                                <h1 className="px-8">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2 ">
                      <h1 className="mt-12 text-2xl font-bold ">
                        {details.personal.firstName} {details.personal.lastName}
                      </h1>
                      <h2 className="font-nomal mt-1 ">
                        {details.personal.role}
                      </h2>
                      {details.personal.objective.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-20">
                            Profile
                          </h1>
                          <p>{details.personal.objective}</p>
                        </div>
                      )}
                      {details.work.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4">
                            Employement History
                          </h1>
                          {details.work.map((item) => (
                            <div key={item.company}>
                              <h1 className="font-medium ">{item.company}</h1>
                              <h2 className="font-extralight text-xs">
                                {item.from} - {item.to}
                              </h2>
                              <li className="ml-8 list-disc">
                                {item.designation}
                              </li>
                              <li className="ml-8 list-disc">{item.website}</li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.education.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4">
                            Education
                          </h1>
                          {details.education.map((item) => (
                            <div key={item.institution}>
                              <h1 className="font-medium">
                                {item.institution}
                              </h1>
                              <h6 className="text-xs">
                                {item.startDate} - {item.endDate}
                              </h6>
                              <li className="px-8">{item.fieldOfStudy}</li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.projects.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4">
                            Projects
                          </h1>
                          {details.projects.map((item) => (
                            <div key={item.name}>
                              <h2 className="font-medium">{item.name}</h2>
                              <h6 className="text-xs">
                                {item.from} - {item.to}
                              </h6>
                              <li className="text-sm px-8">{item.website}</li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.certifications.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4">
                            certifications
                          </h1>
                          {details.certifications.map((item) => (
                            <div key={item.title}>
                              <h2 className="font-medium">{item.name}</h2>
                              <h6 className="text-xs">
                                {item.from} - {item.to}
                              </h6>
                              <li className="text-sm px-8">{item.website}</li>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  ;
                </div>
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar
                deleteHobby={deleteHobby}
                addHobby={addHobby}
                updateForm={updateForm}
                deleteAward={deleteAward}
                addAward={addAward}
                deleteCertificate={deleteCertificate}
                addCertificate={addCertificate}
                addSkill={addSkill}
                addInternship={addInternship}
                addLanguage={addLanguage}
                deleteLanguage={deleteLanguage}
                deleteSkill={deleteSkill}
                deleteInternship={deleteInternship}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
                deleteSocialNetwork={deleteSocialNetwork}
                socialChange={socialChange}
                deleteProjects={deleteProjects}
                addProjects={deleteProjects}
              />
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
                    <div className="grid grid-cols-3">
                      <div>
                        <div className="col-span-1 bg-gray-300 h-[285mm] w-[95%]">
                          <div>
                            <img
                              className="rounded-full w-[119px] ml-10 pt-3"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                              alt="ProfilePhoto"
                            />
                          </div>

                          <div>
                            <h1 className="font-medium px-8 py-6 text-orange-800 pt-4">
                              Details
                            </h1>
                            <h2 className=" font-medium px-8  text-black">
                              Phone
                            </h2>
                            <h6 className=" px-8 ">{details.personal.phone}</h6>
                            <h2 className=" font-medium px-8  text-black">
                              Email
                            </h2>
                            <h6 className=" px-8 ">{details.personal.email}</h6>
                            <h2 className=" font-medium px-8  text-black">
                              Date Of Birth
                            </h2>
                            <h6 className=" px-8 ">{details.personal.dob}</h6>
                          </div>
                          {details.skills.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-6 text-orange-800 pt-10">
                                Skills
                              </h1>
                              {details.skills.map((item) => (
                                <div key={item.name}>
                                  <h1 className="font-medium ml-8">
                                    {item.name}
                                  </h1>
                                  <h2 className="ml-8">{item.level}</h2>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.social.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-6 text-orange-800 pt-10">
                                Social Network
                              </h1>
                              {details.social.map((item) => (
                                <div
                                  className="ml-8 my-4 flex"
                                  key={item.network}
                                >
                                  <img
                                    src={
                                      "https://www." +
                                      item.network +
                                      ".com/favicon.ico"
                                    }
                                    alt=""
                                    className="w-5 h-5"
                                  />
                                  <Link href={item.url}>
                                    <h1 className="ml-4">{item.username}</h1>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.hobbies.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800 pt-10">
                                Hobbies
                              </h1>
                              {details.hobbies.map((item) => (
                                <div key={item.name}>
                                  <h1 className="px-8">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.languages.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800 pt-10">
                                Languages
                              </h1>
                              {details.languages.map((item) => (
                                <div key={item.name}>
                                  <h1 className="px-8">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2 ">
                        <h1 className="mt-12 text-2xl font-bold ">
                          {details.personal.firstName}{" "}
                          {details.personal.lastName}
                        </h1>
                        <h2 className="font-nomal mt-1 ">
                          {details.personal.role}
                        </h2>
                        {details.personal.objective.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-20">
                              Profile
                            </h1>
                            <p>{details.personal.objective}</p>
                          </div>
                        )}
                        {details.work.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              Employement History
                            </h1>
                            {details.work.map((item) => (
                              <div key={item.company}>
                                <h1 className="font-medium ">{item.company}</h1>
                                <h2 className="font-extralight text-xs">
                                  {item.from} - {item.to}
                                </h2>
                                <li className="ml-8 list-disc">
                                  {item.designation}
                                </li>
                                <li className="ml-8 list-disc">
                                  {item.website}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.education.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              Education
                            </h1>
                            {details.education.map((item) => (
                              <div key={item.institution}>
                                <h1 className="font-medium">
                                  {item.institution}
                                </h1>
                                <h6 className="text-xs">
                                  {item.startDate} - {item.endDate}
                                </h6>
                                <li className="px-8">{item.fieldOfStudy}</li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.projects.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              Projects
                            </h1>
                            {details.projects.map((item) => (
                              <div key={item.name}>
                                <h2 className="font-medium">{item.name}</h2>
                                <h6 className="text-xs">
                                  {item.from} - {item.to}
                                </h6>
                                <li className="text-sm px-8">{item.website}</li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              certifications
                            </h1>
                            {details.certifications.map((item) => (
                              <div key={item.title}>
                                <h2 className="font-medium">{item.name}</h2>
                                <h6 className="text-xs">
                                  {item.from} - {item.to}
                                </h6>
                                <li className="text-sm px-8">{item.website}</li>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    ;
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
