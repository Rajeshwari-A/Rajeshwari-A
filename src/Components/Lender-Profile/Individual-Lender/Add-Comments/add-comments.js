import React, { useState } from 'react';
import LenderProfile from '../../lender-profile';
// import './lender-account-details.css';
import '../../lender-profile.css';
import './add-comments.css';


import InputField from '../../../FormFields/Input/formInput';


const IAddComments = () => {

    return (
        <React.Fragment>
            <LenderProfile btnEnable={false} displayBtn={true} nxtNavPageID={6}>
                <section className="add-comments-section">
                    <h2 className="add-comments-subheader">Add Comments/Instructions</h2>
                    <div className="add-comments-wrapper">
                        <div className="comments-block"></div>
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default IAddComments;