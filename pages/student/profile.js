import React , {useState} from 'react'
import Navbar from '../../components/Navbar'
import { useUser } from '../../lib/hooks'

export default function profile() {
  const [position, setPosition] = useState("profile")
  const user = useUser()
  return (
    <div className='h-screen w-screen'>
        <Navbar/>
        <div className="h-40 bg-blue-200">
        </div>
            <div className='absolute top-[20%] border-4 border-white   rounded-full h-40 w-[10%] mx-36  '></div>
            <div className=' h-[64%] p-20'>
              {console.log("user",user)}
                  {user && (
                    <div>
                      <div className='flex justify-around'>

                        <h1 className='text-2xl font-bold '>{user.firstName} {user.lastName}</h1>
                        <button className='py-2 px-4 bg-gray-200 rounded-lg border'>Edit profile</button>
                      </div>
                      <div className='flex justify-around mt-5'>
                          <h1 className='cursor-pointer'   onClick={(event)=>{
                            setPosition("profile")
                          }}>Profile</h1>
                          <h1 className='cursor-pointer'  onClick={(event)=>{
                            setPosition("education")
                          }}>Education</h1>
                      </div>
                      <hr className='h-1 bg-gray-300 my-2' />
                    {position == "profile" && (
                      <div className='grid grid-cols-3 gap-4 p-5'>
                          <div>
                            <h1 className=''>First Name</h1>
                            <h1>{user.firstName}</h1>
                          </div>
                          <div>
                            <h1 className=''>Last Name</h1>
                            <h1>{user.lastName}</h1>
                          </div>
                          <div>
                            <h1 className=''>Registered Email</h1>
                            <h1>{user.email}</h1>
                          </div>
                          <div>
                            <h1 className=''>Mobile Number</h1>
                            <h1>{user.phone}</h1>
                          </div>
                          <div>
                            <h1 className=''>College</h1>
                            <h1>{user.college}</h1>
                          </div>
                          <div>
                            <h1 className=''>Roll Number</h1>
                            <h1>{user.rollnumber}</h1>
                          </div>
                          <div>
                            <h1 className=''>Gender</h1>
                            <h1>{user.gender}</h1>
                          </div>
                          
                      </div>
                    )}
                    {position == "education" && (
                      <div>
                          <h1>Current / Ongoing Course</h1>
                          <hr />
                          <div className='flex my-5'>
                              <hr className='h-40 w-1 mx-4 bg-black'/>
                              <div className='w-[100%]'>
                                  <div className='flex justify-between w-[100%] bg-blue-100 py-2 px-4'>
                                    <div>Course:{}</div>
                                    <div>gpa</div>
                                  </div>
                                  <div></div>
                              </div>
                          </div>

                      </div>
                    )}
                    </div>
                  )}
            </div>
    </div>
  )
}
