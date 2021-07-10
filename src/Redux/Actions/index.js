import * as type from "../types";

export const saveAccountDetails = (data) => {
    return {
        type: type.SAVE_ACCOUNT_DETAILS_SUCCESS,
        payload: data
    }
}

export const saveLenderDetails = (data) => {
    return {
        type: type.SAVE_LENDER_DETAILS,
        data
    }
}


export const saveBeneficiaryDetails = (data) => {
    return {
        type:type.SAVE_BENEFICIARY_DETAILS,
        data
    }
}

export const enableNxtBtn = () => {
    return {
        type:type.ENABLE_NEXT_BTN
    }
}

export const enableAddBtn = (bool) => {
    return {
        type:type.ENABLE_ADD_BTN,
        bool
    }
}

export const handleBeneficiariesPercentage = (percentage) => {
    return {
        type: type.HANDLE_BENEFICIARIES_PERCENTAGE,
        percentage
    }
}

export const saveLenderProfileData = (data) => {
    return {
        type:type.INITIATE_SAVE_LENDER_PROFILE_DETAILS,
        data
    }
}
