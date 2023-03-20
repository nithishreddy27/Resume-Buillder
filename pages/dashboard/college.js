import React, { useEffect, useState } from "react";
import Papa from 'papaparse'
import Navbar from "../../components/Navbar"
export default function Dashboard(props) {

  const [students, setstudents] = useState()
  // const [stu, setstu] = useState(second)
  const [sort, setsort] = useState(1)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);


  var data = props.data.done
  // console.log("data nanfa",data)
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setstudents(results.data)
        },
      });
  };


  useEffect(()=>{
    if(data){
      data.sort((a, b) => parseInt(a.Id) - parseInt(b.Id));
      // data = data.sort({"Id":1})

      setstudents(data)
    }
  },[data])


  function uploadStudents(){

      fetch("../api/collegeStudents", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({details:students}),
        }
        )
    }

    function deleteStudent(id){
      console.log("id",id)
      fetch("../api/collegeStudents", {
        method: "Delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id:id}),
      }
      )
    }




  return (
    // {https://aufaitux.com/wp-content/uploads/2022/11/pasted-image-2.png}
  <div className=" bg-gray-300 h-screen overflow-auto ">
    <Navbar/>
      <div className="p-8">
        <div className="bg-white rounded-md">
          <h1 className="text-2xl font-semibold py-4 text-center">Overview</h1>
          <div className="grid grid-cols-1 gap-10 justify-items-center">
            <div className="grid grid-cols-1 gap-3 justify-items-center sm:grid-cols-3">
              {students && (<div className="align-middle">
                <div className="h-14 w-14 rounded-full bg-sky-300 text-center p-4"> {students.length} </div>
                <h1>Total Students</h1>
              </div>)}
              <div>
                <div className="h-14 w-14 rounded-full bg-green-300"></div>
                <h1>Total Students</h1>
              </div>
              <div>
                <div className="h-14 w-14 rounded-full bg-red-300"></div>
                <h1>Total Students</h1>
              </div>
            </div>
            <div className="h-32 w-32 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    
      <div className="px-8">
      <input
      type="file"
      name="file"
      accept=".csv"
      onChange={changeHandler}
      style={{ display: "block", margin: "10px auto" }}
    />
        <button onClick={uploadStudents}>Upload</button>
        
        <table className="bg-white rounded-lg border w-full">
          <thead className="">
            <tr className="border">
              <th className="py-2">S.No.</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="border font-light w-[100%] mx-2">
              <th className="font-normal py-2">1</th>
              <th className="font-normal ">Rubeena Khatun</th>
              <th className="font-normal">20B81A1234</th>
              <th className="font-normal">
                <button className="bg-orange-500 py-1 px-5 rounded-md mx-2">
                  Resume
                </button>
              </th>
            </tr> */}
            {/* <tr className="border font-light w-[100%] mx-2">
              <th className="font-normal py-2">1</th>
              <th className="font-normal ">Rubeena Khatun</th>
              <th className="font-normal">20B81A1234</th>
              <th className="font-normal">
                <button className="bg-orange-500 py-1 px-5 rounded-md mx-2">
                  Resume
                </button>
              </th>
            </tr>
            <tr className="border font-light w-[100%] mx-2">
              <th className="font-normal py-2">1</th>
              <th className="font-normal ">Rubeena Khatun</th>
              <th className="font-normal">20B81A1234</th>
              <th className="font-normal">
                <button className="bg-orange-500 py-1 px-5 rounded-md mx-2">
                  Resume
                </button>
              </th>
            </tr> */}
           {students && (
            <>
            {/* <a href="mailto:nithishreddy0627@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a> */}
            
             {students.map((item)=>(
              <> 
                  <h1>{console.log(item)}</h1>
                  <tr className="border font-light w-[100%] mx-2">
                    <th className="font-normal ">{item.Id}</th>
                    <th className="font-normal">{item.Species}</th>
                    <th className="font-normal">
                      <button className="bg-orange-500 py-1 px-5 rounded-md mx-2">
                        Resume
                      </button>
                    </th>
                    <th className="font-normal">
                      <button className="bg-red-500 py-1 px-5 rounded-md mx-2" onClick={()=>{deleteStudent(item.Id)}}>
                        Delete
                      </button>
                    </th>
                  </tr>

              </>
              ))} 
            </>
           )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


// export const getServerSideProps = async ()=>{

//   const res = await fetch(`https://complete-psi.vercel.app/api/collegeStudents`);
//     const data = await res.json();
//     // var o = data[0];
//     console.log("banda",data)
//     return {
//       props: {
//         data: data,
//       },
//     }; 
// }
export const getServerSideProps = async ()=>{

  const res = await fetch(`http://localhost:3000/api/collegeStudents`);
    const data = await res.json();
    // var o = data[0];
    console.log("banda",data)
    return {
      props: {
        data: data,
      },
    }; 
}
