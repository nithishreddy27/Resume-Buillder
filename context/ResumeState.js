import ResumeContext from "./ResumeContext";
import { useState } from "react";

const ResumeState = (props)=>{

    const pro = {
        personal: {
            firstName:"FNAME",
            lastName: "LANME",
            email: "example@gmail.com",
            role: "WEB DEVELPOER",
            image: "",
            dob: "1985-11-01",
            phone: "9", 
            objective:" Write Something ",
        },
        social: [
            {
              network: "Instagram",
              username: "tim_j",
              url: "https://www.instagram.com/tim_j/",
              enabled: true,
            },
        ],

    }
    
    const [details, setdetails] = useState(pro)
    // console.log("inside state",details)
    return (
        <ResumeContext.Provider value={{details,setdetails}}>
            {props.children}
        </ResumeContext.Provider>
    )
}

export default ResumeState;