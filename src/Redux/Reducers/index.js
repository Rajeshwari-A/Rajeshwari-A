import { combineReducers } from 'redux';
import login from './login';
import createAccount from './createAccount';


const rootReducer = combineReducers({
    login : login,
    createAccount: createAccount,
});

export default rootReducer;