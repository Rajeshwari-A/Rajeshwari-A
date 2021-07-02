import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Lender-Profile/lender-profile.css';
import './Create-Account/create-account.css';
import { useHistory } from 'react-router';
import { auth } from '../../Firebase/fire';
import * as actions from "../../Redux/Actions/index";


// import checkCircle from '../../Asserts/Icon-check-circle.svg';
import Button from '../FormFields/Button/button';


const CreateAccountContainer = ({ children, navPageID, btnEnable, btnName, data}) => {
    // const data = localStorage.getItem("formData")
    // console.log("data----", data);
    
    const [accountData, setAccountData] = useState();
    const menuData = ["Create an Account", "Accept Terms and Conditions"];
    
    const history = useHistory();
    const dispatch = useDispatch();


    const handleAccountCreation = () => {
        console.log("data----", data)
        auth.createUserWithEmailAndPassword(data.accountData.email, data.accountData.password).then(() => {

        }).catch((error) => {
            console.log("error", error)
        })
        
    }


    const handleTabNavigation = (index) => {
        if(index === 0) {
            history.push('/create-account')

        } else {
            history.push('/create-account/tc')
        }
    }

    const handleNxtPageNavigation = () => {
  if(navPageID == 1){
    // saveAccountDetails()

    history.push('/create-account/tc')

  } else {
      handleAccountCreation()
  }
    }

    return (
        <React.Fragment>
            <div className="create-account-container">
                <ul className="create-account-menu">
                    {
                        Object.values(menuData).map((name, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <li className={`menu-item ${navPageID == `${index + 1}` ? "menu-item-active" : ""}`} onClick={() => handleTabNavigation(index)}><div className="profile-link"><p>{index + 1}</p><p className="class-dot">.</p>
                                    <p className={`menu-span-link ${navPageID == `${index + 1}` ? "" : "hide-link"}`}>{name}</p></div>
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
                    <Button className={`button btn-primary ${btnEnable ? '' : 'btn-disabled'}`} name={btnName} handleClick={handleNxtPageNavigation}></Button>
                    <i className="arrow right"></i>
                    <span className="disabled-btn-tooltip">Fill all the mandetory fields to enable the button</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateAccountContainer;