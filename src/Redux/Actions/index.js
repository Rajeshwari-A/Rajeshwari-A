import * as type from "../types";

export const saveAccountDetails = (data) => {
    console.log("actions---", data)
    return {
        type: type.SAVE_ACCOUNT_DETAILS_SUCCESS,
        payload: data
    }
}