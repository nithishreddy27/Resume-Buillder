import { useEffect  } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
  
export default function ColorPickerGfg(){
  const [color, setColor] = useColor("hex", "#121212");
  useEffect(()=>{
    console.log("color:",color);
    // settextColor()
  },[color])

  function callMe(event){
    event.preventDefault()
    console.log("called");
  }


  return (
    <div>
      <form  onSubmit={callMe}>
      <label
                    htmlFor="network"
                    className="font-semibold text-gray-400"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="social"
                    id="username"
                    className="block shadow appearance-none border bg-slate-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 "
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 text-white hover:bg-orange-700 px-3 py-2 my-3 rounded-lg"
                  >
                    Update
                  </button>
      </form>
        
    </div>
  )
};