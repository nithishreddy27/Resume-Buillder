import React, { useContext } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";

export default function red() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      test: [{}],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
    roll: "roll",
  });

  const onFormSubmit = async (data) => {
    console.log(data);
  };

  const resume = demoResume();
  const { details, setdetails } = useContext(ResumeContext);

  function updateForm(event) {
    const n = event.target.name;
    const i = event.target.id;
    console.log("n", n, "i", i);
    setdetails({ ...details, [n]: { ...details[n], [i]: event.target.value } });
    console.log("user", details);
  }


  function addFormElement(){
    console.log("inside me")
    const arr = details.social
    // console.log("arr type",typeof(arr))
    arr.push({network: "LinkedIn",
    username: "Tim Janseen",
    url: "https://www.linkedin.com/in/tim-janseen-68b0a2253"})
    setdetails({ ...details, social:arr});
    console.log("detaosl",details)
  }



  // const arr= (details.social)
  // console.log(arr)


  async function socialChange(){
    const sn={
      network : document.getElementById("network").value,
      username : document.getElementById("username").value,
      url: document.getElementById("url").value,
    }
    const arr = []
    details.social.map((item)=>{
      arr.push(item)
    })
    arr.push(sn)
    setdetails({ ...details,social:arr});
    
    }

  return (
    <>
      <div className="bg-gray-300 flex h-[285mm]">
        <div className="w-[40%]">
          form elements
          <form action="" className="flex flex-col p-5">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="personal"
              id="firstName"
              className="w-[50%] my-2"
              value={details.personal.firstName}
              onChange={updateForm}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="personal"
              id="lastName"
              className="w-[50%] my-2"
              value={details.personal.lastName}
              onChange={updateForm}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="personal"
              id="phone"  
              className="w-[50%] my-2"
              value={details.personal.phone}
              onChange={updateForm}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="personal"
              id="email"
              className="w-[50%] my-2"
              value={details.personal.email}
              onChange={updateForm}
            />

            <label htmlFor="email">Objective</label>
            <input
              type="textarea"
              name="personal"
              id="objective"
              className="w-[50%] my-2"
              value={details.personal.objective}
              onChange={updateForm}
            />

            <label htmlFor="social-network">Social Network</label>

          </form>
          {/* <div className="my-10 mx-5">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <button
                onClick={() => {append({ name: "" })
                                addFormElement()}}
                className="bg-green-200 p-2 rounded-full"
              >
                Add Education
              </button>
              <div className="flex flex-col">
                {fields.map(({ id }, index) => {
                  return (
                    <div key={id} className="flex">
                      <label
                        htmlFor="name"
                        className="m-2 text-xl font-semibold my-2"
                      >
                        Enter Network:
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border-none rounded w-[20%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2 "
                        {...register(`test.${index}.name`)}
                        id={`name`+`${index}`}
                        value={details.social[index].network}
                        onChange={socialChange}
                        number={index}
                      />
                      <label
                        htmlFor="username"
                        className="m-2 text-xl font-semibold my-2"
                      >
                        Enter username:
                      </label>
                      <input
                        type="text"
                        className="shadow appearance-none border-none rounded w-[20%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2 "
                        {...register(`roll.${index}.name`)}
                        id="roll"
                        value={details.social[index].username}
                        onChange={socialChange}

                      />
                      <button
                        onClick={() => remove(index)}
                        className="bg-red-200 mx-4 rounded-full p-2"
                      >
                        remove
                      </button>
                    </div>
                  );
                })}
              </div>
              <input
                type="submit"
                value="Submit"
                className="bg-gradient-to-r from-cyan-500 focus:ring-2 to-blue-500 font-semibold cursor-pointer block w-[10%] text-white h-10 rounded-md "
              />
            </form>
          </div> */}


          <div className="flex flex-col w-[75%] p-10">
            {/* <form  className="flex flex-col w-[75%] p-5" > */}
                <label htmlFor="network">Network</label>
                <input type="text" name="social" id="network" />
                <label htmlFor="url">Url</label>
                <input type="text" name="social" id="url" />
                <label htmlFor="network">username</label>
                <input type="text" name="social" id="username" />
                {/* <input type="submit" value="submit" className="cursor-pointer" /> */}
                <button onClick={socialChange}>Submit</button>
            {/* </form> */}
          </div>
        </div>





        {/* Resume */}



        <div className="bg-slate-50 w-[210mm] h-[285mm] overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
          <div className=" w-[35%] bg-gray-200 p-6">
            <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
              <img
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt=""
                className="w-36 h-36 mt-7 ml-10 border-8 border-white"
              />
            </div>
            <div className="mt-48">
              <h1 className="text-2xl font-semibold tracking-[2px]">CONTACT</h1>
              <hr className="h-[2px] bg-black my-1" />
              {
                <>
                  <div className="flex">
                    <span>
                      <img
                        src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                        className="w-5 h-5"
                      />
                    </span>
                    <h1 className="mx-4">{details.personal.phone}</h1>
                  </div>
                  <div className="flex my-1">
                    <span>
                      <img
                        src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                        className="w-7 h-7"
                      />
                    </span>
                    <h1 className="mx-2">{details.personal.email}</h1>
                  </div>
                  {details.social.map((item) => (
                    <div className="my-3 flex" key={item.network}>
                      <span>
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          className="w-5 grayscale-[40%]"
                        />
                      </span>

                      <Link href={item.url}>
                        <span className="mx-4">{item.username}</span>
                      </Link>
                    </div>
                  ))}
                  {
                    // console.log(details)
                    console.log("re",details)
                  }
                </>
              }
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold tracking-[2px]">SKILLS</h1>
              <hr className="h-[2px] bg-black my-1" />
              {resume.skills.map((item) => (
                <li className="mx-4" key={item.name}>
                  {item.name}
                </li>
              ))}
            </div>

            {/* <div className='mt-4'>
            <h1 className='text-2xl font-semibold tracking-[2px]' >HOBBIES</h1>
                <hr className="h-[2px] bg-black my-1" />
                {
                    resume.hobbies.map(item=>(
                        <p className='my-2'>{item.name}</p>
                    ))
                }
            </div> */}
            <div className="mt-4">
              <h1 className="text-2xl font-semibold tracking-[2px]">
                LANGUAGES
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {resume.languages.map((item) => (
                <p className="my-2" key={item.name}>
                  {item.name}
                </p>
              ))}
            </div>
            <h1 className="text-2xl font-semibold tracking-[2px]">AWARADS</h1>
            <hr className="h-[2px] bg-black my-1" />
            {resume.awards.map((item) => (
              <div className="my-2" key={item.name}>
                <span className="font-semibold text-[15px]">
                  {item.name} ({item.date.slice(0, 4)})
                </span>
                <span className="mx-2 text-[15px]"></span>
                <p className="mx-4">{item.summary.data.slice(0, 38)}</p>
              </div>
            ))}
          </div>
          <div className=" w-[70%] pt-10 px-5 ">
            <div>
              <h1 className="text-5xl font-semibold tracking-wider">
                {details.personal.firstName}
              </h1>
              <h1 className="text-3xl  tracking-[4px] mt-2">
                {details.personal.lastName}
              </h1>
              {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
            </div>

            <div className="mt-12">
              <h1 className="text-xl font-bold tracking-[1px]">OBJECTIVE</h1>
              <hr className="h-[2px] bg-black my-1" />
              <p className="text-sm">{details.personal.objective}</p>

              <h1 className="text-xl font-bold tracking-[1px] mt-5">WORK</h1>
              <hr className="h-[2px] bg-black my-1" />

              <div className="ml-1 mt-1">
                {resume.work.map((item) => (
                  <div className="flex" key={item.company}>
                    <div className="pt-1">
                      <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                      <div className="w-1 bg-black h-32 m-1"></div>
                    </div>
                    <div className="ml-5 mt-1">
                      <p className="font-semibold">
                        {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                      </p>
                      <p className="tracking-[2px] my-1">{item.company}</p>
                      <p className="font-bold">{item.designation}</p>
                      <p className="mb-4 text-sm">{item.summary.data}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-xl font-bold tracking-[1px] mt-3">
                EDUCACTION
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              <div className="ml-1 mt-1">
                {resume.education.map((item) => (
                  <div className="flex" key={item.institution}>
                    <div className="flex">
                      <div className="pt-1">
                        <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                        <div className="w-1 bg-black h-28 m-1"></div>
                      </div>
                      <div className="ml-5 mt-1">
                        <p className="font-semibold">
                          {item.startDate.slice(0, 4)} -{" "}
                          {item.endDate.slice(0, 4)}
                        </p>
                        <p className="tracking-[2px]">{item.institution}</p>
                        <p className="font-bold">{item.fieldOfStudy}</p>
                        <p className="">{item.typeOfDegree}</p>
                        <p className="mb-4 font-semibold">GPA-{item.gpa}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
