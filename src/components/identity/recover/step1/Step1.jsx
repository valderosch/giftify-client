import React from 'react';
import "../Recover.css";
import {Navigate, useNavigate} from "react-router";

const Step1 = () => {
    const navigate = useNavigate();

    const resetAccPassword = () => {
        navigate("code");
    };

    return (
        <div className="step1">
            <div className="form-head">
                <div className="form-descr">
                    Enter the Email to which the password recovery letter will send
                </div>
            </div>
            <input type="text" required={true} className="form-input" placeholder="Your Email"/>
            <div onClick={resetAccPassword} className="form-button">Reset Password</div>
        </div>
    );
};

export default Step1;