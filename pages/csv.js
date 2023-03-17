import React, { useState } from 'react'
import Papa from 'papaparse'

export default function csv() {

    const [details, setdetails] = useState()
    



    const changeHandler = (event) => {
        // console.log(event.target.files[0])
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
            //   console.log(results.data)
              setdetails(results.data)
            },
          });
      };


      function uploadStudents(){

          fetch("./api/collegeStudents", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({details:details}),
            }
            )
        }
  return (
    <div>
    <input
      type="file"
      name="file"
      accept=".csv"
      onChange={changeHandler}
      style={{ display: "block", margin: "10px auto" }}
    />

    {details && (
        <>
        <h1>details</h1>
        <button onClick={uploadStudents}>Upload</button>
            <table className="bg-white rounded-lg border w-full">
          <thead className="">
            <tr className="border">
              <th className="py-2">Id</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
    {details.map((item)=>(
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
            </tr>

        </>
    ))} 
    </tbody>
    </table>
        </>
    )}
  </div>
  )
}
