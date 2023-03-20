import React from "react";
import Link from "next/link";

export default function NewLogin({ isLogin, errorMessage, onSubmit }) {
  return (
    <div>
      <div>
        {/* <img className="bg-auto" src="/l.png" alt="" /> */}
      </div>

      <div className="w-screen flex flex-col sm:flex-col md:flex-col lg:flex-row p-10 items-center absolute top-0">
        <img className="w-full" src="/lir.png" alt="" />
        <form
          onSubmit={onSubmit}
          className="bg-transparent rounded-lg w-screen px-12 pt-12 pb-12 z-50"
        >
          <h1 className="text-center text-black font-bold text-2xl">
            Log in to your account
          </h1>
          <div className="mb-4 mt-10">
            <label
              className="block  text-sm mb-2 font-semibold"
              htmlFor="username"
            >
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              id="username"
              name="username"
              type="email"
              required
            />
          </div>
          <div className="">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400 focus:border-2"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          <div className="flex gap-5 sm:gap-16">
            <p>
              {" "}
              <Link href="/accounts" className="hover:underline">
                Are you a new user?
              </Link>
            </p>
            <p>
              <Link
                href="/forgot"
                className="text-orange-600 hover:text-orange-500"
              >
                Forgot password?
              </Link>
            </p>
          </div>
          <p id="mess"></p>
          <div className="text-center mt-5">
            <input
              type="submit"
              value="Log in"
              className="bg-orange-600 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-orange-700 required"
            />
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}
