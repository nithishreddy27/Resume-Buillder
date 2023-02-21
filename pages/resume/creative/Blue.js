import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Blue() {
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

          <div className="bg-slate-50 w-[210mm] h-[292mm]  overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
            <div className="h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10 ">
              <img
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt=""
                className="rounded-full h-40 mb-5 mx-auto"
              />
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
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        alt=""
                        srcset=""
                        className="w-5 grayscale-[40%]"
                      />
                    </span>

                    <Link href={item.url}>
                      <span className="mx-4">{item.username}</span>
                    </Link>
                  </div>
                ))}
              </>
              {details.skills.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px] mt-5">
                    SKILLS
                  </h1>

                  <div className="my-2">
                    {details.skills.map((item) => (
                      <div className="flex" key={item.name}>
                        <h1 className="">{item.name}</h1>
                        <p className="absolute right-5">{item.level}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {details.languages.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px] mt-5">
                    LANGUAGES
                  </h1>
                  <div className="my-2">
                    {details.languages.map((item) => (
                      <div className="flex" key={item.name}>
                        <h1 className="">{item.name}</h1>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {details.hobbies.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px] mt-5">
                    HOBBIES
                  </h1>
                  <div className="my-2">
                    {details.hobbies.map((item) => (
                      <div className="flex" key={item.name}>
                        <h1 className="">{item.name}</h1>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {details.awards.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px] mt-5">
                    AWARDS
                  </h1>
                  <div className="my-2">
                    {details.awards.map((item) => (
                      <div className="flex" key={item.name}>
                        <span className=" text-[15px] my-1">
                          {item.name} <span className="">({item.date})</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {/* <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">HOBBIES</h1>
            {details.hobbies.map((item) => (
              <p className="my-2">{item.name}</p>
            ))}
          </div> */}
              {details.certifications.length != 0 && (
                <>
                  <div className="mt-4">
                    <h1 className="text-2xl font-semibold tracking-[2px]">
                      CERTIFICATIONS
                    </h1>
                    {details.certifications.map((item) => (
                      <p className="my-2" key={item.name}>
                        {item.title}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10">
              <h1 className="text-3xl ml-[50%] font-bold tracking-widest">
                {details.personal.firstName}{" "}
                <span>{details.personal.lastName}</span>
              </h1>
              <h1 className="ml-[58%] my-2 tracking-widest">
                {details.personal.role}
              </h1>
              <div className="absolute mt-10  left-[330px] w-[57%] h-[100%]">
                {details.personal.objective != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px]">
                      OBJECTIVE
                    </h1>
                    <p>{details.personal.objective}</p>
                  </>
                )}
                {details.education.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px]">
                      EDUCATION
                    </h1>
                    {details.education.map((item) => (
                      <div className="mt-4" key={item.institution}>
                        <h1 className="font-semibold">
                          {item.institution}{" "}
                          <span className="font-medium">
                            ({item.startDate.slice(0, 4)}-
                            {item.endDate.slice(0, 4)})
                          </span>{" "}
                        </h1>

                        <p className="ml-5">{item.typeOfDegree}</p>
                        <p className="ml-5 my-1">{item.summary.data}</p>
                        <p className="ml-5">GPA-{item.gpa}</p>
                      </div>
                    ))}
                  </>
                )}

                {details.work.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px] mt-4">
                      WORK
                    </h1>
                    {details.work.map((item) => (
                      <div className="mt-4" key={item.company}>
                        <h1 className="font-semibold">
                          {item.company}{" "}
                          <span className="font-medium">
                            ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                          </span>{" "}
                        </h1>

                        <span className="ml-5 tracking-wider font-semibold">
                          {item.designation}
                        </span>
                        <span className="ml-5 text-sm">
                          {item.summary.data}
                        </span>
                      </div>
                    ))}
                  </>
                )}
                {/* <h1 className="text-xl font-bold tracking-[1px] mt-4">
                  PROJECTS
                </h1>
                {details.projects.map((item) => (
                  <div className="mt-4" key={item.name}>
                    <Link href={item.website}>
                      <h1 className="font-semibold">
                        {item.name}{" "}
                        <span className="font-medium">
                          ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                        </span>{" "}
                      </h1>{" "}
                    </Link>

                    <span className="ml-5 tracking-wider font-semibold">{item.designation}</span>
                    <span className="ml-5 text-sm">{item.summary.data}</span>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
