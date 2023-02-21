import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Classic() {

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



        <div className="bg-pink-100 h-[290mm] align-middle justify-center ">
        <div className="bg-gray-50 w-[210mm] h-[297mm] m-2  mx-auto">
          <div className="flex-grow space-x-2 border-separate">
            <div className="flex pt-3 pb-2  bg-black border-solid text-black  ">
              <img
                className="w-[20%] h-[30] p-3 pb-5 pl-7  "
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>

              <div className="pt-5">
                <p className=" text-center text-white text-4xl pl-9 tracking-wide font-serif m-4 mt-5 ml-8">
                  {details.personal.firstName} {details.personal.lastName}
                </p>
                <p className="  text-3xl  text-white justify pl-[14%] text tracking-wider font-thin mb-3 ml-11">
                  {details.personal.role}
                </p>
              </div>
              <div>

              {details.social.length != 0 && (
                <div className=" pb-2 rounded-md flex bg-gray-50 m-14">
                  {details.social.map((item) => (
                    <div key={item.network} className="mx-3 mt-2 ">
                      <span>
                        <Link href={item.url}>
                          <img
                            src={
                              "https://www."+item.network+".com/favicon.ico"
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
          <div className="flex m-5">
            <div className="flex flex-grow w-[100%]">
              <div className="">
                <div className=" bg-gray-50 ">
                  <div className=" m-4 ">
                    <p className="bg-gray-800 text-white p-1 w-[100%] rounded-md mt-3 text-center">
                      PROFILE
                    </p>
                    <p className="text-sm p-1 pt-4">{details.personal.objective}</p>
                  </div>
                  <div>
                    {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">
                  PERSONAL
                </span> */}
                    

                {details.education.length != 0 && (
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

                 {details.education.length != 0 && (
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
        
                {details.education.length != 0 && (
                    <div className="p-2 ">
                      <p className="bg-gray-800 text-center rounded-md text-white p-1 m-1 ">
                        EDUCATION
                      </p>

                      {details.education.map((item) => (
                        <div key={item.institution} className="text-base p-2">
                          <p className="font-semibold">{item.institution}</p>
                          <p>
                            {" "}
                            [{item.startDate}] - [{item.endDate}]
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

                   {details.skills.length != 0 && (
                    <div className="p-2">
                      <p className="bg-gray-800 rounded-md text-center text-white p-1 mx-2 my-1">
                        SKILLS
                      </p>
                      {details.skills.map((item) => (
                        <div key={items.name} className="pt-2">
                          <span className="text-base font-semibold p-2">
                            {item.name} - {item.level}
                          </span>
                          <p>{item.enabled}</p>
                        </div>
                      ))}
                    </div>
                   )}
                  </div>

                  {/* {details.languages.length != 0 && (
                  <div className="  p-3">
                    <p className="bg-gray-800 rounded-md text-center text-white p-1 mx-2 my-1">
                      PROJECTS
                    </p>
                    {resume.projects.map((item) => (
                      <div className="p-1 ">
                        <Link href={item.website}>
                          <p className="font-bold text-lg tracking-wider">
                            {item.name}
                          </p>
                        </Link>
                        <p>{item.summary.enabled}</p>
                        <p>{item.enabled}</p>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
            <div className="flex bg-pink-300 min-w-[60%] p-3">
               <div className="bg-gray-50 "> 
             
                <>
                <h1 className="bg-gray-800 text-white mt-1 p-1 text-center rounded-md ">NETWORK</h1>
                <div>
                  <p className=" font-semibold text-md tracking-wider">{details.personal.phone}</p>
                  <p className=" font-semibold text-md tracking-wider">{details.personal.email}</p>
                </div>
                 </>
              
              
              {details.work.length != 0 && (
                <>
                <p className="bg-gray-800 text-white mt-1 p-1 text-center rounded-md ">WORK</p>
                {details.work.map((item) => (
                  <div key={item.company} className="m-2">
                    <Link href={`{item.website}$`}>
                      <p className=" font-bold text-lg tracking-wider">
                        {item.company}{" "}
                      </p>
                    </Link>
                    <p>
                      [ {item.from}] - [{item.to}]
                    </p>
                    <p>{item.designation}</p>
                    {/* <p>{item.summary.data}</p> */}
                    <p>{item.summary.enabled}</p>
                  </div>
                ))}
                </>
              )}
                <div>
                {details.awards.length != 0 && (
                  <div className="mt-5">
                    <p className="bg-gray-800 rounded-md text-center  text-white p-1 m-1 ">
                      AWARDS
                    </p>
                    {details.awards.map((item) => (
                      <div key={item.name} className="text-sm pt-4">
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

                {details.certifications.length != 0 && (
                  <div className="mt-5">
                    <p className="bg-gray-800 rounded-md mt-2 text-center text-white p-1 m-1 ">
                      CERTIFICATION
                    </p>
                    {details.certifications.map((item) => (
                      <div key={item.title} className="pt-4">
                        <p className="font-semibold">
                          {item.title} [{item.date}]
                        </p>
                        <p></p>
                        <p>{item.issuer}</p>
                     
                        
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

      </div>
      
    </div>

)}
</>
);
}