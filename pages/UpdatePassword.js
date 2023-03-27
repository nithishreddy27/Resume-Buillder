import React from "react";
import Link from "next/link";

export default function UpdatePassword() {
  return (
    <div>
      <img
        className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
        alt=""
      />
      <div className="login mx-auto my-10 z-40 relative">
        <div className="sm:mx-auto sm:w-full sm:max-w-md w-[300px] mx-auto">
          <form className="bg-white shadow-md rounded-lg px-12 pt-12 pb-12 mb-4 mt-32">
            <h1 className="text-center font-bold text-2xl">Update Password</h1>
            <div className="mb-4 mt-10">
              <label
                className="block text-gray-700 text-sm mb-2 font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2 font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="cpassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400 focus:border-2"
                id="cpassword"
                name="cpassword"
                type="cpassword"
                required
              />
            </div>
            <p id="mess"></p>
            <div className="text-center mt-5">
              <input
                type="submit"
                value="Submit"
                className="bg-orange-600 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-orange-700 required"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
