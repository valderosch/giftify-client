import React from 'react';
import "./UserNavigation.css";
import {Link} from "react-router-dom";
import mock from "../../../../assets/icons/ui/notif/notif-system.png"

const UserNavigation = ({visible, hide, username}) => {
    console.log("log from navi")
    return (
        <div className="user-nav" onClick={visible}>
            <div className="nav-body" onClick={event => event.stopPropagation()}>
                <Link to={`/user/${username}`} className="link-nav" onClick={hide}>
                    <img src={mock} alt="link" className="link-icon"/>
                    <div className="link-title">profile</div>
                </Link>
                <Link to="/payments" className="link-nav" onClick={hide}>
                    <img src={mock} alt="link" className="link-icon"/>
                    <div className="link-title">payments</div>
                </Link>
                <Link to="/settings" className="link-nav" onClick={hide}>
                    <img src={mock} alt="link" className="link-icon"/>
                    <div className="link-title">settings</div>
                </Link>
                <Link to="/unlogin" className="link-nav" onClick={hide}>
                    <img src={mock} alt="link" className="link-icon"/>
                    <div className="link-title">quit</div>
                </Link>
            </div>
        </div>
    );
};

export default UserNavigation;