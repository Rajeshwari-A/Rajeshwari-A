import React, { useState } from 'react';
import LenderProfile from '../../lender-profile';
import './lender-account-details.css';
import '../../lender-profile.css';

import InputField from '../../../FormFields/Input/formInput';


const ILenderAccountDetails = () => {

    return (
        <React.Fragment>
            <LenderProfile btnEnable={false} displayBtn={true} navPageID={5}>
                <section className="account-details-section">
                    <h2 className="account-details-subheader">Account Details</h2>
                    <div className="account-details-wrapper">
                        <div className="account-block">
                            <span className="input-label-span input-text-span">Do you have a Chase/Wells-Fargo Account?</span>
                            <InputField type="radio" defaultValue="" name="radio-yes" placeholder=""
                                className="form-input profile-input input-radio-1" id="radio-yes"
                            />
                            <span className="radio-span radio-span-1" htmlFor="radio_yes">Yes</span>
                            <InputField type="radio" defaultValue="" name="radio-no" placeholder=""
                                className="form-input profile-input input-radio-2" id="radio-no"
                            />
                            <span className="radio-span radio-span-2" htmlFor="radio_no">No</span>
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
                                    <InputField type="text" defaultValue="" name="account-name" placeholder=""
                                        className="form-input profile-input account-name" id="account-name"
                                    />
                                    <span className="input-label-span accounts-span right-align">Account number*</span>
                                    <InputField type="text" defaultValue="" name="account-no" placeholder=""
                                        className="form-input profile-input account-number" id="account-no"
                                    />
                                </div>
                                <div className="account-type-details">
                                    <span className="input-label-span accounts-type-span">Account Type*</span>
                                    <InputField type="text" defaultValue="" name="account-type" placeholder=""
                                        className="form-input profile-input account-type-input" id="account-type"
                                    />
                                    <span className="input-label-span routing-number-span right-align">Routing Number*</span>
                                    <InputField type="text" defaultValue="" name="routing-num" placeholder=""
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