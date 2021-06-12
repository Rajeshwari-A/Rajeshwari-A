import React, { useState } from 'react';
import LenderProfile from '../../lender-profile';
import './lender-residence-details.css';
import InputField from '../../../FormFields/Input/formInput';


const LenderResidenceDetails = () => {

    return (
        <React.Fragment>
            <LenderProfile btnEnable={true}>
                <section className="residence-details-wrapper">
                    <h2 className="residence-details-subheader">Residence Details</h2>
                    <div className="address-block address-line-1">
                        <span className="input-label-span">Address Line 1*</span>
                        <InputField type="text" value="" name="month" placeholder=""
                            className="form-input profile-input"
                        />
                    </div>
                    <div className="address-block address-line-2">
                        <span className="input-label-span residence-details-span">Address Line 2</span>
                        <InputField type="text" value="" name="month" placeholder=""
                            className="form-input profile-input"
                        />
                    </div>
                    <div className="address-block city-block">
                        <span className="input-label-span residence-details-span">City*</span>
                        <InputField type="text" value="" name="month" placeholder=""
                            className="form-input profile-input"
                        />
                    </div>
                    <div className="address-block state-block">
                        <span className="input-label-span residence-details-span">State/Province*</span>
                        <InputField type="text" value="" name="month" placeholder=""
                            className="form-input profile-input"
                        />
                    </div>
                    <div className="postal-address-block">
                        <span className="input-label-span residence-details-span">Zip/Postal code*</span>
                        <InputField type="text" value="" name="month" placeholder=""
                            className="form-input profile-input"
                        />
                        <div></div>
                        <span className="input-label-span residence-details-span">Country*</span>
                        <InputField type="text" value="" name="month" placeholder=""
                            className="form-input profile-input"
                        />
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default LenderResidenceDetails;