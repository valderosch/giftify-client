import React from 'react';
import {useNavigate} from "react-router";

const Step3 = () => {
    const navigate = useNavigate();

    const CreateNewPassword = () => {
        navigate("success");
    };

    return (
        <div className="step3">
            <div className="wrapper">
                <div className="form-descr">
                    Set new password
                </div>
            </div>
            <input type="text" required={true} className="form-input" placeholder="Confirm"/>
            <div className="wrapper">
                <div className="form-descr">
                    Confirm password
                </div>
            </div>
            <input type="text" required={true} className="form-input" placeholder="Confirm"/>
            <div onClick={CreateNewPassword} className="form-button">Reset Password</div>
        </div>
    );
};

export default Step3;