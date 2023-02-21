import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Chrono() {
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
            <div className="grid grid-cols-5">
              <div className="col-span-2 border-2 border-solid border-black h-[255mm] ml-5 mt-20">
                <img
                  className=" pt-4 w-52 absolute top-0 ml-10 border-2  border-gray-600 z-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                  alt="ProfilePhoto"
                />

                <div>
                  <h1 className="text-black mt-36 ml-16  font-medium text-3xl">
                    {details.personal.firstName}
                  </h1>
                  <h1 className="text-black ml-16 font-medium text-3xl">
                    {details.personal.lastName}
                  </h1>
                  <h6 className="font-normal text-xs ml-16 pt-2">
                    {details.personal.role}
                  </h6>
                </div>
                <div>
                  <h1 className="font-bold text-lg ml-16 pt-4 p-1">contact</h1>
                  <li className="font-normal ml-20">
                    {details.personal.email}
                  </li>
                  <li className="font-normal ml-20">
                    {details.personal.phone}
                  </li>
                  <li className="font-normal ml-20">{details.personal.dob}</li>
                </div>
                {details.skills.length != 0 && (
                  <div>
                    <h1 className="font-bold text-lg ml-16 pt-4">skills</h1>
                    {details.skills.map((item) => (
                      <div key={item.name}>
                        <h1 className="font-medium ml-16 p-2">{item.name}</h1>
                        <h1 className="text-sm ml-16 px-2">{item.level}</h1>
                      </div>
                    ))}
                  </div>
                )}
                {details.social.length != 0 && (
                  <div>
                    <h1 className="font-bold  text-lg ml-16 pt-4">
                      Social Network
                    </h1>
                    {details.social.map((item) => (
                      <div className="ml-20 my-4 flex" key={item.network}>
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
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
                    <h1 className="font-bold  text-lg ml-16 pt-2">Hobbies</h1>
                    {details.hobbies.map((item) => (
                      <div key={item.name}>
                        <h1 className="px-20 text-sm p-1">{item.name}</h1>
                      </div>
                    ))}
                  </div>
                )}
                {details.languages.length != 0 && (
                  <div>
                    <h1 className="font-bold  text-lg ml-16 pt-2">Languages</h1>
                    {details.hobbies.map((item) => (
                      <div key={item.name}>
                        <h1 className="px-20 text-sm p-1">{item.name}</h1>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="col-span-3">
                {details.personal.objective.length != 0 && (
                  <div>
                    <h1 className="font-medium text-xl ml-8 mt-20">About</h1>
                    <p className="ml-1 p-4 pt-1">
                      {details.personal.objective}
                    </p>
                  </div>
                )}
                {details.education.length != 0 && (
                  <div className="p-2 px-0">
                    <h1 className="font-medium text-xl ml-8 ">Education</h1>
                    {details.education.map((item) => (
                      <div key={item.institution}>
                        <h1 className="font-medium ml-8">{item.institution}</h1>
                        <h6 className="text-xs font-semibold ml-12">
                          {item.startDate} - {item.endDate}
                        </h6>
                        <li className="ml-14 font-semibold">
                          {item.fieldOfStudy}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
                {details.work.length != 0 && (
                  <div className="p-2 px-0">
                    <h1 className="font-medium text-xl ml-8 pt-2 ">
                      Work Experience
                    </h1>
                    {details.work.map((item) => (
                      <div className="p-1" key={item.company}>
                        <h1 className="font-medium ml-8 text-lg">
                          {item.company}
                        </h1>
                        <h2 className="font-semibold text-xs ml-8">
                          {item.from} - {item.to}
                        </h2>
                        <li className="ml-14 list-disc font-semibold">
                          {item.designation}
                        </li>
                        <li className="ml-14 list-disc font-semibold">
                          {item.website}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
                {details.certifications.length != 0 && (
                  <div>
                    <h1 className="font-medium text-xl ml-8 pt-2 ">
                      Certifications
                    </h1>
                    {details.certifications.map((item) => (
                      <div key={item.title}>
                        <h1 className="ml-8 text-normal font-semibold">
                          {item.title}
                        </h1>
                        <li className="ml-12 text-sm font-medium">
                          {item.issuer}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
                {details.awards.length != 0 && (
                  <div>
                    <h1 className="font-medium text-xl ml-8 pt-2 ">Awards</h1>
                    {details.awards.map((item) => (
                      <div key={item.name}>
                        <h1 className="ml-8 text-normal font-semibold">
                          {item.name}
                        </h1>
                        <li className="ml-12 text-sm font-medium">
                          {item.awarder}
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
