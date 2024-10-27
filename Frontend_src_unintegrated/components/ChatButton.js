import React from 'react';
import arrowIcon from '../assets/icons/arrow_back.svg'; 

const ChatButton = () => {
  const handleClick = () => {
    window.open("https://calendly.com/aemalgorithm/30min", "_blank");
  };

  return (
    <button className="chat-button" onClick={handleClick}>
      Start a Conversation
      <img src={arrowIcon} alt="Arrow" className="chat-button-icon" />
    </button>
  );
};

export default ChatButton;
