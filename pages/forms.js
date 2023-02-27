import React from 'react'
import { useFieldArray, useForm } from "react-hook-form";


export default function Forms() {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
          test: [{}],
        },
      });
    
      const { fields, append, remove } = useFieldArray({ control, name: "test" ,roll:"roll"});
    
      const onFormSubmit = async (data) => {
        console.log(data)
        const body = {
          username: "",
          education: "",
        };
       
      };
  return (
    <div>

<div className="z-40 relative">
            
              <div>
                <div className="my-10 mx-5">
                  <form onSubmit={handleSubmit(onFormSubmit)}>
                    <button
                      onClick={() => append({ name: "" })}
                      className="bg-green-200 p-2 rounded-full"
                    >
                      Add Education
                    </button>
                    <div className="flex flex-col">
                      {fields.map(({ id }, index) => {
                        return (
                          <div key={id}>
                            <label
                              htmlFor="name"
                              className="m-2 text-xl font-semibold my-2"
                            >
                              Enter Name:
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border-none rounded w-[25%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2 "
                              {...register(`test.${index}.name`)}
                              id="name"
                            />
                            <label
                              htmlFor="roll"
                              className="m-2 text-xl font-semibold my-2"
                            >
                              Enter roll:
                            </label>
                            <input
                              type="text"
                              className="shadow appearance-none border-none rounded w-[25%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-500 focus:border-2 "
                              {...register(`roll.${index}.name`)}
                              id="roll"
                            />
                            <button
                              onClick={() => remove(index)}
                              className="bg-red-200 mx-4 rounded-full p-2"
                            >
                              remove
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {/* <button type="submit ">Submit</button> */}
                    <input
                      type="submit"
                      value="Submit"
                      className="bg-gradient-to-r from-cyan-500 focus:ring-2 to-blue-500 font-semibold cursor-pointer block w-[10%] text-white h-10 rounded-md "
                    />
                  </form>
                </div>
              </div>
            

           
</div>
    </div>
  )
}


 // const res = await fetch("/api/addEducation", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(body),
        // });
        // if (res.status == 200) {
        //   Router.push("/student/profile");
        // } else {
        //   console.log("error");
        // }