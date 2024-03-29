import React from "react";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { CgWorkAlt } from "react-icons/cg";




export default function Dupdash() {
  return (
    <div className=" bg-gray-200 h-screen overflow-auto ">
      <div className="m-5">
        {/* heading */}
        <div className="grid md:grid-cols-3 grid-cols-1  mx-auto my-4 p-5">
          <div className="col-span-2">
            <h1 className="font-bold text-3xl">Hello, Richitha Reddy</h1>
            <h3 className="pt-1 text-lg text-gray-500">Developer</h3>
          </div>
          <div className="col-span-1 grid md:grid-cols-2 grid-cols-1 gap-2 ">
            <div className="m-1 flex my-auto  bg-white " style={{ width: "100%" }}>
              <div className="pt-1 pl-2">
                <CiLocationOn className="fill-orange-600 text-2xl" />
              </div>
              <div style={{ width: "calc(100% - 2rem)" }}>
                <select
                  name="country"
                  className=" cursor-pointer  rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-orange-500"
                >
                  <option value="Afghanistan">A</option>
                  <option value="Albania">B</option>
                  <option value="Algeria">C</option>
                </select>
              </div>
            </div>
            <div className=" m-1 flex my-auto bg-white"style={{ width: "100%" }}>
              <div className="pt-1 pl-2">
                <BsCalendarDate className="fill-orange-500 text-xl" />
              </div>
              <div  style={{ width: "calc(100% - 2rem)" }}>
                <select
                  name="country"
                  className=" cursor-pointer w-full py-1 px-3  text-gray-700 leading-tight focus:outline-none  focus:border-orange-500"
                >
                  <option value="Afghanistan">A</option>
                  <option value="Albania">B</option>
                  <option value="Algeria">C</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300  pb-5" />
        {/* one */}
        <div className="bg-white rounded-lg m-4">
          <h1 className="px-5 pt-5 text-xl font-bold md:text-left text-center">
            WORK OVERVIEW
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 rounded-lg  align-middle">
            {/* work overview */}
            <div className="grid col-span-2 md:grid-cols-3 grid-cols-2 m-4 md:gap-0.5 place-items-center">
              <div className="m-5">
                <ImNewspaper className="h-14 w-14 p-3 fill-gray-800  rounded-full md:m-auto bg-green-200 pt-2"></ImNewspaper>
                <div className="text-gray-800 font-medium text-start px-auto px-2 pt-2  ">
                  <h2 className="text-gray-600 text-base">TOTAL STUDENTS</h2>
                  <h1 className="font-extrabold text-xl">258</h1>
                  <div className="flex"><div><BsArrowUpShort className="text-2xl fill-green-700"/></div> <div>2.5% Higher</div></div>
                </div>
              </div>
              <div className="m-5">
                <FaUsers className="h-14 w-14 p-3 fill-gray-800 rounded-full md:m-auto bg-yellow-200 pt-2"/>
                <div className="text-gray-800 font-medium text-start px-2 pt-2  ">
                  <h2 className="text-gray-600 text-base">TOTAL STUDENTS</h2>
                  <h1 className="font-extrabold text-xl">258</h1>
                  <div className="flex"><div><BsArrowDownShort className="text-2xl fill-red-700"/></div> <div>2.5% Higher</div></div>
                </div>
              </div>
              <div className="m-5">
                <CgWorkAlt className="h-14 w-14 p-3 fill-gray-800  rounded-full md:m-auto bg-sky-200 pt-2"/>
                <div className="text-gray-800 font-medium text-start px-2 pt-2">
                  <h2 className="text-gray-600 text-base">TOTAL STUDENT</h2>
                  <h1 className="font-extrabold text-xl">258</h1>
                  <div className="flex"><div><BsArrowUpShort className="text-2xl fill-green-700"/></div> <div>2.5% Higher</div></div>
                </div>
              </div>
            </div>
            {/* graph-1 */}
            <div></div>
            {/* graph-2 */}
            <div> </div>
          </div>
        </div>

        {/* two */}
        <div className="m-5">
          <h1 className="font-bold text-lg p-2 "> MY TASKS </h1>
          <div className="bg-white rounded-lg">
            {/* largee form */}
            <form>
              <div className="md:grid grid-cols-4 hidden m-1 p-4">
                <div className="col-span-1 pt-1">APPROVAL LIST</div>
                <div className="col-span-1 pt-1">NETWORK ORDERS</div>
                <div className="col-span-1 pt-1">ESTIMATES</div>
                <div className="flex col-end-5 mx-2  bg-white">
                  <div className="mt-1 p-1">
                    <BsSearch />
                  </div>
                  <div>
                    <input
                      type="search"
                      className="border-2 border-gray-400 rounded-md  mx-auto
                       py-1 md:px-3 w-full"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
              <hr></hr>
            </form>
          </div>

          <div className="mt-5 ">
            <table className="bg-white  rounded-lg border w-full  ">
              <thead className="">
                <tr className="border">
                  <th className="py-3 mx-4">S.No.</th>
                  <th>Name</th>
                  <th>Roll No.</th>
                  <th>Resume</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border font-light w-[100%] mx-2 ">
                  <th className="font-normal md:text-base text-sm px-5 py-3">
                    1
                  </th>
                  <th className="font-normal ">Rubeena Khatun</th>
                  <th className="font-normal">20B81A1234</th>
                  <th className="font-normal">
                    <button className="bg-orange-400 py-1 md:px-5  px-2 rounded-md mx-2">
                      Resume
                    </button>
                  </th>
                </tr>
                <tr className="border font-light w-[100%] mx-2">
                  <th className="font-normal px-5 py-3">1</th>
                  <th className="font-normal">Rubeena Khatun</th>
                  <th className="font-normal">20B81A1234</th>
                  <th className="font-normal">
                    <button className="bg-orange-400 py-1 md:px-5  px-2 rounded-md mx-2">
                      Resume
                    </button>
                  </th>
                </tr>
                <tr className="border font-light w-[100%] mx-2">
                  <th className="font-normal  px-5 py-3">1</th>
                  <th className="font-normal ">Rubeena</th>
                  <th className="font-normal">20B81A1234</th>
                  <th className="font-normal">
                    <button className="bg-green-400 py-1 md:px-5 m-1  px-2 rounded-md mx-2">
                      Resume
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* three */}
      </div>
    </div>
  );
}
