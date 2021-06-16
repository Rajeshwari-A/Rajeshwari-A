import React from 'react';
import { Link } from "react-router-dom";
import './lender-profile.css';
import LenderProfileType from './Lender-Profile-type/lender-profile-type';
import Button from '../FormFields/Button/button';


const LenderProfile = ({ children, btnEnable }) => {
    return (
        <React.Fragment>
            <div className="lender-profile">
                <ul className="lender-profile-menu">
                    <li className="menu-item"><Link className="profile-link"><p>1</p><p className="class-dot">.</p><p className="menu-span-link">Profile Details</p></Link></li>
                    <li className="menu-item"><Link className="profile-link"><p>2</p><p className="class-dot">.</p><p className="menu-span-link">Residence Details</p></Link></li>
                    <li className="menu-item"><Link className="profile-link"><p>3</p><p className="class-dot">.</p><p className="menu-span-link">Contact Details</p></Link></li>
                    <li className="menu-item"><Link className="profile-link"><p>4</p><p className="class-dot">.</p><p className="menu-span-link">Beneficiary Details</p></Link></li>
                    <li className="menu-item"><Link className="profile-link"><p>5</p><p className="class-dot">.</p><p className="menu-span-link">Account Details</p></Link></li>
                    <li className="menu-item"><Link className="profile-link"><p>6</p><p className="class-dot">.</p><p className="menu-span-link">Add Comments</p></Link></li>
                    <li className="menu-item"><Link className="profile-link"><p>7</p><p className="class-dot">.</p><p className="menu-span-link">Review Profile</p></Link></li>
                    <li className="menu-item"><Link className="profile-link"><p>8</p><p className="class-dot">.</p><p className="menu-span-link">Sign and Submit Profile</p></Link></li>
                </ul>
                <h2 className="profile-header">Create your Lender Profile</h2>
                <section className="section-details">
                    {/* <div className="data-wrapper content-block"> */}
                        {children}
                        {/* { btnEnable &&  */}
                            <div className={`next-btn-wrapper ${btnEnable ? '' : 'btn-hidden'}`} >
                            <Button className="button btn-primary btn-next" name="Next"></Button>
                                <i class="arrow right"></i>
                            </div>
                        {/* } */}
                    {/* </div> */}
                </section>
            </div>

        </React.Fragment>
    );
}

export default LenderProfile;