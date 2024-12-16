import React, {useState} from 'react';
import "./Donation.css";
import {getValue} from "@testing-library/user-event/dist/utils";

const Donation = ({toggle, balance}) => {
    const [value, setValue] = useState(0);
    const [prediction, setPrediction] = useState(balance);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');


    const handleInput = (e) => {
        const newValue = parseFloat(e.target.value);
        if (isNaN(newValue) || newValue < 0) {
            setError("Amount cannot be negative");
            setValue(0);
            setPrediction(balance);
            return;
        }

        if (newValue > balance) {
            setError("Amount out of your balance");
            setValue(newValue);
            setPrediction(balance - newValue);
        } else {
            setError('');
            setValue(newValue);
            setPrediction(balance - newValue);
        }
    };

    const handleMessageChange = (e) => {
        const newMessage = e.target.value;
        if (newMessage.length <= 500) {
            setMessage(newMessage);
        }
    };

    const handleDonate = () => {
        if (value > balance) {
            console.log("Error: Insufficient balance");
        } else if (value <= 0) {
            console.log("Error: Invalid donation amount");
        } else {
            console.log("Success: Donation completed");
        }
        toggle();
    };

    return (
        <div className="donation-popup" onClick={toggle}>
            <div className="popup-body" onClick={(event) => event.stopPropagation()}>
                <div className="popup-header">
                    <div className="popup-title">Donate a gift</div>
                    <div className="close-button" onClick={toggle}>×</div>
                </div>
                <div className="popup-descr">
                    Give author support. Make a small donation
                </div>
                <div className="donation-block">
                    <div className="message-area">
                        <div className="area-upper">
                            <label htmlFor="message" className="label">
                                Leave a message (optional)
                            </label>
                            <div className="char-limit">
                                {message.length} / 500
                            </div>
                        </div>
                        <textarea
                            name="postContent"
                            className="area"
                            rows={14}
                            cols={50}
                            value={message}
                            onChange={handleMessageChange}
                        />

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
                        {error ?
                            <div className="error-message">{error}</div>
                            :
                            <div className="empty-message"></div>
                        }
                        <input
                            type="number"
                            className="donate-amount"
                            placeholder="Amount"
                            value={value}
                            onChange={handleInput}
                        />
                        <div className="submittion">
                            <div className="submitted">
                                <label htmlFor="donate-check" className="label">
                                    I agree with terms
                                </label>
                                <input
                                    type="checkbox"
                                    className="submit"
                                    id="donate-check"
                                    required={true}
                                />
                            </div>
                            <div className="donate-button-body" onClick={handleDonate}>
                                Donate
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;