import React , {useState} from 'react'
import { useUser } from '../lib/hooks'
import Link from "next/link"
import Router, { useRouter  } from 'next/router';


export default function AddDetails() {
    const user = useUser()
    console.log("current user:",user)
    const u=JSON.stringify(user,null,2)
    var username=""
    if(user){
      username=user.username;
    }


    const [position, setPosition] = useState("student")
    const [mess, setmess] = useState("")
  const [collegeId, setcollegeId] = useState("false")


    return (
    <div>   
        <form method="POST" action="./api/addDetails" className='w-[50%] mx-auto my-10'>
          <div className='flex justify-between'>
            <div className=''>
              <label htmlFor="userame">Loged in as:</label>
              <input type="text"  value={username} className="mx-2 " id="username" name="username" />
            </div>
            <div>
              <Link href="/api/logout" className='text-red-600 text-xl mx-2'>Logout</Link>
            </div>
          </div>
            <fieldset className="mt-4">
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="student"
                      name="notification-method"
                      value="student"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      defaultChecked="true"
                      onChange={(event) => {
                        setPosition("student");
                      }}
                    />
                    <label
                      htmlFor="student"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      student
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="college"
                      name="notification-method"
                      value="college"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                      onChange={(event) => {
                        setPosition("college");
                      }}
                    />
                    <label
                      htmlFor="college"
                      className="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      college
                    </label>
                  </div>
                </div>
              </fieldset>

              {position == "student" && (
                <div>
                  <div className="col-span-6 sm:col-span-4 mt-4">
                    <div className="flex">
                      <label
                        htmlFor="paraphase"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Paraphase
                      </label>
                      <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="clgid"
                        id="clgid"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="a94bca"
                      />
                      <div>
                        <button
                          type="button"
                          className="ml-3 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                          fdprocessedid="ekxexs"
                            onClick={checkCollege}>
                          Verify
                        </button>
                      </div>
                    </div>
                   
                    <p
                      className="mt-1 text-xs tracking-wide text-gray-500"
                      id="pharaphase-description"
                    >
                      Enter a passphrase that associates with your college
                      placement cell.
                    </p>
                    <p id="error" className="text-red-600">{mess}</p>
                  </div>
                  
                  <div className="grid grid-cols-6 gap-6 mt-4">
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        required=""
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="yw7fvi"
                        disabled=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 ">
                      <div className="flex">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        required=""
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="14yoqp"
                        disabled=""
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2 relative -top-[23px]">
                      <label
                        className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                        id="headlessui-listbox-label-1"
                      >
                        Gender
                        <span className="ml-1 mt-1 text-red-600 font-semibold">
                          *
                        </span>
                      </label>
                      <div className="relative -top-5 left-0">
                        <button
                          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                          id="headlessui-listbox-button-2"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-labelledby="headlessui-listbox-label-1 headlessui-listbox-button-2"
                          fdprocessedid="eijr6h"
                        >
                          <span className="block truncate text-black">
                            Male
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="rollnumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Roll Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="text"
                        name="rollnumber"
                        id="rollnumber"
                        autoComplete="roll-number"
                        disabled=""
                        required=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        // value=""
                        fdprocessedid="3p27qy"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <div className="flex">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <span className="ml-1 text-red-600 font-semibold">
                          *
                        </span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        required=""
                        disabled=""
                        pattern="[6789][0-9]{9}"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        // value=""
                        fdprocessedid="zyy11"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex">
                      <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                        College
                      </label>
                      <span className="relative top-4 ml-1 text-red-600 font-semibold">
                        *
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        required="true"
                        name="college"
                        // value=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        fdprocessedid="bpmeh9"
                        disabled=""
                      />
                    </div>
                  </div>
                  
                  
                  <div className="mt-4">      
                  {collegeId=="true" && (<div className="mt-4">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 " type="submit"> Submit </button>
              </div>)
              }
              {
                collegeId=="false" && (<div className="mt-4">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400  cursor-not-allowed" type="submit"> Submit </button>
              </div>)
              }
                    {/* <input type="submit" value="submit" /> */}
                  </div>
                </div>
              )}

              {position == "college" && <div>
                
              <div className="col-span-6 sm:col-span-4 mt-4">
                <div className="flex">
                  <label for="paraphase" className="block text-sm font-medium text-gray-700">
                    Paraphase
                  </label>
                  <span className="ml-1 text-red-600 font-semibold">*</span>
                </div>
                <div className="flex items-center">
                  <input type="text" name="clgid" id="clgid" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"/>
                  <div>
                    <button
                      type="button"
                      className="ml-3 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      onClick={checkCollege}>
                      Verify 
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500" id="pharaphase-description">
                  Enter a passphrase that associates with your college placement
                  cell.
                </p>
                <p className="text-red-500">{mess}</p>
              </div>

               
            <div className="grid grid-cols-6 gap-6 mt-4">
              
                <div className="col-span-6 sm:col-span-2 ">
        
                    <div className="flex">
                    <label for="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                    </div>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" required/>
                </div>
                <div className="col-span-6 sm:col-span-2 ">
                  <div className="flex">
                    <label
                      for="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    required/>
                    </div>
                    <div className="col-span-6 sm:col-span-2 relative -top-[23px]">
                  <label
                    className="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                    id="headlessui-listbox-label-1"
                  >
                    Gender
                    <span className="ml-1 mt-1 text-red-600 font-semibold">*</span>
                  </label>
                  <div className="relative -top-[23px] left-0">
                  <select name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                  </div>

                </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="rollnumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Roll Number
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="rollnumber"
                    id="rollnumber"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" required
                  />
                </div>
              </div>
              <div className="relative">
                <div className="flex">
                  <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                    College
                  </label>
                  <span className="relative top-4 ml-1 text-red-600 font-semibold">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="designation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Designation
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="designation"
                    name="designation"
                    type="text"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      College Website
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="website"
                    name="website"
                    type="text"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Placement Email address
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Placement Phone Number
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="phone"
                    name="phone"
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Principal Email address
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <div className="flex">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Principal Phone Number
                    </label>
                    <span className="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                  />
                </div>
              </div>


              {collegeId=="true" && (<div className="mt-4">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 " type="submit"> Submit </button>
              </div>)
              }
              {
                collegeId=="false" && (<div className="mt-4">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400  cursor-not-allowed" type="submit"> Submit </button>
              </div>)
              }
              
                
                </div>}
            </form>
    </div>
 )
 async function checkCollege(){
  console.log("inside college");  
  const clgid=document.getElementById("clgid").value
  console.log(clgid)
  const res=await fetch(`./api/checkCollege/${clgid}`)
  if(res.status===200){
    setmess("invalid paraphrase")
    setcollegeId("false")
  }
  else{
    setmess("")
    setcollegeId("true")
  }
}
}
