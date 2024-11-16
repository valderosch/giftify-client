import React from 'react';
import "./Describer.css";
import {formatNumber} from "../../../../lib/service/formatNumber";
import updateImg from "../../../../assets/icons/profile/ui-user.png";

const Describer = ({userdata, mydata}) => {
    const subsColors = {C: "red", B: "#5AE4A8", A: "#99CBF9"}
    return (
        <div className="describer">
            <div className="dsc-short-desc">"{userdata.short_about}"</div>{/*30-40symbols max*/}
            <div className="dsc-subs">
                <p className="dsc-value">{formatNumber(userdata.subs)}</p>
                subscribers
            </div>
            <div className="dsc-posts">
                <p className="dsc-value">{formatNumber(userdata.posts_count)}</p>
                posts
            </div>
            {mydata.subscribed ?
                <div className="dsc-subscription-level">
                    <div className="dsc-sublevel-title">Level</div>
                    <div className="dsc-sublevel-value" style={{color: subsColors[mydata.level]}}>{mydata.level}</div>
                    <img src={updateImg} alt="^" className="dsc-sublevel-upgrade"/>
                </div>
                :
                <div className="dsc-subscribe-button">Subscribe</div>
            }
        </div>
    );
};

export default Describer;