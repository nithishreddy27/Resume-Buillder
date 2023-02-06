import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
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
                        <option value="male" >Profile</option>
                        <option value="female"><Link href="/api/logout" >LOGOUT</Link></option>
    </select> */}
    </nav>
  </div>
</header>
  )
}
