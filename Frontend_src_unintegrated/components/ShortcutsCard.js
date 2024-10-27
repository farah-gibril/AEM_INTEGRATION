import React from 'react';

const ShortcutsCard = () => {
  return (
    <div className="shortcuts-card">
      <div className="shortcuts-title">Short-cuts</div>
      <div className="shortcuts-buttons">
        <button className="shortcut-button">
          <span className="button-text button1-text">Add Blockchain wallet</span>
        </button>
        <button className="shortcut-button">
          <span className="button-text button2-text">Add Imported wallet</span>
        </button>
      </div>
    </div>
  );
};

export default ShortcutsCard;
