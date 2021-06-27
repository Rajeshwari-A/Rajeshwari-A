import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import './lender-profile.css';
import checkCircle from '../../Asserts/Icon-check-circle.svg';
import { menuData, navlinksData } from "../../Asserts/JSON-Data/lender-profile-menu-data.json";
import LenderProfileType from './Lender-Profile-type/lender-Profile-type';
import Button from '../FormFields/Button/button';


const LenderProfile = ({ children, displayBtn, btnEnable, nxtNavPageID }) => {
    console.log("menuData", btnEnable);
    const history = useHistory();
    const [currentTab, setCurrentTab] = useState(0);
    const [currentPageID, setCurrentPageID] = useState();
    const [isDataEntered, setDataEntered] = useState(false)

    const handleTabNavigation = (index) => {
        console.log("index", index, nxtNavPageID);
        let navPath = "/create-profile" + "/" + navlinksData[`${index + 1}`]
        history.push(`${navPath}`)
        // setCurrentTab(index);
    }

    const handleNxtPageNavigation = () => {
        switch (nxtNavPageID) {
            case 0:
                history.push('/create-profile/lender-details');
                break;
            case 1:
                history.push('/create-profile/residence-details');
                break;
            case 2:
                history.push('/create-profile/contact-details');
                break;
            case 3:
                history.push('/create-profile/beneficiary-details');
                break;
            case 4:
                history.push('/create-profile/account-details');
                break;
            case 5:
                history.push('/create-profile/add-comments');
                break;

            default:
                history.push('/create-profile/add-comments');
                break;

            // case 7 :
            // return '/create-profile/lender-details'
            // case 8 :
            // return '/create-profile/lender-details'
        }
        // setCurrentPageID(nxtNavPageID - 1)

    }

    return (
        <React.Fragment>
            <div className="lender-profile">
                <ul className="lender-profile-menu">
                    {
                        Object.values(menuData).map((name, index) => {
                            console.log("inde------", typeof index, index, typeof nxtNavPageID, nxtNavPageID);
                            return (
                                <React.Fragment key={index}>
                                    <li className={`menu-item ${nxtNavPageID == `${index + 1}` ? "menu-item-active" : ""}`} onClick={() => handleTabNavigation(index)} ><div className="profile-link"><p>{index + 1}</p><p className="class-dot">.</p><p className={`menu-span-link ${nxtNavPageID == `${index + 1}` ? "" : "hide-link"}`}>{name}</p></div>
                                        {isDataEntered && <img src={checkCircle} alt="checkCircle" className="checkCircle" />}
                                    </li>
                                    <p className="line-link"></p>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
                <h2 className="profile-header">Create your Lender Profile</h2>
                <section className="section-details">
                    {children}
                    <div className={`next-btn-wrapper ${displayBtn === false ? 'btn-hidden' : ''}`} >
                        <Button className={`button btn-primary btn-next ${btnEnable ? '' : 'btn-disabled'}`} name="Next" handleClick={handleNxtPageNavigation}></Button>
                        <i className="arrow right"></i>
                    </div>
                </section>
            </div>      </React.Fragment>
    );
}

export default LenderProfile;