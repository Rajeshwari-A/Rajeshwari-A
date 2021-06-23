import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ForgotPasswordContainer from './forgot-password-container';
// import bridgingImg from '../../Asserts/bridging-Loan.png';
import InputField from '../FormFields/Input/formInput';
import Button from '../FormFields/Button/button';
import './forgot-password.css';
import '../Login/login.css'

const ForgotPassword = () => {

    return (
        <React.Fragment>
            <ForgotPasswordContainer>
                <React.Fragment>
                    <h1>Forgot Password</h1>
                    <p className="title-discription">Enter the Email associated with your account</p>
                    <InputField
                        type="text"
                        label="Email"
                        name="email"
                        placeholder=""
                    />
                    <div className="btn-grid">
                        <Button name="Send Reset Code" className="button btn-primary btn-forgot-password"></Button>
                    </div>
                    <div className="login-link">
                        <span>Already reset your password? </span>
                        <Link to="/create-account">Login Now</Link>
                    </div>
                </React.Fragment>

            </ForgotPasswordContainer>
        </React.Fragment>
    )
}

export default ForgotPassword;