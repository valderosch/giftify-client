import React from 'react';
import "./Access.css";
import {Link} from "react-router-dom";

const Access = () => {
    return (
        <div className="access-screen">
            <div className="screen-content">
                <div className="access-warning">You are not allowed to watch this 😯</div>
                <div className="access-description">
                    Seems like you don't have permission to watch this  content.<br/>
                    It caused by your account status, role or visibility settings.
                </div>
                <Link to="/" className="return-button">Return</Link>
            </div>
        </div>
    );
};

export default Access;