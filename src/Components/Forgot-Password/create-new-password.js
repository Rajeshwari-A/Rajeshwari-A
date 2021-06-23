import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ForgotPasswordContainer from './forgot-password-container';
// import bridgingImg from '../../Asserts/bridging-Loan.png';
import chevronLeft from '../../Asserts/Icon-feather-chevron-left.svg';
import InputField from '../FormFields/Input/formInput';
import Button from '../FormFields/Button/button';
import './forgot-password.css';
import '../Login/login.css'

const CreateNewPassword = () => {

    const [viewPassword, setViewPassword] = useState(false);
    
    const togglePasswordView = () => {
        setViewPassword(!viewPassword);
    }

    return (
        <React.Fragment>
            <ForgotPasswordContainer>
                <React.Fragment>
                    <div className="back-nav-block">
                        <img src={chevronLeft} alt="chevron-left" />
                        <a className="back-nav">Back</a>
                    </div>
                    <h1>Create New Password</h1>
                    {/* <p className="title-discription">Enter the Email associated with your account</p> */}
                    <InputField
                        type="password"
                        label="Password"
                        name="password"
                        placeholder=""
                    />
                    <div className="password-wrapper">
                    <InputField
                        type={`${viewPassword ? "text" : "password"}`}
                        label="Password"
                        name="password"
                        placeholder="verify password"
                    />
                    <span className="toggle-pwd-view" onClick={togglePasswordView}>{`${viewPassword ? "Hide" : "View"}`}</span>
                </div>
                    <div className="btn-grid">
                        <Button name="Reset Password" className="button btn-primary btn-reset-password"></Button>
                    </div>
                    {/* <div className="login-link">
                        <span>Already reset your password? </span>
                        <Link to="/create-account">Login Now</Link>
                    </div> */}
                </React.Fragment>

            </ForgotPasswordContainer>
        </React.Fragment>
    )
}

export default CreateNewPassword;