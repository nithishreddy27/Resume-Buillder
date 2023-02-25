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

export default function Symetric() {
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
                  <div className="first w-[210mm] h-[45mm] bg-zinc-300 flex">
                      <div className="name font-serif">
                        <h1 className="text-4xl font-semibold px-10 pt-10">
                          {details.personal.firstName}
                          <span className="font-normal pl-2">
                            {" "}
                            {details.personal.lastName}
                          </span>
                        </h1>
                        <h2 className="text-xl px-10 pt-5 font-sans font-medium">
                          {details.personal.role}
                        </h2>
                      </div>
                      <div className="photo">
                        <div className="pl-[80px] pt-16 ml-20">
                          <img
                            src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                            className="w-[130px] h-[130px] rounded-full"
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div className="second flex">
                      <div className="side1 w-[85mm]">
                        <div className="contact  border-b-2 border-r-2 border-gray-500 mx-6 mt-5">
                          <div className="dob pl-10 pt-1">
                            <i className="bx bxs-calendar pr-4 text-lg"></i>
                            <span className="text-base relative bottom-[3px]">
                              {details.personal.dob}
                            </span>
                          </div>
                          <div className="phone pl-10 pt-1">
                            <i className="bx bxs-phone pr-4 text-lg"></i>
                            <span className="text-base relative bottom-1">
                              {details.personal.phone}
                            </span>
                          </div>
                          <div className="mail pl-10 pt-1">
                            <i className="bx bxs-envelope pr-4 text-lg"></i>
                            <span className="text-base relative bottom-1">
                              {details.personal.email}
                            </span>
                          </div>
                          <div className="social pl-10 pt-1 flex">
                            {details.social.map((item) => (
                              <div className="pr-2" key={item.network}>
                                <span>
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
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                        </div>
                        {details.education.length != 0 && (
                          <div className="education border-b-2 border-r-2 border-gray-500 mx-6">
                            <div className="pb-2">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                                E D U C A T I O N
                              </h2>
                              {details.education.map((item) => (
                                <p
                                  className="pl-10 pr-5 pt-2"
                                  key={item.institution}
                                >
                                  <span className="font-medium">
                                    {item.institution}
                                  </span>{" "}
                                  in{" "}
                                  <span className="font-medium">
                                    {item.fieldOfStudy}
                                    <br />({item.startDate} to {item.endDate})
                                  </span>
                                  <br />
                                  <i class="bx bxs-graduation"></i>{" "}
                                  {item.typeOfDegree} in {item.fieldOfStudy} (
                                  {item.gpa})
                                </p>
                              ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div className="certifications border-r-2 border-b-2 border-gray-500 mx-6">
                            <div className="pb-2">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-3">
                                C E R T I F I C A T I O N S
                              </h2>
                              {details.certifications.map((item) => (
                                <p className="pl-10 pr-2 pb-1" key={item.title}>
                                  <i className="bx bxs-square text-xs pr-3"></i>
                                  {item.title} from {item.issuer}
                                </p>
                              ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                          </div>
                        )}
                        {details.skills.length != 0 && (
                          <div className="skills border-b-2 border-r-2 border-gray-500 mx-6">
                            <div className="pl-10 pb-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">
                                S K I L L S
                              </h2>
                              {details.skills.map((item) => (
                                <span className="pr-2" key={item.name}>
                                  {item.name}{" "}
                                </span>
                              ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div className="skills border-b-2 border-r-2 border-gray-500 mx-6">
                            <div className="pl-10 pb-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">
                                H O B B I E S
                              </h2>
                              {details.hobbies.map((item) => (
                                <span className="pr-2" key={item.name}>
                                  {item.name}{" "}
                                </span>
                              ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                          </div>
                        )}
                        {details.languages.length != 0 && (
                          <div className="border-r-2 border-gray-500 mx-6">
                            <div className="pl-10 pb-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">
                                L A N G U A G E S
                              </h2>
                              {details.languages.map((item) => (
                                <span className="pr-2" key={item.name}>
                                  {item.name}{" "}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="side2 w-[125mm]">
                        {details.personal.objective.length != 0 && (
                          <div className="career-objective border-b-2 border-gray-500 ml-[-24px] mr-5">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-8">
                              C A R E E R O B J E C T I V E
                            </h2>
                            <p className="pl-10 pr-5 pt-3 pb-3">
                              {details.personal.objective}
                            </p>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                          </div>
                        )}
                        {details.work.length != 0 && (
                          <div className="experience border-b-2 border-gray-500 ml-[-24px] mr-5">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                              E X P E R I E N C E
                            </h2>
                            <div className="pb-5">
                              {details.work.map((item) => (
                                <p
                                  className="pl-10 pr-5 pt-2"
                                  key={item.company}
                                >
                                  <span class="font-medium text-lg pr-3">
                                    {item.designation} in {item.company}
                                  </span>
                                  <br></br>({item.from} to {item.to})<br />
                                  <Link href={`${item.website}`}>
                                    {item.website}
                                  </Link>
                                  <br></br>
                                </p>
                              ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                          </div>
                        )}
                        {details.projects.length != 0 && (
                          <div className="projects border-b-2 border-gray-500 ml-[-24px] mr-5">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                              P R O J E C T S
                            </h2>
                            <div className="pb-3">
                              {details.projects.map((item) => (
                                <p className="pl-10 pr-5 pt-3" key={item.name}>
                                  <span className="font-medium text-lg pr-3">
                                    {item.name}
                                  </span>{" "}
                                  ({item.from} to {item.to})<br />
                                  <Link href={item.website}>
                                    {item.website}
                                  </Link>
                                  <br></br>
                                </p>
                              ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div className="border-gray-500 border-b-2 ml-[-24px] mr-5">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                              C E R T I F I C A T I O N S
                            </h2>
                            {details.certifications.map((item) => (
                              <p className="pl-10 pr-5 pt-1" key={item.title}>
                                <i className="bx bxs-award pr-1"></i>
                                <span className="font-medium">
                                  {item.title}
                                </span>{" "}
                                from {item.issuer}
                              </p>
                            ))}
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <div className="awards border-gray-500 ml-[-24px] mr-5">
                            <h2 className="text-center text-xl font-serif font-medium underline pt-3">
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
                  <div>
                      <div className="first w-[210mm] h-[45mm] bg-zinc-300 flex">
                        <div className="name font-serif">
                          <h1 className="text-4xl font-semibold px-10 pt-10">
                            {details.personal.firstName}
                            <span className="font-normal pl-2">
                              {" "}
                              {details.personal.lastName}
                            </span>
                          </h1>
                          <h2 className="text-xl px-10 pt-5 font-sans font-medium">
                            {details.personal.role}
                          </h2>
                        </div>
                        <div className="photo">
                          <div className="pl-[80px] pt-16 ml-20">
                            <img
                              src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                              className="w-[130px] h-[130px] rounded-full"
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="second flex">
                        <div className="side1 w-[85mm]">
                          <div className="contact  border-b-2 border-r-2 border-gray-500 mx-6 mt-5">
                            <div className="dob pl-10 pt-1">
                              <i className="bx bxs-calendar pr-4 text-lg"></i>
                              <span className="text-base relative bottom-[3px]">
                                {details.personal.dob}
                              </span>
                            </div>
                            <div className="phone pl-10 pt-1">
                              <i className="bx bxs-phone pr-4 text-lg"></i>
                              <span className="text-base relative bottom-1">
                                {details.personal.phone}
                              </span>
                            </div>
                            <div className="mail pl-10 pt-1">
                              <i className="bx bxs-envelope pr-4 text-lg"></i>
                              <span className="text-base relative bottom-1">
                                {details.personal.email}
                              </span>
                            </div>
                            <div className="social pl-10 pt-1 flex">
                              {details.social.map((item) => (
                                <div className="pr-2" key={item.network}>
                                  <span>
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
                                  </span>
                                </div>
                              ))}
                            </div>
                            <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                          </div>
                          {details.education.length != 0 && (
                            <div className="education border-b-2 border-r-2 border-gray-500 mx-6">
                              <div className="pb-2">
                                <h2 className="text-center text-xl font-serif font-medium underline pt-5">
                                  E D U C A T I O N
                                </h2>
                                {details.education.map((item) => (
                                  <p
                                    className="pl-10 pr-5 pt-2"
                                    key={item.institution}
                                  >
                                    <span className="font-medium">
                                      {item.institution}
                                    </span>{" "}
                                    in{" "}
                                    <span className="font-medium">
                                      {item.fieldOfStudy}
                                      <br />({item.startDate} to {item.endDate})
                                    </span>
                                    <br />
                                    <i class="bx bxs-graduation"></i>{" "}
                                    {item.typeOfDegree} in {item.fieldOfStudy} (
                                    {item.gpa})
                                  </p>
                                ))}
                              </div>
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                            </div>
                          )}
                          {details.certifications.length != 0 && (
                            <div className="certifications border-r-2 border-b-2 border-gray-500 mx-6">
                              <div className="pb-2">
                                <h2 className="text-center text-xl font-serif font-medium underline pt-5 pb-3">
                                  C E R T I F I C A T I O N S
                                </h2>
                                {details.certifications.map((item) => (
                                  <p
                                    className="pl-10 pr-2 pb-1"
                                    key={item.title}
                                  >
                                    <i className="bx bxs-square text-xs pr-3"></i>
                                    {item.title} from {item.issuer}
                                  </p>
                                ))}
                              </div>
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                            </div>
                          )}
                          {details.skills.length != 0 && (
                            <div className="skills border-b-2 border-r-2 border-gray-500 mx-6">
                              <div className="pl-10 pb-5">
                                <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">
                                  S K I L L S
                                </h2>
                                {details.skills.map((item) => (
                                  <span className="pr-2" key={item.name}>
                                    {item.name}{" "}
                                  </span>
                                ))}
                              </div>
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                            </div>
                          )}
                          {details.hobbies.length != 0 && (
                            <div className="skills border-b-2 border-r-2 border-gray-500 mx-6">
                              <div className="pl-10 pb-5">
                                <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">
                                  H O B B I E S
                                </h2>
                                {details.hobbies.map((item) => (
                                  <span className="pr-2" key={item.name}>
                                    {item.name}{" "}
                                  </span>
                                ))}
                              </div>
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
                            </div>
                          )}
                          {details.languages.length != 0 && (
                            <div className="border-r-2 border-gray-500 mx-6">
                              <div className="pl-10 pb-5">
                                <h2 className="text-center text-xl font-serif font-medium underline pt-3 pb-2">
                                  L A N G U A G E S
                                </h2>
                                {details.languages.map((item) => (
                                  <span className="pr-2" key={item.name}>
                                    {item.name}{" "}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="side2 w-[125mm]">
                          {details.personal.objective.length != 0 && (
                            <div className="career-objective border-b-2 border-gray-500 ml-[-24px] mr-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-8">
                                C A R E E R O B J E C T I V E
                              </h2>
                              <p className="pl-10 pr-5 pt-3 pb-3">
                                {details.personal.objective}
                              </p>
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                            </div>
                          )}
                          {details.work.length != 0 && (
                            <div className="experience border-b-2 border-gray-500 ml-[-24px] mr-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                                E X P E R I E N C E
                              </h2>
                              <div className="pb-5">
                                {details.work.map((item) => (
                                  <p
                                    className="pl-10 pr-5 pt-2"
                                    key={item.company}
                                  >
                                    <span class="font-medium text-lg pr-3">
                                      {item.designation} in {item.company}
                                    </span>
                                    <br></br>({item.from} to {item.to})<br />
                                    <Link href={`${item.website}`}>
                                      {item.website}
                                    </Link>
                                    <br></br>
                                  </p>
                                ))}
                              </div>
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                            </div>
                          )}
                          {details.projects.length != 0 && (
                            <div className="projects border-b-2 border-gray-500 ml-[-24px] mr-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                                P R O J E C T S
                              </h2>
                              <div className="pb-3">
                                {details.projects.map((item) => (
                                  <p
                                    className="pl-10 pr-5 pt-3"
                                    key={item.name}
                                  >
                                    <span className="font-medium text-lg pr-3">
                                      {item.name}
                                    </span>{" "}
                                    ({item.from} to {item.to})<br />
                                    <Link href={item.website}>
                                      {item.website}
                                    </Link>
                                    <br></br>
                                  </p>
                                ))}
                              </div>
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                            </div>
                          )}
                          {details.certifications.length != 0 && (
                            <div className="border-gray-500 border-b-2 ml-[-24px] mr-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-3">
                                C E R T I F I C A T I O N S
                              </h2>
                              {details.certifications.map((item) => (
                                <p className="pl-10 pr-5 pt-1" key={item.title}>
                                  <i className="bx bxs-award pr-1"></i>
                                  <span className="font-medium">
                                    {item.title}
                                  </span>{" "}
                                  from {item.issuer}
                                </p>
                              ))}
                              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
                            </div>
                          )}
                          {details.awards.length != 0 && (
                            <div className="awards border-gray-500 ml-[-24px] mr-5">
                              <h2 className="text-center text-xl font-serif font-medium underline pt-3">
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
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}