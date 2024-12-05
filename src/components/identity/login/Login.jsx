import React from 'react';
import "./Login.css";
import googleLogo from "../../../assets/icons/forms/google.png";
import metaLogo from "../../../assets/icons/forms/meta.png";
import xLogo from "../../../assets/icons/forms/X.png";
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <div className="login-block">
            <div className="login-content">
                <div className="login-label">MOST<br/> EFFICIENT<br/> PLATFORM</div>
                <div className="figure">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                </div>
            </div>
            <div className="login-form">
                <div className="form-title">Enter your account</div>
                <div className="form-panel">
                    <div className="fields">
                        <div className="form-block">
                            <div className="form-label">Username or Email</div>
                            <input type="text" required={true} placeholder="login or mail" className="form-input"></input>
                        </div>
                        <div className="form-block">
                            <div className="form-label">Password</div>
                            <input type="text" required={true} placeholder="password" className="form-input"></input>
                        </div>
                    </div>
                    <div className="confirmation">
                        <div className="login-button">Confirm</div>
                        <div className="recover-button">Forgot password?<br/>
                        Make a <Link to="/recover" className="recover-link">RECOVER</Link></div>
                    </div>
                    <div className="login-braker">OR</div>
                    <div className="login-lower">
                        <div className="login-otherway">
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
                        <div className="login-tip">
                            <div className="login-tip-content">
                                Don`t have an account?
                                <Link to="/register" className="register-link"> REGISTER </Link>
                                  a new one!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;