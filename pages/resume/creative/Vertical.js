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

          <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
            <div className="w-[205mm] h-40 bg-blue-500 absolute z-0 mt-10">
              <h1 className="text-white ml-80 mt-8 text-5xl">
                {details.personal.firstName} {details.personal.lastName}
              </h1>
              <h6 className="text-white ml-80 mt-1 ">
                {details.personal.role}
              </h6>
            </div>
            <div className="grid grid-cols-3">
              <div className="bg-slate-900 h-auto ml-5 z-10">
                <img
                  className="w-40 m-10 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                  alt="ProfilePhoto"
                />
                {details.skills.length && (
                  <div className="border-b-2 border-white m-6 p-3">
                    <h1 className="font-medium text-lg text-white ">SKILLS</h1>
                    {details.skills.map((item) => (
                      <div key={item.name}>
                        <h1 className="font-normal   text-white">
                          {item.name}
                        </h1>
                        <li className="text-sm ml-4 text-white">
                          {item.level}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
                {details.social.length != 0 && (
                  <div className="border-b-2 border-white m-6 p-3">
                    <h1 className="font-medium text-lg text-white ">SOCIAL</h1>
                    {details.social.map((item) => (
                      <div className="ml-4 my-4 flex" key={item.network}>
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          className="w-5 h-5"
                        />
                        <Link href={item.url}>
                          <h1 className="ml-4 text-white">{item.username}</h1>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  {details.awards.length != 0 && (
                    <div className="border-b-2 border-white m-6 p-3">
                      <h1 className="font-medium text-lg text-white ">
                        AWARDS
                      </h1>
                      {details.awards.map((item) => (
                        <div className="m-2" key={item.name}>
                          <h1 className="text-white">{item.awarder}</h1>
                          <li className="text-white text-sm ml-4 ">
                            {item.awarder}
                          </li>
                        </div>
                      ))}
                    </div>
                  )}
                  {details.hobbies.length != 0 && (
                    <div className="border-b-2 border-white m-6 p-3">
                      <h1 className="font-medium text-lg text-white ">
                        HOBBIES
                      </h1>
                      {details.hobbies.map((item) => (
                        <div className="m-2" key={item.name}>
                          <h1 className="text-white">{item.name}</h1>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <div className="pt-48">
                  <div className="border-b-4 border-black m-4 p-5">
                    <h1 className="font-medium text-lg text-gray-600">
                      ABOUT ME
                    </h1>
                    <p className="text-sm font-medium pt-1">
                      {details.personal.objective}
                    </p>
                  </div>
                </div>
                {details.work.length != 0 && (
                  <div className="border-b-4 border-black m-4 p-2">
                    <h1 className="font-medium text-lg text-gray-600">
                      WORK EXPERIENCE
                    </h1>
                    {details.work.map((item) => (
                      <div className="p-1" key={item.company}>
                        <h1 className="font-medium ml-4 text-lg">
                          {item.company}
                        </h1>
                        <h2 className="font-semibold text-xs ml-4">
                          {item.from} - {item.to}
                        </h2>
                        <li className="ml-10 list-disc font-semibold">
                          {item.designation}
                        </li>
                        <li className="ml-10 list-disc font-semibold">
                          {item.website}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
                {details.education.length != 0 && (
                  <div className="border-b-4 border-black m-4 p-2">
                    <h1 className="font-medium text-lg text-gray-600">
                      EDUCATION
                    </h1>
                    {details.education.map((item) => (
                      <div key={item.institution}>
                        <h1 className="font-medium ml-6">{item.institution}</h1>
                        <h6 className="text-xs font-semibold ml-6">
                          {item.startDate} - {item.endDate}
                        </h6>
                        <li className="ml-8 font-semibold">
                          {item.fieldOfStudy}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
                {details.awards.length != 0 && (
                  <div className="border-b-4 border-black m-4 p-2">
                    <h1 className="font-medium text-lg text-gray-600">
                      AWARDS
                    </h1>
                    {details.awards.map((item) => (
                      <div key={item.name}>
                        <h1 className="font-medium ml-6">{item.title}</h1>
                        <h6 className="text-xs font-semibold ml-6">
                          {item.date}
                        </h6>
                        <li className="ml-8 font-semibold">
                          {item.summary.data}
                        </li>
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
