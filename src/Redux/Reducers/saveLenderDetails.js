import * as type from '../types';

const initialState = {
    primary_details: [],
    joint_details: [],
    // lenderData: [],
    enableNxtBtn:false
}

function saveLenderDetails(state = initialState, action) {
    switch (action.type) {
        case type.SAVE_LENDER_DETAILS :
            console.log("action--------data", action)
            // let data1 = action.payload ? action.data.lenderOne : null;
            // let data2 = action.payload ? action.data.lenderTwo : null;
            return {
                ...state,
                primary_details: action.data ? action.data.lenderOne : null,
                joint_details: action.data ? action.data.lenderTwo : null,
            }
        case type.ENABLE_NEXT_BTN :
            return {
                ...state,
                enableNxtBtn:true
            }    
        default:
            return {
                ...state
            }
    }
}

export default saveLenderDetails;