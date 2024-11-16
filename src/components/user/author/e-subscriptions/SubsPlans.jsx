import React from 'react';
import "./SubsPlans.css";

const SubsPlans = () => {
    const advantages = [
        {advantage: "Author support", flag: "yes"},
        {advantage: "Locked chat", flag: "yes"},
        {advantage: "Author specials", flag: "no"},
        {advantage: "Personal chat", flag: "no"},
        {advantage: "Fre posts", flag: "yes"},
    ];
    return (
        <div className="plans-section">
            <div className="plans-title">Subscription Plans</div>
            <div className="plans-block">
                <div className="plan">
                    <div className="plan-image">
                        <img src="" alt="image" className="plan-image-value"/>
                    </div>
                    <div className="plan-level">
                        level: <div className="plan-level-value">C</div>
                    </div>
                    <div className="plan-content">
                        <div className="plan-advantages">
                            {advantages.map((advantage, index) => (
                                <div className="advantage">
                                    <div className="adv-title">{advantage.advantage}</div>
                                    <div className="adv-flag">{advantage.flag}</div>
                                </div>
                            ))}
                        </div>
                        <div className="plan-confirm">
                            <div className="plan-price">$ {50.0}</div>
                            <div className="plan-button">Subscribe</div>
                        </div>
                    </div>
                </div>
                <div className="plan">
                    <div className="plan-image">
                        <img src="" alt="image" className="plan-image-value"/>
                    </div>
                    <div className="plan-level">
                        level: <div className="plan-level-value">C</div>
                    </div>
                    <div className="plan-content">
                        <div className="plan-advantages">
                            {advantages.map((advantage, index) => (
                                <div className="advantage">
                                    <div className="adv-title">{advantage.advantage}</div>
                                    <div className="adv-flag">{advantage.flag}</div>
                                </div>
                            ))}
                        </div>
                        <div className="plan-confirm">
                            <div className="plan-price">$ {50.0}</div>
                            <div className="plan-button">Subscribe</div>
                        </div>
                    </div>
                </div>
                <div className="plan">
                    <div className="plan-image">
                        <img src="" alt="image" className="plan-image-value"/>
                    </div>
                    <div className="plan-level">
                        level: <div className="plan-level-value">C</div>
                    </div>
                    <div className="plan-content">
                        <div className="plan-advantages">
                            {advantages.map((advantage, index) => (
                                <div className="advantage">
                                    <div className="adv-title">{advantage.advantage}</div>
                                    <div className="adv-flag">{advantage.flag}</div>
                                </div>
                            ))}
                        </div>
                        <div className="plan-confirm">
                            <div className="plan-price">$ {50.0}</div>
                            <div className="plan-button">Subscribe</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubsPlans;