import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Grid() {

  const user = useUser()
  const { details, setdetails  } = useContext(ResumeContext);
  

  useEffect(()=>{
    if(user){
      setdetails({...details,personal:{...details.personal , email:user.email,firstName:user.profile.firstName , lastName : user.profile.lastName}})
    }
  },[user])
 
// DATE NOT WORKING GAPPING

  function updateForm(event) {
    const n = event.target.name;
    const i = event.target.id;
    setdetails({ ...details, [n]: { ...details[n], [i]: event.target.value } });
  } 

  async function socialChange(){
    const sn={
      network : document.getElementById("network").value,
      username : document.getElementById("username").value,
      url: document.getElementById("url").value,
    }
    const arr = []
    details.social.map((item)=>{
      arr.push(item)
    })
    arr.push(sn)
    setdetails({ ...details,social:arr});
    
    }
    
  function deleteSocialNetwork(index){
    // console.log("network",network)
    const arr=[]
    details.social.map((item,i)=>{
      if(i != index){
        arr.push(item)
      }
    })
    setdetails({ ...details,social:arr});
  }


    function addInternship(){

      const intern={
        company:document.getElementById("company").value,
        designation:document.getElementById("position").value,
        // website:document.getElementById("website").value,
        from:document.getElementById("startdate").value,
        to:document.getElementById("enddate").value,
        summary:{
          data:document.getElementById("summary").value,
        }
      }
      const arr = []
    details.work.map((item)=>{
      arr.push(item)
    })
    // console.log('intern',intern)
    arr.push(intern)
    setdetails({ ...details,work:arr});
    }

  function deleteInternship(index){
    console.log("network",index)
    const arr = []
    details.work.map((item,i)=>{
      if(i != index)
      arr.push(item)
    })
    // console.log('intern',intern)
    // arr.push(intern)
    setdetails({ ...details,work:arr});
  }

    function addEducation(){
      const education={
        typeOfDegree:document.getElementById("TypeOfDegree").value,
        institution:document.getElementById("school").value,
        fieldOfStudy:document.getElementById("EducationFieldOfStudy").value,
        startDate:document.getElementById("Educationstartdate").value,
        endDate:document.getElementById("Educationenddate").value,
        gpa:document.getElementById("grade").value,
        summary:{
          data:document.getElementById("summary").value,
        }
      }
      const arr = []
    details.education.map((item)=>{
      arr.push(item)
    })
    // console.log('intern',education)
    arr.push(education)
    setdetails({ ...details,education:arr});
    }

    function deleteEducation(index){
      console.log("network",index)
      const arr = []
      details.education.map((item,i)=>{
        if(i != index)
        arr.push(item)
      })

      setdetails({ ...details,education:arr});
    }

    function addAward(){

      const award={
        name:document.getElementById("awardTitle").value,
        awarder:document.getElementById("awarder").value,
        date:document.getElementById("awardDate").value,
        summary:{
          data:document.getElementById("awardSummary").value,
        }
      }
      console.log("award",award)
      const arr = []
    details.awards.map((item)=>{
      arr.push(item)
    })
    // console.log('award',award)
    arr.push(award)
    setdetails({ ...details,awards:arr});
    }

    function deleteAward(index){
      console.log("network",index)
      const arr = []
      details.awards.map((item,i)=>{
        if(i != index)
        arr.push(item)
      })
      // console.log('intern',intern)
      // arr.push(intern)
      setdetails({ ...details,awards:arr});
    }



    function addCertificate(){

      const certificate={
        certificateTitle:document.getElementById("certificateTitle").value,
        issuer:document.getElementById("issuer").value,
        certificateDate:document.getElementById("certificateDate").value,
        summary:{
          data:document.getElementById("certificateSummary").value,
        }
      }
      console.log("award",certificate)
      const arr = []
      details.certifications.map((item)=>{
        arr.push(item)
      })
    // console.log('award',award)
    arr.push(certificate)
    setdetails({ ...details,certifications:arr});
    }

    function deleteCertificate(index){
      console.log("network",index)
      const arr = []
      details.certifications.map((item,i)=>{
        if(i != index)
        arr.push(item)
      })
      // console.log('intern',intern)
      // arr.push(intern)
      setdetails({ ...details,certifications:arr});
    }

    function addSkill(){
      const skill={
        name:document.getElementById("skillTitle").value,
        level:document.getElementById("skillLevel").value,
      }
      const arr = []
    details.skills.map((item)=>{
      arr.push(item)
    })
    // console.log('skill',skill)
    arr.push(skill)
    setdetails({ ...details,skills:arr});
    }
    
    function deleteSkill(index){
      console.log("network",index)
      const arr = []
      details.skills.map((item,i)=>{
        if(i != index)
        arr.push(item)
      })
      // console.log('intern',intern)
      // arr.push(intern)
      setdetails({ ...details,skills:arr});
    }


    function addLanguage(){
      const language={
        name:document.getElementById("languageTitle").value,
        level:document.getElementById("languageLevel").value,
      }
      const arr = []
    details.languages.map((item)=>{
      arr.push(item)
    })
    // console.log('skill',language)
    arr.push(language)
    setdetails({ ...details,languages:arr});
    }

    function deleteLanguage(index){
      console.log("network",index)
      const arr = []
      details.languages.map((item,i)=>{
        if(i != index)
        arr.push(item)
      })
      // console.log('intern',intern)
      // arr.push(intern)
      setdetails({ ...details,languages:arr});
    }


    function addHobby(){
      const hobby={
        name:document.getElementById("hobbyTitle").value,
      }
      const arr = []
    details.hobbies.map((item)=>{
      arr.push(item)
    })
    // console.log('hobby',hobby)
    arr.push(hobby)
    setdetails({ ...details,hobbies:arr});
    }

    function deleteHobby(index){
      console.log("network",index)
      const arr = []
      details.hobbies.map((item,i)=>{
        if(i != index)
        arr.push(item)
      })
      // console.log('intern',intern)
      // arr.push(intern)
      setdetails({ ...details,hobbies:arr});
    }

  return (
    <>
      {details && user &&(
        <div className="bg-gray-300 flex h-auto">
        
        <div className="w-[40%]">  

        <SideBar deleteHobby={deleteHobby} addHobby={addHobby} updateForm={updateForm} deleteAward={deleteAward} addAward={addAward} deleteCertificate={deleteCertificate} addCertificate={addCertificate} addSkill={addSkill} addInternship={addInternship} addLanguage={addLanguage} deleteLanguage={deleteLanguage} deleteSkill={deleteSkill} deleteInternship={deleteInternship} addEducation={addEducation} deleteEducation={deleteEducation} deleteSocialNetwork={deleteSocialNetwork} socialChange={socialChange}/>

        </div>


        {/* Resume */}


        <div className="bg-slate-200 h-[290mm] align-middle justify-center ">
        <div className="bg-gray-300 w-[210mm]  h-[292mm] overflow-auto drop-shadow-2xl  min-w-[210mm]">
          <div className="m-4 mt-10 mb-5  ">
            <div className="flex ml-4 mr-4 space-x-3 ">
              <div className="w-[37%] bg-white rounded-md p-3 ">
                {/* personal details */}
                <div>
                  <div>
                    <img
                      className="w-[85%] h-[30] p-1 pl-7 ml-4  pb-2 bg- rounded-lg"
                      src="https://randomuser.me/api/portraits/women/71.jpg"
                    ></img>
                    <p className="font-semibold text-2xl text pl-2 pb-1 font-sans tracking-wide text-center">
                      {details.personal.firstName} {details.personal.lastName}
                    </p>
                    {/* <p className="text-sm">{resume.personal.dob}</p> */}

                    {/* <p className="text-sm">{resume.personal.email}</p> */}
                    <div>
                      <div className=" pb-2 flex bg-gray-200 rounded-full">
                        {details.social.map((item) => (
                          <div key={item.network} className="mx-3 mt-2  justify-around">
                            <span>
                              <Link href={item.url}>
                                {/* <img
                                  src={
                                    "https://www." +
                                    item.network +
                                    ".com/favicon.ico"
                                  }
                                  className="w-5 "
                                /> */}
                              </Link>
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm pt-2 from-neutral-700">
                        {details.personal.phone}
                      </p>
                    
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

                    {details.languages.length != 0 && (
                      <div className="text-sm">
                        <p className="text-m font-semibold">LANGUAGES</p>
                        {details.languages.map((item) => (
                          <div key={item.name}>
                            <p>
                              {item.name} : {item.fluency}
                            </p>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    </div>
                  </div>
                </div>
              </div>
              {/* objective */}

              <div className="bg-white w-[70%]  rounded-md p-3 ">
                <p className="font-semibold text-3xl p-2 pb-3 bg-gray-200 rounded-full text-center">
                  {details.personal.role}
                </p>

                {details.personal.objective.length != 0 && (
                    <>
                  <span className="font-bold  m-2 rounded tracking-wide">
                  PROFILE
                  </span>
                  <br></br>
                  <div>
                   <p className="text-sm">{details.personal.objective}</p>
                  </div>
                  </>
                )}
                  <hr className="m-2"></hr>

                  {details.awards.length != 0 && (
                  <div>
                  <p className="font-bold  m-2 rounded ">AWARDS</p>
                  {details.awards.map((item) => (
                    <div key={item.name} className="text-sm p-1">
                      <p className="font-semibold">
                        {item.name} - [{item.date}]
                      </p>
                      <p>{item.awarder}</p>

                      {/* <p>{item.summary.data}</p> */}
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
                  )}
              </div>
            </div>
          </div>

          
          <div className="flex space-x-3 m-4 ">
          {details.education.length != 0 && (
            <div className="b-[60%] rounded-md ml-4 mr-1 bg-white p-2">
              <p className="font-bold  m-2 tracking-wide ">EDUCATION</p>
              {details.education.map((item) => (
                <div key={item.institution} className="text-sm p-1">
                  <p className="font-semibold">
                    {item.institution} [{item.startDate} - {item.endDate}]
                  </p>
                  <p>{item.fieldOfStudy}</p>
                  <p>{item.typeOfDegree}</p>
                  <p>{item.gpa}</p>

                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            )}

            {details.work.length != 0 && (
            <div className="bg-white w-[47%] rounded-md p-3 pr-1 ">
              <p className="font-bold tracking-wide  ">WORK</p>
              <p className="p-2"></p>
              {details.work.map((item) => (
                <div key={item.company}>
                  <Link href={item.website}>
                    <p className="text-blue-400">{item.company} </p>
                  </Link>
                  <p>
                    {" "}
                    [ {item.from}] - [{item.to}]
                  </p>
                  <p>{item.designation}</p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                </div>
              ))}
            </div>
            )}
          </div>
         <div className="flex space-x-3 m-4 ">
         {/* <div className="bg-white w-[40%] rounded-md ml-4 p-2">
            <p className="font-bold tracking-wide m-2">PROJECTS</p>
            {details.projects.map((item) => (
            <div key className="p-1">
                <Link href={item.website}>
                <p className="text-black font-bold">{item.name}</p>
                </Link>
                <p>
                [{item.from}]- [{item.to}]
                </p> */}
                  {/* <p>{item.summary.data}</p> */}
                  {/* <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div> */}
 
            {details.certifications.length != 0 && (
            <div className="bg-white w-[54%] rounded-md ml-5 p-2">
              <p className="font-bold  m-2 tracking-wide">CERTIFICATION</p>
              {details.certifications.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold">
                    {item.title} {item.date}
                  </p>
                  <p></p>
                  <p>{item.issuer}</p>
                  {/* <p>{item.summary.data}</p> */}
                 
                  <p>{item.enabled}</p>
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
