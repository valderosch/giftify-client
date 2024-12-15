import React, {useState} from 'react';
import "./DonationGoal.css";
import { formatNumber } from "../../../../lib/service/formatNumber";
import currencyIcon from "../../../../assets/logos/bit4.png"
import ReportElement from "../../../service/popups/report/ReportElement";
import GoalPopup from "../../../service/popups/goal/GoalPopup";
import {Link} from "react-router-dom";


const DonationGoal = ({ image, author, authorimg, title, date, description, goalAmount, currentAmount }) => {
    const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100);
    const [reportPopup, setReportPopup] = useState(false);
    const [donationPopup, setDonatPopup] = useState(false);

    const userGoalDto = {
        userImage: authorimg,
        user: author,
        goalBalance: 16800,
        goalImage: image,
        goalTitle: title,
        date: date,
        goalDescription: description,
        goalAmount: goalAmount,
        currentAmount: currentAmount,
    }

    const toggleDonationPopup = () => {
        setDonatPopup(!donationPopup);
    }

    return (
        <div className="donation-goal">
            <div className="post-attribution">
                <div className="author-credential">
                    <img className="author-image" src={authorimg} alt="Author" />
                    <Link to={`/user/${author}`} className="author-name">{author}</Link>
                </div>
                <div className="post-date">{date}</div>
            </div>
            <div className="post-image-block">
                {image && (
                    <div className="with-image">
                        <div className="image-wrapper">
                            <img className="post-image" src={image} alt="Post" />
                        </div>
                    </div>
                )}
            </div>
            <div className="post-info-block">
                <div className="main-info-block">
                    <h3 className="post-title">{title}</h3>
                    <p className="post-description">{description}</p>
                </div>
                <div className="donation-progress">
                    <div className="progress-text">{formatNumber(currentAmount)}</div>
                    <div className="progressbar-block">
                        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <div className="progress-text">
                        {formatNumber(goalAmount)}    ({Math.round(progressPercentage)}%)
                    </div>
                </div>
                <div className="button-block">
                    <div className="donate-button">
                        <span className="btn-text" onClick={toggleDonationPopup}>Donate a </span>
                        <img  className="btn-currency" src={currencyIcon} alt="coin"/>
                    </div>
                </div>
            </div>
            { reportPopup && (
                <ReportElement/>
            )}
            { donationPopup &&
                <GoalPopup toggle={toggleDonationPopup} goal = {userGoalDto}/>
            }
        </div>
    );
};

export default DonationGoal;
