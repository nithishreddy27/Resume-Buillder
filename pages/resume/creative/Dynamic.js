import React, { useContext, useEffect ,useState } from "react";
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
      title: document.getElementById("certificateTitle").value,
      issuer: document.getElementById("issuer").value,
      date: document.getElementById("certificateDate").value,
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

  function addProjects(){
    const project = {
      title: document.getElementById("projectTitle").value,
      domine: document.getElementById("projectDomine").value,
      from: document.getElementById("projectstartdate").value,
      to: document.getElementById("projectenddate").value,
      website: document.getElementById("projectWebsite").value,
      summary: {
        data: document.getElementById("projectsummary").value,
      },
    };
    console.log("award", project);
    const arr = [];
    details.projects.map((item) => {
      arr.push(item);
    });
    // console.log('award',award)
    arr.push(project);
    setdetails({ ...details, projects: arr });
  }

  function deleteProjects(index){
    console.log("network", index);
    const arr = [];
    details.projects.map((item, i) => {
      if (i != index) arr.push(item);
    });
    
    setdetails({ ...details, projects: arr });
  }

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

                    {details.social.length != 0 && (
                      <>
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
                      </>
                    )}
                  </>
                }
              </div>
              {details.skills.length != 0 && (
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
              )}

              {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
              {details.languages.length != 0 && (
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
              )}
              {details.hobbies.length != 0 && (
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    HOBBIES
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.hobbies.map((item) => (
                    <p className="my-2" key={item.name}>
                      {item.name}
                    </p>
                  ))}
                </div>
              )}
              {details.awards.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    AWARADS
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.awards.map((item) => (
                    <div className="my-2" key={item.name}>
                      <span className="font-semibold text-[15px]">
                        {item.name} ({item.date})
                      </span>
                      <span className="mx-2 text-[15px]"></span>
                      <p className="mx-4">{item.summary.data.slice(0, 38)}</p>
                    </div>
                  ))}
                </>
              )}
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
                {details.personal.objective.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px]">
                      OBJECTIVE
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <p className="text-sm">{details.personal.objective}</p>
                  </>
                )}

                {details.work.length != 0 && (
                  <>
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
                  </>
                )}

                {details.education.length != 0 && (
                  <>
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
                  </>
                )}

                {details.certifications.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px] mt-3">
                      CERTIFICATIONS
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <div className="ml-1 mt-1">
                      {details.certifications.map((item) => (
                        <div className="flex" key={item.institution}>
                          <div className="flex">
                            <div className="pt-1">
                              <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                              <div className="w-1 bg-black h-10 m-1"></div>
                            </div>
                            <div className="ml-5 mt-1">
                              <p className="tracking-[2px]">
                                {item.certificateTitle}
                              </p>
                              <p className="font-bold">
                                {item.certificateDate}
                              </p>
                              <p className="">{item.issuer}</p>
                              <p className="mb-4 font-semibold">
                                {item.summary.data}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
  deleteProject={deleteProjects}
  addProjects={addProjects}
/>
<div className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 " onClick={toggleResume}>
                      PREVIEW
</div>
 


<div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
              
              <div className="flex justify-center ">
                


                {/* large resume */}


              <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row">
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

                    {details.social.length != 0 && (
                      <>
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
                      </>
                    )}
                  </>
                }
              </div>
              {details.skills.length != 0 && (
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
              )}

              {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
              {details.languages.length != 0 && (
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
              )}
              {details.hobbies.length != 0 && (
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    HOBBIES
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.hobbies.map((item) => (
                    <p className="my-2" key={item.name}>
                      {item.name}
                    </p>
                  ))}
                </div>
              )}
              {details.awards.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px]">
                    AWARADS
                  </h1>
                  <hr className="h-[2px] bg-black my-1" />
                  {details.awards.map((item) => (
                    <div className="my-2" key={item.name}>
                      <span className="font-semibold text-[15px]">
                        {item.name} ({item.date}) - <b>{item.awarder}</b>
                      </span>
                      <span className="mx-2 text-[15px]"></span>
                      <p className="mx-4">{item.summary.data.slice(0, 38)}</p>
                    </div>
                  ))}
                </>
              )}
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
                {details.personal.objective.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px]">
                      OBJECTIVE
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <p className="text-sm">{details.personal.objective}</p>
                  </>
                )}

                {details.work.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px] mt-5">
                      WORK
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />

                    <div className="ml-1 mt-1">
                      {details.work.map((item) => (
                        <div className="flex" key={item.company}>
                          <div className="pt-1">
                            <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                            <div className="w-1 bg-black h-20 m-1"></div>
                          </div>
                          <div className="ml-5 mt-1">
                            <p className="font-semibold">
                              {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                            </p>
                            <p className="tracking-[2px]">
                              {item.company}
                            </p>
                            <p className="font-bold">{item.designation}</p>
                            <p className="mb-4 text-sm">{item.summary.data}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {details.education.length != 0 && (
                  <>
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
                              <div className="w-1 bg-black h-20 m-1"></div>
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
                  </>
                )}

                {details.certifications.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px] mt-3">
                      CERTIFICATIONS
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <div className="ml-1 mt-1">
                      {details.certifications.map((item) => (
                        <div className="flex" key={item.institution}>
                          <div className="flex">
                            <div className="pt-1">
                              <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                              <div className="w-1 bg-black h-20 m-1"></div>
                            </div>
                            <div className="ml-5 mt-1">
                              <p className="tracking-[2px]">
                                {item.title}
                              </p>
                              <p className="font-bold">
                                {item.date}
                              </p>
                              <p className="">{item.issuer}</p>
                              <p className="mb-4 font-semibold">
                                {item.summary.data}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}


                
            {details.projects.length != 0 && (
                  <>
                    <h1 className="text-xl font-bold tracking-[1px] mt-3">
                      PROJECTS
                    </h1>
                    <hr className="h-[2px] bg-black my-1" />
                    <div className="ml-1 mt-1">
                      {details.projects.map((item) => (
                        <div className="flex" key={item.title}>
                          <div className="flex">
                            <div className="pt-1">
                              <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                              <div className="w-1 bg-black h-20 m-1"></div>
                            </div>
                            <div className="ml-5 mt-1">
                              <p className="font-semibold">
                                {item.from}  to {"  "}
                                {item.to}
                              </p>
                              <p className="tracking-[2px]">
                                {item.title}
                              </p>
                              <p className="font-bold">{item.domine}</p>
                              <p className="">{item.summary.data}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
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
