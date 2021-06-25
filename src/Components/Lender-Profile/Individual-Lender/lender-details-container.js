import React, { useState } from 'react';
// import Button from '../../../FormFields/Button/button';
// import InputField from '../../../FormFields/Input/formInput';
import {navlinksData} from '../../../Asserts/JSON-Data/lender-profile-menu-data.json'
import LenderDetails from './ILender-Details/lender-details';
import LenderProfile from '../lender-profile';
import '../lender-profile.css';
import './ILender-Details/lender-details';
import './lender-details-container.css'



const ILenderDetailsContainer = () => {
    const [showNomineeBlock, setNomineeBlock] = useState(false);

    const displayNomineeBlock = () => {
        setNomineeBlock(true);
    }

    return (
        <React.Fragment>
            <LenderProfile displayBtn={true} btnEnable={false} nxtNavPageID={1}>
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

                    <LenderDetails />}
                </div>
            </LenderProfile>
        </React.Fragment>
    );
}

export default ILenderDetailsContainer;