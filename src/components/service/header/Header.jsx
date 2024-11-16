import React from 'react';
import "./Header.css";
import logoImage from '../../../assets/icons/header/logo-dark.png';
import settingsImage from '../../../assets/icons/header/settings.png';
import {Link} from "react-router-dom";


const Header = ({user, userRole}) => {
    return (
        <div className="header">
            <div className="content">
                <Link to="/" className="logo-link">
                    <img className="logo-icon" src={logoImage} alt = "apple"/>
                    <div className="logo-title">GIFT<div className="dot">.</div>fy</div>
                </Link>
                <div className="user-block">
                    <img className={`user-icon ${userRole}`} src={user.avatar} alt="human" />
                    <div className="user-identical">
                        <div className="username">{user.username}</div>
                        <div className={`user-role ${userRole}`}>{userRole}</div>
                    </div>
                </div>
                <div className="settings-link">
                    <img className="settings-icon" src={settingsImage} alt="settings"/>
                </div>
            </div>
        </div>
    );
};

export default Header;