import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Modern() {
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
    (document.getElementById("network").innerHTML = "one"),
      (document.getElementById("username").innerHTML = " "),
      (document.getElementById("url").innerHTML = " ");
    const arr = [];
    details.social.map((item) => {
      arr.push(item);
    });
    arr.push(sn);
    setdetails({ ...details, social: arr });

    console.log("sn", sn);
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
    (document.getElementById("company").innerHTML = ""),
      (document.getElementById("position").innerHTML = ""),
      (document.getElementById("startdate").innerHTML = ""),
      (document.getElementById("enddate").innerHTML = ""),
      (document.getElementById("summary").innerHTML = "");
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

    (document.getElementById("TypeOfDegree").innerHTML = ""),
      (document.getElementById("school").innerHTML = ""),
      (document.getElementById("EducationFieldOfStudy").innerHTML = ""),
      (document.getElementById("Educationstartdate").innerHTML = ""),
      (document.getElementById("Educationenddate").innerHTML = ""),
      (document.getElementById("grade").innerHTML = ""),
      (document.getElementById("summary").innerHTML = "");
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

    (document.getElementById("awardTitle").innerHTML = ""),
      (document.getElementById("awarder").innerHTML = ""),
      (document.getElementById("awardDate").innerHTML = ""),
      (document.getElementById("awardSummary").innerHTML = "");
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

    (document.getElementById("certificateTitle").innerHTML = ""),
      (document.getElementById("issuer").innerHTML = ""),
      (document.getElementById("certificateDate").innerHTML = ""),
      (document.getElementById("certificateSummary").innerHTML = "");
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

    document.getElementById("skillTitle").innerHTML = "";
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

    document.getElementById("languageTitle").innerHTML = "";
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
    document.getElementById("hobbyTitle").innerHTML = "";
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

          <div className="bg-slate-50 w-[210mm] h-[285mm] m-5 overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
            <div className="w-[35%] z-10 bg-slate-800 h-[100] p-5">
              <div className="mt-44">
                <h1 className="text-2xl  tracking-[2px] text-white">CONTACT</h1>
                <hr className="h-[2px] bg-black my-2" />
                <div className="flex">
                  <span>
                    <img
                      src="https://www.freeiconspng.com/uploads/phone-icon-16.png"
                      className="w-5 h-5"
                    />
                  </span>
                  <h1 className="mx-4 text-white">{details.personal.phone}</h1>
                </div>
                <div className="flex my-1">
                  <span>
                    <img
                      src="https://www.freeiconspng.com/uploads/icon-email-icon-clip-art-at-clker-com-vector-qafaq-e-mail-icon-trace--0.png"
                      className="w-7 h-7"
                    />
                  </span>
                  <h1 className="mx-2 text-white">{details.personal.email}</h1>
                </div>
                {details.social.map((item) => (
                  <div className="my-3 flex" key={item.network}>
                    <span>
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        alt=""
                        srcset=""
                        className="w-5 grayscale-[40%]   "
                      />
                    </span>

                    <Link href={item.url}>
                      <span className="mx-4 text-white">{item.username}</span>
                    </Link>
                  </div>
                ))}
                <h1 className="text-2xl mt-4 tracking-[2px] text-white">
                  SKILLS
                </h1>
                <hr className="h-[2px] bg-black my-2" />

                {details.skills.length != 0 && (
                  <div>
                    {details.skills.map((item) => (
                      <div className="flex" key={item.name}>
                        <p className="mx-1   text-white my-2 w-[70%] text-sm">
                          {item.name}
                        </p>
                        {item.level == "Beginner" && (
                          // <p className="text-white"></p>
                          <div className="w-[40%] h-2 relative rounded-md left-0 bg-white   mt-5">
                            <div className="w-[66%] absolute right-0 bg-black h-2"></div>
                          </div>
                        )}
                        {item.level == "Intermediate" && (
                          <div className="w-[40%] h-2 relative rounded-md left-0 bg-white  mt-5">
                            <div className="w-[33%] absolute right-0 bg-black h-2"></div>
                          </div>
                        )}
                        {
                          item.level == "Expert" && (
                            <div className="w-[40%] h-2 relative rounded-md  left-0 bg-white  mt-5">
                              <div className="w-[1%] absolute right-0 bg-black h-2"></div>
                            </div>
                          )
                          // <p className="text-white">exp</p>
                        }
                      </div>
                    ))}
                  </div>
                )}

                {details.languages.length != 0 && (
                  <div className="mt-5">
                    <h1 className="text-2xl  text-white  tracking-[2px]">
                      LANGUAGES
                    </h1>
                    <hr className="h-[2px] my-1" />
                    {details.languages.map((item) => (
                      <p className="my-2 text-white" key={item.name}>
                        {item.name}
                      </p>
                    ))}
                  </div>
                )}

                {details.awards.length != 0 && (
                  <>
                    {" "}
                    <h1 className="text-2xl  tracking-[2px] text-white mt-5">
                      AWARADS
                    </h1>
                    <hr className="h-[2px] bg-black mt-1 mb-4 " />
                    {details.awards.map((item) => (
                      <div className="my-2" key={item.name}>
                        <span className="font-semibold text-[15px] text-white">
                          {item.name} ({item.date.slice(0, 4)})
                        </span>

                        <p className="mx-4 text-white opacity-60">
                          {item.summary.data.slice(0, 38)}
                        </p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="w-[65%] z-10 bg-slate-300 p-5">
              {details.personal.objective.length != 0 && (
                <div className="mt-48">
                  <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                      OBJECTIVE
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                  </div>
                  <p className="text-sm">{details.personal.objective}</p>
                </div>
              )}
              {details.work.length != 0 && (
                <div className="mt-5">
                  <div className="flex">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                      EMPLOYMENT HISTORY
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                  </div>
                  {details.work.map((item) => (
                    <div className="mt-4" key={item.company}>
                      <h1 className="font-semibold">
                        {item.company}{" "}
                        <span className="font-medium">
                          ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                        </span>{" "}
                      </h1>

                      <p className="ml-5">{item.website}</p>
                      <p className="ml-5 my-1">{item.summary.data}</p>
                    </div>
                  ))}
                </div>
              )}
              {details.education.length != 0 && (
                <div className="mt-5">
                  <div className="flex">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                      EDUCATION
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                  </div>
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
                </div>
              )}
              {/* <div className="mt-5">
                <div className="flex mb-2">
                  <h1 className="text-xl font-semibold tracking-[1px]">
                    PROJECTS
                  </h1>
                  <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
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

                    <span className="ml-5 text-sm">{item.summary.data}</span>
                  </div>
                ))}
              </div> */}
              {details.certifications.length != 0 && (
                <div className="mt-2">
                  <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                      CERTIFICATIONS
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                  </div>
                  {details.certifications.map((item) => (
                    <p className="my-2" key={item.title}>
                      {item.title}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="absolute w-[100%] h-28 bg-cyan-800 z-20 top-9 flex">
              <div>
                {
                  <>
                    <h1 className="text-3xl mt-7 ml-24 font-semibold tracking-widest text-white ">
                      {details.personal.firstName.concat(
                        "  " + details.personal.lastName
                      )}
                    </h1>
                    <p className="mt-2 ml-36 tracking-widest text-white">
                      {details.personal.role}
                    </p>
                  </>
                }
              </div>
            </div>
            <img
              src="https://randomuser.me/api/portraits/men/40.jpg"
              alt=""
              className=" absolute top-6 right-10 z-30 h-32 rounded-full border-white border-4  "
            />
          </div>
        </div>
      )}
    </>
  );
}
