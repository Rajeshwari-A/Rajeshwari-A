import React, { useState } from 'react';
import LenderProfile from '../lender-profile';
import '../lender-profile.css';


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
                    </div>
                    <div className="lender-text">I am a</div>
                    <div className={`avatar ${isGroupAvatarActive ? "avatar_g_active" : "avatar_g"}`} onClick={() => selectLenderType('g')}>
                        <p className={`${isGroupAvatarActive ? "avatar-type_active" : "avatar-type"}`} >Entity</p>
                    </div>
                </div>
                {/* </div> */}
                
            </LenderProfile>
        </React.Fragment>
    );
}

export default LenderProfileType;