import Head from 'next/head'
import { useUser } from '../lib/hooks'
import { Inter } from '@next/font/google'
import { InferGetServerSidePropsType } from 'next'
import Navbar from "../components/Navbar"
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";


const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context: any) {
  try {

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps> ) { 
  const user = useUser()
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div id="navbar">
        <div className=" py-2 fixed top-[-8px] w-[100%] z-40 bg-slate-50">
          <Navbar/>
        </div>
      </div>
      <div className="absolute top-[70px] md:top-[50px]">
        <img
          src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg?w=900&t=st=1676106421~exp=1676107021~hmac=828df53d1f2cf43e7b86ba52e78813a465b750d1bdb51be6b08efaff5dd6a8a6"
          className="w-[1500px] h-[700px] opacity-60"
        ></img>

        <div className="flex justify-center">
          <div className="relative z-20 top-[-620px] sm:mx-14 sm:top-[-580px] lg:ml-20 ">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl pl-10 pr-2">
              Find your dream job now on Provast.
            </h1>
            <h3 className="text-base sm:text-lg text-gray-700 pl-8  pr-[16px] py-2 lg:py-5">
              Be a Priority Applicant & increase your chance of getting a call.
            </h3>
            <button className="bg-orange-100 p-2 rounded-md text-orange-600 mx-10 my-3">
              Apply Job
            </button>
          </div>
        </div>
        <div className="cursor-pointer relative top-[-730px] sm:top-[-700px] md:[-680px] lg:ml-14 sm:ml-5 -translate-x-0 translate-y-[-50%] opacity-30 hover:opacity-80">
          <BsChevronCompactLeft size={30} />
        </div>
        <div className="cursor-pointer relative top-[-765px] sm:top-[-735px] sm:mr-5 md:[-680px] lg:mr-12 -translate-x-0 translate-y-[-50%] flex justify-end opacity-30 hover:opacity-80">
          <BsChevronCompactRight size={30} />
        </div>
        <div className="relative top-[-200px]">
          <div className="bg-gradient-to-b from-orange-50 via-white to-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="pb-16 xl:flex xl:items-center xl:justify-between">
                <div>
                  <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                    <span className="text-gray-900">
                      Everything you need from{" "}
                    </span>
                    <span className="text-orange-600">Provast</span>
                  </h1>
                  <p className="mt-5 text-xl text-gray-500">
                    Includes every feature we offer.
                  </p>
                </div>
                <a
                  className="mt-8 w-full bg-orange-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-orange-700 sm:mt-10 sm:w-auto xl:mt-0"
                  href="/auth/signup"
                >
                  Get started today
                </a>
              </div>
              <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
                <div>
                  <h2 className="text-base font-semibold text-orange-600 uppercase tracking-wide">
                    Everything you need
                  </h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    All-in-one platform
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                    Our platform is specifically targeted at students and their
                    colleges to smoothen the process of job placements through a
                    seamlessly designed interface.
                  </p>
                </div>
                <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                  <ul role="list" className="divide-y divide-gray-200">
                    <li className="md:py-0 md:pb-4 py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Creating multiple resumes.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Color changing resumes.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Resume based on different categories.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Different fonts.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Download resume in different ways.
                      </span>
                    </li>
                  </ul>
                  <ul
                    role="list"
                    className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0"
                  >
                    <li className="md:border-t-0 md:py-0 md:pb-4 py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Placement Management.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Assessments.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Downloading Students data.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Viewing different test patterns.
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 h-6 w-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-500">
                        Learning modules for knowledge.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                <div className="space-y-5 sm:space-y-4">
                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Meet our leadership
                  </h2>
                  <p className="text-xl text-gray-500">
                    Teamwork is the ability to work together toward a common
                    vision. The ability to direct individual accomplishments
                    toward organizational objectives. It is the fuel that allows
                    common people to attain uncommon results.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <ul
                    role="list"
                    className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
                  >
                    <li>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <img
                          className="object-cover w-16 h-16 rounded-full lg:w-20 lg:h-20"
                          src="https://res.cloudinary.com/dj7nomqfd/image/upload/v1659940128/1629926488607_kaipmb.jpg"
                          alt=""
                        />
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h3>Thushar KE</h3>
                          <p className="text-orange-600">Director</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <img
                          className="object-cover w-16 h-16 rounded-full lg:w-20 lg:h-20"
                          src="https://res.cloudinary.com/dj7nomqfd/image/upload/v1656491326/adil_vhelan.jpg"
                          alt=""
                        />
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h3>Adil Shaik</h3>
                          <p className="text-orange-600">Director</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-600 to-green-400">
            <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">
                  Boost your Resume reach and visibility.
                </span>
                <span className="block text-cyan-900">
                  Start using Provast today.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-cyan-100">
                Provast aim to provide a platform for those desiring to enter
                the industry, that keeps in mind the various roles, skills, and
                expertise professionals would require to carve a niche for
                themselves.
              </p>
              <a
                className="mt-8 w-full bg-white border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-cyan-700 hover:bg-gray-100 sm:w-auto"
                href="/auth/signup"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div
            id="about-us"
            className="relative mx-auto max-w-md px-4 sm:max-w-7xl sm:px-6 lg:px-9"
          >
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-bold tracking-tight sm:text-4xl sm:tracking-tight">
                On a mission to empower teams
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  At PROVAST, we aim to provide a platform for those desiring to
                  present themselves to a recruiter, with a resume that reaches
                  and creates an impact to ensure qualitative engagement during
                  the recruitment process.
                </p>
                <p className="text-base leading-7">
                  Our platform is specifically designed for students and
                  institutions to build resumes of choice for targeted
                  recruiters and smoothen the entire cycle of campus recruitment
                  process, for institutions.
                </p>
              </div>
            </div>
          </div>
          <div id="contact-us" className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                    Sales Support
                  </h2>
                  <div className="mt-3">
                    <p className="text-lg text-gray-500">
                      Any queries related to sales please contact the mentioned
                      email.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="mt-6 flex">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>sales@provast.io</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-0">
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                    Technical Support
                  </h2>
                  <div className="mt-3">
                    <p className="text-lg text-gray-500">
                      For any technical support needed please contact the
                      mentioned email.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="mt-6 flex">
                      <div className="flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>support@provast.io</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-0">
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                    Our Offices
                  </h2>
                  <div className="mt-3">
                    <p className="text-lg text-gray-500">Hyderabad, India.</p>
                    <p className="text-lg text-gray-500">Sydney, Australia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
