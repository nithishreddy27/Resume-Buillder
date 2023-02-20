import React, { useContext } from 'react'
import ResumeContext from '../context/ResumeContext';

export default function SideBar() {
  const { details, setdetails  } = useContext(ResumeContext);

  return (
    <div>
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
          <div className="p-10">

          {details.social.length !=0  && (
            <>
                    {details.social.map((item,index) => (
                    <div className="my-3 flex" key={item.network}>
                      <span>
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          className="w-5 grayscale-[40%]"
                        />
                      </span>

                      <Link href={item.url}>
                        <span className="mx-4">{item.username}</span>
                      </Link>

                      <button onClick={()=>deleteSocialNetwork(index)}>Delete</button>
                    </div>
                  ))}
                    </>
                  )}

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
          <div className="ml-1 mt-1">
                {details.work.map((item,index) => (
                  <div className="flex" key={item.company}>
                    
                    <div className="ml-5 mt-1">
                      
                      <p className="tracking-[2px] my-1">{item.company}</p>
                    
                    </div>
                    <button onClick={()=>{deleteInternship(index)}}>Delete</button>
                  </div>
                ))}
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

          <div>
          {details.education.length != 0 && (
              <>
              
              <div className="ml-1 mt-1">
                {details.education.map((item,index) => (
                  <div className="flex" key={item.institution}>
                    <div className="flex justify-around p-10">
                        <p className="tracking-[2px]">{item.institution}</p>
                        <p className="font-bold">{item.fieldOfStudy}</p>
                        
                        <button onClick={()=>{deleteEducation(index)}}>Delete</button>
                    
                    </div>
                  </div>
                ))}
              </div>
              </>
             )}
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


          <div>
          {details.awards.length != 0 && (
            <>
            {details.awards.map((item,index) => (
              <div className="my-2" key={item.name}>
                <span className="font-semibold text-[15px]">
                  {item.name} 
                </span>
                <button onClick={()=>{deleteAward(index)}}>Delete</button>
              </div>
            ))}
            </>
           )} 
          </div>


          <div className="flex flex-col w-[75%] p-10">
            <h1>Certifications</h1>
            <label htmlFor="certificateTitle">Title</label>
                <input type="text" name="certificate" id="certificateTitle" />

                <label htmlFor="issuer">Issuer</label>
                <input type="text" name="certificate" id="issuer" />

                <label htmlFor="certificateDate">Certificate Date</label>
                <input type="date" name="certificate" id="certificateDate" />

                
                <label htmlFor="certificateSummary">Summary</label>
                <input type="text" name="certificate" id="certificateSummary" />
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addCertificate}>Submit</button>
          </div>
                  

          <div>
          {details.certifications.length != 0 && (
            <>
            {details.certifications.map((item,index) => (
              <div className="my-2" key={item.issuer}>
                <span className="font-semibold text-[15px]">
                  {item.issuer} 
                </span>
                <button onClick={()=>{deleteCertificate(index)}}>Delete</button>
              </div>
            ))}
            </>
           )} 
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
                
                <button onClick={addSkill}>Submit</button>
          </div>
        <div>
        {details.skills.length !=0  && (
              <div className="mt-4">
             
              {details.skills.map((item,index) => (
                <>
                <li className="mx-4" key={item.name}>
                  {item.name}
                </li>
                <button onClick={()=>{deleteSkill(index)}}>Delete</button>
                </>
              ))}
            </div>
            )}
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
          <div>
          {details.languages.length != 0 && (
                <div className="mt-4">
               
                {details.languages.map((item,index) => (
                  <>
                  <p className="my-2" key={item.name}>
                    {item.name}
                  </p>
                  <button onClick={()=>{deleteLanguage(index)}}>Delete</button>
                  </>
                ))}
              </div>
           )} 
          </div>


          <div className="flex flex-col w-[75%] p-10">
            <h1>Hobby</h1>
                <label htmlFor="hobbyTitle">Title</label>
                <input type="text" name="language" id="hobbyTitle" />
                
                
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={addHobby}>Submit</button>
          </div>
          <div>
          {details.hobbies.length != 0 && (
                <div className="mt-4">
               
                {details.hobbies.map((item,index) => (
                  <>
                  <p className="my-2" key={item.name}>
                    {item.name}
                  </p>
                  <button onClick={()=>{deleteHobby(index)}}>Delete</button>
                  </>

                ))}
              </div>
           )} 
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
    </div>
  )
}
