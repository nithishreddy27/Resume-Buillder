import React,{useContext , useState} from 'react'
import { useUser } from '../../lib/hooks'
import ResumeContext from "../context/ResumeContext"

export default function about() {
    // useUser({ redirectTo: '/student/profile', redirectIfFound: true })
  useUser({ redirectTo: '/login', redirectIfFound: false })


    const a= useContext(ResumeContext)
    console.log(a)
    const [name, setname] = useState(a.details.name)
    function runMe(e){
        console.log(e.target.value);
        setname(e.target.value)
    }
  return (
    <div className='flex justify-around'>
        {/* <div>about : {name} ,{a.details.class}</div> */}
        {/* <input type="text" value={name} onChange={runMe}/> */}
        <div>
                <form action="">

                        <input type="text" value={name} onChange={runMe}/>
                        
                </form>

        </div>
        <div>
            <p>name:{name}</p>
        </div>
    </div>
  )
}
