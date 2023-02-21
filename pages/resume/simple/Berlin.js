import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Berlin() {
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

          <div className="container w-[210mm] h-[296mm] bg-white p-10 min-w-[210mm]">
            <div className="h-auto pb-10 border-b-4">
              <div>
                <h1 className="text-4xl font-sans font-semibold">
                  {details.personal.firstName} {details.personal.lastName}
                </h1>
                <h1 className="text-sm text-gray-500 font-semibold mt-4">
                  {details.personal.role}
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-3 mt-10">
              <div className="border-r-4 pr-10">
                <div>
                  <h1 className="text-2xl font-semibold">DETAILS</h1>
                  <hr className="w-[15%] h-1 bg-black"></hr>
                  <h1 className="text-sm font-semibold pt-3">
                    DOB
                    <span className="text-sm text-gray-500">
                      {" : "}
                      {details.personal.dob}
                    </span>
                  </h1>
                  <h1 className="text-sm font-semibold pt-3">
                    PHONE
                    <span className="text-sm text-gray-500">
                      {" : "}
                      {details.personal.phone}
                    </span>
                  </h1>
                  <h1 className="text-sm font-semibold pt-3">
                    EMAIL
                    <span className="text-sm text-gray-500">
                      {" : "}
                      {details.personal.email}
                    </span>
                  </h1>
                  {details.social.map((item) => (
                    <div
                      className="text-sm font-semibold pt-3"
                      key={item.network}
                    >
                      <a href="{item.url}">{item.network}</a>
                    </div>
                  ))}
                </div>
                {details.education.length != 0 && (
                  <div>
                    <h1 className="text-2xl font-semibold pt-5">EDUCATION</h1>
                    <hr className="w-[15%] h-1 bg-black"></hr>
                    {details.education.map((item) => (
                      <div className="my-5" key={item.institution}>
                        <span className="text-sm font-bold">
                          {item.institution}
                        </span>
                        <p className="text-xs py-1 font-semibold text-gray-500">
                          {item.fieldOfStudy}{" "}
                          <span className="text-xs font-semibold text-gray-500">
                            ({item.startDate} to {item.endDate})
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {details.skills.length != 0 && (
                  <div className="">
                    <h1 className="text-2xl font-semibold pt-2">SKILLS</h1>
                    <hr className="w-[15%] h-1 bg-black"></hr>
                    {details.skills.map((item) => (
                      <div key={item.name}>
                        <h1 className="text-sm text-gray-800 pt-2">
                          {item.name}
                        </h1>
                      </div>
                    ))}
                  </div>
                )}
                {details.awards.length != 0 && (
                  <div className="">
                    <h1 className="text-2xl font-semibold pt-2">AWARDS</h1>
                    <hr className="w-[15%] h-1 bg-black"></hr>
                    {details.awards.map((item) => (
                      <div key={item.name}>
                        <h1 className="text-sm text-gray-800 pt-2">
                          {item.name}
                        </h1>
                      </div>
                    ))}
                  </div>
                )}
                {details.hobbies.length != 0 && (
                  <div>
                    <h1 className="text-2xl font-semibold pt-5">HOBBIES</h1>
                    <hr className="w-[15%] h-1 bg-black"></hr>
                    {details.hobbies.map((item) => (
                      <div key={item.name}>
                        <h1 className="text-sm text-gray-800 pt-2">
                          {item.name}
                        </h1>
                      </div>
                    ))}
                  </div>
                )}
                {details.languages.length != 0 && (
                  <div>
                    <h1 className="text-2xl font-semibold pt-5">LANGUAGES</h1>
                    <hr className="w-[15%] h-1 bg-black"></hr>
                    {details.languages.map((item) => (
                      <div key={item.name}>
                        <h1 className="text-sm text-gray-800 pt-2">
                          {item.name}
                        </h1>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="col-span-2 pl-10">
                {details.personal.objective.length != 0 && (
                  <div>
                    <h1 className="text-2xl font-semibold">PROFILE</h1>
                    <hr className="w-[8%] h-1 bg-black"></hr>
                    <p className="text-sm text-gray-500 py-5">
                      {details.personal.objective}
                    </p>
                  </div>
                )}
                {details.work.length != 0 && (
                  <div>
                    <h1 className="text-2xl font-semibold pt-5 border-t-2">
                      EMPLOYMENT HISTORY
                    </h1>
                    <hr className="w-[8%] h-1 bg-black"></hr>
                    {details.work.map((item) => (
                      <div className="my-5" key={item.company}>
                        <span className="text-sm font-bold mt-10">
                          {item.company}
                          {" - "}
                          <span className="text-sm font-bold mt-10">
                            {item.designation}
                          </span>
                        </span>
                        <p className="text-xs py-1 font-semibold text-gray-500">
                          ({item.from} to {item.to})
                        </p>
                        <p class="text-sm text-gray-500">{item.summary.data}</p>
                      </div>
                    ))}
                  </div>
                )}
                {/* <div>
              <h1 className="text-2xl font-semibold pt-5 border-t-2">
                PROJECTS
              </h1>
              <hr className="w-[8%] h-1 bg-black"></hr>
              {details.projects.map((item) => (
                <div className="my-5">
                  <span className="text-sm font-bold mt-10">
                    <a href="{item.website}">{item.name}</a>
                  </span>
                  <p className="text-xs py-1 font-semibold text-gray-500">
                    ({item.from} to {item.to})
                  </p>
                  <p class="text-sm text-gray-500">{item.summary.data}</p>
                </div>
              ))}
            </div> */}
                {details.certifications.length != 0 && (
                  <div>
                    <h1 className="text-2xl font-semibold pt-5 border-t-2">
                      CERTIFICATIONS
                    </h1>
                    <hr className="w-[8%] h-1 bg-black"></hr>
                    {details.certifications.map((item) => (
                      <div className="my-5" key={item.title}>
                        <span className="text-sm font-bold mt-10">
                          {item.title}
                          {" - "}
                          <span className="text-sm font-bold mt-10">
                            {item.issuer}
                          </span>
                        </span>
                        <p className="text-xs py-1 font-semibold text-gray-500">
                          ({item.date})
                        </p>
                        <p class="text-sm text-gray-500">{item.summary.data}</p>
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
