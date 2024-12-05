import React from 'react';
import "./Recover.css";
import {Navigate, Route, Routes} from "react-router";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";
import Step4 from "./step4/Step4";
import {Link} from "react-router-dom";

const Recover = () => {

    return (
        <div className="recover">
            <div className="left-icons">

            </div>
            <div className="recover-body">
                <div className="recover-header">Password Recovery</div>
                <div className="dynamic-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="reset" />} />
                        <Route path="/reset" element={<Step1 />} />
                        <Route path="/reset/code" element={<Step2 />} />
                        <Route path="/reset/code/new-data" element={<Step3 />} />
                        <Route path="/reset/code/new-data/success" element={<Step4 />} />
                    </Routes>
                </div>
                <div className="recover-return">
                    <div className="arrow-img">↩</div>
                    <div className="back-text">All good, <Link to="/login" className="back-link">BACK</Link></div>
                </div>
            </div>
            <div className="right-icons">

            </div>
        </div>
    );
};

export default Recover;