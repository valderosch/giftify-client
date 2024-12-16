import React from 'react';
import "./UserToAuthorAccess.css";
import {Link} from "react-router-dom";

const UserToAuthorAccess = () => {
    return (
        <div className="access-screen">
            <div className="screen-content">
                <div className="access-warning">You are not allowed to watch this 😯</div>
                <div className="access-description">
                    ⛔ Seems like you don't have permission to watch this  content.<br/>
                    It caused by your account status, role or visibility settings.
                </div>
                <div className="access-tip">
                    💡 Became an Author and start earn money on your ideas<br/>
                    You will be able to create content.
                </div>
                <div className="access-controls">
                    <Link to="/" className="return-button" id="return">Return</Link>
                    <Link to="/account-upgrade" className="return-button">Became an Author</Link>
                </div>
            </div>
        </div>
    );
};

export default UserToAuthorAccess;