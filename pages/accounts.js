import Link from 'next/link';
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import React, { useState } from "react";

const accounts = () => {
    const [open, setOpen] = useState(false);
  return (
    
        
    <div>
        <div className="border-b border-gray-300 py-2 fixed top-[-8px] w-[100%] z-40 bg-slate-50">
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          {/* <h1>Provast</h1> */}
          <img
            src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_B_fpwhlu.png&w=2048&q=75"
            width={220}
            height={55}
          />
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="text-base text-gray-600 lg:flex lg:justify-between">
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Notices
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Resumes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Test Patterns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Assesments
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:px-5 py-3 block hover:text-blue-700 font-semibold"
                >
                  Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        </div>
        <div className='sm:mx-[100px] md:my-[50px] lg:[200px] xl:mx-[300px] absolute top-[70px] md:top-[50px]'>
        <div className=' mx-3 bg-white md:grid grid-cols-2 gap-2'>
            <div className='border rounded-lg m-5 shadow-lg hover:m-[18px]'>
                <h1 className='font-semibold text-gray-700 text-3xl text-center pt-5'>For <span className='font-bold text-orange-600 text-3xl'>Students</span></h1>
                <div className='p-5'>
                Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.
                </div>
                <div className='text-center mb-4'>
                <button className='bg-orange-700 px-3 py-2 rounded-md text-white'>Login</button>
                </div>
                <div className='text-center'>Don't have an account?</div>
                <Link className=' text-orange-500 hover:underline hover:text-orange-800 mb-3 ' href={{pathname:"/register",query:{type:"student"}}}>Sign up.</Link>
            </div>
            <div className='border shadow-lg rounded-lg m-5 hover:m-[18px]'>
                <h1 className='font-semibold text-gray-700 text-3xl text-center pt-5'>For <span className='font-bold text-orange-600 text-3xl'>Individuals</span></h1>
                <div className='p-5'>
                We are the market-leading technical interview platform to identify and hire developers with the right skills.
                </div>
                <div className='text-center mb-4'>
                <button className='bg-orange-700 px-3 py-2 rounded-md text-white'>Login</button>
                </div>
                <div className='text-center'>Don't have an account?</div>
                <Link className='text-center text-orange-500 hover:underline hover:text-orange-800 mb-3' href={{pathname:"/register",query:{type:"individual"}}}>Sign up.</Link>
            </div>
            <div className='border shadow-lg rounded-lg m-5 hover:m-[18px]'>
                <h1 className='font-semibold text-gray-700 text-3xl text-center pt-5'>For <span className='font-bold text-orange-600 text-3xl'>College</span></h1>
                <div className='p-5'>
                Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.
                </div>
                <div className='text-center mb-4'>
                <button className='bg-orange-700 px-3 py-2 rounded-md text-white'>Login</button>
                </div>
                <div className='text-center'>Don't have an account?</div>
                <Link className='text-center text-orange-500 hover:underline hover:text-orange-800 mb-3' href={{pathname:"/register",query:{type:"college"}}}>Sign up.</Link>
            </div>
            <div className='border shadow-lg rounded-lg m-5 hover:m-[18px]'>
                <h1 className='font-semibold text-gray-700 text-3xl text-center pt-5'>For <span className='font-bold text-orange-600 text-3xl'>Corporates</span></h1>
                <div className='p-5'>
                We are the market–leading technical interview platform to identify and hire developers with the right skills.
                </div>
                <div className='text-center mb-4'>
                <button className='bg-orange-700 px-3 py-2 rounded-md text-white'>Login</button>
                </div>
                <div className='text-center'>Don't have an account?</div>
                <Link className='text-center text-orange-500 hover:underline hover:text-orange-800 mb-3' href={{pathname:"/register",query:{type:"corporate"}}}>Sign up.</Link>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default accounts