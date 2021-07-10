import { combineReducers } from 'redux';
import login from './login';
import createAccount from './createAccount';
import saveLenderDetails from './saveLenderDetails';
import saveBeneficiaryDetails  from './saveBeneficiaryDetails';
import saveLenderProfileData from './saveLenderProfileData';
import getLenderProfileDetails from './getLenderProfileDetails';


const rootReducer = combineReducers({
    login : login,
    createAccount: createAccount,
    lenderData: saveLenderDetails,
    beneficiaryData: saveBeneficiaryDetails,
    saveProfileData: saveLenderProfileData,
    getLenderDetails: getLenderProfileDetails,
});

export default rootReducer;