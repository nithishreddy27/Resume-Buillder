import ResumeContext from "./ResumeContext";
import { useEffect, useState } from "react";
import { useUser } from "@/lib/hooks";
import { useRouter } from "next/router";

const ResumeState = (props) => {
  const router = useRouter();

  console.log("inside state");

  var pro = {
    personal: {
      firstName: "FNAME",
      lastName: "LANME",
      email: "example@gmail.com",
      role: "WEB DEVELPOER",
      image: "",
      dob: "1985-11-01",
      phone: "9",
      objective: "",
    },
    social: [
      // {
      //   network: "Instagram",
      //   username: "tim_j",
      //   url: "https://www.instagram.com/tim_j/",
      //   enabled: true,
      // },
    ],
    work: [
      // {
      //   company: "Kell Tech",
      //   from: "2022-03-12",
      //   to: "2024-08-10",
      //   designation: "Senior Development Engineer",
      //   website: "http://www.kelltech.com",
      //   summary: {
      //     data: "- Utilized Cloud Foundry for efficient building on top of Kubernetes.\n- Supported testing and engineering processes.",
      //     enabled: true,
      //   },
      //   enabled: true,
      // },
    ],
    education: [
      // {
      //   institution: "University of Pennsylvania",
      //   fieldOfStudy: "Computer Science",
      //   typeOfDegree: "Master of Science",
      //   startDate: "2015-04-10",
      //   endDate: "2018-06-10",
      //   gpa: "7.5",
      //   summary: {
      //     data: "Completed MS in the field of Computer Science",
      //     enabled: true,
      //   },
      //   enabled: true,
      // },
    ],
    awards: [
      // {
      //   name: "Best performer Award",
      //   awarder: "Kell Tech",
      //   date: "2021-09-21",
      //   summary: {
      //     data: "Recieved an award for best performance for the term.",
      //     enabled: true,
      //   },
      //   enabled: true,
      // },
    ],
    skills: [
      // {
      //   name: "ReactJS",
      //   level: "Beginner",
      //   enabled: true,
      // },
    ],
    languages: [
      // {
      //   name: "English",
      //   fluency: "Professional",
      //   enabled: true,
      // },
    ],
    hobbies: [
      // {
      //   name: "Solving puzzles",
      //   enabled: true,
      // },
      // {
      //   name: "Travelling",
      //   enabled: true,
      // },
    ],
    certifications: [
      // title: "Oracle Java Certifications Associate Professional",
      // date: "2014-09-18",
      // issuer: "Udemy",
      // summary: {
      //   data: "Completed a course on Java and built a project at the end of the course",
      //   enabled: true,
      // },
      // enabled: true,
    ],
    projects: [
      // {
      //   name: "Gaming AI",
      //   from: "2017-08-03",
      //   to: "2018-11-15",
      //   website: "http://github.com/gameai",
      //   summary: {
      //     data: "Worked with IT team to create an AI based gaming application for the modern gamers",
      //     enabled: true,
      //   },
      //   enabled: true,
      // },
    ]
  };

  const [details, setdetails] = useState(pro);
  // var email;
  const user = useUser()
  // console.log("in res",check)
  // email = router.query.email;
 
  useEffect(() => {
    // console.log("inside ue", email);
    if(user){
      const e= user.email
    console.log("email",e)

    fetch("http://localhost:3000/api/Resume/getResume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email:e}),
    })
      .then((data) => {
        // console.log("in data", data);
        return data.json();
      })
      .then((resume) => {
        // console.log("in get data", resume.resume);
        if (resume.resume) {
          setdetails(resume.resume);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    // console.log("details",details.personal)
    fetch("http://localhost:3000/api/Resume/updateResume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    });
  }, [details]);

  return (
    <ResumeContext.Provider value={{ details, setdetails }}>
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;

// useEffect(()=>{

//   fetch("http://localhost:3000/api/connect")
//   .then((res)=>{return res.json})
//   .then((data)=>console.log(data))

//   fetch("http://localhost:3000/api/createResume")
//   .then((res)=>{return res.json})
//   .then((data)=>console.log(data))
// },[])
