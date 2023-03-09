import { type } from "os";
import { GiDress } from "react-icons/gi";
import dbConnect from "../../../lib/dbConnect"
import UserResume from "../../../model/Test"

export default async function handler(req,res){


    var pro = {
        role:req.body.role,
        id:"",
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
        ],
    };
    


    // const [p, setp] = useState(pro)
    dbConnect()
    // console.log("inside add",req.body);
    try{
      // console.log("email",req.body.email);
      var data = await UserResume.findOne({"email":req.body.email})
      if(data){
        await UserResume.findOneAndUpdate({"email":req.body.email},{$push: {resume:pro}})
        
      }
      else{
        const resume={
          email:req.body.email,
          resume:[pro]
        }
        var d = await UserResume.create(resume)
        // console.log("data not found",d)
      }
      var d = await UserResume.findOne({"email":req.body.email})
      var dres=d.resume[d.resume.length-1]
        // console.log("data found",dres._id)
        pro.id=dres._id
        // console.log("pro",pro.id);
      res.send({"data":pro})
    }
    catch(error){
            res.send({"error":error})
    }
    // var resume = await data.json()
    // console.log("resume get",data);
    // res.send({"body":req.body})
}


  