import * as type from '../types';

const initialState = {
    beneficiaries: [],
    beneficiaryPercentageCount:0,
    enableAddBtn: false
}

function saveLenderDetails(state = initialState, action) {
    switch (action.type) {
        case type.SAVE_BENEFICIARY_DETAILS :
            console.log("data save triggered--", Object.values(action.data))
            return {
                ...state,
                beneficiaries: action.data ? action.data : null,
                // lenderTwoData: action.data ? action.data.lenderTwo : null,
            }
        case type.HANDLE_BENEFICIARIES_PERCENTAGE :
            return {
                ...state,
                beneficiaryPercentageCount:action.percentage
            }    
        case type.ENABLE_ADD_BTN :  
            return {
                ...state,
                enableAddBtn : action.bool
            }
        default:
            return {
                ...state
            }
    }
}

export default saveLenderDetails;