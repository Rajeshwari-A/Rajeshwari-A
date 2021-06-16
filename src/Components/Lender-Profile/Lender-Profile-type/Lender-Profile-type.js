import React, { useState } from 'react';
import LenderProfile from '../lender-profile';
import avatarI from '../../../Asserts/Individual_Avatar.png';
import avatarG from '../../../Asserts/Group_Avatar.png';
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
        else {
            setIndividualAvatarActive(false);
            setGroupAvatarActive(true);
        }
    }

    return (
        <React.Fragment>
            <LenderProfile btnEnable={isGroupAvatarActive || isIndividualAvatarActive}>
                {/* <div className="data-wrapper"> */}
                <div className="avatar-wrapper">
                    <div className={`avatar ${isIndividualAvatarActive ? "avatar_i_active" : "avatar_i"}`} onClick={() => selectLenderType('i')}>
                        <p className={`${isIndividualAvatarActive ? "avatar-type_active" : "avatar-type"}`}>Individual</p>
                        <img src={avatarI} />
                    </div>
                    <div className="lender-text">I am a</div>
                    <div className={`avatar ${isGroupAvatarActive ? "avatar_g_active" : "avatar_g"}`} onClick={() => selectLenderType('g')}>
                        <p className={`${isGroupAvatarActive ? "avatar-type_active" : "avatar-type"}`} >Entity</p>
                        <img src={avatarG}/>
                    </div>
                </div>
                {/* </div> */}
                
            </LenderProfile>
        </React.Fragment>
    );
}

export default LenderProfileType;