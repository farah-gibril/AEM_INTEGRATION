import React from 'react';
import mrJournalerSVG from '../assets/icons/MrJournaler.svg';

import { ReactComponent as CommunityIcon } from '../assets/icons/Vector.svg'; 

const Header = () => (
  <div className="header">
    <div className="avatar-container">
    <img src={mrJournalerSVG} alt="Mr Journaler" className="avatar-svg" />
    </div>
    {/* Community Button */}
    <button
      className="community-button"
      onClick={() => window.open('https://t.me/MrJournaler', '_blank')}
    >
      <CommunityIcon className="community-button-icon" />
      <span className="community-button-text">Go to community</span>
    </button>
  </div>
);

export default Header;
