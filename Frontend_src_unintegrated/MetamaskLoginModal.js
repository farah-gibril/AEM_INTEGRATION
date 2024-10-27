import React, { useState } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import FooterNav from './components/FooterNav';
import metamaskIcon from './assets/icons/Metamask.png';
import ActionButton from './components/ActionButton';
import ChatButton from './components/ChatButton';
import './MetamaskLoginModal.css';
import chatIcon from './assets/icons/Open.svg';
import closeIcon from './assets/icons/closebutton.svg';

const MetamaskLoginModal = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isHistoryActive = true; // Enable history for this modal

    const toggleChatWindow = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`chat-window metamask-chat-window ${isOpen ? 'open' : 'closed'}`}>
            <div className="chat-toggle-button metamask-chat-toggle-button" onClick={toggleChatWindow}>
                <img src={chatIcon} alt="Chatbot" className="chat-icon" />
            </div>
            <Header className="metamask-header" />
            <Greeting />
            
            <div className="Metamask-card">
                <div className="metamask-card-close" onClick={toggleChatWindow}>
                    <img src={closeIcon} alt="Close" style={{ width: '10px', height: '10px' }} />
                </div>

                <div className="Metamask-card-title">
                    <img src={metamaskIcon} alt="Metamask" className="metamask-card-icon" />
                    Sync your Metamask wallet
                </div>
  
                <div className="Metamask-card-text">
                    With just one click, we'll synchronize all your Metamask wallets effortlessly.
                </div>
                <button className="metamask-card-sync-button">Sync</button>
            </div>
            <ActionButton className="metamask-actionButton" label="Link Metamask" onClick={() => {}} />
            <ChatButton className="metamask-chatButton" />
            <FooterNav onNavigate={onNavigate} isHistoryActive={isHistoryActive} />
        </div>
    );
};

export default MetamaskLoginModal;
