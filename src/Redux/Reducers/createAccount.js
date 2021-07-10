import * as type from '../types';

const initialState = {
    email: "",
    password: "",
    accountData: []
}

function createAccount(state = initialState, action) {
    switch (action.type) {
        case type.SAVE_ACCOUNT_DETAILS_SUCCESS :
            return {
                ...state,
                accountData: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default createAccount;