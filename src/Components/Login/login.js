import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import bridgingImg from '../../Asserts/bridging-Loan.png';
import InputField from '../FormFields/Input/formInput';
import Button from '../FormFields/Button/button';
import { auth } from '../../Firebase/fire';

import './login.css';

const Login = () => {

    const [viewPassword, setViewPassword] = useState(false);
    const [loginData, setLoginData] = useState({email:'', password:''});
    const [errorMsg, setErrorMsg] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasAccount, setHasAccount] =useState(false);
    const history = useHistory();


    const handleLogin = () => {
        // console.log("loginData-------", loginData)
        // if() {

        // }
        auth.signInWithEmailAndPassword(loginData.email, loginData.password).then((u)=> {
            console.log("logged in---", u);
            history.push("/create-profile")
        }).catch((error) => {
            console.log("error", error, error.code.indexOf('email'));
            if(error.code.indexOf('email') !== -1) {
                setErrorMsg("Please Enter a Vaild Email Address");
            } else if(!loginData.password) {
                setErrorMsg("Please Enter Password");
            } else {
                setErrorMsg(error.message);
            }

        })
    }

    const togglePasswordView = () => {
        setViewPassword(!viewPassword);
    }

    const handleUserData = (e) => {
        const { value, name } = e.target;
        setLoginData(prevState => ({...prevState, [name]: value}));
    }

    // const handleEmail = (e) => {
    //     const { value } = e.target;
    //     setEmail(value)
    // }

    // const handlePassword = (e) => {
    //     const { value } = e.target;
    //     setPassword(value)
    // }

    return (
        <React.Fragment>
            <div className="bridging-image-container">
                <img className="bridgingImg" src={bridgingImg}/>
            </div>
            <div className="loginForm">
                {errorMsg && <div className="errorBlock">
                    <span className="errorSpan">{errorMsg}</span>
                </div>}
                <h1>Login</h1>
                <p className="title-discription">Hello! Let's get started</p>
                <InputField
                    type="text"
                    label="Email"
                    name="email"
                    placeholder=""
                    onChange={handleUserData}
                    className={`${(errorMsg && errorMsg.indexOf('Email') !== -1) ? 'input-error' : ''}`}
                />
                <div className="password-wrapper">
                    <InputField
                        type={`${viewPassword ? "text" : "password"}`}
                        label="Password"
                        name="password"
                        placeholder=""
                        onChange={handleUserData}
                        className={`${(errorMsg && errorMsg.indexOf('Password') !== -1) ? 'input-error' : ''}`}
                    />
                    <span className="toggle-pwd-view" onClick={togglePasswordView}>View</span>
                </div>
                <InputField
                    type="checkbox"
                    name="password"
                    placeholder="password"
                />
                <span className="login-remainder-span">Remember me</span>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
                <div className="btn-grid">
                    <Button name="Login" className="button btn-primary" handleClick={handleLogin}></Button>
                </div>
                <div className="login-link">
                    <span>Don’t have an account? </span>
                    <Link to="/create-account">Create Account</Link>
                </div>
            </div>
            <footer></footer>
        </React.Fragment>
    )
}

export default Login;