import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LenderProfile from '../../lender-profile';
import './lender-account-details.css';
import '../../lender-profile.css';

import InputField from '../../../FormFields/Input/formInput';


const ILenderAccountDetails = () => {

    const [hasChaseAccount, setHasChaseAccount] = useState(false);
    const [nxtBtn, setNxtBtn] = useState(false);
    const [chaseAccountDetails, setChaseAccountDetails] = useState({
        bank: "",
        accountName: "",
        routingNumber: null,
        accountType: "",
        accountNumber: null
    });

    const handleChaseAccount = (e) => {
        const { name, value } = e.target;
        const hasAccount = value === "yes" ? true : false;
        console.log("name-------", name, value)
        setHasChaseAccount(hasAccount);
        setNxtBtn(!hasAccount);
        if (!hasAccount) {
            setChaseAccountDetails({
                bank: "",
                accountName: "",
                routingNumber: null,
                accountType: "",
                accountNumber: null
            })
        }
    }

    const handleChaseAccountDetails = (e) => {
        const { name, value } = e.target;
        console.log("value--", value, "----", name)
        setChaseAccountDetails((prevState) => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        validateChaseAccountDetails();
        console.log("called--")
    }, [chaseAccountDetails])

    const validateChaseAccountDetails = () => {
        const { bank, accountName, routingNumber, accountType, accountNumber } = chaseAccountDetails;
        if (hasChaseAccount) {
            if (bank && accountName && routingNumber && accountType && accountNumber) {
                setNxtBtn(true);

            }
            else {
                setNxtBtn(false);
            }
        }
    }

    return (
        <React.Fragment>
            <LenderProfile btnEnable={false} displayBtn={true} navPageID={5} btnEnable={nxtBtn} data={chaseAccountDetails}>
                <section className="account-details-section">
                    <h2 className="account-details-subheader">Account Details</h2>
                    <div className="account-details-wrapper">
                        <div className="account-block">
                            <span className="input-label-span input-text-span">Do you have a Chase/Wells-Fargo Account?</span>
                            <InputField type="radio" name="chase-account" id="yes" value="yes" className="profile-input input-radio-1" onChange={handleChaseAccount} />
                            <span className="radio-span radio-span-1" >Yes</span>
                            <InputField type="radio" name="chase-account" id="no" value="no" className="profile-input input-radio-2" onChange={handleChaseAccount} />
                            <span className="radio-span radio-span-2" >NO</span>

                            {/* <span className="radio-span radio-span-2" htmlFor="radio_no">No</span> */}
                        </div>
                        <div className={`wells-fargo-details-block ${hasChaseAccount ? "" : "hide-wells-fargo-block"}`}>
                            <p className="table-sub-header">Fill in all the required fields</p>
                            <div className="wells-fargo-wrapper">
                                <div className="bank-type">
                                    <span className="input-label-span accounts-span">Select your bank</span>
                                    <select className="form-select lender-account-select" defaultValue="Select" onChange={handleChaseAccountDetails} name="bank">
                                        <option value="Select" disabled>Select</option>
                                        <option value="Chase">Chase</option>
                                        <option value="Wells Fargo">Wells Fargo</option>
                                    </select>
                                </div>
                                <div className="account-holder-details">
                                    <span className="input-label-span accounts-span">Account name*</span>
                                    <InputField type="text" defaultValue="" name="accountName" placeholder=""
                                        className="form-input profile-input account-name" id="account-name"
                                        onChange={handleChaseAccountDetails}
                                    />
                                    <span className="input-label-span accounts-span right-align">Account number*</span>
                                    <InputField type="number" defaultValue="" name="accountNumber" placeholder=""
                                        className="form-input profile-input account-number" id="account-no"
                                        onChange={handleChaseAccountDetails}
                                    />
                                </div>
                                <div className="account-type-details">
                                    <span className="input-label-span accounts-span">Account Type*</span>
                                    <select className="form-select lender-account-select" defaultValue="Select" onChange={handleChaseAccountDetails} name="accountType">
                                        <option value="Select" disabled>Select</option>
                                        <option value="Savings">Savings</option>
                                        <option value="Checking">Checking</option>
                                    </select>
                                    <span className="input-label-span routing-number-span right-align">Routing Number*</span>
                                    <InputField type="number" defaultValue="" name="routingNumber" placeholder=""
                                        className="profile-input routing-input" id="routing-num" onChange={handleChaseAccountDetails}
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