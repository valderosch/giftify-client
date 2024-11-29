import React, {useState} from 'react';
import "./Donation.css";
import {getValue} from "@testing-library/user-event/dist/utils";

const Donation = ({toggle, balance}) => {
    const [value, setValue] = useState(0);
    const [prediction, setPrediction] = useState(balance);

    const handleInput = (newvalue) => {
        setPrediction(value - newvalue);
        setValue(newvalue);
    }

    const handleDonate = () => {
        balance >= value ? console.log("success") : console.log("Error");
    }
    return (
        <div className="donation-popup" onClick={toggle}>
            <div className="popup-body" onClick={event => event.stopPropagation()}>
                <div className="popup-title"> Donate a gift</div>
                <div className="popup-descr">Give author a support. Make a small donation</div>
                <div className="donation-block">
                    <div className="message-area">
                        <label htmlFor="message" className="label">Leave a message (optional)</label>
                        <textarea name="postContent" className="area" rows={14} cols={50}/>
                    </div>
                    <div className="donate-area">
                        <div className="user-balance">
                            <div className="actual">
                                Your balance: <div className="balance">{balance}</div>
                            </div>
                            <div className="predict">
                                Remains: <div className="balance">{prediction}</div>
                            </div>
                        </div>
                        <input type="number" className="donate-amount" placeholder="amount"/>
                        <div className="submittion">
                            <div className="submitted">
                                <label htmlFor="chech" className="label">I agreed with therms</label>
                                <input type="checkbox"
                                       className="submit"
                                       id="donate-chech"
                                       placeholder="this is my gift"
                                       onChange={handleInput}
                                       required={true}
                                />
                            </div>
                            <div className="donate-button-body" onClick={handleDonate}>Donate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;