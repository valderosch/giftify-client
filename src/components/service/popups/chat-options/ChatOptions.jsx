import React from 'react';
// import "./ChatOptions.css";
import actionimg from "../../../../assets/icons/ui/ui-elem.png"

const ChatOptions = ({invite, leave, toggle}) => {
    return (
        <div className="options-popup" onClick={event => event.stopPropagation}>
            <div className="options">
                <div className="popup-item">
                    <img src="" alt="action" className="popup-icon"/>
                    <div className="popup-action">Invite</div>
                </div>
                <div className="popup-item">
                    <img src="" alt="action" className="popup-icon"/>
                    <div className="popup-action">Delete +alert</div>
                </div>
            </div>
            <div className="popup-close">
                <div className="popup-action-close" onClick={toggle}>×</div>
            </div>
        </div>
    );
};

export default ChatOptions;