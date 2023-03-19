import ResumeContext from "./ResumeContext";
import { useEffect, useState } from "react";
import { useUser } from "@/lib/hooks";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const ResumeState = (props) => {
  const router = useRouter();

  var pro = {
    id:"test",
    publicResume:"false",
    role:"Web",
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
    social: [],
    work: [],
    education: [],
    awards: [],
    skills: [],
    languages: [],
    hobbies: [],
    certifications: [ ],
    projects: [],
  };

  var completeResume = {
    id:"test",
    publicResume:"false",
    personal: {
      firstName: "FNAME",
      lastName: "LANME",
      email: "example@gmail.com",
      role: "WEB DEVELPOER",
      image: "",
      dob: "1985-11-01",
      phone: "999999999",
      objective: `- Organized customer information and account data for business planning and customer service purposes.\n - Created excel spreadsheets to track customer data and perform intense reconciliation process.\n - Received 97% positive customer survey results.
      - Speed on calls was 10% above team average.  
       Key Achievement: Designed and executed an automatized system for following up with customers, increasing customer retention by 22%.
      `,
    },
    social: [
      {
        network: "Instagram",
        username: "tim_j",
        url: "https://www.instagram.com/tim_j/",
        enabled: true,
      },
      {
        network: "LinkedIn",
        username: "Tim Janseen",
        url: "https://www.linkedin.com/in/tim-janseen-68b0a2253",
        enabled: true,
      },
      {
        network: "Facebook",
        username: "Tim.J",
        url: "https://www.facebook.com/Tim-J-5465463",
        enabled: true,
      },
    ],

    work: [
      {
        company: "Kell Tech",
        from: "2022-03-12",
        to: "2024-08-10",
        designation: "Senior Development Engineer",
        website: "http://www.kelltech.com",
        summary: {
          data: "- Utilized Cloud Foundry for efficient building on top of Kubernetes.\n- Supported testing and engineering processes.",
          enabled: true,
        },
        enabled: true,
      },
      {
        company: "CirroStratus",
        from: "2020-07-09",
        to: "2021-10-12",
        designation: "Software Engineer",
        website: "http://www.cirrostart.com",
        summary: {
          data: "- Identified and dealt with a significant process bottleneck that boosted coding efficiency by 35% when resolved.\n- Carried out continuous identification, measurement, and improvement of processes.",
          enabled: true,
        },
        enabled: true,
      },
    ],
    education: [
      {
        institution: "University of Pennsylvania",
        fieldOfStudy: "Computer Science",
        typeOfDegree: "Master of Science",
        startDate: "2015-04-10",
        endDate: "2018-06-10",
        gpa: "7.5",
        summary: {
          data: "Completed MS in the field of Computer Science",
          enabled: true,
        },
        enabled: true,
      },
      {
        institution: "Cherryville University",
        fieldOfStudy: "Computer Science",
        typeOfDegree: "Graduation",
        startDate: "2013-04-10",
        endDate: "2015-06-15",
        gpa: "8.9",
        summary: {
          data: "Completed graduation in the field of Computer Science",
          enabled: true,
        },
        enabled: true,
      },
    ],
    projects: [
      {
        name: "Gaming AI",
        from: "2017-08-03",
        to: "2018-11-15",
        website: "http://github.com/gameai",
        summary: {
          data: "Worked with IT team to create an AI based gaming application for the modern gamers",
          enabled: true,
        },
        enabled: true,
      },
      {
        name: "Voice and Face Recognition Software",
        from: "2016-10-03",
        to: "2017-02-18",
        website: "http://github.com/vandfrecognition",
        summary: {
          data: "Voice and face recognition is the way of the future so getting in on it now. Created a software using voice and face recognition technology to meet the needs of the current security forces.",
          enabled: true,
        },
        enabled: true,
      },
    ],
    awards: [
      {
        name: "Best performer Award",
        awarder: "Kell Tech",
        date: "2021-09-21",
        summary: {
          data: "Recieved an award for best performance for the term.",
          enabled: true,
        },
        enabled: true,
      },
      {
        name: "West Community Award",
        awarder: "West Club",
        date: "2020-12-07",
        summary: {
          data: "Recieved an award for best performance for the term.",
          enabled: true,
        },
        enabled: true,
      },
      {
        name: "The Famous Leadership Award",
        awarder: "Cherryville University",
        date: "2012-08-03",
        summary: {
          data: "Recieved an award for best performance for the term.",
          enabled: true,
        },
        enabled: true,
      },
    ],
    certifications: [
      {
        title: "Oracle Java Certifications Associate Professional",
        date: "2014-09-18",
        issuer: "Udemy",
        summary: {
          data: "Completed a course on Java and built a project at the end of the course",
          enabled: true,
        },
        enabled: true,
      },
      {
        title: "Cloudera Certified Developer for Apache Hadoop (CCDH)",
        date: "2014-02-19",
        issuer: "Coursera",
        summary: {
          data: "Completed a course in Apache Hadoop.",
          enabled: true,
        },
        enabled: true,
      },
      {
        title: "Modernizing Data Lakes and Data Warehouses with GCP",
        date: "2013-04-22",
        issuer: "Qwiklabs",
        summary: {
          data: "Completed a course on Data Warehouses using Google Cloud Platform",
          enabled: true,
        },
        enabled: true,
      },
    ],
    skills: [
      {
        name: "ReactJS",
        level: "Beginner",
        enabled: true,
      },
      {
        name: "Cloud Management",
        level: "Intermediate",
        enabled: true,
      },
      {
        name: "Web Development",
        level: "Expert",
        enabled: true,
      },
    ],
    hobbies: [
      {
        name: "Solving puzzles",
        enabled: true,
      },
      {
        name: "Travelling",
        enabled: true,
      },
    ],
    languages: [
      {
        name: "English",
        fluency: "Professional",
        enabled: true,
      },
    ],
  };

  const [demo, setdemo] = useState(false);

  const [details, setdetails] = useState(pro);
  const [id, setid] = useState()
  const [change, setchange] = useState(false)
  const [first, setFirst] = useState(false)
  const [index, setindex] = useState()
  const [email, setemail] = useState()

  useEffect(() => {
    if (demo == true) {
      setdetails(completeResume);
    } else {
      setdetails(pro);
      // console.log("pro", pro);
    }
  }, [demo]);

  // useEffect(() => {
  //   if (user && id) {
  //     const e = user.email;
  //     console.log("email", e);
  //     console.log("demo", demo);
  //     fetch("http://localhost:3000/api/Resume/getResume", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email: e ,resumeId:id}),
  //     })
  //       .then((data) => {
  //         // console.log("in data", data);
  //         return data.json();
  //       })
  //       .then((resume) => {
  //         // console.log("in get data", resume.resume);
  //         if (resume.resume) {
  //           setdetails(resume.resume);
  //         }
  //       });

  //     if (demo == false) {
  //       setdetails({
  //         ...details,
  //         personal: {
  //           ...details.personal,
  //           email: user.email,
  //           firstName: user.profile.firstName,
  //           lastName: user.profile.lastName,
  //         },
  //       });
  //     }
  //   }
  // }, [user,id]);



  // useEffect(()=>{
  //   if(id && first && change){
  //     // console.log("id email",details.personal.email)
  //     const body={
  //       resumeId:id,
  //       details:details
  //     }
  //     fetch(`http://localhost:3000/api/testResume/getResume`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body:JSON.stringify(body)
  //     })
  //     .then((data)=>{
  //       return data.json();
  //     })
  //     .then((resume)=>{
  //       console.log("in",resume)
  //       if(resume.done){
  //         setdetails(resume.done)
  //       }
  //       else{
  //         setdetails(pro)
  //       }
  //     })
  //   }
  // },[id,first,change])


  useEffect(()=>{
    if(index && email){
      console.log("index",index)
      // fetch("http://localhost:3000/api/testResume",{
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      // })
      fetch("https://complete-pbk9zkqmh-nithishreddy27.vercel.app/api/testResume",{
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((data)=>{
        return data.json()
      })
      .then((response)=>{

        response.map((user)=>{
          if(user.email == email){
            // console.log(user);
            user.resume.map((resume,ind)=>{
                // console.log("resume",resume);
                if(index == ind){
                  // console.log("res",resume)
                  setdetails(resume)
                }
            })  

          }
        })

      })
    }
  },[index ,email])


  useEffect(() => {
    setchange(true)
    if(id){
      // console.log("details changed",id)
      const body={
        resumeId:index,
        details:details
      }
      fetch("https://complete-pbk9zkqmh-nithishreddy27.vercel.app/api/testResume", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      // fetch("http://localhost:3000/api/testResume", {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body)
      // });
    }
  }, [details]);





  return (
    <ResumeContext.Provider value={{ details, setdetails, setdemo, demo,id,setid,setFirst,setindex,setemail}}>
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;

