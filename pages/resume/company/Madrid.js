import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Madrid() {

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

        <div className="flex align-middle justify-center bg-zinc-400 h-[285mm] ">
        <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
      <div className="grid grid-cols-11">
        <div className="col-span-8">
        <div className=" p-1 px-1 flex bg-gray-300 h-52">
            <img
            className="rounded-lg w-[130px] h-36  border-4 border-yellow-400  ml-4 mt-2 mr-1 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
            alt="ProfilePhoto"/>
        <div>
          <h1 className="text-3xl font-medium p-2 ">
            {details.personal.firstName} {details.personal.lastName}
          </h1>
          <div>
            <h1 className="m-1 mt-0 ml-2 text-sm font-medium text-yellow-400">{details.personal.role}</h1>
          </div>
          <div>
            <p className="text-xs p-2 pt-0 font-medium">{details.personal.objective}</p>
          </div>
        </div>
        </div>
          
         <div>
          <h1 className="font-medium text-2xl ml-5 pt-4 mb-1 p-2">Employement History</h1>
                        {
                            details.work.map(item=>(
                                <div key={item.company}>
                                    <h1 className="font-medium text-lg ml-16 ">{item.company}</h1>
                                    <h2 className="font-medium ml-16 text-sm text-yellow-400">{item.from} - {item.to}</h2>
                                    <li className="ml-28 text-lg list-disc">{item.designation}</li>
                                    <li className="ml-28  list-disc ">{item. website}</li>
                                    {/* <p class="text-sm font-medium ml-14">{item.summary.data}</p> */}
                                </div>
                            ))
                        }

         </div>
         <div>
          
            <h1 className="font-medium text-2xl ml-5 pt-2 mb-1 p-2">Certifications</h1>
            {
              details.certifications.map(item=>(
                <div key={item.}>
                  <h1 className="text-sm ml-16 font-medium">{item.title}</h1>
                  <h6 className="text-xs ml-16 font-medium text-yellow-400">{item.date}</h6>
                  <li className="text-sm  font-medium ml-28">{item.summary.data}</li>
                </div>
              ))
            }
           </div>
           <div>
            <h1 className="font-medium text-2xl ml-5 pt-2 mb-1 p-2">Awards</h1>
            {
                details.awards.map(item=>(
                  <div>
                    <h1 className="font-medium ml-16">{item.name}</h1>
                    <h6 className="text-xs ml-16 font-medium text-yellow-400">{item.date}</h6>
                    <li className="ml-28 font-medium text-sm">{item.summary.data}</li>
                  </div>
                ))
            }

           </div>
        
          
          </div>
        <div className="col-span-3">
          <div className="bg-blue-800 h-52">
            <h1 className="font-bold  text-lg ml-12 pt-4 p-2">
              Social Network
            </h1>
            {details.social.map((item) => (
              <div className="ml-16 my-4 flex">
                <img
                  src={"https://www." + item.network + ".com/favicon.ico"}
                  alt=""
                  className="w-8 h-8 border-4 ml-0 mr-0 rounded-full border-yellow-400 "
                />
                <Link href={item.url}>
                  <h1 className="ml-4">{item.username}</h1>
                </Link>
              </div>
            ))}
          </div>
          <div class="bg-gray-300 h-[88%]">
            <div className="p-2">
              <h1 className="font-bold text-lg ml-8 pt-4 p-2">SKILLS</h1>
              {details.skills.map((item) => (
                <div>
                  <h1 className="font-medium ml-8 p-1">{item.name}</h1>
                  <h1 className="text-sm font-medium ml-9 ">{item.level}</h1>
                </div>
              ))}
            </div>
            <div className="p-2 px-0">
              <h1 className="font-medium text-xl ml-6 mb-0 p-2">Education</h1>
              {details.education.map((item) => (
                <div className="p-1">
                  <h1 className=" ml-6 text-sm font-medium">{item.institution}</h1>
                  <h6 className="text-xs ml-6 font-medium text-yellow-500">
                    {item.startDate} - {item.endDate}
                  </h6>
                  <li className="ml-10 text-normal font-medium">{item.fieldOfStudy}</li>
                </div>
              ))}
            </div>
            <div className="p-2">
              <h1 className="font-medium text-xl ml-6 mb-0 p-2"> Hobbies</h1>
              {
                details. hobbies.map((item)=>(
                  <div>
                    <li className="font-normal ml-10 text">{item.name}</li>
                  </div>
  
                ))
              }
            </div>
            <div className="p-2">
              <h1 className=" text-lg font-medium ml-6 mb-0 p-2">Languages</h1>
              {
                details.languages.map((item)=>(
                  <div>
                    <li className="font-normal ml-10 tex-sm">{item.name}</li>
                  </div>
  
                ))
              }
            </div>
            <div className="p-2">
              <h1 className=" text-lg font-medium ml-6 ">Projects</h1>
              {
                details.projects.map((item)=>(
                  <div className="p-2">
                    <li className="font-medium ml-8 tex-lg">{item.name}</li>
                    <h6 className="text-xs ml-8 font-medium text-yellow-500">{item.from} - {item.to}</h6>
                    
                  </div>
  
                ))
              }
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
