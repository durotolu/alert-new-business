import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div onClick={toggleSwitch} style={{ cursor: 'pointer', width: '41px', height: '31px' }}>
      <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Static Background Rectangle */}
        <rect
          x="0"
          y="4"
          width="36"
          height="20.8"
          rx="10.4"
          fill={isOn ? "#00C46C" : "#C8C8C8"}
        />
        {/* Toggle Circle (Slider) */}
        <g filter="url(#filter0_d)">
          <circle
            cx={isOn ? 25.6 : 10.4}  // Change only the circle's position
            cy="14.4"
            r="9"
            fill="white"
          />
        </g>
        <defs>
          <filter id="filter0_d" x="0.4" y="0.4" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ToggleSwitch;
