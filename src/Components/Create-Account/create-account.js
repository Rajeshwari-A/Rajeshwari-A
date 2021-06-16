import React, { useState } from 'react';
import { Link } from "react-router-dom";
import bridgingImg from '../../Asserts/bridging-Loan.png';
import InputField from '../FormFields/Input/formInput';
import Button from '../FormFields/Button/button';
import './create-account.css';
import '../Login/login.css'

const CreateAccount = () => {

    // const [viewPassword, setViewPassword] = useState(false);

    // const togglePasswordView = () => {
    //     setViewPassword(!viewPassword);
    // }

    return (
        <React.Fragment>
            <div className="bridging-image-container">
                <img className="bridgingImg" src={bridgingImg}/>
            </div>
            <div className="create-lender-form">
                <h1>Create Account</h1>
                <p class="title-discription">Hi! This is a by-invitation-only system</p>
                <InputField
                    type="text"
                    label="Invite Code"
                    name="Invite Code"
                    placeholder=""
                />
                <div className="btn-grid">
                    <Button name="Next" className="button btn-primary create-btn-next"></Button>
                </div>
                <div className="login-link">
                    <span>Already have an account? </span>
                    <Link to="/">Login Now</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateAccount;