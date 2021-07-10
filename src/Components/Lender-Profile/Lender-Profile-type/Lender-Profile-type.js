import React, { useState} from 'react';
import { useHistory } from 'react-router';
import { History } from 'history';
import LenderProfile from '../lender-profile';
import avatarI from '../../../Asserts/Individual_Avatar.png';
import avatarG from '../../../Asserts/Group_Avatar.png';
import avatarI_Active from '../../../Asserts/‌Individual_Avatar_Active.png';
import avatarG_Active from '../../../Asserts/Group_Avatar_Active.png';
import '../lender-profile.css';
import './lender-profile-type.css'


const LenderProfileType = () => {

    const [isIndividualAvatarActive, setIndividualAvatarActive] = useState(false);
    const [isGroupAvatarActive, setGroupAvatarActive] = useState(false);
    const [lenderType, setLenderType] = useState("individual");
    const [lenderTypeData, setLenderTypeData] = useState({
        email : "rajeshwari.kanchamreddy@jmtworldwidellc.com",
        lenderType :  lenderType
    })
    const history = useHistory();

    const selectedLenderType = (type) => {
        setLenderType(type);
        localStorage.setItem("lenderType", type);
        if (type === "individual") {
            setIndividualAvatarActive(true);
            setGroupAvatarActive(false);
            return;
        }
        // else {
            setLenderTypeData((prevState) => ({...prevState, lenderType: "Entity"}))
            setIndividualAvatarActive(false);
            setGroupAvatarActive(true);
        // }
    }

    return (
        <React.Fragment>
            <LenderProfile displayBtn={isGroupAvatarActive || isIndividualAvatarActive} btnEnable={true} navPageID={0}
                lenderType={lenderType} data={lenderTypeData}>
                {/* <div className="data-wrapper"> */}
                <section className="lender-type-section">
                    <div className="subheader-text">I am a</div>
                    <div className="avatar-wrapper">
                        <div className={`avatar ${isIndividualAvatarActive ? "avatar-Active" : ""}`}  onClick={() => selectedLenderType('individual')}>
                            <p className={`lender-type-text ${isIndividualAvatarActive && "avatar-label_active"}`}>Individual</p>
                            <img src={`${isIndividualAvatarActive ? avatarI_Active : avatarI}`} className="avatar_i" alt="individual-icon" />
                        </div>
                        <div className={`avatar ${isGroupAvatarActive ? "avatar-Active" : ""}`}  onClick={() => selectedLenderType('Entity')}>
                            <p className={`lender-type-text ${isGroupAvatarActive ? "avatar-label_active" : ""}`} >Entity</p>
                            <img className="avatar_g" src={`${isGroupAvatarActive ? avatarG_Active : avatarG}`} alt="group-icon" />
                        </div>
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default LenderProfileType;