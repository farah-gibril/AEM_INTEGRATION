import React, { useState } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import FooterNav from './components/FooterNav';
import './DefaultModal.css';
import chatIcon from './assets/icons/Open.svg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-container"> 
      <div className="chat-toggle-button" onClick={toggleChatWindow}>
        <img src={chatIcon} alt="Chatbot" className="chat-icon" />
      </div>
      <div className={`chat-window ${isOpen ? 'open' : 'closed'}`}>
        <Header />
        <Greeting />

        <div className="subscription-card">
  <div className="subscription-card-title">Add subscription</div>
  <div className="subscription-card-text">
    Find the right Journaler plan for you and start 30 days free trial for all plans
  </div>
</div>


        <FooterNav />
      </div>
    </div>
  );
};

export default App;
