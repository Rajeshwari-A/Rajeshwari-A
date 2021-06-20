import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import './lender-profile.css';
import { menuData, navlinksData } from "../../Asserts/JSON-Data/lender-profile-menu-data.json";
import LenderProfileType from './Lender-Profile-type/lender-profile-type';
import Button from '../FormFields/Button/button';


const LenderProfile = ({ children, btnEnable }) => {
    // console.log("menuData", menuData);
    const history = useHistory();
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabNavigation = (index) => {
        console.log("index", index);
        let navPath = "/create-profile" + "/" + navlinksData[index]
        history.push(`${navPath}`)
        setCurrentTab(index);
        
    }

    return (
        <React.Fragment>
            <div className="lender-profile">
                <ul className="lender-profile-menu">
                    {
                        Object.values(menuData).map((name, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <li className="menu-item" onClick={() => handleTabNavigation(index + 1)} ><div className="profile-link"><p>{index + 1}</p><p className="class-dot">.</p><p className="menu-span-link">{name}</p></div></li>
                                    <p className="line-link"></p>
                                </React.Fragment>
                            )
                        })
                    }
                    {/* <li className="menu-item menu-item-active"><Link className="profile-link active-link"><p>1</p><p className="class-dot">.</p><p className="menu-span-link active-link">Profile Details</p></Link></li>
                    <p className="line-link"></p>
                    <li className="menu-item"><Link to="create-profile/lender-details" className="profile-link"><p>2</p><p className="class-dot">.</p><p className="menu-span-link">Residence Details</p></Link></li>
                    <p className="line-link"></p>

                    <li className="menu-item"><Link className="profile-link"><p>3</p><p className="class-dot">.</p><p className="menu-span-link">Contact Details</p></Link></li>
                    <p className="line-link"></p>
                    <li className="menu-item"><Link className="profile-link"><p>4</p><p className="class-dot">.</p><p className="menu-span-link">Beneficiary Details</p></Link></li>
                    <p className="line-link"></p>
                    <li className="menu-item"><Link className="profile-link"><p>5</p><p className="class-dot">.</p><p className="menu-span-link">Account Details</p></Link></li>
                    <p className="line-link"></p>
                    <li className="menu-item"><Link className="profile-link"><p>6</p><p className="class-dot">.</p><p className="menu-span-link">Add Comments</p></Link></li>
                    <p className="line-link"></p>
                    <li className="menu-item"><Link className="profile-link"><p>7</p><p className="class-dot">.</p><p className="menu-span-link">Review Profile</p></Link></li>
                    <p className="line-link"></p>
                    <li className="menu-item"><Link className="profile-link"><p>8</p><p className="class-dot">.</p><p className="menu-span-link">Sign and Submit Profile</p></Link></li> */}
                </ul>
                <h2 className="profile-header">Create your Lender Profile</h2>
                <section className="section-details">
                    {/* <div className="data-wrapper content-block"> */}
                    {children}
                    {/* { btnEnable &&  */}
                    <div className={`next-btn-wrapper ${btnEnable ? '' : 'btn-hidden'}`} >
                        <Button className="button btn-primary btn-next" name="Next"></Button>
                        <i className="arrow right"></i>
                    </div>
                    {/* } */}
                    {/* </div> */}
                </section>
            </div>

        </React.Fragment>
    );
}

export default LenderProfile;