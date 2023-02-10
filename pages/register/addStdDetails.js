import React , {useState} from 'react'
import { useUser } from '../../lib/hooks'
import Link from "next/link"
import Router, { useRouter  } from 'next/router';


export default function AddStdDetails() {
    const user = useUser()
    const u=JSON.stringify(user,null,2)
    var username=""
    if(user){
      username=user.username;
    }


    const [position, setPosition] = useState("student")
    const [mess, setmess] = useState("")
    const [collegeId, setcollegeId] = useState("false")
    const [college, setCollege] = useState()


    async function checkCollege(){
      // console.log("inside college");  
      const clgid=document.getElementById("clgid").value
      console.log(clgid)
      if(clgid==""){
        setmess("Invalid Paraphrase")
      }
      else{
    
      const res=await fetch(`./api/checkCollege/${clgid}`)
      const data=await res.json()
      // console.log("rununing in student",data.done.collegeName) 
      
      // const name=await res.collegeName  
      // console.log("in collgee",name)
      if(res.status===200){
        setmess("invalid paraphrase")
        setcollegeId("false")
        setCollege("")
      }
      else{
        // const c= await res.collegeName
        setmess("")
        setCollege(data.done.collegeName)
        setcollegeId("true")
      }
    }
    
    }

    return (
    <div>   
        
          
        <img className="absolute bottom-0 w-[100%] object-cover"
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
        alt=""
      />
        {user && (
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-2xl relative grid h-screen place-items-center">
          <div className="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10 ">
          <form method="POST" action="../api/addDetails" className=' mx-auto my-10'>
            <div className='flex justify-between'>
              <div className=''>
                <label htmlFor="username" className="text-sm font-semibold">Signed in as:</label>
                <input type="text"  value={username} className="mx-2 border-none " id="username" name="username" onChange={()=>{
                  console.log("dont change me");
                }}/>
              </div>
              <div>
                <Link href="/api/logout" className='text-orange-600 text-sm mx-2 font-semibold hover:text-orange-900 hover:underline'>Logout</Link>
              </div>
            </div>
              <fieldset className="mt-4">
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="student"
                        name="notificationMethod"
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
                          fdprocessedid="a94bca" required
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
                            className="block text-sm font-medium  text-gray-700"
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
                          required
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
                          required
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
                      <span className="ml-1 mt-1 text-red-600 font-semibold">*</span>
                    </label>
                    <div className="relative -top-[23px] left-0">
                    <select name="gender" className="shadow cursor-pointer appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500">
                          <option value="male" >male</option>
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
                          required
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
                          required
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
                          required
                          name="college"
                          // value={college} 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                        />
                      </div>
                    </div>
                    
                    
                    <div className="mt-4"> 
                    <div className="mt-4">
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 " type="submit"> Submit </button>
                </div>     
                    {/* {collegeId=="true" && (<div className="mt-4">
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 " type="submit"> Submit </button>
                </div>)
                }
                {
                  collegeId=="false" && (<div className="mt-4">
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400  cursor-not-allowed" type="submit"> Submit </button>
                </div>)
                } */}
                      {/* <input type="submit" value="submit" /> */}
                    </div>
                  </div>
                )}
  
              </form>
              </div>
          </div>
        )}
    </div>
 )

}
