import React from 'react';
import {useNavigate} from "react-router";

const Step2 = () => {
    const navigate = useNavigate();

    const EmailCodeEnter = () => {
        navigate("new-data");
    };

    return (
        <div className="step2">
            <div className="form-head">
                <div className="form-descr">
                    Enter the code from letter
                </div>
                <div className="form-symbol">****</div>
            </div>
            <input type="text" required={true} className="form-input" placeholder="Code from letter"/>
            <div onClick={EmailCodeEnter} className="form-button">Reset Password</div>
        </div>
    );
};

export default Step2;