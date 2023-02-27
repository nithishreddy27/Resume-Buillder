import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

const tooltip = () => {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled(!enabled);
  };

  return (
    <div>
      <ToggleSwitch enabled={enabled} onChange={handleToggle} />
    </div>
  );
};

export default tooltip;