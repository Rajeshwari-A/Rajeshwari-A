import React, { useState } from 'react';
import InputField from '../../FormFields/Input/formInput';
// import Button from '../../../FormFields/Button/button';
// import InputField from '../../../FormFields/Input/formInput';
// import {navlinksData} from '../../../Asserts/JSON-Data/lender-profile-menu-data.json'
import LenderDetails from './ILender-Details/lender-details';
import LenderProfile from '../lender-profile';
import '../lender-profile.css';
import './ILender-Details/lender-details';
import './lender-details-container.css'
import { LenderContext } from '../lender-profile'



const ILenderDetailsContainer = () => {
    console.log("LenderContext", LenderContext.lenderType)
    const [showNomineeBlock, setNomineeBlock] = useState(false);

    const displayNomineeBlock = () => {
        setNomineeBlock(true);
    }

    return (
        <React.Fragment>
            <LenderProfile displayBtn={true} btnEnable={false} navPageID={1}>
                <div className="profile-details-container">
                    <div className="profile-subheader-wrapper">
                        <h2 className="sub-header">Individual Details</h2>
                    </div>
                    <LenderDetails />
                    <div>
                        <hr className="section-division-line" />
                    </div>
                    {!showNomineeBlock ? <div className="nominee-details-block" onClick={displayNomineeBlock}>
                        <button className="add-section">
                            <span className="plus-icon-span">+</span>Add Another
                        </button>
                    </div>
                        :
                        <React.Fragment>
                            <LenderDetails />
                            <div className="relationship-block">
                                <span className="input-label-span text-span">Relationship to Primary Applicant</span>
                                <InputField type="text" defaultValue="" name="relationship" placeholder=""
                                    className="form-input profile-input relationship-input"
                                />
                            </div>
                        </React.Fragment>
                    }
                </div>
            </LenderProfile>
        </React.Fragment>
    );
}

export default ILenderDetailsContainer;