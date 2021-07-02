import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
import CreateAccountContainer from '../create-new-account-container';
import DownArrow from '../../../Asserts/Icon-arrow-down.svg';
import InputField from '../../FormFields/Input/formInput';
// import Button from '../FormFields/Button/button';
import './terms-and-conditions.css';
// import '../Login/login.css'

const TersmAndConditions = () => {
    const savedAccountData = useSelector((state) =>  state.createAccount);
    console.log("------accountData --- ",savedAccountData)
    return (
        <React.Fragment>
            <CreateAccountContainer navPageID={2} btnName="Create Account" btnEnable={true} data={savedAccountData}>
                <section className="tAndc-wrapper">
                    <div className="intro-block">
                        <h2 className="tc-sub-header">Introduction</h2>
                        <span className="text-content-span">
                            Welcome to example (“Company”, “we”, “our”, “us”)! These Terms of Service
                            (“Terms”, “Terms of Service”) govern your use of our website located at example.com (together or individually
                            “Service”) operated by example. Our Privacy Policy also governs your use of our Service and explains how we
                            collect, safeguard and disclose information that results from your use of our web pages. Your agreement with
                            us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood
                            Agreements, and agree to be bound of them. If you do not agree with (or cannot comply with) Agreements, then you
                            may not use the Service, but please let us know by emailing at support@example.com so we can try to find a
                            solution. These Terms apply to all visitors, users and others who wish to access or use Service.
                        </span>
                    </div>
                    <div className="communications-block">
                        <h2 className="tc-sub-header">Communications</h2>
                        <span className="text-content-span">
                            By using our Service, you agree to subscribe to newsletters, marketing or promotional
                            materials and other information we may send. However, you may opt out of receiving any,
                            or all, of these communications from us by following the unsubscribe link or by emailing at
                            support@example.com. 3. Contests, Sweepstakes and Promotions Any contests,
                            sweepstakes or other promotions (collectively, “Promotions”) made available through Service may be governed
                            by rules that are separate from these Terms of Service. If you participate in any Promotions, please review
                            the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of
                            Service, Promotion rules will apply.
                        </span>
                        <span className="text-content-span span-block-imp">
                            AND WHEREAS the parties hereto are desirous of recording the terms and conditions of this loan in writing;
                        </span>
                        <span className="text-content-span span-block-imp">
                            NOW THIS AGREEMENT WITNESSETH and it is hereby agreed by and between the parties hereto as under:-
                        </span>
                        <div className="initials-block">
                            <div className="initials-sub-block">
                                <span className="text-content-span">
                                    1. The Borrower hereto, being in need of money, has requested the Lender to give her an interest-free loan of
                                    $.___________/- (Dollar _________________________ only) to enable her to purchase a residential flat, to which the
                                    Lender has agreed. </span>
                                <div className="initials-content-wrapper">
                                    <div className="initials-download-block">
                                        <img class="initials-icon" src={DownArrow} alt="initials" />
                                        <span className="text-content-span span-bold">initials</span>
                                    </div>
                                    <div className="date-block">
                                        <span className="text-content-span date-span">05/17/2021</span>
                                        <span className="text-content-span span-bold">Date</span>
                                    </div>

                                </div>
                            </div>
                            <div className="initials-sub-block">
                                <span className="text-content-span span-block-imp">
                                    2. The said loan is required by the Borrower for a period of ____ years, commencing from __/__/1999 and
                                    terminating on __/__/_____.
                                </span>
                                <div className="initials-content-wrapper">
                                    <div className="initials-download-block">
                                        <img class="initials-icon" src={DownArrow} alt="initials" />
                                        <span className="text-content-span span-bold">initials</span>
                                    </div>
                                    <div className="date-block">
                                        <span className="text-content-span date-span">05/17/2021</span>
                                        <span className="text-content-span span-bold">Date</span>
                                    </div>

                                </div>
                            </div>
                            <div className="initials-sub-block">
                                <span className="text-content-span span-block-imp">
                                    3. The Borrower hereby agrees and undertakes to return the loan of $.___________/-
                                    (Dollar ______________________ only), in installments, within the aforesaid period of ____ years and gives her
                                    personal guarantee for the same.
                                </span>
                                <div className="initials-content-wrapper">
                                    <div className="initials-download-block">
                                        <img class="initials-icon" src={DownArrow} alt="initials" />
                                        <span className="text-content-span span-bold">initials</span>
                                    </div>
                                    <div className="date-block">
                                        <span className="text-content-span date-span">05/17/2021</span>
                                        <span className="text-content-span span-bold">Date</span>
                                    </div>

                                </div>
                            </div>
                            <div className="initials-sub-block">
                                <span className="text-content-span span-block-imp">
                                    4. The terms and conditions of this Agreement are arrived at by the mutual consent of
                                    the parties hereto.
                                </span>
                                <div className="initials-content-wrapper">
                                    <div className="initials-download-block">
                                        <img class="initials-icon" src={DownArrow} alt="initials" />
                                        <span className="text-content-span span-bold">initials</span>
                                    </div>
                                    <div className="date-block">
                                        <span className="text-content-span date-span">05/17/2021</span>
                                        <span className="text-content-span span-bold">Date</span>
                                    </div>

                                </div>
                            </div>
                            <span className="text-content-span">
                                IN WITNESS WHEREOF the parties hereto have hereunto set and subscribed their respective hands the day
                                and year first hereinabove written.
                            </span>
                            <div className="acknowledge-block">
                                <p className="text-content-span">
                                    No waiver by Company of any term or condition set forth in Terms shall be deemed a further or
                                    continuing waiver of such term or condition or a waiver of any other term or condition, and any
                                    failure of Company to assert a right or provision under Terms shall not constitute a waiver of such
                                    right or provision.
                                </p>
                                <p className="text-content-span">
                                    4. The terms and conditions of this Agreement are arrived at by the mutual
                                    consent of the parties hereto.
                                </p>
                                <div className="acknowledge-inputs-wrapper">
                                    <div className="input-action-block">
                                        <InputField type="checkbox" />
                                        <span className="text-content-span">
                                            I have read and accept to Terms and conditions and privacy agreement provided to me
                                        </span>
                                    </div>
                                    <div className="input-action-block">
                                        <InputField type="checkbox" />
                                        <span className="text-content-span">
                                            I acknowledge that the information I have submitted is true to my knowledge and I will be held
                                            responsible for any discrepancy or information found altered
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="attestation-block">
                        <div className="attestation-sub-block">
                        <InputField className="attestation-input"/>
                        <span className="text-content-span span-bold">Signature</span>
                        </div>
                        <div className="attestation-sub-block">
                        <InputField className="attestation-input"/>
                        <span className="text-content-span span-bold">Date</span>
                        </div>
                    </div>
                </section>
            </CreateAccountContainer>
        </React.Fragment>
    )
}

export default TersmAndConditions;