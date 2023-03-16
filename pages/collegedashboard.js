import React from "react";

export default function Dashboard() {
  return (
    // {https://aufaitux.com/wp-content/uploads/2022/11/pasted-image-2.png}
    <div className=" bg-gray-300 h-screen overflow-auto ">
      <div className="p-8">
        <div className="bg-white rounded-md">
          <h1 className="text-2xl font-semibold py-4 text-center">Overview</h1>
          <div className="grid grid-cols-1 gap-10 justify-items-center">
            <div className="grid grid-cols-1 gap-3 justify-items-center sm:grid-cols-3">
              <div className="align-middle">
                <div className="h-14 w-14 rounded-full bg-sky-300"></div>
                <h1>Total Students</h1>
              </div>
              <div>
                <div className="h-14 w-14 rounded-full bg-green-300"></div>
                <h1>Total Students</h1>
              </div>
              <div>
                <div className="h-14 w-14 rounded-full bg-red-300"></div>
                <h1>Total Students</h1>
              </div>
            </div>
            <div className="h-32 w-32 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>

      <div className="px-8">
        <table className="bg-white rounded-lg border w-full">
          <thead className="">
            <tr className="border">
              <th className="py-2">S.No.</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border font-light w-[100%] mx-2">
              <th className="font-normal py-2">1</th>
              <th className="font-normal ">Rubeena Khatun</th>
              <th className="font-normal">20B81A1234</th>
              <th className="font-normal">
                <button className="bg-orange-500 py-1 px-5 rounded-md mx-2">
                  Resume
                </button>
              </th>
            </tr>
            <tr className="border font-light w-[100%] mx-2">
              <th className="font-normal py-2">1</th>
              <th className="font-normal ">Rubeena Khatun</th>
              <th className="font-normal">20B81A1234</th>
              <th className="font-normal">
                <button className="bg-orange-500 py-1 px-5 rounded-md mx-2">
                  Resume
                </button>
              </th>
            </tr>
            <tr className="border font-light w-[100%] mx-2">
              <th className="font-normal py-2">1</th>
              <th className="font-normal ">Rubeena Khatun</th>
              <th className="font-normal">20B81A1234</th>
              <th className="font-normal">
                <button className="bg-orange-500 py-1 px-5 rounded-md mx-2">
                  Resume
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
