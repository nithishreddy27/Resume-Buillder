import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Square() {
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
                  <div className="w-[40%] bg-slate-300">
                    <div className="photo">
                      <div className="px-20 pt-10 pb-5">
                        <img
                          src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                          className="w-[100px] h-[100px]"
                        ></img>
                      </div>
                    </div>
                    <div className="personal">
                      <div className="dob pl-10 pt-3">
                        <i className="bx bxs-calendar pr-4 text-lg"></i>
                        <span className="text-base relative bottom-[3px]">
                          {details.personal.dob}
                        </span>
                      </div>
                      <div className="phone pl-10 pt-1">
                        <i className="bx bxs-phone pr-4 text-lg"></i>
                        <span className="text-base relative bottom-1">
                          {details.personal.phone}
                        </span>
                      </div>
                      <div className="mail pl-10 pt-1">
                        <i className="bx bxs-envelope pr-4 text-lg"></i>
                        <span className="text-base relative bottom-1">
                          {details.personal.email}
                        </span>
                      </div>
                      <div className="social px-14 grid grid-cols-6 pb-4">
                        {details.social.map((item) => (
                          <div className="pr-2 pt-1" key={item.network}>
                            <h1>
                              <Link href={`${item.url}`}>
                                <img
                                  src={
                                    "https://www." +
                                    item.network +
                                    ".com/favicon.ico"
                                  }
                                  className="w-5 grayscale-[40%]"
                                ></img>
                              </Link>
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                    {details.education.length != 0 && (
                      <div className="education">
                        <h2 className="text-center text-xl font-serif font-medium underline">
                          E D U C A T I O N
                        </h2>
                        {details.education.map((item) => (
                          <p className="pl-10 pr-5 pt-5" key={item.institution}>
                            <span className="font-medium">
                              {item.institution}
                            </span>
                            <span className="font-medium">
                              <br />({item.startDate} to {item.endDate})
                            </span>
                            <br />
                            <i className="bx bxs-graduation"></i>{" "}
                            {item.typeOfDegree} in {item.fieldOfStudy} (
                            {item.gpa})
                          </p>
                        ))}
                      </div>
                    )}
                    {details.certifications.length != 0 && (
                      <div className="certifications">
                        <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                          C E R T I F I C A T I O N S
                        </h2>
                        {details.certifications.map((item) => (
                          <p className="pl-10 pr-5 pt-3" key={item.title}>
                            <i className="bx bxs-square text-xs pr-3"></i>
                            {item.title} from {item.issuer}
                          </p>
                        ))}
                      </div>
                    )}
                    {details.skills != 0 && (
                      <div className="skills">
                        <div className="pl-10">
                          <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5">
                            S K I L L S
                          </h2>
                          {details.skills.map((item) => (
                            <span className="pr-2" key={item.name}>
                              {item.name}{" "}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-slate-100 w-[60%]">
                    <div className="name">
                      <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600">
                        <h1>{details.personal.firstName}</h1>
                        <h1>{details.personal.lastName}</h1>
                        <h2 className="text-lg font-normal py-3">
                          {details.personal.role}
                        </h2>
                      </div>
                    </div>
                    {details.personal.objective.length != 0 && (
                      <div className="career-objective">
                        <h2 className="text-center text-xl font-serif font-medium underline pt-6">
                          C A R E E R O B J E C T I V E
                        </h2>
                        <p className="pl-10 pr-5 pt-5">
                          {details.personal.objective}
                        </p>
                      </div>
                    )}
                    {details.work.length != 0 && (
                      <div className="experience">
                        <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                          E X P E R I E N C E
                        </h2>
                        {details.work.map((item) => (
                          <p className="pl-10 pr-5 pt-5" key={item.company}>
                            <span className="font-medium text-lg pr-3">
                              {item.designation} in {item.company}
                            </span>
                            <br></br>({item.from} to {item.to})<br />
                            <Link href={`${item.website}`}>{item.website}</Link>
                            <p className="pr-5">{item.summary.data}</p>
                            <br></br>
                          </p>
                        ))}
                      </div>
                    )}
                    {/* <div className="projects">
                <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                  P R O J E C T S
                </h2>
                {details.projects.map((item) => (
                  <p className="pl-10 pr-5 pt-5">
                    <span className="font-medium text-lg pr-3">
                      {item.name}
                    </span>{" "}
                    ({item.from} to {item.to})<br />
                    <Link href={item.website}>{item.website}</Link>
                    <br></br>
                  </p>
                ))}
              </div> */}
                    {details.awards.length != 0 && (
                      <div className="awards">
                        <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                          A W A R D S
                        </h2>
                        {details.awards.map((item) => (
                          <p className="pl-10 pr-5 pt-3" key={item.name}>
                            <i className="bx bxs-award pr-1"></i>
                            <span className="font-medium">
                              {item.name}
                            </span>{" "}
                            from {item.awarder}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
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
                  <div className="w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row">
                    <div className="w-[40%] bg-slate-300">
                      <div className="photo">
                        <div className="px-20 pt-10 pb-5">
                          <img
                            src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                            className="w-[100px] h-[100px]"
                          ></img>
                        </div>
                      </div>
                      <div className="personal">
                        <div className="dob pl-10 pt-3">
                          <i className="bx bxs-calendar pr-4 text-lg"></i>
                          <span className="text-base relative bottom-[3px]">
                            {details.personal.dob}
                          </span>
                        </div>
                        <div className="phone pl-10 pt-1">
                          <i className="bx bxs-phone pr-4 text-lg"></i>
                          <span className="text-base relative bottom-1">
                            {details.personal.phone}
                          </span>
                        </div>
                        <div className="mail pl-10 pt-1">
                          <i className="bx bxs-envelope pr-4 text-lg"></i>
                          <span className="text-base relative bottom-1">
                            {details.personal.email}
                          </span>
                        </div>
                        <div className="social px-14 grid grid-cols-6 pb-4">
                          {details.social.map((item) => (
                            <div className="pr-2 pt-1" key={item.network}>
                              <h1>
                                <Link href={`${item.url}`}>
                                  <img
                                    src={
                                      "https://www." +
                                      item.network +
                                      ".com/favicon.ico"
                                    }
                                    className="w-5 grayscale-[40%]"
                                  ></img>
                                </Link>
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>
                      {details.education.length != 0 && (
                        <div className="education">
                          <h2 className="text-center text-xl font-serif font-medium underline">
                            E D U C A T I O N
                          </h2>
                          {details.education.map((item) => (
                            <p
                              className="pl-10 pr-5 pt-5"
                              key={item.institution}
                            >
                              <span className="font-medium">
                                {item.institution}
                              </span>
                              <span className="font-medium">
                                <br />({item.startDate} to {item.endDate})
                              </span>
                              <br />
                              <i className="bx bxs-graduation"></i>{" "}
                              {item.typeOfDegree} in {item.fieldOfStudy} (
                              {item.gpa})
                            </p>
                          ))}
                        </div>
                      )}
                      {details.certifications.length != 0 && (
                        <div className="certifications">
                          <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                            C E R T I F I C A T I O N S
                          </h2>
                          {details.certifications.map((item) => (
                            <p className="pl-10 pr-5 pt-3" key={item.title}>
                              <i className="bx bxs-square text-xs pr-3"></i>
                              {item.title} from {item.issuer}
                            </p>
                          ))}
                        </div>
                      )}
                      {details.skills != 0 && (
                        <div className="skills">
                          <div className="pl-10">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-5">
                              S K I L L S
                            </h2>
                            {details.skills.map((item) => (
                              <span className="pr-2" key={item.name}>
                                {item.name}{" "}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="bg-slate-100 w-[60%]">
                      <div className="name">
                        <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600">
                          <h1>{details.personal.firstName}</h1>
                          <h1>{details.personal.lastName}</h1>
                          <h2 className="text-lg font-normal py-3">
                            {details.personal.role}
                          </h2>
                        </div>
                      </div>
                      {details.personal.objective.length != 0 && (
                        <div className="career-objective">
                          <h2 className="text-center text-xl font-serif font-medium underline pt-6">
                            C A R E E R O B J E C T I V E
                          </h2>
                          <p className="pl-10 pr-5 pt-5">
                            {details.personal.objective}
                          </p>
                        </div>
                      )}
                      {details.work.length != 0 && (
                        <div className="experience">
                          <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                            E X P E R I E N C E
                          </h2>
                          {details.work.map((item) => (
                            <p className="pl-10 pr-5 pt-5" key={item.company}>
                              <span className="font-medium text-lg pr-3">
                                {item.designation} in {item.company}
                              </span>
                              <br></br>({item.from} to {item.to})<br />
                              <Link href={`${item.website}`}>
                                {item.website}
                              </Link>
                              <p className="pr-5">{item.summary.data}</p>
                              <br></br>
                            </p>
                          ))}
                        </div>
                      )}
                      {/* <div className="projects">
                <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                  P R O J E C T S
                </h2>
                {details.projects.map((item) => (
                  <p className="pl-10 pr-5 pt-5">
                    <span className="font-medium text-lg pr-3">
                      {item.name}
                    </span>{" "}
                    ({item.from} to {item.to})<br />
                    <Link href={item.website}>{item.website}</Link>
                    <br></br>
                  </p>
                ))}
              </div> */}
                      {details.awards.length != 0 && (
                        <div className="awards">
                          <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                            A W A R D S
                          </h2>
                          {details.awards.map((item) => (
                            <p className="pl-10 pr-5 pt-3" key={item.name}>
                              <i className="bx bxs-award pr-1"></i>
                              <span className="font-medium">
                                {item.name}
                              </span>{" "}
                              from {item.awarder}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                ;
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
