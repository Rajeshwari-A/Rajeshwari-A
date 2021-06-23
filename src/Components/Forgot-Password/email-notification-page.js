import React from 'react';
import chevronLeft from '../../Asserts/Icon-feather-chevron-left.svg';
import emailIcon from '../../Asserts/icons-email-open.png';
import './forgot-password.css';
import '../Login/login.css'

const EmailNotification = () => {

    return (
        <div className="notification-section">
            <header className="page-header"></header>
            <div className="back-nav-block">
                <img src={chevronLeft} alt="chevron-left"/>
                <a className="back-nav">Back</a>
            </div>
            <div className="notification-wrapper">
                <img src={emailIcon} alt="email-icon" className="email-icon-open" />
                <h2>Check Your Email</h2>
                <p>We have sent a verification code to recover your password.</p>
                <button className="button btn-primary open-email-btn">Open Email App</button>
            </div>
        </div>
    )
}

export default EmailNotification;