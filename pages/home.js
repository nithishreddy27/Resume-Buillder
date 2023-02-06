import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
const home = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [reso,setReso] = useState(false);
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
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Notices
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Resumes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
                >
                  Test Patterns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="lg:pl-8 py-3 block hover:text-blue-700 font-semibold"
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
            <div
              className="p-4 w-[50%] text-center border-r border-gray-400"
              onClick={() => setFilter(!filter)}
            >
              filters
            </div>
            <div className="p-4 w-[50%] text-center"
              onClick={() => setReso(!reso)}>Resources</div>
          </div>
        </div>
        <div className={` lg:flex `}>
          <div className={`${filter ? "block" : "hidden"} lg:block lg:w-[20%]`}>
          <div className="border border-gray-200 rounded-sm relative top-[150px] lg:static lg:w-[100%] lg:mx-[6px] lg:mt-[105px]">
            <h3 className="text-2xl py-5 text-center lg:text-start lg:py-3 lg:px-5 font-semibold">
              Filters
            </h3>
            <input
              type="text"
              placeholder="Search"
              className="w-[80%] mx-auto flex justify-center lg:mx-5 shadow appearance-none border rounded lg:py-1 lg:px-3 text-gray-700 leading-tight focus:outline-none lg:focus:shadow-outline focus:border-orange-500"
            ></input>
            <div className="ml-10 sm:ml-[100px] my-5 lg:my-5 lg:ml-1  grid grid-cols-2 gap-2">
              <div>
                <input
                  id="active"
                  name="active"
                  type="checkbox"
                  class="mt-[-5px] bg-red-100 border-red-300 text-red-500 focus:ring-red-200 rounded-sm"
                />
                <label className="lg:p-1 xl:p-3"> Active</label>
              </div>
              <div>
                <input
                  id="active"
                  name="active"
                  type="checkbox"
                  class="mt-[-5px] bg-red-100 border-red-300 text-red-500 focus:ring-red-200 rounded-sm"
                />
                <label className="lg:p-1 xl:p-3"> Inactive</label>
              </div>
              <div>
                <input
                  id="active"
                  name="active"
                  type="checkbox"
                  class="mt-[-5px] bg-red-100 border-red-300 text-red-500 focus:ring-red-200 rounded-sm"
                />
                <label className="lg:p-1 xl:p-3"> Internship</label>
              </div>
              <div>
                <input
                  id="active"
                  name="active"
                  type="checkbox"
                  class="mt-[-5px] bg-red-100 border-red-300 text-red-500 focus:ring-red-200 rounded-sm"
                />
                <label className="lg:p-1 xl:p-3"> Full Time</label>
              </div>
            </div>
            <div className="m-5 sm:flex lg:block">
              <div className="sm:w-[50%] sm:px-5 lg:w-full lg:px-0">
                <div className="flex justify-between font-medium text-gray-700 ">
                  <p className="block font-medium text-gray-700">Stipend</p>
                  <p>Rs.0</p>
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="5000"
                    className="w-full"
                  ></input>
                </div>
              </div>
              <div className="sm:w-[50%] sm:px-5 lg:px-0 lg:w-full">
                <div className="flex justify-between font-medium text-gray-700 ">
                  <p className="block font-medium text-gray-700">CTC</p>
                  <p>Rs.0</p>
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="5000"
                    className="w-full"
                  ></input>
                </div>
              </div>
            </div>
            <div className="m-5">
              <div className="mt-1 grid grid-cols-1 gap-2">
                <div>
                  <label
                    for="sortby"
                    className="block font-medium text-gray-700"
                  >
                    sortby
                  </label>
                  <select
                    id="sortby"
                    name="sortby"
                    className="mt-1 block w-full pl-3 pr-10 py-0 text-base border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option>Created At</option>
                    <option>Ending At</option>
                    <option>Stipend</option>
                    <option>Alphabetical</option>
                  </select>
                </div>
              </div>
              <div className="mt-1 grid grid-cols-1 gap-2">
                <div>
                  <label
                    for="sortorder"
                    className="block font-medium text-gray-700"
                  >
                    sort order
                  </label>
                  <select
                    id="sortby"
                    name="sortby"
                    className="mt-1 block w-full pl-3 pr-10 py-0 text-base border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option>Ascending</option>
                    <option>Descending</option>
                  </select>
                </div>
              </div>
              <button className="mt-3 text-xs text-orange-600 bg-orange-100 px-2 py-1 font-semibold rounded-[3px] tracking-wider hover:bg-orange-200">
                Clear
              </button>
            </div>
            <div className="m-5">
              <h1 className="text-center font-semibold">Jobs</h1>
            </div>
            <div className="mx-auto px-4">
              <div className="rounded shadow bg-slate-200 bg-opacity-80 text-center p-5 mb-5">
                The Dataset is empty for
                <div>
                  <span className="text-red-500 font-semibold">Pending </span>
                  and
                  <span className="text-orange-400 font-semibold">
                    {" "}
                    Applied
                  </span>
                </div>
              </div>
            </div>
            <div className="m-5">
              <h1 className="text-center font-semibold">Resumes</h1>
            </div>
            <div className="mx-auto px-4"></div>
            </div>
          </div>
          <div
            className={` border border-gray-200 rounded-sm mx-2 relative lg:static lg:mt-[105px] top-[160px]  lg:w-[60%]`}
          >
            <div className="border border-gray-300 rounded-md mx-2 my-3 p-3 lg:p-8">
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
            <div className="border border-gray-300 rounded-md mx-2 my-3 p-3 lg:p-8">
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
            <div className="border border-gray-300 rounded-md mx-2 my-3 p-3 lg:p-8">
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
          <div className={`${reso ? "block" : "hidden"} lg:block lg:w-[20%]`}>
            <div className="border border-gray-200 rounded-sm relative z-50 mt-[180px] lg:top-[150px] lg:static lg:w-[100%] lg:mx-[-5px] lg:mt-[105px]">
                <div className="">
                    <h1 className="text-2xl py-5 text-center lg:text-start lg:py-3 lg:px-5 font-semibold">Resources</h1>
                </div>
                <div className="border border-gray-200 rounded-lg m-2">
                <div className="lg:relative lg:h-40">
                  <img src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcrowdicity-us-east-1%2Fimage%2Fupload%2Fw_710%2Ch_500%2Cc_fill%2Fepam-anywhere-logo-240x240-png_ehxcx7&w=2048&q=75" className="absolute"></img>
                </div>
                <div className="lg:px-2 lg:py-1 lg:text-center lg:font-semibold lg:mt-4 xl:mt-8">
                  <Link href="#" className="hover:underline text-orange-600">Epam Resources for 2023</Link>
                </div>
                </div>
                <div className="lg:border lg:border-gray-200 lg:rounded-lg lg:m-2">
                <div className="lg:relative lg:h-40">
                  <img src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1651482750%2FAccolite_Digital_Logo_jlrxfj.jpg&w=2048&q=75" className="absolute"></img>
                </div>
                <div className="lg:px-2 lg:py-1 lg:text-center lg:font-semibold lg:mt-4 xl:mt-8">
                  <Link href="#" className="hover:underline text-orange-600">Accolite</Link>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
