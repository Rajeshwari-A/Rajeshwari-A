import React, { useState } from 'react';
import BeneficiaryDetails from './beneficiary-details';
import LenderProfile from '../../lender-profile';
import '../../lender-profile.css';
// import './ILender-Details/lender-details';
import '../../lender-profile.css';
import './beneficiary-details.css'



const IBeneficiaryDetailsContainer = () => {
    const [showNomineeBlock, setNomineeBlock] = useState(false);

    const displayNomineeBlock = () => {
        setNomineeBlock(true);
    }

    return (
        <React.Fragment>
            <LenderProfile btnEnable={false} displayBtn={true} nxtNavPageID={4}>
                <div className="beneficiary-details-container">
                    <div className="container-subheader-wrapper">
                        <h2 className="sub-header">Beneficiary Details</h2>
                    </div>
                    <BeneficiaryDetails />

                    {/* <div className="nominee-details-block" >
                        <button className="add-section">
                            <span className="plus-icon-span">+</span>Add Another
                        </button>
                    </div> */}
                    <div>
                        <hr className="section-division-line" />
                    </div>
                    {!showNomineeBlock ? <div className="nominee-details-block" onClick={displayNomineeBlock}>
                        <button className="add-section">
                            <span className="plus-icon-span">+</span>Add Another
                        </button>
                    </div>
                        :
                        <BeneficiaryDetails />}
                </div>
            </LenderProfile>
        </React.Fragment>
    );
}

export default IBeneficiaryDetailsContainer;