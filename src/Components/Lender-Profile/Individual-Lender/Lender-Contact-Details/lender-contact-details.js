import React, { useState } from 'react';
import LenderProfile from '../../lender-profile';
import './lender-contact-details.css';
import InputField from '../../../FormFields/Input/formInput';


const ILenderContactDetails = () => {

    return (
        <React.Fragment>
            <LenderProfile btnEnable={false} displayBtn={true} nxtNavPageID={3}>
                <section className="contact-details-section">
                    <h2 className="contact-details-subheader">Contact Details</h2>
                    <div className="contact-details-wrapper">
                        <div className="contact-block lender-email">
                            <span className="input-label-span email-span">Email*</span>
                            <InputField type="text" defaultValue="" name="month" placeholder=""
                                className="form-input profile-input"
                            />
                        </div>
                        <div className="contact-number">
                            <span className="input-label-span contact-number-span">Phone Number</span>
                            <InputField type="text" defaultValue="" name="ssn-id-1" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" defaultValue="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" defaultValue="" name="ssn-id-3" placeholder=""
                                className="form-input profile-input"
                            />
                        </div>
                        <div className="emergency-contact">
                            <span className="input-label-span emergency-contact-span">Emergency Contact*</span>
                            <InputField type="text" defaultValue="" name="month" placeholder="First"
                                className="form-input profile-input firstname"
                            />
                            <InputField type="text" defaultValue="" name="month" placeholder="Last"
                                className="form-input profile-input lastname"
                            />
                        </div>
                        <div className="alternate-contact">
                            <span className="input-label-span alternate-contact-span">Emergency Contact Number*</span>
                            <InputField type="text" defaultValue="" name="month" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" defaultValue="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" defaultValue="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            />
                        </div>
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default ILenderContactDetails;