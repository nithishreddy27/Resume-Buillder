import React, { useContext, useEffect } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";

export default function Berlin() {

  const user = useUser()

  


  
  const resume = demoResume();
  
  
  const { details, setdetails  } = useContext(ResumeContext);
  
  // setdetails({ ...details, personal: { ...details.personal, email:email } });


  useEffect(()=>{
    if(user){
      console.log("inside")
    setdetails({ ...details, personal: { ...details.personal, email:user.email, firstName:user.profile.firstName , lastName:user.profile.lastName } });
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



    function addInternship(){

      const intern={
        company:document.getElementById("company").value,
        designation:document.getElementById("position").value,
        website:document.getElementById("website").value,
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


    function addAward(){

      const award={
        name:document.getElementById("awardTitle").value,
        awarder:document.getElementById("awarder").value,
        date:document.getElementById("awardDate").value,
        summary:{
          data:document.getElementById("awardSummary").value,
        }
      }
      const arr = []
    details.awards.map((item)=>{
      arr.push(item)
    })
    // console.log('award',award)
    arr.push(award)
    setdetails({ ...details,awards:arr});
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


  return (
    <>
      {user && (
        <div className="bg-gray-300 flex h-auto">
        <div className="w-[40%]">
          form elements
          <form action="" className="flex flex-col p-5">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="personal"
              id="firstName"
              className="w-[50%] my-2"
              value={details.personal.firstName}
              onChange={()=>console.log("no")}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="personal"
              id="lastName"
              className="w-[50%] my-2"
              value={details.personal.lastName}
              onChange={()=>console.log("no")}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="personal"
              id="phone"  
              className="w-[50%] my-2"
              value={details.personal.phone}
              onChange={updateForm}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="personal"
              id="email"
              className="w-[50%] my-2"
              value={details.personal.email}
              onChange={()=>console.log("no")}
            />

            <label htmlFor="email">Objective</label>
            <input
              type="textarea"
              name="personal"
              id="objective"
              className="w-[50%] my-2"
              value={details.personal.objective}
              onChange={updateForm}
            />

            <label htmlFor="social-network">Social Network</label>

          </form>
          


          <div className="flex flex-col w-[75%] p-10">
            {/* <form  className="flex flex-col w-[75%] p-5" > */}
                <label htmlFor="network">Network</label>
                <input type="text" name="social" id="network" />
                <label htmlFor="url">Url</label>
                <input type="text" name="social" id="url" />
                <label htmlFor="network">username</label>
                <input type="text" name="social" id="username" />
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={socialChange}>Submit</button>
            {/* </form> */}
          </div>

          <div className="flex flex-col w-[75%] p-10">
            <h1>Internships</h1>
            <label htmlFor="company">Company</label>
                <input type="text" name="internship" id="company" />

                <label htmlFor="position">Position</label>
                <input type="text" name="internship" id="position" />

                <label htmlFor="fieldOfStudy">Field Of Study</label>
                <input type="text" name="internship" id="fieldOfStudy" />

                <label htmlFor="startdate">Start Date</label>
                <input type="date" name="internship" id="startdate" />
                <label htmlFor="enddate">End Date</label>
                <input type="date" name="internship" id="enddate" />
                
                <label htmlFor="summary">Summary</label>
                <input type="text" name="internship" id="summary" />
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addInternship}>Submit</button>
          </div>

          <div className="flex flex-col w-[75%] p-10">
            <h1>Education</h1>
            <label htmlFor="TypeOfDegree">TypeOfDegree</label>
                <input type="text" name="education" id="TypeOfDegree" />

                <label htmlFor="school">School</label>
                <input type="text" name="education" id="school" />

                <label htmlFor="EductionFieldOfStudy">FieldOfStudy</label>
                <input type="text" name="education" id="EducationFieldOfStudy" />


                <label htmlFor="grade">grade</label>
                <input type="text" name="education" id="grade" />


                
                <label htmlFor="startdate">Start Date</label>
                <input type="date" name="education" id="Educationstartdate" />

                <label htmlFor="enddate">End Date</label>
                <input type="date" name="education" id="Educationenddate" />
                
                <label htmlFor="summary">Summary</label>
                <input type="text" name="education" id="summary" />
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addEducation}>Submit</button>
          </div>

          <div className="flex flex-col w-[75%] p-10">
            <h1>Awards</h1>
            <label htmlFor="awardTitle">Title</label>
                <input type="text" name="award" id="awardTitle" />

                <label htmlFor="awarder">awarder</label>
                <input type="text" name="award" id="awarder" />

                <label htmlFor="awarddate">Award Date</label>
                <input type="date" name="award" id="awardDate" />

                
                <label htmlFor="awardSummary">Summary</label>
                <input type="text" name="award" id="awardSummary" />
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addAward}>Submit</button>
          </div>

          <div className="flex flex-col w-[75%] p-10">
            <h1>Skils</h1>
                <label htmlFor="awardTitle">Title</label>
                <input type="text" name="skill" id="skillTitle" />
                
                <label htmlFor="skillLevel">Level</label>
                <select name="skillValue" className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" id="skillLevel">
                          <option value="beginner" >Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advance">Advance</option>
                </select>
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addSkill}>Submit</button>
          </div>


          <div className="flex flex-col w-[75%] p-10">
            <h1>Language</h1>
                <label htmlFor="languageTitle">Title</label>
                <input type="text" name="language" id="languageTitle" />
                
                <label htmlFor="languagelLevel">Level</label>
                <select name="language" className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" id="languageLevel">
                          <option value="beginner" >Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advance">Advance</option>
                </select>
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addLanguage}>Submit</button>
          </div>


          <div className="flex flex-col w-[75%] p-10">
            <h1>Hobby</h1>
                <label htmlFor="hobbyTitle">Title</label>
                <input type="text" name="language" id="hobbyTitle" />
                
                
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addHobby}>Submit</button>
          </div>

     {/* 
          <div className="my-10 mx-5">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <button
                onClick={() => {append({ name: "" })
                                addFormElement()}}
                className="bg-green-200 p-2 rounded-full"
              >
                Add Education
              </button>
              <div className="flex flex-col">
                {fields.map(({ id }, index) => {
                  return (
                    <div key={id} className="flex">
                      <label
                        htmlFor="name"
                        className="m-2 text-xl font-semibold my-2"
                      >
                        Enter Network:
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border-none rounded w-[20%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2 "
                        {...register(`test.${index}.name`)}
                        id={`name`+`${index}`}
                        value={details.social[index].network}
                        onChange={socialChange}
                        number={index}
                      />
                      <label
                        htmlFor="username"
                        className="m-2 text-xl font-semibold my-2"
                      >
                        Enter username:
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border-none rounded w-[20%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2 "
                        {...register(`roll.${index}.name`)}
                        id="roll"
                        value={details.social[index].username}
                        onChange={socialChange}

                      />
                      <button
                        onClick={() => remove(index)}
                        className="bg-red-200 mx-4 rounded-full p-2"
                      >
                        remove
                      </button>
                    </div>
                  );
                })}
              </div>
              <input
                type="submit"
                value="Submit"
                className="bg-gradient-to-r from-cyan-500 focus:ring-2 to-blue-500 font-semibold cursor-pointer block w-[10%] text-white h-10 rounded-md "
              />
            </form>
          </div> */}
          

        </div>





        {/* Resume */}

        <div className="bg-gray-300 flex align-middle justify-center h-[290mm]">
      <div className="bg-slate-50 w-[210mm] h-[285mm] m-5 overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
        <div className="w-[35%] z-10 bg-slate-800 h-[100] p-5">
          <div className="mt-44">
            <h1 className="text-2xl  tracking-[2px] text-white">CONTACT</h1>
            <hr className="h-[2px] bg-black my-2" />
            <div className="flex">
              <span>
                <img
                  src="https://www.freeiconspng.com/uploads/phone-icon-16.png"
                  className="w-5 h-5"
                />
              </span>
              <h1 className="mx-4 text-white">{details.personal.phone}</h1>
            </div>
            <div className="flex my-1">
              <span>
                <img
                  src="https://www.freeiconspng.com/uploads/icon-email-icon-clip-art-at-clker-com-vector-qafaq-e-mail-icon-trace--0.png"
                  className="w-7 h-7"
                />
              </span>
              <h1 className="mx-2 text-white">{details.personal.email}</h1>
            </div>
            {details.social.map((item) => (
              <div className="my-3 flex">
                <span>
                  <img
                    src={"https://www." + item.network + ".com/favicon.ico"}
                    alt=""
                    srcset=""
                    className="w-5 grayscale-[40%]   "
                  />
                </span>

                <Link href={item.url}>
                  <span className="mx-4 text-white">{item.username}</span>
                </Link>
              </div>
            ))}
            <h1 className="text-2xl mt-4 tracking-[2px] text-white">SKILLS</h1>
            <hr className="h-[2px] bg-black my-2" />

            <div>
              {details.skills.map((item) => (
                <div className="flex">
                <p className="mx-1   text-white my-2 w-[70%] text-sm">{item.name}</p>
                {   
                    item.level=="Beginner" && 
                    // <p className="text-white"></p>   
                    <div className="w-[40%] h-2 relative rounded-md left-0 bg-white   mt-5">
                        <div className="w-[66%] absolute right-0 bg-black h-2"></div>
                    </div>
                }
                {
                    item.level == "Intermediate" &&
                    <div className="w-[40%] h-2 relative rounded-md left-0 bg-white  mt-5">
                    <div className="w-[33%] absolute right-0 bg-black h-2"></div>
                </div> 

                }
                {
                    item.level == "Expert" &&
                    <div className="w-[40%] h-2 relative rounded-md  left-0 bg-white  mt-5">
                    <div className="w-[1%] absolute right-0 bg-black h-2"></div>
                </div> 
                    // <p className="text-white">exp</p>  

                    

                }
                </div>
                
              ))}
            </div>

            <div className="mt-5">
              <h1 className="text-2xl  text-white  tracking-[2px]">
                LANGUAGES
              </h1>
              <hr className="h-[2px] my-1" />
              {resume.languages.map((item) => (
                <p className="my-2 text-white">{item.name}</p>
              ))}
            </div>

            <h1 className="text-2xl  tracking-[2px] text-white mt-5">
              AWARADS
            </h1>
            <hr className="h-[2px] bg-black mt-1 mb-4 " />
            {details.awards.map((item) => (
              <div className="my-2">
                <span className="font-semibold text-[15px] text-white">
                  {item.name} 
                </span>

                <p className="mx-4 text-white opacity-60">
                  {item.summary.data.slice(0, 38)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[65%] z-10 bg-slate-300 p-5">
          <div className="mt-48">
                <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        OBJECTIVE
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
            <p className="text-sm">{details.personal.objective}</p>
          </div>
          <div className="mt-5">
                <div className="flex">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        EDUCATION
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
                {
                        details.education.map(item=>(
                            <div className="mt-4">
                          <h1 className="font-semibold">{item.institution} <span className="font-medium">({item.startDate.slice(0,4)}-{item.endDate.slice(0,4)})</span> </h1> 

                          <p className="ml-5">{item.typeOfDegree}</p>
                          <p className="ml-5 my-1">{item.summary.data}</p>
                          <p className="ml-5">GPA-{item.gpa}</p>
                            </div>
                        ))

                    }
          </div>
          <div className="mt-5">
                <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        PROJECTS
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
                {/* {
                    details.projects.map(item=>(
                        <div className="mt-4">
                      <Link href={item.website}><h1 className="font-semibold">{item.name} <span className="font-medium">({item.from.slice(0,4)}-{item.to.slice(0,4)})</span> </h1> </Link>

                      <span className="ml-5 text-sm">{item.summary.data}</span>
                        </div>
                    ))
                } */}
          </div>
          <div className="mt-2">
                <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        CERTIFICATIONS
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
                {details.certifications.map((item) => (
              <p className="my-2">{item.title}</p>
            ))}
          </div>
          
          
        </div>

        <div className="absolute w-[100%] h-28 bg-cyan-800 z-20 top-9 flex">
          <div>
            {
              <>
                <h1 className="text-3xl mt-7 ml-24 font-semibold tracking-widest text-white ">
                  {details.personal.firstName.concat(
                    "  " + details.personal.lastName
                  )}
                </h1>
                <p className="mt-2 ml-36 tracking-widest text-white">
                  {details.personal.role}
                </p>
              </>
            }
          </div>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/40.jpg"
          alt=""
          className=" absolute top-6 right-10 z-30 h-32 rounded-full border-white border-4  "
        />
      </div>
    </div> 

        
      </div>
      )}
    </>
  );
}
