import React, { useState } from 'react';
import bridgingImg from '../../Asserts/bridging-Loan.png';
import InputField from '../FormFields/Input/formInput';
import Button from '../FormFields/Button/button';
import './login.css';

const Login = () => {

    const [viewPassword, setViewPassword] = useState(false);

    const togglePasswordView = () => {
        setViewPassword(!viewPassword);
    }

    return (
        <React.Fragment>
            <div className="bridging-image-container">
                <img className="bridgingImg" src={bridgingImg}/>
            </div>
            <div className="loginForm">
                <h1>Login</h1>
                <p>Hello! Let's get started</p>
                <InputField
                    type="text"
                    label="Email"
                    name="email"
                    placeholder=""
                />
                <div className="password-wrapper">
                    <InputField
                        type={`${viewPassword ? "text" : "password"}`}
                        label="Password"
                        name="password"
                        placeholder=""
                    />
                    <span className="toggle-pwd-view" onClick={togglePasswordView}>View</span>
                </div>
                <InputField
                    type="checkbox"
                    name="password"
                    placeholder="password"
                />
                <span className="login-remainder-span">Remember me</span>
                <span className="forgot-password">Forgot Password?</span>
                <div className="login-btn-grid">
                    <Button name="Login" className="button btn-primary"></Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;