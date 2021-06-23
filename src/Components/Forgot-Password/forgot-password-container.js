import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import bridgingImg from '../../Asserts/bridging-Loan.png';
// import InputField from '../FormFields/Input/formInput';
// import Button from '../FormFields/Button/button';
import './forgot-password.css';
import '../Login/login.css'

const ForgotPasswordContainer = ({children}) => {

    return (
        <React.Fragment>
            <div className="bridging-image-container">
                <img className="bridgingImg" src={bridgingImg}/>
            </div>
            <div className="forgotPasswordForm">
               {children}
            </div>
            <footer></footer>
        </React.Fragment>
    )
}

export default ForgotPasswordContainer;