import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../../lib/hooks";
import ResumeContext from "../../context/ResumeContext";
import { TbPlus } from "react-icons/tb";
import { useRouter } from "next/router";

export default function Index(props) {
  const { details, setdetails, setdemo, demo, id, setid } =
    useContext(ResumeContext);

  const data = props.done;
  const router = useRouter();
  // console.log("done",data)
  const user = useUser();
  useEffect(() => {
    setid(null);
  }, [0]);

  async function changePublic(resumeId) {
    const body = {
      email: user.email,
      resumeId: resumeId,
    };
    await fetch("/api/changePublic", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: body }),
    });
    router.reload();
  }

  async function deleteResume(index) {
    console.log("index", index);
    const body = {
      email: user.email,
      index: index,
    };
    console.log(body);
    await fetch("/api/testResume", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    });
    router.reload();
  }

  return (
    <>
      {user && (
        <div className=" min-h-[70vh] py-4  ">
          <div className="mt-4 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block text-orange-600">
                  Welcome{" "}
                  <span className="text-black"> {user.profile.firstName}</span>{" "}
                  !
                </span>
              </h1>
              <p className="mb-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-2 md:text-lg md:max-w-3xl">
                Create a tailored resume for each job application. Double your
                chances of getting hired!
              </p>
            </div>
          </div>

          <div className=" relative md:inline-flex m-5">
            <div className="md:bg-gradient-to-tr from-gray-200 to-gray-100 p-5 sm:bg-white">
              <div className="box pt-2 my-7 mx-auto h-[90mm] w-[70mm] border-4 border-dashed border-gray-700 ">
                <div className="text-gray-500 text-center my-[58%] text-3xl font-semibold">
                  {/* CREATE */}
                  <Link href="/resume/resumes">Create</Link>
                  <div className=" flex justify-center ">
                    <TbPlus />
                  </div>
                </div>
                {/* <input type="text" name="role" id="role" className='border' required placeholder='enter role'/> */}
              </div>
            </div>

            {data.map((item) => (
              <div key={item._id}>
                {user.email == item.email && (
                  // flex gap-x-1 flex-wrap justify-self-center
                  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item.resume.map((resume, index) => (
                      <div key={index}>
                        {resume.publicResume == "false" && (
                          <div className="mx-auto my-auto">
                            <div
                              className="box relative my-7 mx-10 h-[90mm] w-[70mm]  bg-black border-[4px] border-orange-500"
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
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold whitespace-nowrap transition-all duration-500"
                              >
                                {resume.personal.role.toUpperCase()}
                              </Link>
                              <button
                                onClick={() => {
                                  changePublic(resume._id);
                                }}
                                className="mx-5"
                              >
                                Make public
                              </button>
                              <button
                                onClick={() => {
                                  deleteResume(index);
                                }}
                              >
                                Delete Resume
                              </button>
                            </div>
                          </div>
                        )}

                        {resume.publicResume == "true" && (
                          <>
                            {/* <h1 className="text-center">Public</h1> */}
                            <div>
                              <div
                                className="box relative my-7 mx-10 h-[90mm] w-[70mm]  bg-black border-[4px] border-orange-500"
                                key={resume._id}
                              >
                                <div className=" absolute z-20 -top-7 rounded-t-md right-0 bg-orange-600 px-4 font-semibold text-white">public</div>

                                <span>
                                  <img
                                    className="w-full h-full object-cover object-center opacity-60 hover:opacity-40"
                                    src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=2048&q=75"
                                  />
                                </span>
                                <Link
                                  href={`/resume/${resume.id}?index=${index}`}
                                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace transition-all duration-500"
                                >
                                  {resume.personal.role}
                                </Link>
                                <button
                                  onClick={() => {
                                    deleteResume(index);
                                  }}
                                >
                                  Delete Resume
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <style>
              {`
          .box:hover span { 
          transform: translate(-50%, -100%);
          } `}
            </style>
          </div>
        </div>
      )}
    </>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000/api/testResume/search");
//   const data = await res.json();
//   // console.log("data in server",data);
//   return {
//     props: {
//       done: data,
//     },
//   };
// };
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
