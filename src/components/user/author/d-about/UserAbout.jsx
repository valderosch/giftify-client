import React from 'react';
import "./UserAbout.css";

const UserAbout = ({about}) => {
    return (
        <div className="about">
            <div className="about-title">About me</div>
            <div className="about-content">{about}</div>
        </div>
    );
};

export default UserAbout;