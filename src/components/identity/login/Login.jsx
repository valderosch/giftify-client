import React, {useState} from 'react';
import "./Login.css";
import googleLogo from "../../../assets/icons/forms/google.png";
import metaLogo from "../../../assets/icons/forms/meta.png";
import xLogo from "../../../assets/icons/forms/X.png";
import mockAvatar from "../../../assets/icons/mock/avatar3.jpg";
import mockBanner from "../../../assets/icons/mock/mock-abstract.jpg";
import {Link} from "react-router-dom";
import {loginUser} from "../../../api/user";
import {useNavigate} from "react-router";
import {getUserBalance} from "../../../api/payment";


const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userdata = await loginUser({ email, password });
            const user = userdata.user;
            const defaultUser = {
                id: "DB8762FE-BE39-444E-BDC6-E0106AC6132A",
                token: "122122",
                username: "user-no-data",
                email: "noemail@mail.com",
                shortDescription: 'No short description available.',
                socialLinks: [
                    {platform: "yt", url: "https://www.youtube.com/@coursera"},
                    {platform: "ds", url: "https://www.youtube.com/@coursera"},
                    {platform: "tg", url: "https://t.me/giftme"},
                    {platform: "x", url: "https://x.com/"},
                ],
                avatar: mockAvatar,
                banner: mockBanner,
                longDescription: 'No long description available.',
                isLoggedIn: true,
                roles: ["user"],
                balance: 15605,
            };

            const userBalance = await getUserBalance(user.id || defaultUser.id);

            const fullUser = {
                ...defaultUser,
                ...user,
                id: user.id || defaultUser.id,
                token: user.token || defaultUser.token,
                avatar: user.avatar || defaultUser.avatar,
                banner: user.banner || defaultUser.banner,
                username: user.username || defaultUser.username,
                email: user.email || user.email,
                socialLinks: user.socialLinks.length >= 1 || defaultUser.socialLinks,
                balance: userBalance || user.balance ||defaultUser.balance,
                roles: user.roles || defaultUser.roles,
                longDescription: user.longDescription || defaultUser.longDescription,
                shortDescription: user.shortDescription || defaultUser.shortDescription,
            };
            localStorage.setItem('balance', JSON.stringify(userBalance));
            localStorage.setItem('user', JSON.stringify(fullUser));
            setUser(fullUser);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="login-block">
            <div className="login-content">
                <div className="login-label">MOST<br />EFFICIENT<br />PLATFORM</div>
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
                            <input
                                type="text"
                                required
                                placeholder="login or mail"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-block">
                            <div className="form-label">Password</div>
                            <input
                                type="password"
                                required
                                placeholder="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="confirmation">
                        <button className="login-button" onClick={handleLogin}>
                            Confirm
                        </button>
                        <div className="recover-button">
                            Forgot password?<br />
                            Make a <Link to="/recover" className="recover-link">RECOVER</Link>
                        </div>
                    </div>
                    <div className="login-braker">OR</div>
                    <div className="login-lower">
                        <div className="login-otherway">
                            <div className="otherway-contailner">
                                <div className="link link-glg">
                                    <img className="logo" src={googleLogo} alt="log" />
                                    <div className="name name-glg">Google</div>
                                </div>
                                <div className="link link-meta">
                                    <img className="logo logo-meta" src={metaLogo} alt="log" />
                                    <div className="name name-meta">Meta</div>
                                </div>
                                <div className="link link-x">
                                    <img className="logo" src={xLogo} alt="log" />
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
