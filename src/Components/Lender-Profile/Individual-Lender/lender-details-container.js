import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import localforage from 'localforage';
import InputField from '../../FormFields/Input/formInput';
// import Button from '../../../FormFields/Button/button';
// import InputField from '../../../FormFields/Input/formInput';
// import {navlinksData} from '../../../Asserts/JSON-Data/lender-profile-menu-data.json'
import LenderDetails from './ILender-Details/lender-details';
import LenderProfile from '../lender-profile';
import '../lender-profile.css';
import './ILender-Details/lender-details';
import './lender-details-container.css'
import { LenderContext } from '../lender-profile'



const ILenderDetailsContainer = () => {
    const [showNomineeBlock, setNomineeBlock] = useState(false);
    const [enableNxtBtn, setEnableNxtBtn] = useState(false);
    const [relation, setRelation] = useState();
    const [lenderData, setLenderData] = useState();

    const data = useSelector((state) => state.lenderData);
//   const billingData = useSelector((state) => state.getBillingData);
    // const testStorage =  localforage.getItem('lenderOneData');


    const displayNomineeBlock = (e) => {
        e.preventDefault();
        setNomineeBlock(true);
    }

   const handleLenderRelation = (e) => {
       const {value} = e.target;
        setRelation(value)
    }

    useEffect(() => {
        if ((!showNomineeBlock && data.primary_details && !data.joint_details) ||
            showNomineeBlock && data.primary_details && data.joint_details && relation) {
            setEnableNxtBtn(true)
        } else { setEnableNxtBtn(false) }

        setLenderData((prevState) => ({...prevState, lenderData: {LenderType:"Individual", primary_details: data.primary_details, joint_details: data.joint_details  }  }))

    }, [data, showNomineeBlock, relation])

    return (
        <React.Fragment>
            <LenderProfile displayBtn={true} btnEnable={enableNxtBtn} navPageID={1} data={enableNxtBtn ? lenderData : ""}>
                <div className="profile-details-container">
                    <div className="profile-subheader-wrapper">
                        <h2 className="sub-header">Individual Details</h2>
                    </div>
                    <LenderDetails lenderID={1} />
                    <div>
                        <hr className="section-division-line" />
                    </div>
                    {!showNomineeBlock ? <div className="nominee-details-block" onClick={displayNomineeBlock}>
                        <button className="add-section">
                            <span className="plus-icon-span">+</span>Add Another
                        </button>
                    </div>
                        :
                        <React.Fragment>
                            <LenderDetails lenderID={2} />
                            <div className="relationship-block">
                                <span className="input-label-span text-span">Relationship to Primary Applicant</span>
                                <InputField type="text" defaultValue="" name="relationship" placeholder=""
                                    className="form-input profile-input relationship-input" onChange={handleLenderRelation}
                                />
                            </div>
                        </React.Fragment>
                    }
                </div>
            </LenderProfile>
        </React.Fragment>
    );
}

export default ILenderDetailsContainer;