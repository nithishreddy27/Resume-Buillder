import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../../lib/hooks";
import ResumeContext from "../../context/ResumeContext";
import { TbPlus } from "react-icons/tb";

export default function index(props) {
  const { details, setdetails, setdemo, demo, id, setid } =
    useContext(ResumeContext);

  const data = props.done;
  // console.log("done",data)
  const user = useUser();
  useEffect(() => {
    setid(null);
  }, [0]);
  return (
    <>
      {user && (
        // <div className='p-10'>

        //     Create new resume

        //     <input type="text" name="resumeName" id="resumeName" className='border' required/>

        //     <Link href="/resume/resumes">Submit</Link>

        // <div>
        //   {data.map((item)=>(
        //     <div key={item._id}>
        //       {user.email == item.email && (
        //         <div>
        //           {item.resume.map((resume,index)=>(
        //             <div className='m-5' key={resume._id}>
        //             <Link  href={`/resume/${resume.id}?index=${index}`}>
        //               {resume.id} {index}
        //             </Link>
        //             {/* {resume.id != "test" && (
        //               <div>
        //               {<Link  href={`/resume/${resume.id}?index=${index}`}>
        //               {resume.id}
        //             </Link>}
        //             </div>
        //             )}
        //             {resume.id == "test" && (
        //               <div>
        //               { <Link  href={`/resume/${resume._id}?index=${index}`}>
        //                 test {index}
        //                 </Link> }
        //             </div>
        //             )} */}
        //             </div>
        //           ))}
        //         </div>
        //       )}
        //     </div>
        //   ))}
        // </div>
        // </div>
       
          <div className=" min-h-[70vh] py-4 ">
            <div className="mt-4 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6">
              <div className="text-center">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="block text-orange-600">
                    Welcome <span className="text-black"> {user.profile.firstName}</span> !
                  </span>
                </h1>
                <p className="mb-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-2 md:text-lg md:max-w-3xl">
                  Create a tailored resume for each job application. Double your
                  chances of getting hired!
                </p>
              </div>
            </div>

            <div>
            <div className=" gap-4 w-11/15 mx-auto  mt-4 pt-4 ">
              <div className="flex flex-wrap" >
                {data.map((item) => (
                  <div key={item._id}>
                    {user.email == item.email && (
                      <div className="flex flex-wrap justify-center ">
                        <div className="relative cursor-pointer">
                <div className="box my-7 mx-12 h-[90mm] w-[70mm] border-4 border-dashed border-gray-300">
                  <div className="text-gray-500 text-center my-[58%] text-3xl font-semibold">
                    CREATE
                    <div className=" flex justify-center  ">
                      <TbPlus />
                    </div>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      className="border mx-3"
                      required
                      placeholder="enter role"
                    />
                    <Link href="/resume/resumes">Submit</Link>
                  </div>
                </div>
              </div>
                        {item.resume.map((resume, index) => (
                          
                          <div
                            className="box relative my-7 mx-12 h-[90mm] w-[70mm] bg-black border-[4px] border-orange-500"
                            key={resume._id}
                          >
                            <span>
                              <img
                                className="w-full h-full object-cover object-center opacity-60 hover:opacity-40"
                                src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=2048&q=75"
                              />
                            </span>
                            <Link
                              href={`/resume/${resume.id}?index=${index}`}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace-nowrap transition-all duration-500"
                            >
                              resume test {index}
                            </Link>
                            {/* <Link  href={`/resume/${resume.id}?index=${index}`}>
                        {resume.id} {index}
                      </Link> */}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              

              <style>
                {`
  .box:hover span { 
    transform: translate(-50%, -100%);
  } `}
              </style>
            
            </div>
            </div>
        
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/testResume/search");
  const data = await res.json();
  // console.log("data in server",data);
  return {
    props: {
      done: data,
    },
  };
};
