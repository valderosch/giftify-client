import React from 'react';
import "./Registration.css";
import googleLogo from "../../../assets/icons/forms/google.png";
import metaLogo from "../../../assets/icons/forms/meta.png";
import xLogo from "../../../assets/icons/forms/X.png";
import {Link} from "react-router-dom";


const Registration = () => {
    return (
        <div className="reg-block">
            <div className="reg-content">
                <div className="reg-label">MOST<br/> EFFICIENT<br/> PLATFORM</div>
                <div className="figure">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                </div>
            </div>
            <div className="reg-form">
                <div className="form-title">Create new account</div>
                <div className="reg-form-panel">
                    <div className="reg-fields">
                        <div className="reg-form-block">
                            <div className="form-label">Username</div>
                            <input type="text" required={true} placeholder="login" className="form-input"></input>
                        </div>
                        <div className="reg-form-block">
                            <div className="form-label">Email</div>
                            <input type="text" required={true} placeholder="email" className="form-input"></input>
                        </div>
                        <div className="reg-form-block">
                            <div className="form-label">Password</div>
                            <input type="text" required={true} placeholder="password" className="form-input"></input>
                        </div>
                        <div className="reg-form-block">
                            <div className="form-label">Confirm password</div>
                            <input type="text" required={true} placeholder="password one more time confirm" className="form-input"></input>
                        </div>
                    </div>
                    <div className="form-braker">OR</div>
                    <div className="reg-lower">
                        <div className="reg-otherway">
                            <div className="otherway-contailner">
                                <div className="link link-glg">
                                    <img className="logo" src={googleLogo} alt="log"></img>
                                    <div className="name name-glg">Google</div>
                                </div>
                                <div className="link link-meta">
                                    <img className="logo logo-meta" src={metaLogo} alt="log"></img>
                                    <div className="name name-meta">Meta</div>
                                </div>
                                <div className="link link-x">
                                    <img className="logo" src={xLogo} alt="log"></img>
                                    <div className="name name-x">X tvitter</div>
                                </div>
                            </div>
                        </div>
                        <div className="confirmation">
                            <div className="login-button">Register</div>
                            <div className="recover-button">Already have an<br/>
                                account? <Link to="/login" className="recover-link">LOG IN</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;