import React from 'react';
import { Link } from "react-router-dom";
import './lender-profile.css';
import LenderProfileType from '../Lender-Profile/Lender-Profile-type/Lender-Profile-type';
import Button from '../FormFields/Button/button';


const LenderProfile = ({ children, btnEnable }) => {
    return (
        <React.Fragment>
            <div className="lender-profile">
                <ul className="lender-profile-menu">
                    <li className="menu-item"><Link className="profile-link">1. Profile Details</Link></li>
                    <li className="menu-item"><Link className="profile-link">2. Residence Details</Link></li>
                    <li className="menu-item"><Link className="profile-link">3. Contact Details</Link></li>
                    <li className="menu-item"><Link className="profile-link">4. Beneficiary Details</Link></li>
                    <li className="menu-item"><Link className="profile-link">5. Account Details</Link></li>
                    <li className="menu-item"><Link className="profile-link">6. Add Comments</Link></li>
                    <li className="menu-item"><Link className="profile-link">7. Review Profile</Link></li>
                    <li className="menu-item"><Link className="profile-link">8. Sign and Submit Profile</Link></li>
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