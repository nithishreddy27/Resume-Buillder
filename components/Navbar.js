import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
<<<<<<< HEAD
        <header className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-6 hover:text-gray-900">Dashboard</Link>
      <Link href="/" className="mr-6 hover:text-gray-900">Notices</Link>
      <Link href="/student/resume" className="mr-6 hover:text-gray-900">Resumes</Link>
      <Link href="/" className="mr-6 hover:text-gray-900">Test Patterns</Link>
      <Link href="/" className="mr-6 hover:text-gray-900">Assessments</Link>
      <Link href="/api/logout" className='font-bold'>LOGOUT</Link>

      {/* <select name="gender" className="shadow cursor-pointer appearance-none border rounded w-[15%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500">
=======
    <header className="text-gray-900 body-font bg-white">
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
          <Link href="/" className="mr-6 hover:text-gray-900">
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
        {/* <select name="gender" className="shadow cursor-pointer appearance-none border rounded w-[15%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500">
>>>>>>> 67504a4cd47db8c2f5686356222fc52947b6cd40
                        <option value="male" >Profile</option>
                        <option value="female"><Link href="/api/logout" >LOGOUT</Link></option>
    </select> */}
      </nav>
    </header>
  );
}
