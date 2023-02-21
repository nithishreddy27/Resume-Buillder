import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Symetric() {
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

          <div className="container w-[210mm] h-[297mm] min-w-[210mm] bg-white text-black">
            <div className="first w-[210mm] h-[45mm] mt-5 bg-zinc-300 flex">
              <div className="name font-serif">
                <h1 className="text-4xl font-semibold px-10 pt-10">
                  {details.personal.firstName}
                  <span className="font-normal pl-2">
                    {" "}
                    {details.personal.lastName}
                  </span>
                </h1>
                <h2 className="text-xl px-10 pt-5 font-sans font-medium">
                  {details.personal.role}
                </h2>
              </div>
              <div className="photo">
                <div className="pl-[80px] pt-16 ml-20">
                  <img
                    src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                    className="w-[130px] h-[130px] rounded-full"
                  ></img>
                </div>
              </div>
            </div>
            <div className="second flex">
              <div className="side1 w-[85mm]">
                <div className="contact  border-b-2 border-r-2 border-gray-500 mx-6 mt-5">
                  <div className="dob pl-10 pt-1">
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
                  <div className="social pl-10 pt-1 flex">
                    {details.social.map((item) => (
                      <div className="pr-2" key={item.network}>
                        <span>
                          <Link href={item.url}>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              className="w-5 grayscale-[40%]"
                            ></img>
                          </Link>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                </div>
                {details.education.length != 0 && (
                  <div className="education border-b-2 border-r-2 border-gray-500 mx-6">
                    <div className="pb-2">
                      <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                        E D U C A T I O N
                      </h2>
                      {details.education.map((item) => (
                        <p className="pl-10 pr-5 pt-2" key={item.institution}>
                          <span className="font-medium">
                            {item.institution}
                          </span>{" "}
                          in{" "}
                          <span className="font-medium">
                            {item.fieldOfStudy}
                            <br />({item.startDate} to {item.endDate})
                          </span>
                          <br />
                          <i class="bx bxs-graduation"></i> {item.typeOfDegree}{" "}
                          in {item.fieldOfStudy} ({item.gpa})
                        </p>
                      ))}
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                  </div>
                )}
                {details.certifications.length != 0 && (
                  <div className="certifications border-r-2 border-b-2 border-gray-500 mx-6">
                    <div className="pb-2">
                      <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-3">
                        C E R T I F I C A T I O N S
                      </h2>
                      {details.certifications.map((item) => (
                        <p className="pl-10 pr-2 pb-1" key={item.title}>
                          <i className="bx bxs-square text-xs pr-3"></i>
                          {item.title} from {item.issuer}
                        </p>
                      ))}
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                  </div>
                )}
                {details.skills.length != 0 && (
                  <div className="skills border-r-2 border-gray-500 mx-6">
                    <div className="pl-10 pb-5">
                      <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">
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
              <div className="side2 w-[125mm]">
                {details.personal.objective.length != 0 && (
                  <div className="career-objective border-b-2 border-gray-500 ml-[-24px] mr-5">
                    <h2 className="text-center text-xl font-serif font-medium underline pt-8">
                      C A R E E R O B J E C T I V E
                    </h2>
                    <p className="pl-10 pr-5 pt-3 pb-3">{details.objective}</p>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                  </div>
                )}
                {details.work.length != 0 && (
                  <div className="experience border-b-2 border-gray-500 ml-[-24px] mr-5">
                    <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                      E X P E R I E N C E
                    </h2>
                    <div className="pb-5">
                      {details.work.map((item) => (
                        <p className="pl-10 pr-5 pt-2" key={item.company}>
                          <span class="font-medium text-lg pr-3">
                            {item.designation} in {item.company}
                          </span>
                          <br></br>({item.from} to {item.to})<br />
                          <Link href={item.website}>{item.website}</Link>
                          <br></br>
                        </p>
                      ))}
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                  </div>
                )}
                {/* <div className="projects border-b-2 border-gray-500 ml-[-24px] mr-5">
                  <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                    P R O J E C T S
                  </h2>
                  <div className="pb-3">
                    {details.projects.map((item) => (
                      <p className="pl-10 pr-5 pt-3">
                        <span className="font-medium text-lg pr-3">
                          {item.name}
                        </span>{" "}
                        ({item.from} to {item.to})<br />
                        <Link href={item.website}>{item.website}</Link>
                        <br></br>
                      </p>
                    ))}
                  </div> */}
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
              </div>
              {details.awards.length != 0 && (
                <div className="awards border-gray-500 ml-[-24px] mr-5">
                  <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                    A W A R D S
                  </h2>
                  {details.awards.map((item) => (
                    <p className="pl-10 pr-5 pt-1" key={item.name}>
                      <i className="bx bxs-award pr-1"></i>
                      <span className="font-medium">{item.name}</span> from{" "}
                      {item.awarder}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
