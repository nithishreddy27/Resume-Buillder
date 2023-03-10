import { useState } from 'react';
export default function InputField() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
  const inputValue = event.target.value;
    if(inputValue <= 100) {
      setValue(inputValue);
    }
  };
  return (
    <div>
      <label htmlFor="input-field">Enter a percentage:</label>
      <input
        id="input-field"
        type="number"
        min="0"
        max="100"
        step="0.1"
        value={value}
        onChange={handleChange}
        className="border border-gray-400 rounded-md p-2"
      />
      <span>%</span>                                
    </div>
  );
}