import React from 'react';
import "./Navigator.css";
import homeImage from "../../../assets/icons/navigator/MainpageIcon.png";
import searchImage from "../../../assets/icons/navigator/SearchIcon.png";
import createImage from "../../../assets/icons/navigator/CreateIcon.png";
import notificationImage from "../../../assets/icons/navigator/NotificationsIcon.png";
import chatsImage from "../../../assets/icons/navigator/ChatsCommunityIcon.png";
import {Link} from "react-router-dom";

const Navigator = () => {
    return (
        <div className="navigator">
            <div className="content">
                <Link to="/" className="link">
                    <img className="link-icon" src={homeImage} alt="icn" />
                    <div className="button-name">home</div>
                </Link>
                <Link to="/search" className="link">
                    <img className="link-icon" src={searchImage} alt="icn" />
                    <div className="button-name">search</div>
                </Link>
                <Link to="/create" className="link">
                    <img className="link-icon" src={createImage} alt="icn" />
                    <div className="button-name">create </div>
                </Link>
                <Link to="/notifications" className="link">
                    <img className="link-icon" src={notificationImage} alt="icn" />
                    <div className="button-name">alert</div>
                </Link>
                <Link to="/chats" className="link">
                    <img className="link-icon" src={chatsImage} alt="icn" />
                    <div className="button-name">chats</div>
                </Link>
            </div>
        </div>
    );
};

export default Navigator;