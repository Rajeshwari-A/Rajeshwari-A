import * as type from '../types';

const initialState = {
    lenderPage_1: {},
    lenderPage_2: {},

    lenderPage_3: {},

    lenderPage_4: {},

    lenderPage_5: {},

    lenderPage_6: {},
    getLenderDataSuccess: true
}

function saveLenderProfileData(state = initialState, action) {
    console.log("get get api responsive here---------", action)
    switch (action.type) {
        case type.INIT_GET_LENDER_PROFILE_DETAILS:
            return {
                ...state,
            }
        case type.GET_LENDER_PROFILE_DETAILS_SUCCESS:
            console.log("success case")
            switch (action.id) {
                case 1:
                    return {
                        ...state,
                        lenderPage_1: action.data
                    }
                case 2:
                    return {
                        ...state,
                        lenderPage_2: action.data

                    }
                case 3:
                    return {
                        ...state,
                        lenderPage_3: action.data

                    }
                case 4:
                    return {
                        ...state,
                        lenderPage_4: action.data

                    }
                case 5:
                    return {
                        ...state,
                        lenderPage_5: action.data

                    }
                case 6:
                    return {
                        ...state,
                        lenderPage_6: action.data

                    }
                default:
                    return {
                        ...state
                    }
            }
            return {
                ...state,
                getLenderDataSuccess: true
            }
        case type.GET_LENDER_PROFILE_DETAILS_FAILED:
            return {
                ...state,
                getLenderDataSuccess: false
            }
        default:
            return {
                ...state
            }
    }
}

export default saveLenderProfileData;