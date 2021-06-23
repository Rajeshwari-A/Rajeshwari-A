import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import ForgotPasswordContainer from './forgot-password-container';
// import bridgingImg from '../../Asserts/bridging-Loan.png';
import InputField from '../FormFields/Input/formInput';
import Button from '../FormFields/Button/button';
import './forgot-password.css';
import '../Login/login.css'

const VerifyCode_ForgotPassword = () => {
    const c1 = useRef();
    const c2 = useRef();
    const c3 = useRef();
    const c4 = useRef();
    // const currentCodeID = useState(1);
    const [isBtnDisabled, setBtnDisabled] = useState(true);


    const handleVerificationCode = (index) => {
        const inputs = document.querySelectorAll('#code > *[id]');
        index < 3 && inputs[index + 1].focus();
        // console.log("value--", inputs[index], inputs[index].value)
        if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }

    return (
        <React.Fragment>
            <ForgotPasswordContainer>
                <React.Fragment>
                    <h1>Verify Code</h1>
                    <p className="title-discription">Enter the verification code we just sent you on your email address</p>
                    <div className="verification-code-wrapper" id="code">
                        {
                            [c1, c2, c3, c4].map((val, index) => {
                                return (
                                    <InputField
                                        type="text"
                                        name=""
                                        placeholder=""
                                        className="form-input input-code"
                                        maxLength="1"
                                        ref={val}
                                        onChange={() => handleVerificationCode(index)}
                                        id={index}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="btn-grid">
                        <Button name="Reset Code" className={`button btn-primary btn-forgot-password ${isBtnDisabled ? 'btn-disabled' : ''}`}></Button>
                    </div>
                    <div className="login-link">
                        <span>Didn’t receive verification code? </span>
                        <Link to="/create-account">Resend again</Link>
                    </div>
                </React.Fragment>

            </ForgotPasswordContainer>
        </React.Fragment>
    )
}

export default VerifyCode_ForgotPassword;