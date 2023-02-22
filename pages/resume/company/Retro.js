import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Retro() {

  const user = useUser()
  const { details, setdetails  } = useContext(ResumeContext);
  

  useEffect(()=>{
    if(user){
      setdetails({...details,personal:{...details.personal , email:user.email,firstName:user.profile.firstName , lastName : user.profile.lastName}})
    }
  },[user])
 


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



        <div className="bg-slate-200 h-[290mm]">
      <div className="bg-white  w-[210mm] h-[297mm] drop-shadow-2xl mx-auto">
        <div className="bg-white p-2 flex space-x-5">
          <div className="flex-col w-[100%]">
            <div className="m-3">
              <img
                className="w-[20%] h-[120%]"
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>
            </div>

            {details.languages.length != 0 && (
            <div className="flex">
              {details.social.map((item) => (
                <div key={item.network} className="mx-3 ml-5 pb-4  mt-3 ">
                  <span>
                    <Link href={item.url}>
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        className="w-5 "
                      />
                    </Link>
                  </span>
                </div>
              ))}
            </div>
            )}

          </div>
          <div className="flex-col mt-2 ml-3">
          
            <div className="">
              <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 ">
                PROFILE
              </p>

              <p className="text-sm text-black p-3 pl-2 pt-2">
                {details.personal.objective}
              </p>
            </div>
          

          </div>
        </div>
        <div className="">
          <div>
            <div className="flex-col bg-black pt-3 pb-2">
              <span className="  text-3xl  bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
                {details.personal.role}
              </span>
              <span className=" text-5xl pl-[10%] text-white tracking-wide text-right font-serif ">
                {details.personal.firstName} {details.personal.lastName}
              </span>
            </div>
          </div>
          <div className="flex  text-lg m-4">
            <div className="font-col bg-gray-200">
            {details.skills.length != 0 && (
              <div className="p-2  bg-gray-50">
                <p className="text-black text-lg font-bold tracking-wider pb-3">
                  SKILLS
                </p>
                {details.skills.map((item) => (
                  <div key={item.name}>
                    <span className="text-lg font-semibold ">
                      <li>
                        {item.name} - {item.level}
                      </li>
                    </span>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
            )}

             {details.languages.length != 0 && (
              <div className="text-lg bg-gray-50 pb-2">
                <p className="text-black font-bold tracking-wider  p-1 px-3 py-1">
                  LANGUAGES
                </p>
                {details.languages.map((item) => (
                  <div key={item.name}>
                    <p className="pl-6">
                      {item.name} : {item.fluency}
                    </p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
             )}


            {details.awards.length != 0 && (
              <div className="pt-2 pb-2 bg-gray-100">
                <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                  AWARDS
                </p>
                {details.awards.map((item) => (
                  <div key={item.nam} className="text-lg  ml-3">
                    <li className="font-semibold">{item.awarder}</li>
                    <p> [{item.date}] </p>
                    <p>{item.name}</p>
                    {/* <p>{item.summary.data}</p> */}
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
            )}

{/* 
              <div className=" pt-1 pb-3 bg-gray-200">
                <p className="text-black font-bold tracking-wider  p-1 px-2 pt-3   ">
                  PROJECTS
                </p>

                {resume.projects.map((item) => (
                  <div className=" ml-2 text-black ">
                    <p className="">
                      [{item.from}] - [{item.to}]
                    </p>
                    <Link href={item.website}>
                      <p className="font-semibold ml-1 tracking-wider">
                        {item.name}
                      </p>
                    </Link>
                    
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                    <p className="p-2"> </p>
                  </div>
                ))}
              </div> */}

            </div>
            <div className="font-col">
            {details.education.length != 0 && (  
              <div className="pl-2 ">
                <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 ">
                  EDUCATION
                </p>
                <hr></hr>
                {details.education.map((item) => (
                  <div key={item.institution} className="text-base p-2 text-black ">
                    <p className="font-semibold text-black ">
                      {item.institution} [{item.startDate} - {item.endDate}]
                    </p>
                    <p>{item.fieldOfStudy}</p>
                    <p>{item.typeOfDegree}</p>
                    <p>{item.gpa}</p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
            )}

            {details.certifications.length != 0 && (
              <div>
                <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-2 ">
                  CERTIFICATION
                </p>
                <hr className="m-3"></hr>
                {details.certifications.map((item) => (
                  <div key={item.title} className="pt-4 text-black mx-3 ">
                    <p className="font-semibold">
                      {item.title} [{item.date}]
                    </p>
                    <p></p>
                    <p>{item.issuer}</p>
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
      </div>
    </div>

      </div>
      )}
    </>
  );
}
