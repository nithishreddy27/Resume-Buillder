// import { useState } from 'react';
// import React, { useRef, useEffect } from 'react';

// export default function InputField() {
//   const [value, setValue] = useState('');
//   const divRef = useRef(null);

//   useEffect(() => {
//     const div = divRef.current;
//     if (div.scrollWidth > div.offsetWidth) {
//       alert('Content is overflowing!');
//     }
//   }, []);

//   const handleChange = (event) => {
//     const inputValue = event.target.value;
//     if (inputValue <= 10.0) {
//       setValue(inputValue);
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="input-field">Enter a value:</label>
//       <input
//         id="input-field"
//         type="number"
//         step="0.1"
//         value={value}
//         onChange={handleChange}
//         className="border border-gray-400 rounded-md p-2"
//       />


//       <div ref={divRef} className="bg-slate-500 h-[10px] " >
//       {/* Your content here */}
//       <input type="text"  className='bg-red-200' />
//       <h1>ojoo</h1>
//     </div>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from 'react';

export default function AlertOnOverflow() {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const divRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [showMessage]);

  const handleClick = () => {
    setShowMessage(true);
  };


  useEffect(() => {
    const div = divRef.current;
    if (div.clientHeight < div.scrollHeight) {
      setIsOverflowing(true);
      handleClick()
    }
    else{
      setIsOverflowing(false);

    }
  }, [isOverflowing]);


  return (
    <>
    
    <div ref={divRef} style={{ height: '100px', overflow: 'auto' }}>
      {/* your dynamic content goes here */}
      <div>
        one
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
      {isOverflowing && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          Content has overflowed! please remove some items
        </div>
        
        // alert("decrease")
      )}
    
    </div>
      {showMessage && <div className='text-3xl text-red-700'>Message displayed for 2 seconds</div>}
    </>
  );
}