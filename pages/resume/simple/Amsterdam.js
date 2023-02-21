import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Amsterdam() {
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

  return (
    <>
      {details && user && (
        <div className="bg-gray-300 flex h-auto">
          <div className="w-[40%]">
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
            />
          </div>

          {/* Resume */}

          <div className="bg-slate-50 w-[210mm] h-[292mm] overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
            <div className="absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
              <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
                {details.personal.firstName} {details.personal.lastName}
              </h1>
              <h1 className="mt-3">{details.personal.role}</h1>

              <div className="mt-5 mb-4 flex  justify-center align-middle">
                {details.social.length != 0 && (
                  <>
                    {details.social.map((item) => (
                      <div className="mx-5 mt-1" key={item.network}>
                        <span className="">
                          <Link href={item.url}>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              className="w-5 grayscale-[40%] "
                            />
                          </Link>
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="w-[40%] bg-gray-200">
              <div className="mt-56 mx-10 flex flex-col">
                {details.education.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px]">EDUCATION</h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />

                    {details.education.map((item) => (
                      <div className="flex flex-col" key={item.institution}>
                        <span className="text-black font-semibold mt-4">
                          {item.institution}
                        </span>
                        <span className="mb-2 font-semibold">
                          ({item.startDate} {item.endDate})
                        </span>

                        <span className="font-semibold">
                          {item.typeOfDegree}
                        </span>
                        <span className="">{item.fieldOfStudy}</span>

                        <span className="mb-4">
                          <b>GPA - </b> {item.gpa}
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="mx-10 flex flex-col mt-4">
                {details.skills.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px]">SKILLS</h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {details.skills.map((item) => (
                      <>
                        <span className="font-semibold mt-1" key={item.name}>
                          {item.name}
                        </span>
                        <span className=" mt-1 mb-3">{item.level}</span>
                      </>
                    ))}
                  </>
                )}
              </div>
              <div className="mx-10 flex flex-col mt-4">
                {details.awards.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px]">AWARDS</h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {details.awards.map((item) => (
                      <>
                        <span className="font-semibold mt-1" key={item.name}>
                          {item.name}({item.date})
                        </span>
                        <span className="mb-3">{item.awarder}</span>
                      </>
                    ))}
                  </>
                )}
              </div>
              <div className="mx-10 flex flex-col mt-4">
                {details.hobbies.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px]">HOBBIES</h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {details.hobbies.map((item) => (
                      <>
                        <span className="font-semibold mt-1">{item.name}</span>
                      </>
                    ))}
                  </>
                )}
              </div>
              <div className="mx-10 flex flex-col mt-4">
                {details.languages.length != 0 && (
                  <>
                    <h4 className="font-bold tracking-[4px]">LANGUAGES</h4>
                    <hr className="w-[100%] h-1 bg-black my-2" />
                    {details.languages.map((item) => (
                      <>
                        <span className="font-semibold mt-1" key={item.name}>
                          {item.name}
                        </span>
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="w-[60%] mt-52 mx-10">
              {details.personal.objective.length != 0 && (
                <>
                  <h2 className="font-bold tracking-[4px]">OBJECTIVE</h2>
                  <hr className="w-[100%] h-1 bg-black my-1" />
                  <p className="my-4">{details.personal.objective}</p>
                </>
              )}

              {/* <h2 className="font-bold tracking-[4px]">PROJECTS</h2>
              <hr className="w-[100%] h-1 bg-black my-1" /> */}

              {/* {details.projects.map((item) => (
                <>
                  <div className="my-4">
                    <span className="text-black font-bold mt-3">
                      {item.name} ({" "}
                      <span className="text-black font-semibold">
                        {item.from} to {item.to}
                      </span>{" "}
                      ){" "}
                    </span>

                    <p className="ml-4 mt-2">{item.summary.data}</p>
                  </div>
                </>
              ))} */}

              {details.work.length != 0 && (
                <>
                  <h2 className="font-bold tracking-[4px]">WORK</h2>
                  <hr className="w-[100%] h-1 bg-black my-1" />
                  {details.work.map((item) => (
                    <>
                      <div className="flex flex-col" key={item.company}>
                        {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                        <span className="text-black font-bold mt-3">
                          {item.company}{" "}
                          <span className="font-semibold">
                            ({item.from} to {item.to})
                          </span>
                        </span>
                        <span className="text-black font-semibold mx-4">
                          {item.designation}
                        </span>
                        <p className="ml-4">{item.summary.data}</p>
                      </div>
                    </>
                  ))}
                </>
              )}
              {details.certifications.length != 0 && (
                <>
                  <h2 className="font-bold tracking-[4px]">CERTIFICATIONS</h2>
                  <hr className="w-[100%] h-1 bg-black my-1" />
                  {details.certifications.map((item) => (
                    <>
                      <div className="flex flex-col" key={item.title}>
                        {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                        <span className="text-black font-bold mt-3">
                          {item.title}
                          <span className="font-semibold">{item.date}</span>
                        </span>
                        <span className="text-black font-semibold mx-4">
                          {item.issuer}
                        </span>
                        <p className="ml-4">{item.summary.data}</p>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
