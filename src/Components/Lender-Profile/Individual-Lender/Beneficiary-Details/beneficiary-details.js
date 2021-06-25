import React, { useState } from 'react';
import Button from '../../../FormFields/Button/button';
import InputField from '../../../FormFields/Input/formInput'
import './beneficiary-details.css';
import '../../lender-profile.css';



const IBeneficiaryDetails = () => {

    return (
        <React.Fragment>
                <section className="beneficiary-details-section">
                    <div className="beneficiary-details-block">
                        <div className="beneficiary-name-block">
                            <span className="input-label-span beneficiary-name-span">Full Legal Name*</span>
                            <InputField type="text" defaultValue="" name="firstname" placeholder="First" className="form-input firstname" />
                            <InputField type="text" defaultValue="" name="lastname" placeholder="Last"
                                className="form-input lastname"
                            />
                        </div>
                        <div className="dob-wrapper">
                            <span className="input-label-span dob-span">Date of Birth*</span>
                            <select className="form-select"></select>
                            <span className="char-span"> / </span>
                            <InputField type="text" defaultValue="" name="month" placeholder="Date"
                                className="form-input profile-input"
                            />
                            <span className="char-span"> / </span>
                            <InputField
                                type="text" defaultValue="" name="year"
                                placeholder="Year"
                                className="form-input profile-input"
                            />
                        </div>
                        <div className="beneficiary-id-block">
                            <span className="input-label-span ssn-span">SSN*</span>
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
                        <div className="beneficiary-Percenrage-block">
                            <span className="input-label-span percentage-span">Percenrage (%)*</span>
                            <InputField type="text" defaultValue="" name="percentage" placeholder=""
                                className="form-input profile-input input-percentage"
                            />
                        </div>
                        <div className="beneficiary-relationship-block">
                            <span className="input-label-span relationship-span">Relationship to member</span>
                            <InputField type="text" defaultValue="" name="relationship" placeholder=""
                                className="form-input profile-input input-relationship"
                            />
                        </div>  
                        <div className="text-wrapper">
                            <span className="input-label-span text-span">Upload Valid ID Proof</span>
                            <span className="text-span text-span">
                                ( You can upload US driver’s license (in or out-of-state)/US passport/Firearms
                                identification card/US Armed Forces identification Identification issued by a state agency
                                (e.g., Registry of Motor Vehicles)/Certificate of citizenship or naturalization as ID proof)
                            </span>
                        </div>
                        <div className="beneficiary-file-type">
                            <div></div>
                            <span className="text-span content-span">Type</span>
                            <select className="form-select"></select>
                        </div>
                        <div className="upload-files-wrapper">
                            <div></div>
                            <span className="text-span content-span">Select Document</span>
                            <div className="upload-file">
                                <div className="file-upload-span">
                                    <label className="upload-label" htmlFor="upload">Choose</label>
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
        </React.Fragment>
    );
}

export default IBeneficiaryDetails;