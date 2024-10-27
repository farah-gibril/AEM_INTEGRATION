import React from 'react';
import homeIcon from '../assets/icons/house.svg';
import messagesIcon from '../assets/icons/Primary.svg';
import historyIcon from '../assets/icons/clock-rotate-left.svg';

const FooterNav = ({ onNavigate, isHistoryActive }) => (
    <div className="footer-nav">
        {/* Home button - navigation removed */}
        <div id="home-button" className="nav-button">
            <img src={homeIcon} alt="Home" />
            <span>Home</span>
        </div>
        {/* Messages button - navigation removed */}
        <div id="messages-button" className="nav-button">
            <img src={messagesIcon} alt="Messages" />
            <span>Messages</span>
        </div>
        {/* History button - checks if history is active and then navigates */}
        <div id="history-button" className="nav-button" onClick={() => {
            if (isHistoryActive) onNavigate('history');
        }}>
            <img src={historyIcon} alt="History" />
            <span>History</span>
        </div>
    </div>
);

export default FooterNav;
