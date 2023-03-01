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
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
export default function Casual() {
  const user = useUser();
  const { details, setdetails, setdemo, demo } =
    useContext(ResumeContext);
  const [change, setchange] = useState(false);
  const [colorpalette, setcolorpalette] = useState(false);

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
    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("download.pdf");
      // pdf.output('dataurlnewwindow');
    });
  }
  useEffect(() => {
    // document.getElementById("largeResume").style.color = "red"
  }, [0]);
  //responsiveness
  function toggleResume() {
    if (open == "semiopen") {
      setopen("closed");
    } else {
      setopen("semiopen");
    }
  }
  const [color, setColor] = useColor("hex", "#121212");
  useEffect(() => {
    console.log("color:", color);
    // settextColor()
  }, [color]);

  return (
    <>
      {details && user && (
        <div className="flex">
          {open == "closed" && (
            <div className="mx-auto w-full lg:w-3/4 xl:w-3/5 max-w-3xl bg-gradient-to-b from-slate-700 to-slate-800">
              <div className="flex border border-white">
                <div className="m-3 flex grow">
                  <div className="flex mt-1">
                    
                  </div>
                </div>
                <div className="m-3 flex">
                <button
                    className="text-white border border-white p-2 rounded-md"
                    onClick={() => {
                      setcolorpalette(!colorpalette);
                    }}
                  >
                    COLOR
                  </button>
                  <div className={`${colorpalette ? "block" : "hidden"} mt-[50px] ml-[-50px] lg:ml-[50px] absolute z-40`}>
                    <ColorPicker
                      width={300}
                      height={100}
                      color={color}
                      onChange={setColor}
                      hideHSV
                      dark
                    />
                    ;
                  </div>
                  <button
                    onClick={printDocument}
                    className="cursor-pointer text-white border border-white p-1 mx-1 rounded"
                  >
                    PRINT
                  </button>

                  <button
                    className="text-white border border-white p-1 mx-1 rounded"
                    onClick={() => setdemo(!demo)}
                  >
                    LOAD
                  </button>
                  <button
                    className=" block lg:hidden border border-white text-white p-1 mx-1 rounded-md"
                    onClick={toggleResume}
                  >
                    DETAILS
                  </button>
                </div>
              </div>
              <div className="flex justify-center ">
                {/* Small Resume */}
                <div
                  className={`bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row`}
                  id="smallResume"
                >
                  <div className="grid grid-cols-3">
                    <div>
                      <div className="col-span-1 bg-gray-300 w-[68mm] h-[285mm]">
                        <div>
                          <img
                            className="rounded-full w-[119px] ml-10 pt-3"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                            alt="ProfilePhoto"
                          />
                        </div>

                        <div>
                          <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                            Details
                          </h1>
                          <h2 className=" font-medium px-8  text-black">
                            Phone
                          </h2>
                          <h6 className=" px-8 ">{details.personal.phone}</h6>
                          <h2 className=" font-medium px-8  text-black">
                            Email
                          </h2>
                          <h6 className=" px-8 ">{details.personal.email}</h6>
                          <h2 className=" font-medium px-8  text-black">
                            Date Of Birth
                          </h2>
                          <h6 className=" px-8 ">{details.personal.dob}</h6>
                        </div>
                        {details.skills.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                              Skills
                            </h1>
                            {details.skills.map((item) => (
                              <div key={item.name}>
                                <h1 className="font-medium ml-8">
                                  {item.name}
                                </h1>
                                <h2 className="ml-8">{item.level}</h2>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.awards.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                              Awards
                            </h1>
                            {details.awards.map((item) => (
                              <div key={item.name}>
                                <h1 className="font-medium ml-8">
                                  {item.name} from {item.awarder}
                                </h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.social.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                              Social Network
                            </h1>
                            {details.social.map((item) => (
                              <div
                                className="ml-8 my-4 flex"
                                key={item.network}
                              >
                                <img
                                  src={
                                    "https://www." +
                                    item.network +
                                    ".com/favicon.ico"
                                  }
                                  alt=""
                                  className="w-5 h-5"
                                />
                                <Link href={item.url}>
                                  <h1 className="ml-4">{item.username}</h1>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.hobbies.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                              Hobbies
                            </h1>
                            {details.hobbies.map((item) => (
                              <div key={item.name}>
                                <h1 className="px-8">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.languages.length != 0 && (
                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                              Languages
                            </h1>
                            {details.languages.map((item) => (
                              <div key={item.name}>
                                <h1 className="px-8">{item.name}</h1>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2 ">
                      <h1 className="mt-12 text-2xl font-bold ">
                        {details.personal.firstName} {details.personal.lastName}
                      </h1>
                      <h2 className="font-nomal mt-1 ">
                        {details.personal.role}
                      </h2>
                      {details.personal.objective.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-10 heading">
                            Profile
                          </h1>
                          <p>{details.personal.objective}</p>
                        </div>
                      )}
                      {details.work.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4 heading">
                            Employement History
                          </h1>
                          {details.work.map((item) => (
                            <div key={item.company}>
                              <h1 className="font-medium ">{item.company}</h1>
                              <h2 className="font-extralight text-xs">
                                {item.from} - {item.to}
                              </h2>
                              <li className="ml-8 list-disc">
                                {item.designation}
                              </li>
                              <li className="ml-8 list-disc">{item.website}</li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.education.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4 heading">
                            Education
                          </h1>
                          {details.education.map((item) => (
                            <div key={item.institution}>
                              <h1 className="font-medium">
                                {item.institution}
                              </h1>
                              <h6 className="text-xs">
                                {item.startDate} - {item.endDate}
                              </h6>
                              <li className="px-8">{item.fieldOfStudy}</li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.projects.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4 heading">
                            Projects
                          </h1>
                          {details.projects.map((item) => (
                            <div key={item.name}>
                              <h2 className="font-medium">{item.name}</h2>
                              <h6 className="text-xs">
                                {item.from} - {item.to}
                              </h6>
                              <li className="text-sm px-8">{item.website}</li>
                            </div>
                          ))}
                        </div>
                      )}
                      {details.certifications.length != 0 && (
                        <div>
                          <h1 className="font-medium text-orange-800 pt-4 heading">
                            certifications
                          </h1>
                          {details.certifications.map((item) => (
                            <div key={item.title}>
                              <h2 className="font-medium">
                                {item.title} from {item.issuer}
                              </h2>
                              <h6 className="text-xs">{item.date}</h6>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <style jsx>
                  {`
                  .heading{
                    color:${color.hex};
                  }`}
                </style>
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
                <div className="flex">
                  <div className="m-5 grow">
                  <button
                    className="text-white border border-white p-2 rounded-md"
                    onClick={() => {
                      setcolorpalette(!colorpalette);
                    }}
                  >
                    COLOR
                  </button>
                  <div className={`${colorpalette ? "block" : "hidden"} ml-[50px] absolute z-40`}>
                    <ColorPicker
                      width={300}
                      height={100}
                      color={color}
                      onChange={setColor}
                      hideHSV
                      dark
                    />
                    ;
                  </div>
                  </div>
                  <div className="m-5">
                    <button
                      onClick={printDocument}
                      className="cursor-pointer text-white mx-5 border border-white p-2 rounded"
                    >
                      PRINT
                    </button>

                    <button
                      className="text-white border border-white p-2 rounded"
                      onClick={() => setdemo(!demo)}
                    >
                      LOAD
                    </button>
                  </div>
                </div>
                <div className="flex justify-center ">
                  {/* large resume */}

                  <div
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] max-h-[285mm] h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div className="grid grid-cols-3">
                      <div>
                        <div className="col-span-1 bg-gray-300 w-[68mm] h-[285mm]">
                          <div>
                            <img
                              className="rounded-full w-[119px] ml-10 pt-3"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                              alt="ProfilePhoto"
                            />
                          </div>

                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                              Details
                            </h1>
                            <h2 className=" font-medium px-8  text-black">
                              Phone
                            </h2>
                            <h6 className=" px-8 ">{details.personal.phone}</h6>
                            <h2 className=" font-medium px-8  text-black">
                              Email
                            </h2>
                            <h6 className=" px-8 ">{details.personal.email}</h6>
                            <h2 className=" font-medium px-8  text-black">
                              Date Of Birth
                            </h2>
                            <h6 className=" px-8 ">{details.personal.dob}</h6>
                          </div>
                          {details.skills.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                                Skills
                              </h1>
                              {details.skills.map((item) => (
                                <div key={item.name}>
                                  <h1 className="font-medium ml-8">
                                    {item.name}
                                  </h1>
                                  <h2 className="ml-8">{item.level}</h2>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.awards.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                                Awards
                              </h1>
                              {details.awards.map((item) => (
                                <div key={item.name}>
                                  <h1 className="font-medium ml-8">
                                    {item.name} from {item.awarder}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.social.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                                Social Network
                              </h1>
                              {details.social.map((item) => (
                                <div
                                  className="ml-8 my-4 flex"
                                  key={item.network}
                                >
                                  <img
                                    src={
                                      "https://www." +
                                      item.network +
                                      ".com/favicon.ico"
                                    }
                                    alt=""
                                    className="w-5 h-5"
                                  />
                                  <Link href={item.url}>
                                    <h1 className="ml-4">{item.username}</h1>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.hobbies.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                                Hobbies
                              </h1>
                              {details.hobbies.map((item) => (
                                <div key={item.name}>
                                  <h1 className="px-8">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                          {details.languages.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800 heading">
                                Languages
                              </h1>
                              {details.languages.map((item) => (
                                <div key={item.name}>
                                  <h1 className="px-8">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2 ">
                        <h1 className="mt-12 text-2xl font-bold ">
                          {details.personal.firstName}{" "}
                          {details.personal.lastName}
                        </h1>
                        <h2 className="font-nomal mt-1 ">
                          {details.personal.role}
                        </h2>
                        {details.personal.objective.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-10 heading">
                              Profile
                            </h1>
                            <p>{details.personal.objective}</p>
                          </div>
                        )}
                        {details.work.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4 heading">
                              Employement History
                            </h1>
                            {details.work.map((item) => (
                              <div key={item.company}>
                                <h1 className="font-medium ">{item.company}</h1>
                                <h2 className="font-extralight text-xs">
                                  {item.from} - {item.to}
                                </h2>
                                <li className="ml-8 list-disc">
                                  {item.designation}
                                </li>
                                <li className="ml-8 list-disc">
                                  {item.website}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.education.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4 heading">
                              Education
                            </h1>
                            {details.education.map((item) => (
                              <div key={item.institution}>
                                <h1 className="font-medium">
                                  {item.institution}
                                </h1>
                                <h6 className="text-xs">
                                  {item.startDate} - {item.endDate}
                                </h6>
                                <li className="px-8">{item.fieldOfStudy}</li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.projects.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4 heading">
                              Projects
                            </h1>
                            {details.projects.map((item) => (
                              <div key={item.name}>
                                <h2 className="font-medium">{item.name}</h2>
                                <h6 className="text-xs">
                                  {item.from} - {item.to}
                                </h6>
                                <li className="text-sm px-8">{item.website}</li>
                              </div>
                            ))}
                          </div>
                        )}
                        {details.certifications.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4 heading">
                              certifications
                            </h1>
                            {details.certifications.map((item) => (
                              <div key={item.title}>
                                <h2 className="font-medium">
                                  {item.title} from {item.issuer}
                                </h2>
                                <h6 className="text-xs">{item.date}</h6>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <style jsx>
                    {`.heading{
                      color:${color.hex}
                    }`}
                  </style>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
