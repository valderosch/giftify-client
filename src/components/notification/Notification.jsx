import React, { useState } from 'react';
import "./Notification.css";
import subs from "../../assets/icons/ui/notif/notif-subscriber.png";
import liks from "../../assets/icons/ui/notif/notif-like.png";
import comm from "../../assets/icons/ui/notif/notif-comment.png";
import sys from "../../assets/icons/ui/notif/notif-system.png";
import don from "../../assets/icons/ui/notif/notif-donation.png";


const notifications = [
    {   title: "Security system status", type: "system",
        message: "message", userMentioned: "", date: "2024-07-21", img:sys
    },
    {   title: "Your post is getting popular", type: "like",
        message: "message", userMentioned: "test123", date: "2024-10-15", img:liks
    },
    {   title: "You have new comment on your post", type: "comment",
        message: "message", userMentioned: "test123", date: "2024-10-28", img:comm
    },
    {   title: "Congratulations! You have new subscriber", type: "subscriber",
        message: "message", userMentioned: "test123", date: "2024-09-11", img:subs
    },
    {   title: "Congratulations! You get 5$ from ", type: "donation",
        message: "message", userMentioned: "test123", date: "2024-09-11", img:don
    },

];

const Notification = () => {
    const [expandedNotification, setExpandedNotification] = useState(null);
    const isUserCreator = false;
    const [selectedFilters, setSelectedFilters] = useState([]);

    const toggleFilter = (filter) => {
        setSelectedFilters(prevFilters =>
            prevFilters.includes(filter)
                ? prevFilters.filter(f => f !== filter)
                : [...prevFilters, filter]
        );
    };

    const toggleNotification = (index) => {
        setExpandedNotification(expandedNotification === index ? null : index);
    };

    const filteredNotifications = selectedFilters.length > 0
        ? notifications.filter(notification => selectedFilters.includes(notification.type))
        : notifications;

    return (
        <div className='notification'>
            <div className="notifications-filter">
                <div className="nots-stats">
                    <div className="stats-title">Statistic</div>
                    <div className="value">New messages: {notifications.length}</div>
                    <div className="value">All Messages: {notifications.length}</div>
                    <div className="value">Important: {notifications.filter((not) => not.type === 'system').length}</div>
                </div>
                <div className="nots-filter">
                    <div className="nots-filter-content">
                        <div className="filter-head">
                            <div className="filter-title">Filter all by</div>
                            <div className="filter-reset" onClick={() => setSelectedFilters([])}>Reset</div>
                        </div>
                        <div className="filter-body">
                            {!isUserCreator && (
                                <div className="filter-user">
                                    {['system', 'like', 'comment', 'subscriber', 'donation'].map((filter) => (
                                        <div className="filter-option" key={filter}>
                                            <input
                                                type="checkbox"
                                                className="filter-checkbox"
                                                checked={selectedFilters.includes(filter)}
                                                onChange={() => toggleFilter(filter)}
                                            />
                                            <div className="filter-value">{filter}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="notifications-main">
                <div className="nots-content">
                    <div className="nots-title">Notifications</div>
                    <div className="notifications-block">
                        <div className="timesort-block">
                            <div className="nots-divider">New</div>
                            {filteredNotifications.map((notification, index) => (
                                <div key={index} className="notification-item" onClick={() => toggleNotification(index)} style={{minHeight: `${index === expandedNotification ? 30 : 7 }vh`}}>
                                    <div className="notification-datas">
                                        <img className="img-category" src={notification.img} alt="category" />
                                        <div className="notification-data">
                                            <div className="notification-title">{notification.title}</div>
                                            <div className="notification-message">{notification.type}</div>
                                        </div>
                                        <div className="notification-date">{notification.date}</div>
                                    </div>
                                    {expandedNotification === index && (
                                        <div className="notification-details">
                                            {notification.message}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;