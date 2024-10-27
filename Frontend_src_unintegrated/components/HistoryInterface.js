import React, { useState } from 'react';
import '../HistoryInterface.css';
import FooterNav from './FooterNav';
import chatIcon from '../assets/icons/Open.svg';

const HistoryInterface = () => {
  const [isOpen, setIsOpen] = useState(true); // Assume it's initially open

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle external navigation requests
  const handleNavigation = (destination) => {
    if (destination === 'close') {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={`history-interface ${isOpen ? 'open' : 'closed'}`}>
      <div className="chat-toggle-button" onClick={toggleChatWindow}>
        <img src={chatIcon} alt="Chatbot" className="chat-icon" />
      </div>
      <div className="header-container">
        <div className="header-backdrop"></div>
        <div className="header-frame">
          <h1 className="history-title">History</h1>
          <input type="text" placeholder="Search for past conversation" className="history-search" />
        </div>
      </div>
      <div className="conversations-frame">
        <span>N conversations</span>
        <button className="export-button">Export</button>
      </div>
      <div className="conversations-container">
        <div className="history-entry">Conversation 1</div>
        <div className="history-entry">Conversation 2</div>
        <div className="history-entry">Conversation 3</div>
        <div className="history-entry">Conversation 4</div>
        <div className="history-entry">Conversation 5</div>
      </div>
      <FooterNav onNavigate={handleNavigation} />
    </div>
  );
};

export default HistoryInterface;
