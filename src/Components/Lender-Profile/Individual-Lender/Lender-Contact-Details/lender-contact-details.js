import React, { useState } from 'react';
import LenderProfile from '../../lender-profile';
import './lender-contact-details.css';
import InputField from '../../../FormFields/Input/formInput';


const LenderContactDetails = () => {

    return (
        <React.Fragment>
            <LenderProfile btnEnable={true}>
                <section className="contact-details-section">
                    <h2 className="contact-details-subheader">Contact Details</h2>
                    <div className="contact-details-wrapper">
                        <div className="contact-block lender-email">
                            <span className="input-label-span">Email*</span>
                            <InputField type="text" value="" name="month" placeholder=""
                                className="form-input profile-input"
                            />
                        </div>
                        <div className="contact-number">
                            <span className="input-label-span">Phone Number</span>
                            <InputField type="text" value="" name="ssn-id-1" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" value="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" value="" name="ssn-id-3" placeholder=""
                                className="form-input profile-input"
                            />
                        </div>
                        <div className="emergency-contact">
                            <span className="input-label-span">Emergency Contact*</span>
                            <InputField type="text" value="" name="month" placeholder="first"
                                className="form-input profile-input"
                            />
                            <InputField type="text" value="" name="month" placeholder="last"
                                className="form-input profile-input"
                            />
                        </div>
                        <div className="alternate-contact">
                            <span className="input-label-span">Emergency Contact Number*</span>
                            <InputField type="text" value="" name="month" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" value="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> - </span>
                            <InputField type="text" value="" name="ssn-id-2" placeholder=""
                                className="form-input profile-input"
                            />
                        </div>
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default LenderContactDetails;