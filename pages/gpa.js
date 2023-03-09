import { useState } from 'react';

export default function InputField() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue <= 10.0) {
      setValue(inputValue);
    }
  };

  return (
    <div>
      <label htmlFor="input-field">Enter a value:</label>
      <input
        id="input-field"
        type="number"
        step="0.1"
        value={value}
        onChange={handleChange}
        className="border border-gray-400 rounded-md p-2"
      />
    </div>
  );
}

