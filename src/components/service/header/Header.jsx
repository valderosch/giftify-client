import React, {useState} from 'react';
import "./Header.css";
import logoImage from '../../../assets/icons/header/logo-dark.png';
import settingsImage from '../../../assets/icons/ui/ui-elem.png';
import {Link} from "react-router-dom";
import UserNavigation from "../popups/user-nav/UserNavigation";
import {formatNumber} from "../../../lib/service/formatNumber";


const Header = ({user, userRole, setUser}) => {
    const [nav, setNav] = useState(false);
    const handleNavPopup = () => setNav(!nav);
    const hidePopup = () => setNav(false);
    console.log(`BALANCE: ${user.balance}`)
    const balance = user.balance === undefined ? 1500 : user.balance;

    return (
        <div className="header">
            <div className="content">
                <Link to="/" className="logo-link">
                    <img className="logo-icon" src={logoImage} alt = "apple"/>
                    <div className="logo-title">GIFT<div className="dot">.</div>fy</div>
                </Link>
                <Link to={`/user/${user.username}`}
                      className="user-block">
                    <img className={`user-icon ${userRole}`} src={user.avatar} alt="human" />
                    <div className="user-identical">
                        <div className="username">{user.username}</div>
                        <div className="user-info">
                            <div className={`user-role ${userRole}`}>{userRole}</div>
                            <div className="user-balance">$ {formatNumber(balance)}</div>
                        </div>
                    </div>
                </Link>
                <div className="settings-link"
                     onClick={handleNavPopup}
                >
                    <img className="settings-icon" src={settingsImage} alt="settings"/>
                </div>
            </div>
            {nav &&
                <UserNavigation
                    visible = {handleNavPopup}
                    hide = {hidePopup}
                    username = {user.username}
                    setUser={setUser}
                />
            }
        </div>
    );
};

export default Header;