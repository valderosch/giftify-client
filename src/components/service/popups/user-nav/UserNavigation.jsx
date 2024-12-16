import React from 'react';
import "./UserNavigation.css";
import {Link} from "react-router-dom";
import mock from "../../../../assets/icons/ui/notif/notif-system.png"
import {useNavigate} from "react-router";

const UserNavigation = ({visible, hide, username, setUser}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('balance');
        setUser(null);
        navigate('/login');
    };

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
                <div className="link-nav" onClick={handleLogout}>
                    <img src={mock} alt="link" className="link-icon"/>
                    <div className="link-title">quit</div>
                </div>
            </div>
        </div>
    );
};

export default UserNavigation;