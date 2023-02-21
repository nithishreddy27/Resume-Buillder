import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Ruby() {

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



        <div>
      
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[296mm] bg-white min-w-[210mm]">
          <div className="grid grid-cols-3">
            <div className=" bg-red-700 h-[296mm]">
              <div className="ml-8 bg-gray-200 h-[296mm] p-4">
                <div className="">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                    alt="ProfilePhoto"
                  />
                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
                    Personal Details
                  </h1>
                  <div>
                    <i className="bx bxs-user"></i>
                    <span class="text-sm font-semibold ">
                      {details.personal.firstName} {details.personal.lastName}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-mail"></i>
                    <span class="text-sm font-semibold m-0.5">
                      {details.personal.email}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-phone"></i>
                    <span class="text-sm font-semibold m-0.5">
                      {details.personal.phone}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-calendar"></i>
                    <span class="text-sm font-semibold m-0.5">
                      {details.personal.dob}
                    </span>
                  </div>

                  {details.social.length !=0  && (
                  <div>
                    <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
                      Social
                    </h1>
                    {details.social.map((item) => (
                      <div className="text-sm font-semibold m-0.5" key={item.network}>
                        <a href="{item.url}">{item.network}</a>
                      </div>
                    ))}
                  </div>
                  )}
                </div>

                {details.skills.length !=0  && (
                <div>
                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
                    Skills
                  </h1>
                  {details.skills.map((item) => (
                    <div key={item.name}>
                      <h1 className="text-sm font-semibold m-0.5">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div>
                )}

                {details.awards.length !=0  && (
                <div>
                  <h1 className="text-red-700 text-xl font-semibold mt-4 mb-1">
                    Awards
                  </h1>
                  {details.awards.map((item) => (
                    <div className="py-1" key={item.name}>
                      <h1 className="text-sm font-bold relative m-0.5">
                        {item.name}
                      </h1>
                      <p className="text-sm font-semibold m-0.5">
                        {item.awarder}
                      </p>
                    </div>
                  ))}
                </div>
                )}

                {details.hobbies.length !=0  && (
                <div>
                  <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                    Hobbies
                  </h1>
                  {details.hobbies.map((item) => (
                    <div key={item.name}>
                      <h1 className="text-sm font-semibold m-0.5">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div>
                )}

                {details.languages.length !=0  && (
                <div>
                  <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                    Languages
                  </h1>
                  {details.languages.map((item) => (
                    <div key={item.name}>
                      <h1 className="text-sm font-semibold m-0.5">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div>
                )}
              </div>
            </div>
            <div className="col-span-2 p-6">
              <h1 className="text-red-700 text-4xl font-">
                {details.personal.firstName} {details.personal.lastName}
              </h1>

              {details.personal.objective.length !=0  && (
              <div>
                <h1 className="text-red-700 text-xl font-semibold mt-4">
                  Profile
                </h1>
                <p className="text-sm">{details.personal.objective}</p>
              </div>
              )}

              {details.work.length !=0  && (
              <div>
                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                  Work
                </h1>
                {details.work.map((item) => (
                  <div key={item.company} className="py-1">
                    <h1 className="text-sm font-bold relative">
                      {item.company}
                      <span className="text-sm text-red-700 absolute right-0">
                        {item.from} - {item.to}
                      </span>
                    </h1>
                    <p className="text-sm font-semibold">{item.designation}</p>
                    <p class="text-sm">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              )}


              {details.education.length !=0  && (
              <div>
                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                  Education
                </h1>
                {details.education.map((item) => (
                  <div className="py-1" key={item.institution}>
                    <h1 className="text-sm font-bold relative">
                      {item.institution}
                      <span className="text-sm text-red-700 absolute right-0">
                        {item.startDate} - {item.endDate}
                      </span>
                    </h1>
                    <p className="text-sm font-semibold">{item.fieldOfStudy}</p>
                    <p class="text-sm">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              )}

{/*               
              <div>
                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                  Projects
                </h1>
                {details.projects.map((item) => (
                  <div className="py-1" key={item}>
                    <h1 className="text-sm font-bold relative">
                      {item.name}
                      <span className="text-sm text-red-700 absolute right-0">
                        {item.from} - {item.to}
                      </span>
                    </h1>
                    <p className="text-sm font-semibold">{item.website}</p>
                    <p class="text-sm">{item.summary.data}</p>
                  </div>
                ))}
              </div> */}

              {details.certifications.length !=0  && (
              <div>
                <h1 className="text-red-700 text-xl font-semibold mt-3 mb-1">
                  Certifications
                </h1>
                {details.certifications.map((item) => (
                  <div className="py-1" key={item.title}>
                    <h1 className="text-sm font-bold relative">
                      {item.title}
                      <span className="text-sm text-red-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <p className="text-sm font-semibold">{item.issuer}</p>
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
