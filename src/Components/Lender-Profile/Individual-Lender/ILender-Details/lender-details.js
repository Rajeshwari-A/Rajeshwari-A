import React, { useState } from 'react';
import Button from '../../../FormFields/Button/button';
import InputField from '../../../FormFields/Input/formInput'
import LenderProfile from '../../lender-profile';
import '../../lender-profile.css';
import './lender-details.css';



const ILenderDetails = () => {

    return (
        <React.Fragment>
            {/* <LenderProfile btnEnable={true}> */}
                <section className="lender-details-section">
                    {/* <div className="profile-subheader-wrapper">
                        <h2 className="sub-header">Individual Details</h2>
                    </div> */}
                    <div className="lender-details-block">
                        <div className="lender-name-block">
                            <span className="input-label-span lender-name-label">Full Legal Name</span>
                            <InputField type="text" value="" name="firstname" placeholder="First" className="form-input firstname" />
                            <InputField type="text" value="" name="lastname" placeholder="Last"
                                className="form-input lastname"
                            />
                        </div>
                        <div className="dob-wrapper">
                            <span className="input-label-span lender-dob-label">Date of Birth</span>
                            <select className="form-select select-month"></select>
                            <span className="char-span"> / </span>
                            <InputField type="text" value="" name="month" placeholder=""
                                className="form-input profile-input"
                            />
                            <span className="char-span"> / </span>
                            <InputField
                                type="text" value="" name="year"
                                placeholder=""
                                className="form-input profile-input"
                            />
                        </div>
                        <div className="lender-id-block">
                            <span className="input-label-span lender-id-span">SSN</span>
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
                        <div className="text-wrapper">
                            <span className="input-label-span text-span">Upload Valid ID Proof</span>
                            <span className="text-span">
                                ( You can upload US driver’s license (in or out-of-state)/US passport/Firearms
                                identification card/US Armed Forces identification Identification issued by a state agency
                                (e.g., Registry of Motor Vehicles)/Certificate of citizenship or naturalization as ID proof)
                            </span>
                        </div>
                        <div className="lender-profile-item">
                            <div></div>
                            <span className="text-span content-span">Type</span>
                            <select className="form-select select-type"></select>
                        </div>
                        <div className="upload-files-wrapper">
                            <div></div>
                            <span className="text-span content-span">Select Document</span>
                            <div className="upload-file">
                                <div className="file-upload-span">
                                    <label className="upload-label" for="upload">Choose</label>
                                    <input id="upload" type="file" />
                                </div>

                                <span></span>
                            </div>
                            <span></span>
                        </div>
                        {/* <div>
                            <hr className="section-division-line" />
                        </div> */}

                    </div>
                    {/* <div className="nominee-details-block" onClick={displayNomineeBlock}>
                            {!nomineeBlock ? <button className="add-section">
                                <span className="plus-icon-span">+</span>Add Another
                            </button> :  <button className="add-section">
                                <span className="plus-icon-span">+</span>Nominee block displayed
                            </button>
                            }
                        </div> */}
                </section>
            {/* </LenderProfile> */}
        </React.Fragment>
    );
}

export default ILenderDetails;