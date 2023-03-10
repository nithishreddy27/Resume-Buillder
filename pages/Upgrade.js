import React from "react";

function Upgrade() {
  return (
    <div className="min-h-screen">
    {/* <div className="bg-slate-200"> */}
    <div>
        <div className="bg-gradient-to-tr from-indigo-900 to-gray-800">
          <div className="max-w-2xl mx-auto py-6 px-4 sm:py-4 sm:px-6 lg:px-4 lg:max-w-7xl">
            <div className="px-0 lg:flex lg:justify-between lg:item-center">
              <div className=" p-5 w-full    ">
                <p className="text-white font-bold text-3xl p-1">
                  Pricing Plans
                </p>
                <p className="p-1 pt-2 text-gray-400 ">
                  Start building for free, then add a site plan to go live.
                  Account plans unlock additional features.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5">
        <div className="max-w-2xl mx-auto lg:bg-white lg:px-1.5 lg:rounded-md py-2 sm:py-3  sm:px-6 lg:max-w-7xl lg:mt-5">
          {/* small */}
          <div className="space-y-2 lg:hidden m-5 rounded-md p-4 bg-white">
            <section>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Basic
                </h2>
                <p>
                  <span className="text-4xl font-extrabold text-gray-900">
                    ₹129
                  </span>
                  <span className="text-base font-medium text-gray-500">/year</span>
                </p>
                <button className="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full  border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                  Upgrade to Basic
                </button>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                  Features
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Templates
                    </th>
                    <td className="py-5 pr-4">
                      <span className="block text-sm text-gray-700 text-right">
                        Only simple templates
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      JPEG Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      PNG Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      PDF Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      VAST Watermark
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Color Palette
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Font Picker
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Test Patterns
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Essential
                </h2>
                <p>
                  <span className="text-4xl font-extrabold text-gray-900">
                    ₹179
                  </span>
                  <span className="text-base font-medium text-gray-500">/year</span>
                </p>
                <button className="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full  border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                  Upgrade to Essential
                </button>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                  Features
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Templates
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      JPEG Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      PNG Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      PDF Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      VAST Watermark
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Color Palette
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Font Picker
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Test Patterns
                    </th>
                    <td className="py-5 pr-4">
                      <span className="block text-sm text-gray-700 text-right">
                        Upto 3 patterns
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Premium
                </h2>
                <p>
                  <span className="text-4xl font-extrabold text-gray-900">
                    ₹259
                  </span>
                  <span className="text-base font-medium text-gray-500">/year</span>
                </p>
                <button className="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full  border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                  Upgrade to Premium
                </button>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                  Features
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Templates
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      JPEG Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      PNG Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      PDF Download
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      VAST Watermark
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Color Palette
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Font Picker
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                      scope="row"
                    >
                      Test Patterns
                    </th>
                    <td className="py-5 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-auto h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          {/* large */}
          <div className="lg:block  hidden">
            <table className="w-full h-px table-fixed">
              <thead>
                <tr>
                  <th className="text-start pl-6">PLANS</th>
                  <th className="text-start pl-6">BASIC</th>
                  <th className="text-start pl-6">ESSENTIAL</th>
                  <th className="text-start pl-6">PREMIUM</th>
                </tr>
              </thead>

              <tbody className="border-t border-gray-200 divide-y divide-gray-200">
                <tr>
                  <th
                    className="py-2 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                    scope="row"
                  >
                    Pricing
                  </th>
                  <td className="h-full py-2 px-6 align-top">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <p>
                          <span className="text-3xl font-bold text-gray-900">
                            ₹129
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            /year
                          </span>
                        </p>
                      </div>
                      <button className="hover:to-yellow-500 bg-gradient-to-t from-orange-500 to-yellow-400 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                        Upgrade to Basic
                      </button>
                    </div>
                  </td>
                  <td className="h-full py-2 px-6 align-top">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <p>
                          <span className="text-3xl font-bold text-gray-900">
                            ₹179
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            /year
                          </span>
                        </p>
                      </div>
                      <button className="hover:to-yellow-500 bg-gradient-to-t from-orange-500 to-yellow-400 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center">
                        Upgrade to Essential
                      </button>
                    </div>
                  </td>
                  <td className="h-full py-2 px-6 align-top">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <p>
                          <span className="text-3xl font-bold text-gray-900">
                            ₹259
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            /year
                          </span>
                        </p>
                      </div>
                      <button className="hover:to-yellow-500 bg-gradient-to-t from-orange-500 to-yellow-400 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-base font-semibold text-white text-center">
                        Upgrade to Premium
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Templates
                  </th>
                  <td className="py-2 px-6">
                    <span className="block text-sm text-gray-700">
                      Only simple templates
                    </span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    JPEG Download
                  </th>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Basic</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PNG Download
                  </th>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Basic</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    PDF Download
                  </th>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Not included in Essential</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    VAST Watermark
                  </th>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Basic</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Not included in Essential</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Not included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Color Palette
                  </th>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Font Picker
                  </th>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Essential</span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
                <tr>
                  <th
                    className="py-3 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                    scope="row"
                  >
                    Test Patterns
                  </th>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Not included in Basic</span>
                  </td>
                  <td className="py-2 px-6">
                    <span className="block text-sm text-gray-700">
                      Upto 3 patterns
                    </span>
                  </td>
                  <td className="py-2 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Premium</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="p-5"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
