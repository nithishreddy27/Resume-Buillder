import React from 'react'
import Link from 'next/link'
function res() {
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
  <div className=''>
  <h1 className='mt-7 p-2 font-bold text-gray-900 lg:text-5xl text-center sm:text-3xl md:text-4xl'>Welcome <b className='text-orange-600'>your name!</b>  </h1>
  <h3 className='text-gray-500 mb-3 max-w-2xl mx-auto sm:text-md md:text-lg md:max-w-3xl md:mt-2 '>Create a tailored resume for each job application. Double your chances of getting hired!</h3>
  </div>
  <div className=' grid lg:grid-cols-2 md:grid-cols-1 relative items-center justify-evenly mx-14 ml-64 mr-64'>
    <div className=' m-auto h-[315px] w-[240px] box my-8 cursor-pointer border-dashed border-gray-200 relative top-5 border-4 bg-gray-50'>
    <div className="absolute z-10 top-[4%] right-[8%]  bg-gray-300  bg-opacity-70 rounded-full p-2">
       <img className='h-5' src="https://cdn-icons-png.flaticon.com/512/1828/1828415.png" />
    </div>
    <div className="absolute   right-0 p-4 bottom-0 text-3xl font-semibold text-gray-500">
      
        <p className=' mb-[130px] mr-[51px] text-center '>CREATE</p>
       </div>
    </div>
    
    <div className='md:m-auto h-[340px] w-[240px] box my-8 cursor-pointer  relative top-2  lg:-ml-1 '>
      <div className='flex flex-row-reverse'><span className='bg-orange-600 mr-0 text-right px-3  text-white font-semibold rounded-t'>Public</span></div> 
       <span className='block brightness-[65%] relative border-orange-500 border-4 display-block hover:brightness-[60%]  '>
     <img className='filter  object-cover w-full h-[300px] ' src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=1200&q=75" />
       </span>
       <div className="absolute   right-0 p-4 bottom-0 text-3xl font-bold  text-white">
        <p className='text-center mb-[80px] transition  delay-300 duration-300 px-5 pb-8  inset-0 hover:-translate-y-8 '>FULL STACK DEVELOPER</p>
        <div className="absolute z-10 top-[48%] right-[58%] flex items-center justify-center h-10 w-10 bg-gray-200  bg-opacity-70 rounded-full p-1">
                      <img src="https://img.icons8.com/ios/50/null/external-link-squared.png"  />
                    </div>
                    <div className="absolute  z-10 top-[48%] right-[23%] flex  h-10 w-10 bg-gray-200  bg-opacity-70 rounded-full p-1">
                      <img src="https://cdn-icons-png.flaticon.com/512/4023/4023100.png"  />
                    </div>
        
        </div>
        {/* <img src="https://img.icons8.com/ios/50/null/external-link-squared.png" alt="" className='' /> */}
      
      
    </div>
    </div>
  </div>
  
  
    
  )
  // <div className='md:m-auto h-[340px] w-[240px]  box my-8 cursor-pointer  relative top-2  lg:-ml-1 '>
  //     <div className='flex flex-row-reverse'><span className='bg-orange-600 mr-0 text-right px-3  text-white font-semibold rounded-t'>Public</span></div> 
  //      <span className='block relative border-orange-500 border-4 display-block hover:brightness-[60%] '>
  //       <img className='filter brightness-[65%]  object-cover w-full h-[300px] hover:brightness-[90%]  ' src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=1200&q=75" />
  //      {/* <div className='bg-orange-600 -top-7 z-20  px-4  right-0  rounded-t-md font-semibold t0ext-white'>Public</div> */}
  //      </span>
  //      <div className="absolute   inset-0 flex items-center justify-center text-3xl font-bold  text-white">
  //       <p className='text-center mb-[80px] transition  delay-300 duration-300 px-8  inset-0 hover:-translate-y-8   '>FULL STACK DEVELOPER</p>
      
  //       </div>

        

        
}

export default res