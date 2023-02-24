import React, { useContext, useEffect, useState } from "react";
import { demoResume } from "../../../lib/data";
import Image from "next/image";
import Link from "next/link";
import ResumeContext from "../../../context/ResumeContext";
import { useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUser } from "../../../lib/hooks";
import SideBar from "../../../components/SideBar";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Dublin() {
  const user = useUser();
  const { details, setdetails, setdemo, demo, color, setcolor } =
    useContext(ResumeContext);
  const [change, setchange] = useState(false);

  //to add email fname and lname
  useEffect(() => {
    if (user) {
      setdetails({
        ...details,
        personal: {
          ...details.personal,
          email: user.email,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
        },
      });
    }
  }, [user, change]);

  useEffect(() => {
    setchange(!change);
  }, [demo]);

  const [open, setopen] = useState("semiopen");

  //PDF document

  function printDocument() {
    console.log("inside");
    // var input = document.getElementById('smallResume');
    var input;
    if (open == "closed") {
      input = document.getElementById("smallResume");
    } else {
      input = document.getElementById("largeResume");
      console.log("om");
    }
    console.log(input);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("download.pdf");
      // pdf.output('dataurlnewwindow');
    });
  }

  //responsiveness
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-gray-400 to-gray-600">
              <button
                className="h-10 w-10 mx-auto block lg:hidden"
                onClick={toggleResume}
              >
                DETAILS
              </button>
              <div className="flex justify-center ">
                <div>
                  <button
                    onClick={printDocument}
                    className="cursor-pointer text-white mx-5"
                  >
                    Print
                  </button>

                  <button onClick={() => setdemo(!demo)}>LOAD</button>
                </div>

                <div>
                  <input type="text" name="color" id="color" />
                  <button
                    onClick={() =>
                      setcolor(document.getElementById("color").value)
                    }
                  >
                    color
                  </button>
                </div>

                {/* Small Resume */}
                <div
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                  <div className="first w-[85mm] h-[297mm] bg-emerald-700">
                    <div className="photobg bg-slate-300 w-[200px] h-[200px] relative top-16 left-16"></div>
                    <div className="photo">
                      <img
                        src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                        className="w-[200px] h-[200px] relative top-[-124px] left-[75px]"
                      ></img>
                    </div>
                    <div className="firstone w-[85mm] relative top-[-100px]">
                      <div className="personal">
                        <div className="dob pl-10 pt-3 text-white">
                          <i className="bx bxs-calendar pr-4 text-lg text-white"></i>
                          <span className="text-base relative bottom-[3px] text-white">
                            {details.personal.dob}
                          </span>
                        </div>
                        <div className="phone pl-10 pt-3 text-white">
                          <i className="bx bxs-phone pr-4 text-lg text-white"></i>
                          <span class="text-base relative bottom-1 text-white">
                            {details.personal.phone}
                          </span>
                        </div>
                        <div className="mail pl-10 pt-3 pb-2 text-white">
                          <i className="bx bxs-envelope pr-4 text-lg text-white"></i>
                          <span class="text-base relative bottom-1 text-white">
                            {details.personal.email}
                          </span>
                        </div>
                        <div className="social px-14 grid grid-cols-6 pb-4">
                          {details.social.map((item) => (
                            <div className="pr-2 pt-1" key={item.network}>
                              <h1>
                                <Link href={`${item.url}`}>
                                  <img
                                    src={
                                      "https://www." +
                                      item.network +
                                      ".com/favicon.ico"
                                    }
                                    className="w-5 grayscale-[40%]"
                                  ></img>
                                </Link>
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>
                      {details.education.length != 0 && (
                        <div className="education">
                          <h2 className="text-center text-xl font-sans font-bold text-zinc-200">
                            E D U C A T I O N
                          </h2>
                          {details.education.map((item) => (
                            <p
                              className="pl-10 pr-5 pt-5"
                              key={item.institution}
                            >
                              <span className="font-medium text-white">
                                {item.institution}
                              </span>
                              <span className="text-white"> in </span>
                              <span className="font-medium text-white">
                                {item.fieldOfStudy}
                                <br />({item.startDate} to {item.endDate})
                              </span>
                              <br />
                              <i className="bx bxs-graduation text-white"></i>
                              <span className="text-white">
                                {" "}
                                {item.typeOfDegree} in {item.fieldOfStudy} (
                                {item.gpa})
                              </span>
                            </p>
                          ))}
                        </div>
                      )}
                      {details.certifications.length != 0 && (
                        <div className="certifications">
                          <h2 className="text-center text-xl font-sans font-bold pt-3 text-zinc-200 pb-3">
                            C E R T I F I C A T I O N S
                          </h2>
                          {details.certifications.map((item) => (
                            <p
                              className="pl-10 pr-5 pt-1 text-white"
                              key={item.title}
                            >
                              <i className="bx bxs-square text-xs pr-3 text-white"></i>
                              <span className="text-white">
                                {item.title} from {item.issuer}
                              </span>
                            </p>
                          ))}
                        </div>
                      )}
                      {details.skills.length != 0 && (
                        <div className="skills">
                          <div className="pl-10">
                            <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300">
                              S K I L L S
                            </h2>
                            {details.skills.map((item) => (
                              <span className="pr-2 text-white" key={item.name}>
                                {item.name}{" "}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {details.languages.length != 0 && (
                        <div className="languages">
                          <div className="pl-10">
                            <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300">
                              L A N G U A G E S
                            </h2>
                            {details.languages.map((item) => (
                              <span className="pr-2 text-white" key={item.name}>
                                {item.name}{" "}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {details.hobbies.length != 0 && (
                        <div className="skills">
                          <div className="pl-10">
                            <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300">
                              H O B B I E S
                            </h2>
                            {details.hobbies.map((item) => (
                              <span className="pr-2 text-white" key={item.name}>
                                {item.name}{" "}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="second bg-emerald-100 w-[125mm] h-[297mm]">
                    <div className="name">
                      <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600 font-serif">
                        <h1>{details.personal.firstName}</h1>
                        <h1>{details.personal.lastName}</h1>
                        <h2 className="text-lg font-normal py-3">
                          {details.personal.role}
                        </h2>
                      </div>
                    </div>
                    {details.personal.objective.length != 0 && (
                      <div className="career-objective">
                        <h2 className="text-center text-xl font-sans font-bold pt-3">
                          C A R E E R O B J E C T I V E
                        </h2>
                        <p className="pl-10 pr-5 pt-2 text-xs">
                          {details.personal.objective}
                        </p>
                      </div>
                    )}
                    {details.work.length != 0 && (
                      <div className="experience">
                        <h2 className="text-center text-xl font-sans font-bold pt-5">
                          E X P E R I E N C E
                        </h2>
                        {details.work.map((item) => (
                          <p className="pl-10 pr-5 pt-2" key={item.company}>
                            <span className="font-medium text-lg pr-3">
                              {item.designation} in {item.company}
                            </span>
                            <br></br>({item.from} to {item.to})<br />
                            <Link href={`${item.website}`}>{item.website}</Link>
                            <br></br>
                            <span className="text-sm">{item.summary.data}</span>
                          </p>
                        ))}
                      </div>
                    )}
                    {details.projects.length != 0 && (
                      <div className="projects">
                        <h2 className="text-center text-xl font-sans font-bold pt-2">
                          P R O J E C T S
                        </h2>
                        {details.projects.map((item) => (
                          <p className="pl-10 pr-5 pt-1" key={item.name}>
                            <span className="font-medium text-lg pr-3">
                              {item.name}
                            </span>{" "}
                            ({item.from} to {item.to})<br />
                            <a href={item.website}>{item.website}</a>
                            <br></br>
                            <span className="text-sm">{item.summary.data}</span>
                          </p>
                        ))}
                      </div>
                    )}
                    {details.awards.length != 0 && (
                      <div className="awards">
                        <h2 className="text-center text-xl font-sans font-bold pt-2">
                          A W A R D S
                        </h2>
                        {details.awards.map((item) => (
                          <p className="pl-10 pr-5 pt-1" key={item.name}>
                            <i className="bx bxs-award pr-1"></i>
                            <span className="font-medium">
                              {item.name}
                            </span>{" "}
                            from {item.awarder}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {open == "semiopen" && (
            <>
              <SideBar />

              <div
                className="lg:hidden text-white border border-white rounded-lg px-2 py-1 hover:border-orange-700 hover:text-orange-700 absolute right-[10%] top-5 "
                onClick={toggleResume}
              >
                PREVIEW
              </div>

              <div className="hidden lg:block h-screen bg-gradient-to-b from-slate-700 to-slate-800  w-[100%] overflow-y-scroll scrollbar scrollbar-thumb-orange-800">
                <div className="flex justify-center ">
                  <div>
                    <button
                      onClick={printDocument}
                      className="cursor-pointer text-white mx-5"
                    >
                      Print
                    </button>

                    <button
                      className="text-white"
                      onClick={() => setdemo(!demo)}
                    >
                      LOAD
                    </button>
                  </div>
                  <div>
                    <input type="text" name="color" id="color" />
                    <button
                      onClick={() =>
                        setcolor(document.getElementById("color").value)
                      }
                    >
                      color
                    </button>
                  </div>

                  {/* large resume */}

                  <div
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div className={`first w-[85mm] h-[297mm] bg-${color}-700`}>
                      <div className="photobg bg-slate-300 w-[200px] h-[200px] relative top-16 left-16"></div>
                      <div className="photo">
                        <img
                          src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                          className="w-[200px] h-[200px] relative top-[-124px] left-[75px]"
                        ></img>
                      </div>
                      <div className="firstone w-[85mm] relative top-[-100px]">
                        <div className="personal">
                          <div className="dob pl-10 pt-3 text-white">
                            <i className="bx bxs-calendar pr-4 text-lg text-white"></i>
                            <span className="text-base relative bottom-[3px] text-white">
                              {details.personal.dob}
                            </span>
                          </div>
                          <div className="phone pl-10 pt-3 text-white">
                            <i className="bx bxs-phone pr-4 text-lg text-white"></i>
                            <span class="text-base relative bottom-1 text-white">
                              {details.personal.phone}
                            </span>
                          </div>
                          <div className="mail pl-10 pt-3 pb-2 text-white">
                            <i className="bx bxs-envelope pr-4 text-lg text-white"></i>
                            <span class="text-base relative bottom-1 text-white">
                              {details.personal.email}
                            </span>
                          </div>
                          <div className="social px-14 grid grid-cols-6 pb-4">
                            {details.social.map((item) => (
                              <div className="pr-2 pt-1" key={item.network}>
                                <h1>
                                  <Link href={`${item.url}`}>
                                    <img
                                      src={
                                        "https://www." +
                                        item.network +
                                        ".com/favicon.ico"
                                      }
                                      className="w-5 grayscale-[40%]"
                                    ></img>
                                  </Link>
                                </h1>
                              </div>
                            ))}
                          </div>
                        </div>
                        {details.education.length != 0 && (
                          <div className="education">
                            <h2 className="text-center text-xl font-sans font-bold text-zinc-200">
                              E D U C A T I O N
                            </h2>
                            {details.education.map((item) => (
                              <p
                                className="pl-10 pr-5 pt-5"
                                key={item.institution}
                              >
                                <span className="font-medium text-white">
                                  {item.institution}
                                </span>
                                <span className="text-white"> in </span>
                                <span className="font-medium text-white">
                                  {item.fieldOfStudy}
                                  <br />({item.startDate} to {item.endDate})
                                </span>
                                <br />
                                <i className="bx bxs-graduation text-white"></i>
                                <span className="text-white">
                                  {" "}
                                  {item.typeOfDegree} in {item.fieldOfStudy} (
                                  {item.gpa})
                                </span>
                              </p>
                            ))}
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div className="certifications">
                            <h2 className="text-center text-xl font-sans font-bold pt-3 text-zinc-200 pb-3">
                              C E R T I F I C A T I O N S
                            </h2>
                            {details.certifications.map((item) => (
                              <p
                                className="pl-10 pr-5 pt-1 text-white"
                                key={item.title}
                              >
                                <i className="bx bxs-square text-xs pr-3 text-white"></i>
                                <span className="text-white">
                                  {item.title} from {item.issuer}
                                </span>
                              </p>
                            ))}
                          </div>
                        )}
                        {details.skills.length != 0 && (
                          <div className="skills">
                            <div className="pl-10">
                              <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300">
                                S K I L L S
                              </h2>
                              {details.skills.map((item) => (
                                <span
                                  className="pr-2 text-white"
                                  key={item.name}
                                >
                                  {item.name}{" "}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {details.languages.length != 0 && (
                          <div className="languages">
                            <div className="pl-10">
                              <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300">
                                L A N G U A G E S
                              </h2>
                              {details.languages.map((item) => (
                                <span
                                  className="pr-2 text-white"
                                  key={item.name}
                                >
                                  {item.name}{" "}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div className="skills">
                            <div className="pl-10">
                              <h2 className="text-center text-xl font-sans font-bold pt-5 pb-1 text-zinc-300">
                                H O B B I E S
                              </h2>
                              {details.hobbies.map((item) => (
                                <span
                                  className="pr-2 text-white"
                                  key={item.name}
                                >
                                  {item.name}{" "}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`second bg-${color}-100 w-[125mm] h-[297mm]`}
                    >
                      <div className="name">
                        <div className="text-3xl mx-20 mt-10 font-semibold border-b-[1px] border-gray-600 font-serif">
                          <h1>{details.personal.firstName}</h1>
                          <h1>{details.personal.lastName}</h1>
                          <h2 className="text-lg font-normal py-3">
                            {details.personal.role}
                          </h2>
                        </div>
                      </div>
                      {details.personal.objective.length != 0 && (
                        <div className="career-objective">
                          <h2 className="text-center text-xl font-sans font-bold pt-3">
                            C A R E E R O B J E C T I V E
                          </h2>
                          <p className="pl-10 pr-5 pt-2 text-xs">
                            {details.personal.objective}
                          </p>
                        </div>
                      )}
                      {details.work.length != 0 && (
                        <div className="experience">
                          <h2 className="text-center text-xl font-sans font-bold pt-5">
                            E X P E R I E N C E
                          </h2>
                          {details.work.map((item) => (
                            <p className="pl-10 pr-5 pt-2" key={item.company}>
                              <span className="font-medium text-lg pr-3">
                                {item.designation} in {item.company}
                              </span>
                              <br></br>({item.from} to {item.to})<br />
                              <Link href={`${item.website}`}>
                                {item.website}
                              </Link>
                              <br></br>
                              <span className="text-sm">
                                {item.summary.data}
                              </span>
                            </p>
                          ))}
                        </div>
                      )}
                      {details.projects.length != 0 && (
                        <div className="projects">
                          <h2 className="text-center text-xl font-sans font-bold pt-2">
                            P R O J E C T S
                          </h2>
                          {details.projects.map((item) => (
                            <p className="pl-10 pr-5 pt-1" key={item.name}>
                              <span className="font-medium text-lg pr-3">
                                {item.name}
                              </span>{" "}
                              ({item.from} to {item.to})<br />
                              <a href={item.website}>{item.website}</a>
                              <br></br>
                              <span className="text-sm">
                                {item.summary.data}
                              </span>
                            </p>
                          ))}
                        </div>
                      )}
                      {details.awards.length != 0 && (
                        <div className="awards">
                          <h2 className="text-center text-xl font-sans font-bold pt-2">
                            A W A R D S
                          </h2>
                          {details.awards.map((item) => (
                            <p className="pl-10 pr-5 pt-1" key={item.name}>
                              <i className="bx bxs-award pr-1"></i>
                              <span className="font-medium">
                                {item.name}
                              </span>{" "}
                              from {item.awarder}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
