import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";

export default function Madrid() {
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

  const [open, setopen] = useState("semiopen");

  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <button
                className="h-10 w-10 mx-auto block lg:hidden"
                onClick={toggleResume}
              >
                DETAILS
              </button>
              <div className="flex justify-center ">
                {/* Small Resume */}
                <div className= "bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row align-middle justify-center ">
  <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
  <div className=" bg-purple-200 p-1 px-1 flex h-52">
          <img className="rounded-lg w-[130px] h-36  border-4 border-black  ml-4 mt-6 mr-1 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU" alt="ProfilePhoto"/>
          <div>
            <div className="text-3xl font-bold p-2 mt-5 ml-4 tracking-widest">
            <h>{details.personal.firstName} {details.personal.lastName}</h></div>
            <h1 className="m-1 mt-0 ml-6  text-xl font-bold font-serif  tracking-widest text-indigo-900">{details.personal.role}</h1>
            <p className="text-sm p-2 pt-0 font-medium ">{details.personal.objective}</p>
          </div>
        </div>  

    <div className="grid bg-white grid-cols-11">
      <div className="col-span-7">
        

        {/* EDUCATION */}
        <div className="p-2 px-0">
          <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">EDUCATION</h1>
          {details.education.map((item) => (
            <div key={item.institution} className="p-1">
              <h1 className=" ml-6 text-sm font-medium">{item.institution}</h1>
              <h6 className="text-xs ml-6 font-medium text-yellow-500">
                {item.startDate} - {item.endDate}
              </h6>
              <li className="ml-10 text-normal font-medium">{item.fieldOfStudy}   {item.gpa}</li>
            </div>
          ))}
        </div>

        {/* INTERNSHIP */}
        {details.work.length != 0 && (
        <div>
          <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">INTERNSHIP</h1>
            {
              details.work.map(item=>(
              <div key={item.company}>
                  <h1 className="font-medium  text-lg ml-16 ">{item.company}</h1>
                  <h2 className="font-medium ml-16 text-sm text-gray-800">[{item.from}] - [{item.to}]</h2>
                  <li className="ml-28 text-lg list-disc">{item.designation}</li>
                  <li className="ml-28  list-disc ">{item.summary.data}</li>
                  {/* <p class="text-sm font-medium ml-14">{item.summary.data}</p> */}
              </div>
            ))
            }
        </div>
        )}

        {/* CERTIFICATION */}
        {details.certifications.length != 0 && (
        <div>
          <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">CERTIFICATION</h1>
          {
          details.certifications.map(item=>(
            <div key={item.title} className="mb-1">
              <h1 className="text-sm ml-16 font-medium">{item.title}</h1>
              <h4 className="text-xs ml-16 font-medium  text-gray-800">{item.issuer}    {item.date}</h4>
              <h6 className="text-sm  font-medium ml-16">{item.summary.data}</h6>
            </div>
          ))
          }
        </div>
        )}

      {/* AWARDS */}
      {details.awards.length != 0 && (
      <div>
        <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">AWARDS</h1>
        {
          details.awards.map(item=>(
          <div key={item.name}>
            <h1 className="font-medium ml-16">{item.name}</h1>
            <h6 className="text-xs ml-16 font-medium text-gray-800">[{item.date}]</h6>
            <li className="ml-28 font-medium text-sm">{item.summary.data}</li>
          </div>
          ))
        }
      </div>
      )}
    
      
    </div>
    <div className=" border-l-purple-900 col-span-4 ">
      <div className=" ">
      <p className="pl-6 ml-3 mr-2 mt-7 font-normal tracking-widest text-lg"><span  className="font-serif font-semibold">DOB : </span> {details.personal.dob}</p>
        {/*  NETWORK  */}
        <h1 className=" font-bold tracking-widest  bg-purple-50 mr-5 rounded-r-xl font-serif text-xl mt-2 ml-6  mb-0 p-2">NETWORK</h1>
         <p className="pl-6">{details.personal.phone}</p>
         <p className="pl-6 mr-2">{details.personal.email}</p> 
        {/* {details.social.map((item) => (
          <div key={item.network} className="ml-16 my-4 flex">
            <img src={"https://www." + item.network + ".com/favicon.ico"} alt="" className="w-8 h-8 border-4 ml-0 mr-0 rounded-full "/>
            <Link href={item.url}> <h1 className="ml-4">{item.username}</h1></Link>
          </div>
        ))} */}
      </div>

      {/* SKILLS */}
      <div class=" ">
        <div className="p-2">
          <h1 className="font-bold tracking-widest mr-5 rounded-r-xl  bg-purple-50 font-serif text-xl ml-6 mb-0 p-2 ">SKILLS</h1>
          {details.skills.map((item) => (
            <div key={item.name}>
             <h1 className="font-normal ml-8 p-1">{item.name} - {item.level}</h1>
            </div>
          ))}
        </div>


        {/* HOBBIE */}
        <div className="p-2">
          <h1 className="font-bold tracking-widest mr-5 rounded-r-xl  bg-purple-50 font-serif  text-xl ml-6 mb-0 p-2">HOBBIES</h1>
          {
            details. hobbies.map((item)=>(
              <div key={item.name}>
                <li className="font-normal ml-10 text">{item.name}</li>
              </div>

            ))
          }
        </div>

        {/* LANGUAGES */}
        <div className="p-2">
          <h1 className="font-bold tracking-widest mr-5 rounded-r-xl  bg-purple-50 font-serif text-xl ml-6 mb-0 p-2">LANGUAGES</h1>
          {
            details.languages.map((item)=>(
              <div key={item.name}>
                <li className="font-normal ml-10 tex-sm">{item.name} - {item.level}</li>
              </div>

            ))
          }
        </div>
        {/* <div className="p-2">
          <h1 className=" text-lg font-bold mr-5 rounded-r-xl bg-purple-50 ml-6 ">Projects</h1>
          {
            details.projects.map((item)=>(
              <div key={item.name} className="p-2">
                <li className="font-medium ml-8 tex-lg">{item.name}</li>
                <h5 className="text-xs ml-8 font-medium text-yellow-500">{item.from} - {item.to}</h5>
                <h6 className="text-sm  font-medium ml-16">{item.summary.data}</h6>
                
              </div>

            ))
          }
        </div> */}
      </div>
    </div>
  </div>
  </div>
</div>
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar/>
                
              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex justify-center ">


                  
                  {/* large resume */}

                  <div className= "bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row  align-middle justify-center ">
  <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
  <div className=" bg-purple-200 p-1 px-1 flex h-52">
          <img className="rounded-lg w-[130px] h-36  border-4 border-black  ml-4 mt-6 mr-1 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU" alt="ProfilePhoto"/>
          <div>
            <div className="text-3xl font-bold p-2 mt-5 ml-4 tracking-widest">
            <h>{details.personal.firstName} {details.personal.lastName}</h></div>
            <h1 className="m-1 mt-0 ml-6  text-xl font-bold font-serif  tracking-widest text-indigo-900">{details.personal.role}</h1>
            <p className="text-sm p-2 pt-0 font-medium ">{details.personal.objective}</p>
          </div>
        </div>  

    <div className="grid bg-white grid-cols-11">
      <div className="col-span-7">
        

        {/* EDUCATION */}
        <div className="p-2 px-0">
          <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">EDUCATION</h1>
          {details.education.map((item) => (
            <div key={item.institution} className="p-1">
              <h1 className=" ml-6 text-sm font-medium">{item.institution}</h1>
              <h6 className="text-xs ml-6 font-medium text-yellow-500">
                {item.startDate} - {item.endDate}
              </h6>
              <li className="ml-10 text-normal font-medium">{item.fieldOfStudy}   {item.gpa}</li>
            </div>
          ))}
        </div>

        {/* INTERNSHIP */}
        {details.work.length != 0 && (
        <div>
          <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">INTERNSHIP</h1>
            {
              details.work.map(item=>(
              <div key={item.company}>
                  <h1 className="font-medium  text-lg ml-16 ">{item.company}</h1>
                  <h2 className="font-medium ml-16 text-sm text-gray-800">[{item.from}] - [{item.to}]</h2>
                  <li className="ml-28 text-lg list-disc">{item.designation}</li>
                  <li className="ml-28  list-disc ">{item.summary.data}</li>
                  {/* <p class="text-sm font-medium ml-14">{item.summary.data}</p> */}
              </div>
            ))
            }
        </div>
        )}

        {/* CERTIFICATION */}
        {details.certifications.length != 0 && (
        <div>
          <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">CERTIFICATION</h1>
          {
          details.certifications.map(item=>(
            <div key={item.title} className="mb-1">
              <h1 className="text-sm ml-16 font-medium">{item.title}</h1>
              <h4 className="text-xs ml-16 font-medium  text-gray-800">{item.issuer}    {item.date}</h4>
              <h6 className="text-sm  font-medium ml-16">{item.summary.data}</h6>
            </div>
          ))
          }
        </div>
        )}

      {/* AWARDS */}
      {details.awards.length != 0 && (
      <div>
        <h1 className="font-bold tracking-widest mt-3 bg-purple-50 mr-60 font-serif text-xl rounded-r-2xl  ml-5 pt-4 mb-1 p-2">AWARDS</h1>
        {
          details.awards.map(item=>(
          <div key={item.name}>
            <h1 className="font-medium ml-16">{item.name}</h1>
            <h6 className="text-xs ml-16 font-medium text-gray-800">[{item.date}]</h6>
            <li className="ml-28 font-medium text-sm">{item.summary.data}</li>
          </div>
          ))
        }
      </div>
      )}
    
      
    </div>
    <div className=" border-l-purple-900 col-span-4 ">
      <div className=" ">
      <p className="pl-6 ml-3 mr-2 mt-7 font-normal tracking-widest text-lg"><span  className="font-serif font-semibold">DOB : </span> {details.personal.dob}</p>
        {/*  NETWORK  */}
        <h1 className=" font-bold tracking-widest  bg-purple-50 mr-5 rounded-r-xl font-serif text-xl mt-2 ml-6  mb-0 p-2">NETWORK</h1>
         <p className="pl-6">{details.personal.phone}</p>
         <p className="pl-6 mr-2">{details.personal.email}</p> 
        {/* {details.social.map((item) => (
          <div key={item.network} className="ml-16 my-4 flex">
            <img src={"https://www." + item.network + ".com/favicon.ico"} alt="" className="w-8 h-8 border-4 ml-0 mr-0 rounded-full "/>
            <Link href={item.url}> <h1 className="ml-4">{item.username}</h1></Link>
          </div>
        ))} */}
      </div>

      {/* SKILLS */}
      <div class=" ">
        <div className="p-2">
          <h1 className="font-bold tracking-widest mr-5 rounded-r-xl  bg-purple-50 font-serif text-xl ml-6 mb-0 p-2 ">SKILLS</h1>
          {details.skills.map((item) => (
            <div key={item.name}>
             <h1 className="font-normal ml-8 p-1">{item.name} - {item.level}</h1>
            </div>
          ))}
        </div>


        {/* HOBBIE */}
        <div className="p-2">
          <h1 className="font-bold tracking-widest mr-5 rounded-r-xl  bg-purple-50 font-serif  text-xl ml-6 mb-0 p-2">HOBBIES</h1>
          {
            details. hobbies.map((item)=>(
              <div key={item.name}>
                <li className="font-normal ml-10 text">{item.name}</li>
              </div>

            ))
          }
        </div>

        {/* LANGUAGES */}
        <div className="p-2">
          <h1 className="font-bold tracking-widest mr-5 rounded-r-xl  bg-purple-50 font-serif text-xl ml-6 mb-0 p-2">LANGUAGES</h1>
          {
            details.languages.map((item)=>(
              <div key={item.name}>
                <li className="font-normal ml-10 tex-sm">{item.name} - {item.level}</li>
              </div>

            ))
          }
        </div>
        {/* <div className="p-2">
          <h1 className=" text-lg font-bold mr-5 rounded-r-xl bg-purple-50 ml-6 ">Projects</h1>
          {
            details.projects.map((item)=>(
              <div key={item.name} className="p-2">
                <li className="font-medium ml-8 tex-lg">{item.name}</li>
                <h5 className="text-xs ml-8 font-medium text-yellow-500">{item.from} - {item.to}</h5>
                <h6 className="text-sm  font-medium ml-16">{item.summary.data}</h6>
                
              </div>

            ))
          }
        </div> */}
      </div>
    </div>
  </div>
  </div>
</div>


                  
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
