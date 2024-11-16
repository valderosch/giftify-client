import React from 'react';
import "./Identic.css";
import dsImg from "../../../../assets/icons/profile/icon-ds.png";
import ytImg from "../../../../assets/icons/profile/icon-yt.png";
import xImg from "../../../../assets/icons/profile/icon-x.png";
import tgImg from "../../../../assets/icons/profile/icon-tg.png";
// import(`${imagepath+link.type}.png`)

const Identic = ({user}) => {
    const links = [
        {type: "yt", link_value: "https://youtube.com", img: ytImg},
        {type: "ds", link_value: "https://youtube.com", img: dsImg},
        {type: "x", link_value: "https://youtube.com", img: xImg},
        {type: "tg", link_value: "https://youtube.com", img: tgImg},
    ];
    return (
        <div className='user-identic'>
            <div className="identic-block">
                <div className="id-user-image">
                    <img className="id-user-image-value" src={user.avatar} alt="user-avatar"/>
                </div>
                <div className="id-user-name">
                    {user.username}
                </div>
                <div className="id-user-links">
                    {links.map((link, index) => (
                        <a key={index} className="id-link" href={link.link_value}>
                            <img src={link.img} alt={link.type} className="id-link-image"/>
                        </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Identic;