import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { useUser } from '../../lib/hooks'
import ResumeContext from "../../context/ResumeContext";
import SideBar from '../../components/SideBar';
import Link from "next/link"

export default function Slug() {
  const router = useRouter()
  const q = router.query
  const user = useUser()
  const { details, setdetails, setdemo, demo ,id,setid } = useContext(ResumeContext);


  useEffect(()=>{
    if(q){
      setid(q.slug)
    }
  },[q])

  useEffect(()=>{
    if(user){
      getResume(user.email)
    }
  },[user])


  async function getResume(email){
    const resumeDetails ={email:email,id:q.slug}
    console.log("resumeDetails",resumeDetails)
    var data = await fetch("../api/test/getRes",{
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(resumeDetails)
    })
    var resume = await data.json()
    // console.log("resume in slug after fetch",resume)
    setdetails(resume.resume)
  }

  return (
    <div>

      {details && user && (
        <div>
          {details.role}
          <div className="flex border border-white">
          <SideBar/>


          <div className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    
                    id="largeResume"
                    // style={{ color: color.hex }}
                  >
                    <div className=" w-[35%] bg-gray-200 p-6">
                      <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
                        <img
                          src="https://randomuser.me/api/portraits/men/40.jpg"
                          alt=""
                          className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                        />
                      </div>
                      <div className="mt-48">
                        <h1 className="text-2xl font-semibold tracking-[2px] heading">
                          CONTACT
                        </h1>
                        <hr className="h-[2px] bg-black my-1" />
                        {
                          <>
                            <div className="flex">
                              <span>
                                <img
                                  src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                                  className="w-5 h-5"
                                />
                              </span>
                              <h1 className="mx-4">{details.personal.phone}</h1>
                            </div>
                            <div className="flex my-1">
                              <span>
                                <img
                                  src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                                  className="w-7 h-7"
                                />
                              </span>
                              <h1 className="mx-2">{details.personal.email}</h1>
                            </div>

                            {details.social.length != 0 && (
                              <>
                                {details.social.map((item) => (
                                  <>
                                   {item.enabled && (
                                    <div className="my-3 flex" key={item.network}>
                                    <span>
                                      <img
                                        src={
                                          "https://www." +
                                          item.network +
                                          ".com/favicon.ico"
                                        }
                                        alt=""
                                        className="w-5 grayscale-[40%]"
                                      />
                                    </span>
  
                                    <Link href={item.url}>
                                      <span className="mx-4">
                                        {item.username}
                                      </span>
                                    </Link>
                                  </div>
                                  )}
                                  </>
                                ))}
                              </>
                            )}
                          </>
                        }
                      </div>
                      {details.skills.length != 0 && (
                        <div className="mt-4">
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
                            SKILLS
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.skills.map((item) => (
                            <li className="mx-4" key={item.name}>
                              {item.name}
                            </li>
                          ))}
                        </div>
                      )}

                      
                      {details.languages.length != 0 && (
                        <div className="mt-4">
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
                            LANGUAGES
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.languages.map((item) => (
                            <p className="my-2" key={item.name}>
                              {item.name}
                            </p>
                          ))}
                        </div>
                      )}
                      {details.hobbies.length != 0 && (
                        <div className="mt-4">
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
                            HOBBIES
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.hobbies.map((item) => (
                            <p className="my-2" key={item.name}>
                              {item.name}
                            </p>
                          ))}
                        </div>
                      )}
                      {details.awards.length != 0 && (
                        <>
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
                            AWARADS
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {details.awards.map((item) => (
                            <div className="my-2" key={item.name}>
                              <span className="font-semibold text-[15px]">
                                {item.name} ({item.date})
                              </span>
                              <span className="mx-2 text-[15px]"></span>
                              <p className="mx-4">
                                {item.summary.data.slice(0, 38)}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <div className={` w-[70%] pt-10 px-5`}>
                      <div>
                        <h1 className="text-5xl font-semibold tracking-wider">
                          {details.personal.firstName}
                        </h1>
                        <h1 className="text-3xl  tracking-[4px] mt-2">
                          {details.personal.lastName}
                        </h1>
                        {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                      </div>

                      <div className="mt-12">
                        {details.personal.objective.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] heading">
                              OBJECTIVE
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            <p className="text-sm">
                              {details.personal.objective}
                            </p>
                          </>
                        )}

                        {details.work.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                              WORK
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />

                            <div className="ml-1 mt-1">
                              {details.work.map((item) => (
                                <div className="flex" key={item.company}>
                                  <div className="pt-1">
                                    <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                    <div className="w-1 bg-black h-24 m-1"></div>
                                  </div>
                                  <div className="ml-5 mt-1">
                                    <p className="font-semibold">
                                      {item.from.slice(0, 4)} -{" "}
                                      {item.to.slice(0, 4)}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.company}
                                    </p>
                                    <p className="font-bold">
                                      {item.designation}
                                    </p>
                                    <p className="mb-4 text-sm">
                                      {item.summary.data}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}



                        {details.projects.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                              PROJECTS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />

                            <div className="ml-1 mt-1">
                              {details.projects.map((item) => (
                                <div className="flex" key={item.name}>
                                  <div className="pt-1">
                                    <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                    <div className="w-1 bg-black h-24 m-1"></div>
                                  </div>
                                  <div className="ml-5 mt-1">
                                    <p className="font-semibold">
                                      {item.from} to {item.to}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.name}
                                    </p>
                                    <p className="tracking-[2px] my-1">
                                      {item.domain}
                                    </p>

                                    <p className="mb-4 text-sm">
                                      {item.summary.data}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}



                        {details.education.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                              EDUCACTION
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            <div className="ml-1 mt-1">
                              {details.education.map((item) => (
                                <div className="flex" key={item.institution}>
                                  <div className="flex">
                                    <div className="pt-1">
                                      <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                      <div className="w-1 bg-black h-28 m-1"></div>
                                    </div>
                                    <div className="ml-5 mt-1">
                                      <p className="font-semibold">
                                        {item.startDate.slice(0, 4)} -{" "}
                                        {item.endDate.slice(0, 4)}
                                      </p>
                                      <p className="tracking-[2px]">
                                        {item.institution}
                                      </p>
                                      <p className="font-bold">
                                        {item.fieldOfStudy}
                                      </p>
                                      <p className="">{item.typeOfDegree}</p>
                                      <p className="mb-4 font-semibold">
                                        GPA-{item.gpa}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {details.certifications.length != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                              CERTIFICATIONS
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            <div className="ml-1 mt-1">
                              {details.certifications.map((item) => (
                                <div className="flex" key={item.institution}>
                                  <div className="flex">
                                    <div className="pt-1">
                                      <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                      <div className="w-1 bg-black h-20 m-1"></div>
                                    </div>
                                    <div className="ml-5 mt-1">
                                      <p className="tracking-[2px]">
                                        {item.title}
                                      </p>
                                      <p className="font-bold">{item.date}</p>
                                      <p className="">{item.issuer}</p>
                                      <p className="mb-4 font-semibold">
                                        {item.summary.data}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                   
          
          </div>
          </div>
        </div>
      )}


    </div>
  )
}

