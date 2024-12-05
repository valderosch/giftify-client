import React from 'react';
import {Link} from "react-router-dom";

const Step4 = () => {
    return (
        <div className="step4">
            <div className="wrapper">
                Your password has been changed. You need to log-in to continue use your account
            </div>

            <Link to="/login" className="form-link">LOG IN</Link>
        </div>
    );
};

export default Step4;