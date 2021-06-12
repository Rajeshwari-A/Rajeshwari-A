import * as type from "../types";

export function handleLoginSuccess(credentials) {
    return {
        type: type.LOGIN_SUCCESS,
        payload: credentials
    }
}