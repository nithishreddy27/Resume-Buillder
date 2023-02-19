import React from 'react'

export default function AddResume() {
  return (
    <div>

        <form action="../api/Resume/addResume" className=' mx-auto bg-gray-300 p-5' method='POST'>
            <div  className='my-4 mx-10'>

            <label htmlFor="ResumeName">Name of the templete</label>
            <input type="text" name="ResumeName" id="ResumeName" />
            </div>
            <div className='my-4 mx-10'>

            
            <label htmlFor="ResumeType">Type of the templete</label>
            <input type="text" name="ResumeType" id="ResumeType" />
            </div>
            <div className='my-4 mx-10'>

            <label htmlFor="ResumeDesign">Design of the templete</label>
            <input type="text" name="ResumeDesign" id="ResumeDesign" />
            </div>
            <div className='my-4 mx-10'>

            <label htmlFor="ResumeImage">image of the templete</label>
            <input type="text" name="ResumeImage" id="ResumeImage" />
            </div>
            <input type="submit"  value="submit" className=" mx-10 cursor-pointer"/>

        </form>
    </div>
  )
}
