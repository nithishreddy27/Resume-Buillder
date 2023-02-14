import React from 'react'
import Link from 'next/link'
const resume = () => {
  return (
    <div><header className="text-gray-900 body-font bg-white">
    <nav className="container md:ml-auto md:mr-auto flex items-center justify-between px-10 py-3 bg-gray-100">
      <div>
        <Link href="/">
          <img
            className="h-[50px] w-[150px]"
            src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_B_fpwhlu.png&w=1920&q=75"
            alt=""
          />
        </Link>    
      </div>
      <div className="flex justify-between">
        <Link href="/student" className="mr-6 hover:text-gray-900">
          Dashboard
        </Link>     
        <Link href="/" className="mr-6 hover:text-gray-900">
          Notices
        </Link>
        <Link href="/" className="mr-6 hover:text-gray-900">
          Resumes
        </Link>
        <Link href="/" className="mr-6 hover:text-gray-900">
          Test Patterns
        </Link>
        <Link href="/" className="mr-6 hover:text-gray-900">
          Assessments
        </Link>
      </div>
      <div>
        <Link href="/api/logout" className="font-bold">
          LOGOUT
        </Link>
      </div>

    </nav>
  </header>
  <div>
    <h1 className='mt-10 p-2 font-bold text-gray-900 text-lg text-center sm:text-3xl md:text-4xl'>welcome <b className='text-orange-600'>your name!</b> pick your template </h1>
    <div className='mb-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-2 md:text-lg md:max-w-3xl text-center'>
    <p>Each resume template is expertly designed and follows the exact "resume rules" hiring </p>
    <p>
        managers look for.Stand out and get hired faster with field-tested resume template
    </p>
    <select id='tabs' name='tabs' className='block w-full focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md mt-8'>
        <option>All templates</option>
        <option>Simple</option>
        <option>Creative</option>
        <option>Company</option>
        <option>MBA</option>
    </select>
   </div>
   <nav className='mb-px flex'>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer'href=''>all templates</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer'href=''>Simple</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer'href=''>Creative</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer'href=''>Company</a>
    <a className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 px-1 text-center border-b-2 font-medium text-lg cursor-pointer'href=''>MBA</a>

   </nav>
   <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mt-5 '>
  
    <div className='rounded-md bg-gray-300 h-80 w-64 p-5 m-5 cursor-pointer relative'>
    image will come here
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center  w-10 bg-gray-900  bg-opacity-70 rounded-full p-1 h-10'>
            <span className='box-sizing:border-box block '>
            lock
            </span>
        </div>

    </div>
    <div className='rounded-md bg-gray-300 h-80 w-64 p-5 m-5 cursor-pointer relative'>
    image will come here
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-900  bg-opacity-70 rounded-full p-1'>
        lock
        </div>

    </div>
    <div className='rounded-md bg-gray-300 h-80 w-64 p-5 m-5 cursor-pointer relative'>
    image will come here
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-900  bg-opacity-70 rounded-full p-1'>
        lock
        </div>

    </div>
    <div className='rounded-md bg-gray-300 h-80 w-64 p-5 m-5 cursor-pointer relative'>
    image will come here
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-900  bg-opacity-70 rounded-full p-1'>
        lock
        </div>

    </div>
    <div className='rounded-md bg-gray-300 h-80 w-64 p-5 m-5  cursor-pointer relative'>
        image will come here
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-900  bg-opacity-70 rounded-full p-1'>
            lock
        </div>

    </div>
    <div className='rounded-md bg-gray-300 h-80 w-64 p-5 m-5 cursor-pointer relative'>
    image will come here
        <div className='absolute z-10 top-[43%] right-[43%] flex items-center justify-center h-10 w-10 bg-gray-900  bg-opacity-70 rounded-full p-1'>
            lock
        </div>
        </div>
    </div>
   </div>
    
  
    </div>
  )
}

export default resume