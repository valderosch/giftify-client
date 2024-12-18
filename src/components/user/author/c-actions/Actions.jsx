import React, { useState } from 'react';
import "./Actions.css";
import goalImg from "../../../../assets/icons/profile/ui-goal.png";
import expandImg from "../../../../assets/icons/profile/ui-expand.png";
import giftImg from "../../../../assets/icons/profile/ui-gift.png";
import Donation from "../../../service/popups/donation/Donation";
import GoalPopup from "../../../service/popups/goal/GoalPopup";


const Actions = ({user}) => {
    const [activeGoal, setActiveGoal] = useState(1);
    const [expandedGoal, setExpandedGoal] = useState(null);
    const [donationPopup, setDonationPopup] = useState(false);
    const [goalPopup, setGoalPopup] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState(null);

    const goals = [
        {id:1, title: "Buy me a PS5", description: "Lets buy me a PS5 please." +
                " i want it so bad!!! I will be your best streamer",
            goalAmount: 5000, currentAmount: 1250, image: "no"
        },
        {id:2, title: "Adobe license pack goal", description: "Adobe license pack" +
                " i want it so bad!!! I will be your best streamer",
            goalAmount: 20000, currentAmount: 8500, image: "yes"
        },
        {id:3, title: "Raspberry PI5 computer", description: "Lets buy me this please." +
                " i want it so bad!!! I will be your best streamer. We need to use it in college",
            goalAmount: 3000, currentAmount: 3400, image: "yes"
        },
    ]
    const progressPercentage = (goalAmount, currentAmount) => {
        return Math.min((currentAmount / goalAmount) * 100, 100);
    }

    const toggleExpanded = (id) => {
        setExpandedGoal(expandedGoal === id ? null : id);
    };

    const togglePopup = () => {
        setDonationPopup(!donationPopup)
    }
    const toggleGoalPopup = (goal) => {
        const userGoalDto = {
            userImage: user.userImage,
            user: user.username,
            goalBalance: 15500,
            goalImage: false,
            goalTitle: goal.title,
            date: "21 oct",
            goalDescription: goal.description,
            goalAmount: goal.goalAmount,
            currentAmount: goal.currentAmount,
        };
        setSelectedGoal(userGoalDto);
        setGoalPopup(!goalPopup);
    };

    return (
        <div className="actions">
            <div className="goals-block">
                <div className="act-partition-title">Goals</div>
                <div className="act-goals-row">
                    {goals.map((goal) => (
                        <div
                            key={goal.id}
                            className={`act-goal ${expandedGoal === goal.id ? 'expanded' : activeGoal === goal.id ? 'active' : 'inactive'}`}
                            onClick={() => toggleGoalPopup(goal)}
                            onMouseOver={() => setActiveGoal(goal.id)}
                            onMouseOut={() => expandedGoal === null && setActiveGoal(activeGoal)}
                            style={{
                                zIndex: activeGoal === goal.id ? 3 : 1,
                                transform: activeGoal > goal.id ? 'translateX(1rem)' : activeGoal < goal.id ? 'translateX(-1rem)' : 'none'
                            }}
                        >
                            <div className="act-goal-info">
                                {activeGoal !== goal.id && expandedGoal !== goal.id && (
                                    <div className="act-goal-unactive">
                                        <div className="act-img-unactive">
                                            <img src={goalImg} alt="goal" className="goal-img" />
                                        </div>
                                        <div className="act-goal-num">{goal.id}</div>
                                    </div>
                                )}
                                {activeGoal === goal.id && expandedGoal !== goal.id && (
                                    <div className="act-goal-active-content">
                                        <div className="act-goal-wrapper">
                                            <div className="act-goal-id">
                                                <img src={goalImg} alt="goal" className="goal-img" />
                                            </div>
                                            <span className="act-goal-active-title">{goal.title}</span>
                                            <img className="toggle-button" src={expandImg} alt="^" />
                                        </div>
                                        <div className="act-goal-progressbar">
                                            <div
                                                className="act-progress"
                                                style={{ width: `${progressPercentage(goal.goalAmount, goal.currentAmount)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="challenge-block">
                <div className="act-partition-title">Donation</div>
                <div className="act-challenge-block">
                    <div className="bid-info">
                        <div className="bid-title">
                            Support "<div className="bid-author">{user.username}</div>"
                        </div>
                        <div className="bid-descr">
                            Send a little gift for the author you like.
                        </div>
                    </div>
                    <div className="bid-button" onClick={togglePopup}>
                        <img src={giftImg} alt="bid" className="bid-icon" />
                    </div>
                </div>
            </div>
            {donationPopup && (
                <Donation toggle={togglePopup} balance={user.balance} />
            )}
            {goalPopup && selectedGoal && (
                <GoalPopup toggle={() => setGoalPopup()} goal={selectedGoal} />
            )}
        </div>
    );
};

export default Actions;