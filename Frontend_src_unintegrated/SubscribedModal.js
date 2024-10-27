import React, { useState } from 'react';
import Header from './components/Header'; 
import Greeting from './components/Greeting';
import ActionButton from './components/ActionButton';
import ShortcutsCard from './components/ShortcutsCard';
import ChatButton from './components/ChatButton';
import FooterNav from './components/FooterNav';
import chatIcon from './assets/icons/Open.svg';
import './SubscribedModal.css'; 

const SubscribedModal = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHistoryActive = true;  // Make sure this state is managed as needed

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chat-window subscribed-chat-window ${isOpen ? 'open' : 'closed'}`}>
      <div className="chat-toggle-button subscribed-chat-toggle-button" onClick={toggleChatWindow}>
        <img src={chatIcon} alt="Chatbot" className="chat-icon" />
      </div>
      <Header className="subscribed-header" />
      <Greeting className="subscribed-greeting" />
      <ActionButton className="subscribed-action-button" />
      <ShortcutsCard className="subscribed-shortcuts-card" />
      <ChatButton className="subscribed-chat-button" />
      <FooterNav onNavigate={onNavigate} isHistoryActive={isHistoryActive} />
    </div>
  );
};

export default SubscribedModal;
