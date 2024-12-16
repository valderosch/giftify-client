import React, {useState} from 'react';
import "./InviteUsers.css";

const InviteUsers = ({ onInvite, onClose }) => {
    const [emails, setEmails] = useState("");

    const handleInvite = () => {
        const emailList = emails.split(",").map((email) => email.trim());
        if (emailList.length > 0) {
            onInvite(emailList);
            setEmails("");
        }
    };

    return (
        <div className="invite-popup" onClick={onClose}>
            <div className="popup-content" onClick={event => event.stopPropagation()}>
                <div className="popup-header">
                    <div className="popup-title">Invite Users to Chat</div>
                    <div className="close-button" onClick={onClose}>
                        ✖
                    </div>
                </div>
                <div className="popup-body">
                <textarea
                    className="invite-textarea"
                    placeholder="Enter user emails, separated by commas"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                />
                    <div className="invite-button" onClick={handleInvite}>
                        Invite
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InviteUsers;