import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
const home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-white">
      <div className="border-b border-gray-300 py-2 fixed w-[100%] z-40 bg-slate-50">
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
                  className="lg:px-5 py-3 block hover:text-blue-700 font-semibold"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:px-5 py-3 block hover:text-blue-700 font-semibold"
                >
                  Notices
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:px-5 py-3 block hover:text-blue-700 font-semibold"
                >
                  Resumes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:px-5 py-3 block hover:text-blue-700 font-semibold"
                >
                  Test Patterns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:px-5 py-3 block hover:text-blue-700 font-semibold"
                >
                  Assesments
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:px-5 py-3 block hover:text-blue-700 font-semibold"
                >
                  Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="relative">
        <div className="fixed w-[100%] top-[91px] z-30 lg:hidden">
          <div className="flex justify-around bg-slate-200">
            <div className="p-4 w-[50%] text-center border-r border-gray-400">
              filters
            </div>
            <div className="p-4 w-[50%] text-center">Resources</div>
          </div>
        </div>
        <div className="lg:flex">
            <div className="lg:bg-black lg:w-[20%]">

            </div>
        <div className="border border-gray-200 rounded-sm mx-2 relative top-[160px]  lg:w-[60%]">
          <div className="border border-gray-300 rounded-md mx-2 my-3 p-3">
            <div className="flex">
              <div className="w-[200px] h-[100px] bg-white"></div>
              <div className="p-2">
                Graduate trainee / Management trainee at Jaro education
                <div>Rs. CTC: 6,60,000</div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="p-1 mx-2 bg-red-200 text-red-700 rounded-lg">
                Inactive
              </div>
              <div className="p-1 mx-2 bg-orange-100 text-orange-800 rounded-lg">
                Full time
              </div>
            </div>
            <div className="flex">
              <div className="mx-1 my-auto p-1 border border-orange-500 rounded-lg flex justify-center ">
                Eligible:311
              </div>
              <div className="mx-1 my-2 p-1 border border-orange-500 rounded-lg ">
                Applied:0
              </div>
              <div className="mx-1 my-auto  p-1 border flex justify-center  border-orange-500 rounded-lg">
                Not interested:311
              </div>
            </div>

            <div>
              <FiMapPin className="h-6 w-6 inline m-1"></FiMapPin> hyderabad,
              chennai, pune, gurgaon,noida
            </div>
            <div className="px-4">posted a month ago</div>
          </div>
          <div className="border border-gray-300 rounded-md mx-2 my-3 p-3">
            <div className="flex">
              <div className="w-[200px] h-[100px] bg-white"></div>
              <div className="p-2">
                Graduate trainee / Management trainee at Jaro education
                <div>Rs. CTC: 6,60,000</div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="p-1 mx-2 bg-red-200 text-red-700 rounded-lg">
                Inactive
              </div>
              <div className="p-1 mx-2 bg-orange-100 text-orange-800 rounded-lg">
                Full time
              </div>
            </div>
            <div className="flex">
              <div className="mx-1 my-2 p-1 border border-orange-500 rounded-lg ">
                Eligible:311
              </div>
              <div className="mx-1 my-2 p-1 border border-orange-500 rounded-lg ">
                Applied:0
              </div>
              <div className="mx-1 my-2 p-1 border border-orange-500 rounded-lg">
                Not interested:311
              </div>
            </div>

            <div>
              <FiMapPin className="h-6 w-6 inline m-1"></FiMapPin> hyderabad,
              chennai, pune, gurgaon,noida
            </div>
            <div className="px-4">posted a month ago</div>
          </div>
          <div className="border border-gray-300 rounded-md mx-2 my-3 p-3">
            <div className="flex">
              <div className="w-[200px] h-[100px] bg-white"></div>
              <div className="p-2">
                Graduate trainee / Management trainee at Jaro education
                <div>Rs. CTC: 6,60,000</div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="p-1 mx-2 bg-red-200 text-red-700 rounded-lg">
                Inactive
              </div>
              <div className="p-1 mx-2 bg-orange-100 text-orange-800 rounded-lg">
                Full time
              </div>
            </div>
            <div className="flex">
              <div className="mx-1 my-2 p-1 border border-orange-500 rounded-lg ">
                Eligible:311
              </div>
              <div className="mx-1 my-2 p-1 border border-orange-500 rounded-lg ">
                Applied:0
              </div>
              <div className="mx-1 my-2 p-1 border border-orange-500 rounded-lg">
                Not interested:311
              </div>
            </div>

            <div>
              <FiMapPin className="h-6 w-6 inline m-1"></FiMapPin> hyderabad,
              chennai, pune, gurgaon,noida
            </div>
            <div className="px-4">posted a month ago</div>
          </div>
        </div>
        <div className="lg:bg-black lg:w-[20%]">

        </div>
        </div>
      </div>
    </div>
  );
};

export default home;
