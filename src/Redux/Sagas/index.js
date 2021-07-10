import {spawn} from 'redux-saga/effects';

import  watchLoginSaga from './loginSaga';
// import { watchSaveAccountDeatilsSaga } from './createAccountSaga';
// import { watchsaveLenderDeatilsSaga } from './saveLenderDetails';
import watchSaveLenderProfileDeatilsSaga from  './saveLenderProfileData';
import watchupdateLenderProfileDetailsSaga from './updateLenderProfileData';
import watchgetLenderProfileDetailsSaga from './getLenderProfileDetails';

export default function* RootSaga() {
    yield spawn(watchLoginSaga);
    // yield spawn(watchSaveAccountDeatilsSaga());
    // yield spawn(watchsaveLenderDeatilsSaga());
    yield spawn(watchSaveLenderProfileDeatilsSaga);
    yield spawn(watchupdateLenderProfileDetailsSaga);
    yield spawn(watchgetLenderProfileDetailsSaga);
}