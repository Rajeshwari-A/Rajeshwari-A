import React, { useState } from 'react';
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

    const selectLenderType = (lenderType) => {
        console.log("lenderType", lenderType)
        if (lenderType === "i") {
            setIndividualAvatarActive(true);
            setGroupAvatarActive(false);
            return;
        }
        // else {
            setIndividualAvatarActive(false);
            setGroupAvatarActive(true);
        // }
    }

    return (
        <React.Fragment>
            <LenderProfile btnEnable={isGroupAvatarActive || isIndividualAvatarActive}>
                {/* <div className="data-wrapper"> */}
                <section className="lender-type-section">
                    <div className="subheader-text">I am a</div>
                    <div className="avatar-wrapper">
                        <div className={`avatar ${isIndividualAvatarActive ? "avatar-Active" : ""}`}  onClick={() => selectLenderType('i')}>
                            <p className={`lender-type-text ${isIndividualAvatarActive && "avatar-label_active"}`}>Individual</p>
                            <img src={`${isIndividualAvatarActive ? avatarI_Active : avatarI}`} className="avatar_i" alt="individual-icon" />
                        </div>
                        <div className="avatar" onClick={() => selectLenderType('g')}>
                            <p className={`lender-type-text ${isGroupAvatarActive ? "avatar-label_active" : ""}`} >Entity</p>
                            <img className="avatar_g" src={`${isGroupAvatarActive ? avatarI_Active : avatarG}`} alt="group-icon" />
                        </div>
                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default LenderProfileType;