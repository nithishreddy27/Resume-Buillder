import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../../lib/hooks";
import ResumeContext from "../../context/ResumeContext";
import { RiAddLine } from "react-icons/ri";
import { useRouter } from "next/router";

export default function Random(props) {
const { details, setdetails, setdemo, demo, id, setid } = useContext(ResumeContext);

const data = props.done;
const router = useRouter();
// console.log("done",data)
const user = useUser();

useEffect(() => {
setid(null);
}, []);

async function changePublic(resumeId) {
const body = {
email: user.email,
resumeId: resumeId,
};
await fetch("/api/changePublic", {
method: "PUT",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(body),
});
router.reload();
}

async function deleteResume(index) {
console.log("index", index);
const body = {
email: user.email,
index: index,
};
console.log(body);
await fetch("/api/testResume", {
method: "DELETE",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(body),
});
router.reload();
}

return (
<div>
{user && (
<div className="min-h-[70vh] py-4 bg-gray-50">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
<span className="block text-orange-600">
Welcome <span className="text-black">{user.profile.firstName}</span>!
</span>
</h1>
<p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-md md:mt-5 md:text-lg md:max-w-3xl">
Create a tailored resume for each job application. Double your chances of getting hired!
</p>
</div>
<div className="flex flex-col md:flex-row justify-between mt-8">
<div className="md:w-1/3 md:mr-6">
<div className="box relative my-7 h-[240px] border-4 border-dashed border-gray-700 rounded-lg shadow-sm">
<div className="flex flex-col items-center justify-center h-full">
<Link
                   href="/resume/resumes"
                   className="text-lg font-semibold text-gray-800 hover:text-gray-900"
                 >
Create New Resume
</Link>
<div className="flex items-center justify-center mt-2">
<RiAddLine />
</div>
</div>
</div>
</div>
<div className="md:w-2/3">
{data.map((item) => (
<div key={item._id}>
{user.email === item.email && (
<div className="mt-8">
<h2 className="text-lg font-semibold text-gray-800">Your Resumes</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
{item.resume.map((resume, index) => (
<div key={resume._id}>
{resume.publicResume === 'false' && (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
<div className="bg-gray-200 text-gray-700 font-bold py-2 px-4">{resume.title}</div>
<div className="py-2 px-4">
<p className="text-gray-700">{resume.description}</p>
<div className="mt-4">
<Link href={`/resume/editResume/${resume._id}`}>
<a className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">
Edit
</a>
</Link>{" "}
<button
className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500"
onClick={() => deleteResume(index)}
>
Delete
</button>{" "}
{resume.publicResume === "false" ? (
<button
className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
onClick={() => changePublic(resume._id)}
>
Make Public
</button>
) : (
<button
className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-500"
onClick={() => changePublic(resume._id)}
>
Make Private
</button>
)}
</div>
</div>
</div>
)}
</div>
))}
</div>
</div>
)}


)}
</>
);

}


</div>
</div>
</div>