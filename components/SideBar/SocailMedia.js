import React ,{useState ,useContext, useEffect} from 'react'
import {
    AiOutlineCaretDown,
    AiOutlineCaretUp,
    AiOutlinePlus,
    AiFillProject,
  } from "react-icons/ai";
  import { CgProfile } from "react-icons/cg";
  import { MdSocialDistance, MdOutlineSpeakerNotes } from "react-icons/md";
  import { FaLanguage, FaAward } from "react-icons/fa";
  import { SiGooglescholar } from "react-icons/si";
  // import {GrProjects} from "react-icons/gr"
  import { GiSkills } from "react-icons/gi";
  import { RxHobbyKnife } from "react-icons/rx";
  import { AiFillDelete } from "react-icons/ai";
  import ResumeContext from "../../context/ResumeContext";
  import Link from "next/link"

export default function SocailMedia() {
  const [arrow, setarrow] = useState(false);
  const { details, setdetails } = useContext(ResumeContext);
  const [social, setsocial] = useState({network:"",url:"",username:""})


useEffect(()=>{
    console.log(social);
},[social])



  async function socialChange(event) {
    console.log("event")
    event.preventDefault()
    const arr = [];

    var count=0
    details.social.map((item) => {
      if(item.network == social.network){
        arr.push(social)
        count=1
      }
      else{
        arr.push(item);

      }
    });
    
    if(count==0){   
        arr.push(social);
    }
    console.log("social",social);
    // const arr = social
    setdetails({ ...details, social: arr });


    setsocial({network:"",url:"",username:""})
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

function updateSocialNetwork(index){
    // console.log("in");
    details.social.map((item, i) => {
        if (i == index) {
            setsocial({network:item.network,url:item.url,username:item.username})
        }
      }); 
  }

//   function editSocialNetwrok(i){
//     seteditSocial(false)
//     const sn = {
//       network: document.getElementById("network").value,
//       username: document.getElementById("username").value,
//       url: document.getElementById("url").value,
//     };
//     var arr = [];
//     console.log("sn",sn)
//     console.log("i",i)
//     details.social.map((item,index) => {
      
//       if(index == i){
//         console.log("index",index)
//         arr.push(sn)
//       }
//       else{
//         arr.push(item);
//       }
//     });
//     console.log(arr);
//     setdetails({ ...details, social: arr });

//     document.getElementById("network").value="",
//     document.getElementById("username").value="",
//     document.getElementById("url").value=""
//   }


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
                      <div
                        className="my-3 border border-white p-3 "
                        key={item.network}
                      >
                        <div className="flex">
                        <span>
                          <img
                            src={
                              "https://www." + item.network + ".com/favicon.ico"
                            }
                            alt=""
                            className="w-5 grayscale-[40%]"
                          />
                        </span>
                        <span className="px-2 mt-[-3px] font-semibold grow">{item.network}</span>
                          <button onClick={() => deleteSocialNetwork(index)}>
                          <AiFillDelete></AiFillDelete>
                        </button>
                        <button onClick={()=>updateSocialNetwork(index)}>Update</button>
                        </div>
                        <div className="block text-sm font-thin">
                          <Link href={item.url}>
                            <span className=" mt-[-4px]">
                              {item.username}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className={`${arrow ? "block" : "hidden"}`}>
                <div className="mt-5 text-gray-400">


                </div>
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
                    onChange={(e)=>{setsocial({...social,network:e.target.value})}}
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
                    onChange={(e)=>{setsocial({...social,url:e.target.value})}}

                  />
                  <label
                    htmlFor="network"
                    className="font-semibold text-gray-400"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="social"
                    id="username"
                    value={social.username}
                    className="block shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                    onChange={(e)=>{setsocial({...social,username:e.target.value})}}

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
  )
}
