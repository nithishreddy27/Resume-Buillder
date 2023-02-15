import React, { useState, useContext } from "react";
import ResumeContext from "../context/ResumeContext";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function exp() {
  const [open, setopen] = useState("semiopen");
  const [arrow, setarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }
  

  return (
    <>
      <div className="flex">
        {/* {open == "open" && (
            <>
             <div className='h-screen w-[50%] bg-purple-300'>
            
             </div>
            <div className='h-screen w-[50%] bg-green-300'>
                
            </div>
            </>
        )} */}
        {open == "closed" && (
          <div className="h-screen w-[100%] bg-green-300 ">
            <button
              className="h-10 w-10 mx-auto block lg:hidden"
              onClick={toggleResume}
            >
              Click
            </button>
          </div>
        )}
        {open == "semiopen" && (
          <>
            <div className="h-screen relative w-[250%] lg:w-[100%] bg-white transition-all ">
              <div className="lg:hidden" onClick={toggleResume}>
                Tog
              </div>
              <div className="border m-5">
                <form action="" className="">
                  <h1 className="font-bold text-xl">Personal Details:</h1>
                  <div className="mt-5">
                    <label htmlFor="firstName" className="font-semibold">
                      First Name
                    </label>
                    <div className="my-2">
                      <input
                        type="text"
                        name="personal"
                        id="firstName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        //   value={details.personal.firstName}
                        //   onChange={updateForm}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="lastName" className="font-semibold">
                      Last Name
                    </label>
                    <div className="my-2">
                      <input
                        type="text"
                        name="personal"
                        id="lastName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        //   value={details.personal.lastName}
                        //   onChange={updateForm}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="phone" className="font-semibold">
                      Phone
                    </label>
                    <div className="my-2">
                      <input
                        type="text"
                        name="personal"
                        id="phone"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        //   value={details.phone.lastName}
                        //   onChange={updateForm}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <div className="my-2">
                      <input
                        type="text"
                        name="personal"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        //   value={details.personal.email}
                        //   onChange={updateForm}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="objective" className="font-semibold">
                      Objective
                    </label>
                    <div className="my-2">
                      <textarea
                        name="personal"
                        id="objective"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                        //   value={details.personal.objective}
                        //   onChange={updateForm}
                      />
                    </div>
                  </div>
                </form>
                <div className="mt-5">
                  <div className="flex gap-6">
                    <h1 className="font-bold text-xl">Social Networks:</h1>
                    <div className="pt-2" onClick={()=>{setarrow(!arrow)}}>
                        {arrow==true && (<div>
                      <AiOutlineCaretUp></AiOutlineCaretUp></div>)}
                      {arrow==false && (
                      <div>
                      <AiOutlineCaretDown></AiOutlineCaretDown></div>)}
                    </div>
                  </div>
                  <div className={`${arrow ? "block" :"hidden"}`}>
                    
                    <div className="mt-5">
                      <label htmlFor="network" className="font-semibold">
                        Network
                      </label>

                      <input
                        type="text"
                        name="social"
                        id="network"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="url" className="font-semibold">
                        Url
                      </label>
                      <input
                        type="text"
                        name="social"
                        id="url"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="network" className="font-semibold">
                        Username
                      </label>
                      <input
                        type="text"
                        name="social"
                        id="username"
                        className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                      />
                    </div>
                    <div className="flex justify-center">
                    {/* <button onClick={socialChange}>Submit</button> */}
                    <button className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg">Submit</button>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen  w-[100%] bg-green-300"></div>
          </>
        )}
      </div>
    </>
  );
}
