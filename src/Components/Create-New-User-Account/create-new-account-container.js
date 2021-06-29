import React, { useState } from 'react';
import '../Lender-Profile/lender-profile.css';
import './Create-Account/create-account.css';

// import checkCircle from '../../Asserts/Icon-check-circle.svg';
import Button from '../FormFields/Button/button';


const CreateAccountContainer = ({ children, type}) => {
    console.log("children", children, type);
    const menuData = ["Create an Account", "Accept Terms and Conditions"];
    const [btnEnable, setBtnEnable] = useState(false);

    return (
        <React.Fragment>
            <div className="create-account-container">
                <ul className="create-account-menu">
                    {
                        Object.values(menuData).map((name, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <li className="menu-item" ><div className="profile-link"><p>{index + 1}</p><p className="class-dot">.</p><p className="menu-span-link">{name}</p></div>
                                        {/* {isDataEntered && <img src={checkCircle} alt="checkCircle" className="checkCircle" />} */}
                                    </li>
                                    <p className="line-link line-link-large"></p>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
                <h2 className="create-account-header">Create an Account</h2>
                <section className="account-details-container">
                   {children}
                </section>
                <div className="create-account-btn-wrapper btn-toolti">
                    <Button className={`button btn-primary ${btnEnable ? '' : 'btn-disabled'}`} name="Create Account"></Button>
                    <i className="arrow right"></i>
                    <span className="disabled-btn-tooltip">Fill all the mandetory fields to enable the button</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateAccountContainer;