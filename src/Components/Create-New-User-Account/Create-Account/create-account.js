import React, { useEffect, useRef, useState } from 'react';
// import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import CreateAccountContainer from '../create-new-account-container';
import { validateEmail, PasswordMatch } from '../../../Utlis/utlis';
import InputField from '../../FormFields/Input/formInput';
// import Button from '../FormFields/Button/button';
import './create-account.css';
import * as actions from "../../../Redux/Actions/index"
// import '../Login/login.css'

const CreateAccount = () => {
    // console.log("actions", )
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAcknowledged: false
    });
    const [error, setError] = useState({ inValidEmail: false, noMatch: false });
    const [validFormData, setValidFormData] = useState(false)
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef();
    const dispatch = useDispatch();

    const { inValidEmail, noMatch } = error


    useEffect(() => {
        validateFormData();

    }, [formData, error])

    const handleNameChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleEmail = (e) => {
        const { name, value } = e.target;
        if (value) {
            setFormData(prevState => ({ ...prevState, [name]: value }));

            if (validateEmail(value)) {
                console.log("validated true")
                setError(prevState => ({ ...prevState, inValidEmail: false }))
            } else if (!validateEmail(value)) {
                console.log("validated false")

                setError(prevState => ({ ...prevState, inValidEmail: true }))
            }
        }
    }

    const handlePassword = (e) => {
        const { name, value } = e.target;
        if (value) {
            setFormData(prevState => ({ ...prevState, [name]: value }));
            if (passwordRef.current.value && confirmPasswordRef.current.value) {
                if (!PasswordMatch(passwordRef.current.value, confirmPasswordRef.current.value)) {
                    setError(prevState => ({ ...prevState, noMatch: false }))
                } else {
                    setError(prevState => ({ ...prevState, noMatch: true }))
                }
            }
        }
    }

    const handleCheckbox = () => {
        setFormData(prevState => ({ ...prevState, isAcknowledged: !formData.isAcknowledged }))
    }

    const validateFormData = () => {
        const { firstname, lastname, email, password, confirmPassword, isAcknowledged } = formData;
        console.log("called---", formData, error)
        if (firstname && lastname && email && password && confirmPassword &&
             isAcknowledged && !error.inValidEmail && !error.noMatch) {
            setValidFormData(true);
            console.log("saveAccountDetails", actions.saveAccountDetails, typeof actions.saveAccountDetails)
            // dispatch(actions.saveAccountDetails(formData))
            // localStorage.setItem("formData", formData);
            dispatch(actions.saveAccountDetails(formData))

        } else { setValidFormData(false); }
    }

    return (
        <React.Fragment>
            <CreateAccountContainer navPageID={1} btnEnable={validFormData} btnName="Next" data={formData}>
                <section className="user-details-wrapper">
                    <div className="name-block">
                        <span className="input-label-span">Your Name*</span>
                        <InputField type="text" defaultValue="" name="firstname" placeholder="First"
                            className="profile-input" onChange={handleNameChange}
                        />
                        <InputField type="text" defaultValue="" name="lastname" placeholder="Last"
                            className="form-input profile-input" onChange={handleNameChange}
                        />
                    </div>
                    <div className="data-block email-block">
                        <span className="input-label-span">Email*</span>
                        <InputField type="text" defaultValue="" name="email" placeholder="Email"
                            className="profile-input" onChange={handleEmail}
                        />
                        {inValidEmail && <span className="error-span">Please Enter a Vaild Email Address</span>}
                    </div>

                    <div className="data-block password-block">
                        <span className="input-label-span">Password*</span>
                        <input type="password" defaultValue="" name="password" ref={passwordRef} placeholder="Password"
                            className="form-input profile-input" onChange={handlePassword}
                        />
                    </div>

                    <div className="data-block confirm-password-block">
                        <span className="input-label-span">Confirm Password*</span>
                        <input type="password" defaultValue="" name="confirmPassword" placeholder=""
                            className="form-input profile-input" onChange={handlePassword} ref={confirmPasswordRef}
                        />
                        {noMatch && <span className="error-span">Your password must match with confirm password</span>}
                    </div>

                    <div className="acknowledgement-block">
                        <InputField type="checkbox" className="acknowledgement-checkbox" onChange={handleCheckbox} />
                        <span className="input-label-span acknowledgement-span">
                            I acknowledge that I have read, understand, and agree to the Terms and conditions as defined
                        </span>
                    </div>
                </section>
            </CreateAccountContainer>
        </React.Fragment>
    )
}

export default CreateAccount;