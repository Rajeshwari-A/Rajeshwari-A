import * as type from '../types';

const initialState = {
    email: "",
    password: "",
    isUserLoggedIn: false
}

function login(state = initialState, action) {
    switch (action.type) {
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            }
        default:
            return {
                ...state
            }
    }
}

export default login;