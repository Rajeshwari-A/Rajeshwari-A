import React, { useState } from 'react';
import LenderProfile from '../../lender-profile';
import './lender-account-details.css';
import '../../lender-profile.css';

import InputField from '../../../FormFields/Input/formInput';


const ILenderAccountDetails = () => {

    return (
        <React.Fragment>
            <LenderProfile btnEnable={true}>
                <section className="account-details-section">
                    <h2 className="account-details-subheader">Account Details</h2>
                    <div className="account-details-wrapper">
                        <div className="account-block">
                            <span className="input-label-span">Do you have a Chase/Wells-Fargo Account?</span>
                            <InputField type="radio" value="" name="radio-yes" placeholder=""
                                className="form-input profile-input" id="radio-yes"
                            />
                            <label className="radio-span" for="radio_yes">Yes</label>
                            <InputField type="radio" value="" name="radio-no" placeholder=""
                                className="form-input profile-input" id="radio-no"
                            />
                            <label className="radio-span" for="radio_no">No</label>
                        </div>
                        <div className="wells-fargo-details-block">
                            <p className="table-sub-header">Fill in all the required fields</p>
                            <div className="wells-fargo-wrapper">
                                <div className="bank-type">
                                    <span className="input-label-span accounts-span">Select your bank</span>
                                    <select className="form-select"></select>
                                </div>
                                <div className="account-holder-details">
                                    <span className="input-label-span accounts-span">Account name*</span>
                                    <InputField type="text" value="" name="account-name" placeholder=""
                                        className="form-input profile-input" id="account-name"
                                    />
                                    <span className="input-label-span accounts-span right-align">Account number*</span>
                                    <InputField type="text" value="" name="account-no" placeholder=""
                                        className="form-input profile-input" id="account-no"
                                    />
                                </div>
                                <div className="account-type-details">
                                    <span className="input-label-span accounts-span">Account Type*</span>
                                    <InputField type="text" value="" name="account-type" placeholder=""
                                        className="form-input profile-input" id="account-type"
                                    />
                                    <span className="input-label-span accounts-span right-align">Routing Number*</span>
                                    <InputField type="text" value="" name="routing-num" placeholder=""
                                        className="form-input profile-input" id="routing-num"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default ILenderAccountDetails;