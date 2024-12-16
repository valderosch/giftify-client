import React, {useState} from 'react';
import "./Registration.css";
import googleLogo from "../../../assets/icons/forms/google.png";
import metaLogo from "../../../assets/icons/forms/meta.png";
import xLogo from "../../../assets/icons/forms/X.png";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {registerUser} from "../../../api/user";


const Registration = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!userData.username || !userData.email || !userData.password || !userData.confirmPassword) {
            alert('Please fill in all fields.');
            return false;
        }
        if (userData.password !== userData.confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(userData.email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await registerUser(userData);
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
        }
    };

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
                            <input
                                type="text"
                                name="username"
                                value={userData.username}
                                onChange={handleInputChange}
                                required
                                placeholder="login"
                                className="form-input"
                            />
                        </div>
                        <div className="reg-form-block">
                            <div className="form-label">Email</div>
                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="email"
                                className="form-input"
                            />
                        </div>
                        <div className="reg-form-block">
                            <div className="form-label">Password</div>
                            <input
                                type="password"
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                                required
                                placeholder="password"
                                className="form-input"
                            />
                        </div>
                        <div className="reg-form-block">
                            <div className="form-label">Confirm password</div>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={userData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                placeholder="password one more time confirm"
                                className="form-input"
                            />
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
                            <div onClick={handleRegister} className="login-button">Register</div>
                            <div className="recover-button">
                                Already have an<br />
                                account? <Link to="/login" className="recover-link">LOG IN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;