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

export default function Dynamic() {
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
                  <div className="flex " >
          <img className="h-[38mm] p-1   m-2" src="https://randomuser.me/api/portraits/women/71.jpg"></img>
        
      {/* {details.social.length != 0 && (
       <div key={item.network}>
        {details.social.map((item) => (
          <div key={item.network} className="mx-3 ml-5 pb-4  mt-3 ">
            <span> */}
              {/* <Link href={item.url}>
                <img
                  src={"https://www." + item.network + ".com/favicon.ico"}
                  className="w-5 "
                />
              </Link> */}
            {/* </span>
          </div>
        ))}
      </div>
      )} */}

    
      <div className=" m-3 mt-2 right-0 w-full    ">
        
          <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 ">PROFILE</p>
          <p className="text-sm text-black p-3 pl-2 pt-2">{details.personal.objective}</p>
        
        </div>
  </div>
  <div className="flex-col bg-black pt-3 p-4">
        <span className="  text-3xl  bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
          {details.personal.role}
        </span>
        <span className=" text-5xl pl-[10%] text-white tracking-wide text-right font-serif ">
          {details.personal.firstName} {details.personal.lastName}
        </span>
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
              <div className="flex">
                    <div className="m-5 flex grow">
                    <div className="flex mt-1">
                        <div className="w-8 h-8 border-[3px] border-white bg-red-500 mx-1"></div>
                        <div className="w-8 h-8 border-[3px] border-white bg-gray-500"></div>
                    </div>
                    <button
                      className="border border-white text-white
                      p-2 rounded-md ml-2"
                      onClick={() =>
                        setcolor(document.getElementById("color").value)
                      }
                    >
                      COLOR
                    </button>
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
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-170px] xl:scale-[0.9] xl:mt-[-50px] sm:mt-[-100px] mx-[-210px] mt-[-250px] min-h-[285mm] min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  >
                    <div className="flex " >
          <img className="h-[38mm] p-1   m-2" src="https://randomuser.me/api/portraits/women/71.jpg"></img>
        
      {/* {details.social.length != 0 && (
       <div key={item.network}>
        {details.social.map((item) => (
          <div key={item.network} className="mx-3 ml-5 pb-4  mt-3 ">
            <span> */}
              {/* <Link href={item.url}>
                <img
                  src={"https://www." + item.network + ".com/favicon.ico"}
                  className="w-5 "
                />
              </Link> */}
            {/* </span>
          </div>
        ))}
      </div>
      )} */}

    
      <div className=" m-3 mt-2 right-0 w-full    ">
        
          <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 ">PROFILE</p>
          <p className="text-sm text-black p-3 pl-2 pt-2">{details.personal.objective}</p>
        
        </div>
  </div>
  <div className="flex-col bg-black pt-3 p-4">
        <span className="  text-3xl  bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
          {details.personal.role}
        </span>
        <span className=" text-5xl pl-[10%] text-white tracking-wide text-right font-serif ">
          {details.personal.firstName} {details.personal.lastName}
        </span>
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
