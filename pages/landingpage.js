import React from "react";
import Navbar from "../components/Navbar";
import {AiFillPlusCircle} from "react-icons/ai"
const landingpage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="w-screen">
      <div className="min-[500px]:pl-8 min-[500px]:pr-8 sm:pl-8 sm:pr-0 sm:flex sm:flex-row-reverse sm:justify-evenly sm:gap-5 sm:mt-[100px]">
        <div className="flex  justify-center lg:pt-8">
          <img
          src="https://res.cloudinary.com/dhqhq0szn/image/upload/v1679150630/my-uploads/bb6rdjcot75peysxsork.jpg"
          width={800}
          height={800}
          className="scale-[0.4] sm:scale-100 lg:scale-100 mt-5"
          ></img>
        </div>
        <div className="sm:pt-[110px] xl:pl-10 sm:flex sm:flex-col sm:justify-start">
        <h1 className="text-2xl lg:text-4xl  px-5 mt-[-60px] lg:pt-8 md:pt-5 min-[900px]:text-3xl xl:pb-5 xl:pt-[50px] xl:text-[45px] font-bold">
          Professional Resume Builder,
        </h1>
        <h1 className="text-2xl lg:text-4xl min-[900px]:text-3xl xl:pb-5 px-5 py-1 font-bold xl:text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-100">
          to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
            win recruiter over!
          </span>
        </h1>
        <p className="px-5 text-[11px] lg:text-sm xl:text-base lg:tracking-tight font-medium py-3">
          Designed for students for job placements. Carefully enhanced for
          intensity and clarity. Layouts with a single click; no formatting
          necessary.
        </p>
        <div>
        <button className="text-white rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 p-2 inline-block text-sm lg:text-base mx-5 my-3">
          Make My Resume Now!
        </button>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <div>
          <img
            src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1679153797/my-uploads/b7le4amjcph29gwealkm.png"
            width={300}
            height={300}
          ></img>
          <h1 className="pl-5 mt-[-50px] text-sm font-medium">
            Pick a Template
          </h1>
          <p className="pl-5 text-xs py-3">
            Choose from variety of company specific templates
          </p>
        </div>
        <div>
          <img
            src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1679154227/my-uploads/rx0vj3mxgvisfn1je79k.png"
            width={300}
            height={300}
            className="mt-[-10px]"
          ></img>
          <h1 className="pl-5 mt-[-40px] text-sm font-medium">Fill Details</h1>
          <p className="pl-5 text-xs py-3">
            Fill in the necessary information needed by employers.
          </p>
        </div>
        <div>
          <img
            src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1679154045/my-uploads/ptcxpfrycqxagvxgovvo.png"
            width={300}
            height={300}
            className="ml-[-20px]"
          ></img>
          <h1 className="pl-5 mt-[-45px] sm:mt-[-40px]  text-sm font-medium">
            Customize Resume
          </h1>
          <p className="pl-5 text-xs py-3">
            Change the design,color etc to customize your resume
          </p>
        </div>
        <div>
          <img
            src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1679153938/my-uploads/tc11lihfkqpn6mvfknxb.png"
            width={300}
            height={300}
            className="mt-[-8px]"
          ></img>
          <h1 className="pl-5 mt-[-40px] text-sm font-medium">
            Download Resume
          </h1>
          <p className="pl-5 pr-2 text-xs py-3">
            Download or share directly to recruiters or post it on social media.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-screen h-[200px] min-[500px]:h-[230px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[700px] bg-gradient-to-r from-orange-600 to-orange-300 mt-8">
        <div className="w-[50%] bg-white rounded-full scale-110">
          <div>
            <h1 className="mt-5 text-center text-[11px] sm:text-base sm:pt-3 xl:text-3xl md:pt-5 font-medium xl:font-bold xl:pt-8">
              Explore Our Templates
            </h1>
            <p className="text-xs hidden lg:block px-20 xl:px-[100px] text-center xl:text-base py-3 xl:pt-12 font-medium text-gray-400">
              Use Professional field-tested resume templates that follow the
              exact 'resume rules' employers look for.Easy to use and done
              within minutes-try now for free!
            </p>
            <div className="flex justify-center">
            <img
              src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1679232632/my-uploads/m5ykcvvyt99tmiazht32.jpg"
              width={600}
              height={600}
              className=" mx-4 scale-75 sm:scale-75 md:scale-[0.8] md:mt-[-20px]  lg:scale-[0.85] xl:scale-[0.94]  lg:mt-[-30px]  xl:mt-[1px] "
            ></img>
            </div>
            <div className="flex justify-center">
            <button className="text-white rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 px-2 py-1 text-[10px] md:text-base sm:mt-3  ">
              Make My Resume Now!
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-10">
        <h1 className="text-2xl lg:text-3xl font-bold mt-8 mb-5 mx-5">
          Meet our leadership
        </h1>
        <p className="mx-5 text-xs lg:text-base">
          Teamwork is the ability to work together toward a common vision. The
          ability to direct individual accomplishments toward organizational
          objectives. It is the fuel that allows common people to attain
          uncommon results.
        </p>
        <div class="lg:col-span-2 mx-5 my-5">
          <ul
            role="list"
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
          >
            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img
                  class="object-cover w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://res.cloudinary.com/dj7nomqfd/image/upload/v1659940128/1629926488607_kaipmb.jpg"
                  alt=""
                />
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Thushar KE</h3>
                  <p class="text-orange-600">Director</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img
                  class="object-cover w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://res.cloudinary.com/dj7nomqfd/image/upload/v1656491326/adil_vhelan.jpg"
                  alt=""
                />
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Adil Shaik</h3>
                  <p class="text-orange-600">Director</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:pt-8 lg:px-14">
      <div className="md:grid md:grid-cols-2 sm:gap-2">
        <div className="flex justify-center">
            <img src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1679234033/my-uploads/lduutfqt2qfsbpk3er5f.jpg" width={500} height={500}
            className="md:scale-100 scale-75"></img>
        </div>
        <div className="">
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg  drop-shadow-2xl my-5 ml-5 mr-8 pb-8">
                <h1 className="text-xl m-5 pt-5">Frequently Asked Questions</h1>
                <ul className="pb-5">
                    <li className="bg-white rounded-full drop-shadow-md p-2 my-2 relative left-5 flex"><span className="grow">How to use?</span><span className="py-1"><AiFillPlusCircle className="text-orange-500"></AiFillPlusCircle></span></li>
                    
                    <li className="bg-white rounded-full drop-shadow-md p-2 my-2 relative left-5 flex"><span className="grow">Can I print my resume as PDF?</span><span className="py-1"><AiFillPlusCircle className="text-orange-500"></AiFillPlusCircle></span></li>
                    <li className="bg-white rounded-full drop-shadow-md p-2 my-2 relative left-5 flex"><span className="grow">What should I include on my resume?</span><span className="py-1"><AiFillPlusCircle className="text-orange-500"></AiFillPlusCircle></span></li>
                    <li className="bg-white rounded-full drop-shadow-md p-2 my-2 relative left-5 flex"><span className="grow">Why make resume company specific?</span><span className="py-1"><AiFillPlusCircle className="text-orange-500"></AiFillPlusCircle></span></li>
                    <li className="bg-white rounded-full drop-shadow-md p-2 my-2 relative left-5 flex"><span className="grow">Is resume same and legit?</span><span className="py-1"><AiFillPlusCircle className="text-orange-500"></AiFillPlusCircle></span></li>
                </ul>
            </div>
        </div>
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
      
    </div>
  );
};

export default landingpage;
