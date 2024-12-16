import React, {useState} from 'react';
import "./GoalPopup.css";
import {formatNumber} from "../../../../lib/service/formatNumber";
import currencyIcon from "../../../../assets/logos/bit4.png";
import {Link} from "react-router-dom";

const GoalPopup = ({toggle, goal = {}}) => {
    const progressPercentage = Math.min((goal.currentAmount / goal.goalAmount) * 100, 100);
    const [value, setValue] = useState(0);
    const [prediction, setPrediction] = useState(goal.goalBalance);
    const [error, setError] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleInput = (e) => {
        const newValue = parseFloat(e.target.value) || 0;

        if (newValue < 0) {
            setError("Donation amount cannot be negative.");
            setValue(0);
            setPrediction(goal.goalBalance);
            return;
        }

        setValue(newValue);
        setPrediction(goal.goalBalance - newValue);

        if (goal.goalBalance - newValue < 0) {
            setError("Insufficient balance for this donation.");
        } else {
            setError("");
        }
    };

    const handleDonate = () => {
        if (!agreed) {
            setError("You must agree to the terms to donate.");
            return;
        }

        if (value <= 0 || goal.goalBalance < value) {
            setError("Invalid donation amount.");
            return;
        }

        setError("");
        // onDonate(value);
        toggle();
        alert("Success!")
        console.log(`Donated: ${value}`);
    };

    return (
        <div className="goal-popup" onClick={toggle}>
            <div className="g-popup-body" onClick={(event) => event.stopPropagation()}>
                <div className="g-popup-header">
                    <div className="popup-title">{goal.goalTitle}</div>
                    <div className="close-button" onClick={toggle}>×</div>
                </div>
                <div className="goal-content">
                    <div className="goal-credential">
                        <Link to={`/user/${goal.user}`} className="author-credential">
                            <img src={goal.userImage} alt="user" className="user-img"/>
                            <div className="user-name">{goal.user}</div>
                        </Link>
                        <div className="goal-date">{goal.date}</div>
                    </div>
                    <div className="goal-description-block">
                        {goal.goalImage ? (
                            <div className="description-with-image">
                                <a href={goal.goalImage} target="_blank" rel="noopener noreferrer">
                                    <img src={goal.goalImage} alt="Goal" className="goal-image" />
                                </a>
                                <div className="goal-description-text">{goal.goalDescription}</div>
                            </div>
                        ) : (
                            <div className="goal-description-text-noimg">{goal.goalDescription}</div>
                        )}
                    </div>
                </div>
                <div className="goal-controls">
                    <div className="progress-block">
                        <div className="current-value">{formatNumber(goal.currentAmount)}</div>
                        <div className="progressbar-block">
                            <div className="percentage" style={{marginLeft: `${progressPercentage-5}%`}}>{progressPercentage} %</div>
                            <div className="progressbar">
                                <div className="progress" style={{width: `${progressPercentage}%`}}></div>
                            </div>
                        </div>
                        <div className="target-value">{formatNumber(goal.goalAmount)}</div>
                    </div>
                    <div className="g-donation-block">
                        <div className="user-balance">
                            <div className="actual">
                                Balance: <span className="balance">{goal.goalBalance}</span>
                            </div>
                            <div className="predict">
                                Remains: <span className="balance">{prediction >= 0 ? prediction : 0}</span>
                            </div>
                        </div>
                        <div className="value-handler">
                            <div className="error-message">{error ? error : ''}</div>
                            <input
                                type="number"
                                className="donate-amount"
                                placeholder="Enter amount"
                                value={value}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="submittion">
                            <div className="submitted">
                                <label htmlFor="agree" className="label">
                                    I agree to the terms
                                </label>
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="submit"
                                    checked={agreed}
                                    onChange={() => setAgreed(!agreed)}
                                />
                            </div>
                            <div className="donate-button-body" onClick={handleDonate}>
                                Donate <img className="btn-currency" src={currencyIcon} alt="currency icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalPopup;