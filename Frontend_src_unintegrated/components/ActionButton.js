import React from 'react';
import communityIcon from '../assets/icons/Vector.svg'; 

const ActionButton = () => {
  const handleClick = () => {
    window.open("https://calendly.com/aemalgorithm/30min", "_blank");
  };

  return (
    <button className="action-button" onClick={handleClick}>
      Book 1:1 onboarding session
      <img src={communityIcon} alt="Icon" className="action-button-icon" />
    </button>
  );
};

export default ActionButton;
