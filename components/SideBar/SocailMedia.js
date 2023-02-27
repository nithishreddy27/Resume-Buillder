import React, { useState, useContext, useEffect } from "react";
import {

  AiOutlinePlus,

} from "react-icons/ai";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import ResumeContext from "../../context/ResumeContext";
import Link from "next/link";

export default function SocailMedia() {
  const [arrow, setarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [social, setsocial] = useState({ network: "", url: "", username: "" , enabled:true});





  async function socialChange(event) {
     console.log("event");
    event.preventDefault();
    const arr = [];

    var count = 0;
    details.social.map((item) => {
      if (item.network == social.network) {
        arr.push(social);
        count = 1;
      } else {
        arr.push(item);
      }
    });

    if (count == 0) {
      arr.push(social);
    }
    console.log("social", social);
    // const arr = social
    setdetails({ ...details, social: arr });
    setsocial({ network: "", url: "", username: "",enabled:true });
  }

  function deleteSocialNetwork(index) {
    const arr = [];
    details.social.map((item, i) => {
      if (i != index) {
        arr.push(item);
      }
    });
    setdetails({ ...details, social: arr });
  }

  function updateSocialNetwork(index) {
    // console.log("in");
    details.social.map((item, i) => {
      if (i == index) {
        setsocial({
          network: item.network,
          url: item.url,
          username: item.username,
          enabled:true
        });
      }
    });
  }




  //to toggle the social media

  function toggleSocial(index){
   
    
    setsocial(details.social[index])
    const arr=[]
    if(details.social[index].enabled == true){
      details.social.map((item,ind) => {
       if(index == ind){
          item.enabled = false
          arr.push(item)
       }
       else{
        arr.push(item)
       }
      });
      setdetails({ ...details, social: arr });
    }
    else{
      details.social.map((item,ind) => {
        if(index == ind){
          item.enabled = true
           arr.push(item)
        }
        else{
         arr.push(item)
        }
       });
       setdetails({ ...details, social: arr });
    }
    setsocial({ network: "", url: "", username: "",enabled:true });
  }


  return (
    <div>
      <div className="mt-5 shadow-md p-2 rounded-md" id="socialnetworks">
        <div className="flex flex-row">
          <h1 className="font-bold text-xl grow">Social Networks:</h1>
          <div
            className="pt-[-15px] mt-[-10px]"
            onClick={() => {
              setarrow(!arrow);
            }}
          >
            {arrow == true && (
              <div className="">
                <div className="flex justify-center">
                  <button className="align-right flex transition ease-in-out duration-0 hover:duration-150 items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                    <span className="mr-2">
                      <AiOutlinePlus></AiOutlinePlus>
                    </span>
                    Hide
                  </button>
                </div>
              </div>
            )}
            {arrow == false && (
              <div className="flex justify-end grow">
                <button className="align-right flex items-center border-2 my-2 mr-2 right-0 px-3 py-1 border-gray-600 rounded-md hover:border-orange-500 hover:text-orange-600">
                  <span className="mr-2">
                    <AiOutlinePlus></AiOutlinePlus>
                  </span>
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          {details.social.length != 0 && (
            <>
              {details.social.map((item, index) => (
                <>
                
                  <div
                  className="my-3 border border-white p-3 "
                  key={item.network}
                >
                  <div className="flex">
                    <span>
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        alt=""
                        className="w-5 grayscale-[40%]"
                      />
                    </span>
                    <span className="px-2 mt-[-3px] font-semibold grow">
                      {item.network}
                    </span>
                    <button
                      className="text-xl mr-2 text-gray-300"
                      onClick={() => deleteSocialNetwork(index)}
                    >
                    <button
                      className="text-xl text-gray-300"
                      onClick={() => {
                        updateSocialNetwork(index);
                        setarrow(true);
                      }}
                    >
                      <FaEdit></FaEdit>
                    </button>
                    </button>
                    <button
                      className="text-xl mr-2 text-gray-300"
                      onClick={() => deleteSocialNetwork(index)}
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                    <div>
                      <input
                        class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-200 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-orange-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        checked={item.enabled}
                        defaultChecked
                        onChange={()=>{
                          toggleSocial(index)
                        }}
                      />
                    </div>
                  </div>
                  <div className="block text-sm font-thin">
                    <Link href={item.url}>
                      <span className=" mt-[-4px]">{item.username}</span>
                    </Link>
                  </div>
                </div>
                </>
              ))}
            </>
          )}
        </div>
        <div className={`${arrow ? "block" : "hidden"}`}>
          <div className="mt-5 text-gray-400"></div>
          <form onSubmit={socialChange}>
            <label htmlFor="network" className="font-semibold">
              Network
            </label>

            <input
              type="text"
              name="social"
              id="network"
              className="block shadow bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={social.network}
              onChange={(e) => {
                setsocial({ ...social, network: e.target.value });
              }}
            />
            <label htmlFor="url" className="font-semibold text-gray-400">
              Url
            </label>
            <input
              type="text"
              name="social"
              id="url"
              className="block shadow appearance-none bg-slate-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              value={social.url}
              onChange={(e) => {
                setsocial({ ...social, url: e.target.value });
              }}
            />
            <label htmlFor="network" className="font-semibold text-gray-400">
              Username
            </label>
            <input
              type="text"
              name="social"
              id="username"
              value={social.username}
              className="block shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
              onChange={(e) => {
                setsocial({ ...social, username: e.target.value });
              }}
            />

            <button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
