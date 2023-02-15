import React,{useState} from 'react'

export default function exp() {
    const [open, setopen] = useState("semiopen")
    function toggleResume(){
        if(open == "semiopen"){
            setopen("closed")
        }
        else{
            setopen("semiopen")
        }
    }
  return (
    <>
    <div className='flex'>
        {/* {open == "open" && (
            <>
             <div className='h-screen w-[50%] bg-purple-300'>
            
             </div>
            <div className='h-screen w-[50%] bg-green-300'>
                
            </div>
            </>
        )} */}
        {open=="closed" && (
            <div className='h-screen w-[100%] bg-green-300 '>
                <button className='h-10 w-10 mx-auto block lg:hidden' onClick={toggleResume}>Click</button>
            </div>
        )}
        {open == "semiopen" && (
            <>
            <div className='h-screen relative w-[75%] bg-purple-300 transition-all '>
                <div className='lg:hidden' onClick={toggleResume}>Tog</div>
           </div>
           <div className='h-screen  w-[100%] bg-green-300'>
               
           </div>
           </>
        )}
       


    </div>
        
    </>
  )
}
