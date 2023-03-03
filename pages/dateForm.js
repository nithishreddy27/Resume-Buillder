import React from 'react'

import { useState } from "react";

function DateForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    if (endDate && event.target.value > endDate) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    if (startDate && event.target.value < startDate) {
      setStartDate("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            className="border p-2 rounded"
            min={startDate}
          />
        </div>
      </div>
    </div>
  );
}

export default DateForm;
