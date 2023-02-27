import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import Link from "next/link";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div id="navbar">
        <div className="border-b border-gray-300 py-2 fixed top-[-8px] w-[100%] z-40 bg-slate-50">
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
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                  >
                    Sign up
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
      </div>
      <div class="bg-orange-900 mt-[80px]">
        <div class="max-w-2xl mx-auto py-6 px-4 sm:py-4 sm:px-6 lg:px-4 lg:max-w-7xl">
          <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div class="w-full">
              <h2 class="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-4xl">
                Pricing Plans
              </h2>
              <p class="mt-5 text-md text-orange-300">
                Start building for free, then add a site plan to go live.
                Account plans unlock additional features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto bg-white py-2 sm:py-3 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="space-y-2 lg:hidden">
          <div>
            <div class="px-4 mb-8">
              <h2 class="text-lg leading-6 font-medium text-gray-900">Basic</h2>
              <p>
                <span class="text-4xl font-extrabold text-gray-900">₹129</span>
                <span class="text-base font-medium text-gray-500">/year</span>
              </p>
              <button class="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full  border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                Upgrade to Basic
              </button>
            </div>
            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Features
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Templates
                  </th>
                  <td class="py-5 pr-4">
                    <span class="block text-sm text-gray-700 text-right">
                      Only simple templates
                    </span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    JPEG Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PNG Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PDF Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    VAST Watermark
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Color Palette
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Font Picker
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Test Patterns
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="px-4 mb-8">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Essential
              </h2>
              <p>
                <span class="text-4xl font-extrabold text-gray-900">₹179</span>
                <span class="text-base font-medium text-gray-500">/year</span>
              </p>
              <button class="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full  border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                Upgrade to Essential
              </button>
            </div>
            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Features
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Templates
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    JPEG Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PNG Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PDF Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    VAST Watermark
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Color Palette
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Font Picker
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Test Patterns
                  </th>
                  <td class="py-5 pr-4">
                    <span class="block text-sm text-gray-700 text-right">
                      Upto 3 patterns
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="px-4 mb-8">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                Premium
              </h2>
              <p>
                <span class="text-4xl font-extrabold text-gray-900">₹259</span>
                <span class="text-base font-medium text-gray-500">/year</span>
              </p>
              <button class="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full  border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                Upgrade to Premium
              </button>
            </div>
            <table class="w-full">
              <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                Features
              </caption>
              <thead>
                <tr>
                  <th class="sr-only" scope="col">
                    Feature
                  </th>
                  <th class="sr-only" scope="col">
                    Included
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Templates
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    JPEG Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PNG Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PDF Download
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    VAST Watermark
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">No</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Color Palette
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Font Picker
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
                <tr class="border-t border-gray-200">
                  <th
                    class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Test Patterns
                  </th>
                  <td class="py-5 pr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="ml-auto h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="hidden lg:block">
          <table class="w-full h-px table-fixed">
            {/* <caption class="sr-only">Pricing plan comparison</caption> */}
            <thead>
              <tr>
                <th
                  class="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span class="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                <th
                  class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Basic
                </th>
                <th
                  class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Essential
                </th>
                <th
                  class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody class="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  class="py-2 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                  scope="row"
                >
                  Pricing
                </th>
                <td class="h-full py-2 px-6 align-top">
                  <div class="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span class="text-3xl font-extrabold text-gray-900">
                          ₹129
                        </span>
                        <span class="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <button class="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                      Upgrade to Basic
                    </button>
                  </div>
                </td>
                <td class="h-full py-2 px-6 align-top">
                  <div class="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span class="text-3xl font-extrabold text-gray-900">
                          ₹179
                        </span>
                        <span class="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <button class="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                      Upgrade to Essential
                    </button>
                  </div>
                </td>
                <td class="h-full py-2 px-6 align-top">
                  <div class="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span class="text-3xl font-extrabold text-gray-900">
                          ₹259
                        </span>
                        <span class="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <button class="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                      Upgrade to Premium
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Templates
                </th>
                <td class="py-2 px-6">
                  <span class="block text-sm text-gray-700">
                    Only simple templates
                  </span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  JPEG Download
                </th>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  PNG Download
                </th>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  PDF Download
                </th>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Not included in Basic</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Not included in Essential</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  VAST Watermark
                </th>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Basic</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Not included in Essential</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Not included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Color Palette
                </th>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Not included in Basic</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Font Picker
                </th>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Not included in Basic</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Essential</span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  class="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Test Patterns
                </th>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Not included in Basic</span>
                </td>
                <td class="py-2 px-6">
                  <span class="block text-sm text-gray-700">
                    Upto 3 patterns
                  </span>
                </td>
                <td class="py-2 px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-5 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Included in Premium</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      <footer class="bg-gray-900 rel">
          <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <div class="relative w-48 h-16 mx-auto cursor-pointer mb-5">
            <img src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=2048&q=75"></img>
            </div>
            <nav
              class="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              <div class="cursor-pointer px-5 py-2">
                <a class="text-base text-white hover:text-gray-600">About Us</a>
              </div>
              <div class="cursor-pointer px-5 py-2">
                <a class="text-base text-white hover:text-gray-600">
                  Contact Us
                </a>
              </div>
              <div class="cursor-pointer px-5 py-2">
                <a class="text-base text-white hover:text-gray-600">Pricing</a>
              </div>
              <div class="cursor-pointer px-5 py-2">
                <a class="text-base text-white hover:text-gray-600">
                  Privacy Policy
                </a>
              </div>
              <div class="cursor-pointer px-5 py-2">
                <a class="text-base text-white hover:text-gray-600">
                  Refund Policy
                </a>
              </div>
              <div class="cursor-pointer px-5 py-2">
                <a class="text-base text-white hover:text-gray-600">
                  Terms And Conditions
                </a>
              </div>
            </nav>
            <p class="mt-8 text-center text-base text-white">
              © 2022 Provast, Inc. All rights reserved.
            </p>
          </div>
        </footer>
    </div>
  );
};

export default Pricing;
