import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GrEdit } from "react-icons/gr";
import React, { useState } from "react";
import Link from "next/link";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [pro, setpro] = useState("profile");
  return (
    <div className="bg-white bg-cover h-full">
      <div
        id="navbar"
        className="border-b border-gray-300 py-2 fixed top-[-8px] w-[100%] z-40 bg-slate-50"
      >
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          {/* <h1>Provast</h1> */}
          <img
            src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_B_fpwhlu.png&w=2048&q=75"
            width={220}
            height={55}
          />
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="text-base text-gray-600 lg:flex lg:justify-between">
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                >
                  Log out
                </Link>
              </li>
              
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <div className="mt-[80px] bg-gradient-to-r from-slate-700 to-slate-800 shadow-md rounded-sm">
          <div className="text-white font-thin flex justify-center mx-10 py-10 sm:py-12 md:py-16 sm:text-xl md:text-2xl">
            "At <span className="font-semibold ml-1"> PROVAST</span>, we aim to
            provide a platform for those desiring to present themselves to a
            recruiter, with a resume that reaches and creates an impact to
            ensure qualitative engagement during the recruitment process."
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="relative top-[-30px] left-[30px] xl:left-[80px]">
              <img
                src="https://www.provast.io/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1647117869%2Fuploads%2Fbphhxvmlcyyu2pntbikm.png&w=1920&q=75"
                className="w-[30%] border-[5px] border-white rounded-full"
              ></img>
            </div>
            <div>
              <button className="border border-slate-800 rounded-md  px-3 py-1 text-lg mt-5 mr-8 flex justify-end">
                <GrEdit className="ml-1 mt-[6px] mr-1"></GrEdit>
                <span>Edit</span>
              </button>
            </div>
          </div>
          <div className="ml-6 xl:mx-24 overflow-x-scroll">
            <h1 className="text-2xl font-semibold ">Sakshi Vuppalanchi</h1>
            <div className="flex border-b border-gray-400 mr-5">
              <div
                className="p-4 border-b border-gray-400 hover:border-black cursor-pointer"
                onClick={() => {
                  setpro("profile");
                }}
              >
                Profile
              </div>
              <div
                className="p-4 border-b border-gray-400 hover:border-black cursor-pointer"
                onClick={() => {
                  setpro("education");
                }}
              >
                Education
              </div>
            </div>
            {pro == "profile" && (
              <div className="sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3 gap-2 text-xl">
                <div className="my-5">
                  <div className="grid grid-cols-2 mx-5  ">
                    <div className="">
                      First Name<span className="ml-4">:</span>
                    </div>
                    <div className="font-semibold">Sakshi</div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="grid grid-cols-2 mx-5 ">
                    <div className="">
                      Last Name<span className="ml-4">:</span>
                    </div>
                    <div className="font-semibold">Vuppalanchi</div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="grid grid-cols-2 mx-5 ">
                    <div className="">
                      Registered Mail<span className="ml-4">:</span>
                    </div>
                    <div className="font-semibold">sak@gmail.com</div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="grid grid-cols-2 mx-5 ">
                    <div className="">
                      Mobile<span className="ml-4">:</span>
                    </div>
                    <div className="font-semibold">9392878988</div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="grid grid-cols-2 mx-5 ">
                    <div className="">
                      College<span className="ml-4">:</span>
                    </div>
                    <div className="font-semibold">
                      CVR College Of Engineering
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="grid grid-cols-2 mx-5 ">
                    <div className="">
                      Roll no<span className="ml-4">:</span>
                    </div>
                    <div className="font-semibold">20B81A3398</div>
                  </div>
                </div>
                <div className="my-5">
                  <div className="grid grid-cols-2 mx-5 text-xl">
                    <div className="">
                      Gender<span className="ml-4">:</span>
                    </div>
                    <div className="font-semibold">Female</div>
                  </div>
                </div>
              </div>
            )}
            {pro == "education" && (
              <div className="mt-5">
                <div class="mb-10">
                  <div class="flex items-center justify-between border-b-2 border-gray-100">
                    <h1 class="text-sm text-gray-600 ">
                      Current / Ongoing Course
                    </h1>
                  </div>
                  <div class="relative my-4 px-4 border-l-2 border-gray-200">
                    <div class="flex justify-between">
                      <div>
                        <div class="flex">
                          <h3 class="text-2xl text-gray-500 font-semibold">
                            B.Tech
                          </h3>
                        </div>
                        <div class="text-sm">
                          <span>Board: Jntu,</span>
                          <span>Type: Part Time</span>
                        </div>
                      </div>
                      <div class="flex flex-col items-center">
                        <h3 class="text-2xl font-semibold text-gray-500">10</h3>
                        <p class="text-md text-orange-500">CGPA</p>
                      </div>
                    </div>
                    <h3 class="flex items-center mt-4 text-sm text-gray-400 font-semibold">
                      <span>Cvr </span>
                      <span class="ml-1 text-xs">
                        · (<span>2020</span>
                        <span> - 2024</span>)
                      </span>
                    </h3>
                    <div class="italic">
                      <h3>Computer Science and Engineering</h3>
                    </div>
                    <div class="absolute right-2 bottom-2 flex"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
