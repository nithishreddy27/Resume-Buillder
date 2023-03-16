import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Pricing = () => {
  const basicPayment = async () => {
    const res = await initializeRazorpay();
    console.log("here...", res);
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay/basic", { method: "POST" }).then(
      (t) => t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Provast",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEhcsU1vPKc1A/company-logo_200_200/0/1656590853490?e=1686787200&v=beta&t=9DmQIdaWbTH_m8AtK1ZfBeDH86fjbCHWm1j9KTSP7mo",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Provast",
        email: "provast@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const essentialPayment = async () => {
    const res = await initializeRazorpay();
    console.log("here...", res);
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay/essential", {
      method: "POST",
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Provast",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEhcsU1vPKc1A/company-logo_200_200/0/1656590853490?e=1686787200&v=beta&t=9DmQIdaWbTH_m8AtK1ZfBeDH86fjbCHWm1j9KTSP7mo",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Provast",
        email: "provast@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const premiumPayment = async () => {
    const res = await initializeRazorpay();
    console.log("here...", res);
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay/premium", { method: "POST" }).then(
      (t) => t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Provast",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEhcsU1vPKc1A/company-logo_200_200/0/1656590853490?e=1686787200&v=beta&t=9DmQIdaWbTH_m8AtK1ZfBeDH86fjbCHWm1j9KTSP7mo",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Provast",
        email: "provast@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
      console.log("inside");
    });
  };
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="bg-orange-900 mt-[80px]">
        <div className="max-w-2xl mx-auto py-6 px-4 sm:py-4 sm:px-6 lg:px-4 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="w-full">
              <h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-4xl">
                Pricing Plans
              </h2>
              <p className="mt-5 text-md text-orange-300">
                Start building for free, then add a site plan to go live.
                Account plans unlock additional features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="max-w-2xl mx-auto bg-white py-2 sm:py-3 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            {/* <caption className="sr-only">Pricing plan comparison</caption> */}
            <thead>
              <tr>
                <th
                  className="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                <th
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Basic
                </th>
                <th
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Essential
                </th>
                <th
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Premium
                </th>
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
                        <span className="text-3xl font-extrabold text-gray-900">
                          ₹129
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={basicPayment}
                      className="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center"
                    >
                      Upgrade to Basic
                    </button>
                  </div>
                </td>
                <td className="h-full py-2 px-6 align-top">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span className="text-3xl font-extrabold text-gray-900">
                          ₹179
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={essentialPayment}
                      className="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center"
                    >
                      Upgrade to Essential
                    </button>
                  </div>
                </td>
                <td className="h-full py-2 px-6 align-top">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <p>
                        <span className="text-3xl font-extrabold text-gray-900">
                          ₹259
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          /year
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={premiumPayment}
                      className="hover:to-pink-600 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer mt-6 block w-full border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center"
                    >
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
      <footer className="bg-gray-900 rel">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="relative w-48 h-16 mx-auto cursor-pointer mb-5">
            <img src="https://www.provast.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_W_uoqbkv.png&w=2048&q=75"></img>
          </div>
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="cursor-pointer px-5 py-2">
              <a className="text-base text-white hover:text-gray-600">
                About Us
              </a>
            </div>
            <div className="cursor-pointer px-5 py-2">
              <a className="text-base text-white hover:text-gray-600">
                Contact Us
              </a>
            </div>
            <div className="cursor-pointer px-5 py-2">
              <a className="text-base text-white hover:text-gray-600">
                Pricing
              </a>
            </div>
            <div className="cursor-pointer px-5 py-2">
              <a className="text-base text-white hover:text-gray-600">
                Privacy Policy
              </a>
            </div>
            <div className="cursor-pointer px-5 py-2">
              <a className="text-base text-white hover:text-gray-600">
                Refund Policy
              </a>
            </div>
            <div className="cursor-pointer px-5 py-2">
              <a className="text-base text-white hover:text-gray-600">
                Terms And Conditions
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-white">
            © 2022 Provast, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
