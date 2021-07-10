import * as type from '../types';

const initialState = {
    saveDataSuccessfull: true
}

function saveLenderProfileData(state = initialState, action) {
    switch (action.type) {
        case type.INITIATE_SAVE_LENDER_PROFILE_DETAILS:
            return {
                ...state,
            }
        case type.SAVE_LENDER_PROFILE_DETAILS_SUCCESS:
            return {
                ...state,
                saveDataSuccessfull: true
            }
        case type.SAVE_LENDER_PROFILE_DETAILS_FAILED:
            return {
                ...state,
                saveDataSuccessfull: false
            }
        default:
            return {
                ...state
            }
    }
}

export default saveLenderProfileData;