import React, { useContext, useEffect } from "react";
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

          <div className="  bg-white w-[210mm] h-[297mm] drop-shadow-2xl mx-auto m-2">
            <div className="flex space-x-4 m-4 ">
              <div className="m-4 w-[120%]">
                <img
                  className="w-[75%] h-[40%] pb-2"
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
                {details.personal.objective.length != 0 && (
                  <div className=" bg-gray-200 rounded-xl m-3 ml-[10%]">
                    <p className=" text-black font-bold text-xl p-2 pt-2 pl-4 tracking-wid mt-5 ">
                      PROFILE
                    </p>

                    <p className="text-sm text-black p-3 pl-2 pt-2">
                      {details.objective}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <hr className="border-1"></hr>
            <div className="flex space-x-4 m-4">
              <div flex-col>
                <div className="b-[50%] rounded-md  p-2">
                  {details.education.length != 0 && (
                    <>
                      <p className="font-bold  m-2 ">EDUCATION</p>
                      {details.education.map((item) => (
                        <div className="text-sm p-1" key={item.institution}>
                          <p className="font-semibold">
                            {item.institution} [{item.startDate} -{" "}
                            {item.endDate}]
                          </p>
                          <p>{item.fieldOfStudy}</p>
                          <p>{item.typeOfDegree}</p>
                          <p>{item.gpa}</p>
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                        </div>
                      ))}
                    </>
                  )}
                  <div className="pb-3 pt-2">
                    {details.work.length != 0 && (
                      <>
                        <p className="text-black font-bold tracking-wider  p-1 px-2 pt-2 ">
                          WORK
                        </p>
                        {details.work.map((item) => (
                          <div className="m-2" key={item.company}>
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
                      </>
                    )}
                  </div>
                  <div className="pt-2">
                    {details.awards.length != 0 && (
                      <>
                        <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                          AWARDS:
                        </p>
                        {details.awards.map((item) => (
                          <div className="text-sm pt-4 ml-3" key={item.name}>
                            <li className="font-semibold">
                              {item.name} - [{item.date}]
                            </li>
                            <p>{item.awarder}</p>
                            {/* <p>{item.summary.data}</p> */}
                            <p>{item.summary.enabled}</p>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-col ">
                {/* <div className=" pt-1 pb-3 bg-gray-200 rounded-xl p-2 mt-5 mr-5">
              <p className="text-black font-bold tracking-wider  p-2 px-2 pt-3   ">
                PROJECTS
              </p>

              {details.projects.map((item) => (
                <div className=" text-black ">
                  <Link href={item.website}>
                    <p className="font-bold  tracking-wider">{item.name}</p>
                  </Link>
                  <p className="">
                    {item.from}- {item.to}
                  </p>
                  <p>{item.summary.data}</p>
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                  <p className="p-2"> </p>
                </div>
              ))}
            </div> */}
                {details.certifications.length != 0 && (
                  <div className=" pt-1 pb-3 bg-gray-200 rounded-xl mt-5 mr-4">
                    <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-2 ">
                      CERTIFICATION
                    </p>

                    {details.certifications.map((item) => (
                      <div className="pt-4 text-black mx-3 " key={item.title}>
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
                {details.social.length != 0 && (
                  <div className="flex mt-4 m-4 bg-gray-200 rounded-xl">
                    {details.social.map((item) => (
                      <div className="mx-3 pb-4  mt-3 " key={item.network}>
                        <span className="">
                          <Link href={item.url}>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              className="w-5 "
                            />
                          </Link>
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
