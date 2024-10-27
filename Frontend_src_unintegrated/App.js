import React, { useState } from 'react';
import DefaultModal from './DefaultModal';
import MetamaskLoginModal from './MetamaskLoginModal';
import SubscribedModal from './SubscribedModal';
import HistoryInterface from './components/HistoryInterface';

function App() {
    const [userStatus, setUserStatus] = useState('default');
   // const isHistoryActive = userStatus === 'metamaskLogin' || userStatus === 'subscribed';
    const handleNavigation = (newStatus) => {
        setUserStatus(newStatus);
    };
    const renderModal = () => {
        switch (userStatus) {
            case 'metamaskLogin':
                return <MetamaskLoginModal onNavigate={handleNavigation} />;
            case 'subscribed':
                return <SubscribedModal  onNavigate={handleNavigation}/>;
            case 'history':
                return <HistoryInterface />;
            default:
                return <DefaultModal />;
        }
    };

    return (
        <div className="app">
            <div className="chat-interface"></div>
            <div className="modal-container">
                {renderModal()}
            </div>
            <div className="button-container">
                <button onClick={() => setUserStatus('metamaskLogin')}>Metamask Login</button>
                <button onClick={() => setUserStatus('subscribed')}>Subscribed</button>
                <button onClick={() => setUserStatus('default')}>Default</button>
            </div>
        </div>
    );
}

export default App;
