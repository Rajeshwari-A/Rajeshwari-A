import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import CreateAccountContainer from '../create-new-account-container';
import InputField from '../../FormFields/Input/formInput';
// import Button from '../FormFields/Button/button';
import './create-account.css';
// import '../Login/login.css'

const CreateAccount = () => {
    return (
        <React.Fragment>
            <CreateAccountContainer type="test">
                <section className="user-details-wrapper">
                    <div className="name-block">
                        <span className="input-label-span">Your Name*</span>
                        <InputField type="text" defaultValue="" name="firstname" placeholder="First"
                            className="profile-input"
                        />
                        <InputField type="text" defaultValue="" name="lastname" placeholder="Last"
                            className="form-input profile-input"
                        />
                    </div>
                    <div className="data-block email-block">
                        <span className="input-label-span">Email*</span>
                        <InputField type="text" defaultValue="" name="email" placeholder="Email"
                            className="profile-input"
                        />
                    </div>

                    <div className="data-block password-block">
                        <span className="input-label-span">Password*</span>
                        <InputField type="text" defaultValue="" name="firstname" placeholder="Password"
                            className="profile-input"
                        />
                    </div>

                    <div className="data-block confirm-password-block">
                        <span className="input-label-span">Confirm Password*</span>
                        <InputField type="text" defaultValue="" name="confirm-password" placeholder=""
                            className="profile-input"
                        />
                    </div>

                    <div className="acknowledgement-block"></div>

                </section>
            </CreateAccountContainer>
        </React.Fragment>
    )
}

export default CreateAccount;