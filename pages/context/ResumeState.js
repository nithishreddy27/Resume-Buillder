import ResumeContext from "./ResumeContext";
import React,{useState} from "react";

const ResumeState = (props)=>{

    const state={
        name:"swa",
        class:"csit"
    }
    const [details, setdetails] = useState(state)
    function handleChange(){
        setdetails()
    }
    
    return (
        <ResumeContext.Provider value={{details,handleChange}}>
            {props.children}
        </ResumeContext.Provider>
    )

}


export default ResumeState