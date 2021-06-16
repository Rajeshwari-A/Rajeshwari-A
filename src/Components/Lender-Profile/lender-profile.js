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
                    <li className="menu-item"><Link className="profile-link">1.<span className="menu-span-link">Profile Details</span></Link></li>
                    <li className="menu-item"><Link className="profile-link">2.<span className="menu-span-link">Residence Details</span></Link></li>
                    <li className="menu-item"><Link className="profile-link">3.<span className="menu-span-link">Contact Details</span></Link></li>
                    <li className="menu-item"><Link className="profile-link">4.<span className="menu-span-link">Beneficiary Details</span></Link></li>
                    <li className="menu-item"><Link className="profile-link">5.<span className="menu-span-link">Account Details</span></Link></li>
                    <li className="menu-item"><Link className="profile-link">6.<span className="menu-span-link">Add Comments</span></Link></li>
                    <li className="menu-item"><Link className="profile-link">7.<span className="menu-span-link">Review Profile</span></Link></li>
                    <li className="menu-item"><Link className="profile-link">8.<span className="menu-span-link">Sign and Submit Profile</span></Link></li>
                </ul>
                <h2 className="profile-header">Create your Lender Profile</h2>
                <section className="section-details">
                    {/* <div className="data-wrapper content-block"> */}
                        {children}
                        { btnEnable && 
                            <div className="next-btn-wrapper">
                                <Button className="button btn-primary btn-next" name="Next"></Button>
                                <i class="arrow right"></i>
                            </div>
                        }
                    {/* </div> */}
                </section>
            </div>

        </React.Fragment>
    );
}

export default LenderProfile;