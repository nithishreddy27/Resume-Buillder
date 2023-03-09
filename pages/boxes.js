import React from "react";
import { TbPlus } from "react-icons/tb";
function boxes() {
  return (
    <div>
      <div class=" min-h-[70vh] py-4 ">
        <div class="mt-4 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6">
          <div class="text-center">
            <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <span class="block text-orange-600">Welcome Raghuram BS!</span>
            </h1>
            <p class="mb-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-2 md:text-lg md:max-w-3xl">
              Create a tailored resume for each job application. Double your
              chances of getting hired!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 w-11/15 mx-auto place-items-center mt-4 pt-4">
          <div className=" relative cursor-pointer  ">
            <div className="box relative my-7 mx-12 h-[90mm] w-[70mm] border-4 border-dashed border-gray-300">
              <div className="text-gray-500 text-center my-[58%] text-3xl font-semibold">
                CREATE
                <div className=" flex justify-center relat"><TbPlus/></div>
              </div>
            </div>
          </div>

          <div class="relative cursor-pointer">
  <div class="w-[66mm] text-white text-sm font-medium absolute text-right">
    <span class="bg-orange-600 p-1 px-3 absolute rounded-t-lg">Public</span>
  </div>
  <div class="box relative my-7 mx-12 h-[90mm] w-[70mm] bg-black border-[4px] border-orange-500">
    <span>
      <img class="w-full h-full object-cover object-center opacity-60 hover:opacity-40" src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=2048&q=75" />
    </span>
    <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace-nowrap transition-all duration-500">
      resume test
    </span>
  </div>
</div>

<style>{`
  .box:hover span { 
    transform: translate(-50%, -100%);
  } `}
</style>


<div class="relative cursor-pointer">
  <div class="w-[66mm] text-white text-sm font-medium absolute text-right">
  </div>
  <div class="box relative my-7 mx-12 h-[90mm] w-[70mm] bg-black border-[4px] border-orange-500">
    <span>
      <img class="w-full h-full object-cover object-center opacity-60 hover:opacity-40" src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=2048&q=75" />
    </span>
    <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace-nowrap transition-all duration-500">
      resume test
    </span>
  </div>
</div>

<div class="relative cursor-pointer">
  <div class="w-[66mm] text-white text-sm font-medium absolute text-right">
    
  </div>
  <div class="box relative my-7 mx-12 h-[90mm] w-[70mm] bg-black border-[4px] border-orange-500">
    <span>
      <img class="w-full h-full object-cover object-center opacity-60 hover:opacity-40" src="https://www.provast.io/_next/image?url=https%3A%2F%2Fwww.callcentrehelper.com%2Fimages%2Fstories%2F2022%2F01%2Fhands-holding-cvs.gif&w=2048&q=75" />
    </span>
    <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold whitespace-nowrap transition-all duration-500">
      resume test
    </span>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default boxes;