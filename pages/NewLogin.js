import React from "react";
import Link from "next/link";

export default function NewLogin() {
  return (
    <div>
      <img
        className="h-screen"
        //src="https://media.istockphoto.com/id/475706356/photo/background.jpg?b=1&s=170667a&w=0&k=20&c=BS-MrL17EupEsAQwWsQ5mulzvGlf0FE4LZIwhK991Wg="
        src="https://img.freepik.com/free-vector/abstract-low-poly-orange-yellow-background_1017-32111.jpg"
        alt=""
      />
      <div className="">
        <form className="bg-transparent shadow-md rounded-lg px-12 pt-20 pb-12 mb-4 mt-32 absolute top-0">
          <h1 className="text-center font-bold text-2xl">
            Log in to your account
          </h1>
          <div className="mb-4 mt-10">
            <label
              className="block text-gray-700 text-sm mb-2 font-semibold"
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
              className="block text-gray-700 text-sm font-semibold mb-2"
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

          <div className="flex flex-col gap-2 sm:gap-16">
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
        </form>
      </div>
    </div>
  );
}
