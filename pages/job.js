import React from "react";  
const job = () => {
  return (
    <div className="bg-gray-100">
      <nav>
        <ul className="flex gap-4 text-lg text-gray-600 ml-9">
          <li>home /</li>
          <li>dashboard /</li>
          <li>gs76e28euebx</li>
        </ul>
      </nav>
      <div className="bg-white border border-gray-200 p-2">
        <h1 className="font-bold text-3xl ml-9 mt-4">XYZ</h1>
        <p className="ml-9 text-gray-500">
          posted for <b className="text-black">SDE and SDE2</b> on Saturday,
          December
        </p>
        <p className="ml-9 text-gray-500">10,2022 1:12 PM</p>
        <h1 className="ml-9 border-solid border-1 border-orange-400 w-[5%] bg-orange-200 text-amber-700 py-auto rounded-sm p-1">
          Internship
        </h1>
      </div>
      <div className="">
        <div className="lg:flex justify-center border-gray-300 mt-4 p-3">
        <div className="w-[80%] bg-white">
          <div className="border-solid border-2 border-gray-200 mt-24 p-2 bg-white">
            <select name="" id="" className="w-[100%] ">
              <option value="" className="bg-orange-500 ">job information</option>
              <option value="" className="bg-orange-500 " >Result</option>
            </select>
          </div>

          <div className="mt-3 bg-white ">
            <h1 className="ml-9 text-gray-800 text-xl">job Information</h1>
            <p className="ml-9 text-gray-600">
              job posted by<b> cvr college of engineering</b>
            </p>
          </div>
          <div className="">
            <div className="mt-12  sm:grid grid-cols-2 gap-2 1">
              <div>
                <h1 className="font-medium ml-9 text-2xl mt-3">Designation</h1>
                <p className="ml-9 text-sm text-gray-700">SDE and SDE2</p>
              </div>
              <div>
                <h1 className="font-medium ml-9 text-2xl mt-3">Role</h1>
                <p className="ml-9 text-sm text-gray-700">Internship</p>
              </div>
              <div>
                <h1 className="font-medium ml-9 text-2xl mt-3">Start date </h1>
                <p className="ml-9 text-sm text-gray-700">10 december 2022</p>
              </div>
              <div>
                <h1 className="font-medium ml-9 text-2xl mt-3">Start date </h1>
                <p className="ml-9 text-sm text-gray-700">11 december 2022</p>
              </div>
              <div>
                <h1 className="font-medium ml-9 text-2xl mt-3">
                  Stipend Range
                </h1>
                <p className="ml-9 text-sm text-gray-700">Not Disclosed</p>
              </div>
              <div>
                <h1 className="font-medium ml-9 text-2xl mt-3">CTC</h1>
                <p className="ml-9 text-sm text-gray-700">Not Disclosed</p>
              </div>
            </div>
          </div>
          <div className="mt-16 border bg-white  border-gray-300 ">
            <h1 className="text-2xl font-normal  ml-7">Banner</h1>
            <h1 className="font-bold text-lg p-1 ml-3 mt-2">
              nop banner attached with this job profile
            </h1>
          </div>
        </div>
        <div className="w-[40%] bg-white">
          <div className="mt-3 ml-9">pie chart will come here</div>
          <div>
            <h1 className="font-bold text-xl ml-3 mt-2">About</h1>
            <button
              type="button"
              className=" w-[70%] ml-4 mt-2 inline-block p-3 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
            >
              Go To Company Website
            </button>
          </div>
        </div>
        </div>
      </div>
      <div>
        <h1 className="font-medium ml-44 text">results</h1>
        <h1 className="ml-44 text-gray-600">round1: </h1>
        <h1 className="ml-44 text-gray-600">Name:1</h1>
        <h1 className="ml-44 text-gray-600">description:round1</h1>
        <h1 className="ml-44 text-gray-600">From: 2022-1210T07:39:12.198Z</h1>
        <h1 className="ml-44 text-gray-600">To: 2022-12-11T12:39:12.000Z </h1>

      </div>
    </div>
  );
};

export default job;
