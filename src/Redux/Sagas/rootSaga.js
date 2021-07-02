import {spawn} from 'redux-saga/effects';

import { watchLoginSaga } from './loginSaga';
import { watchSaveAccountDeatilsSaga } from './createAccountSaga';

export default function* RootSaga() {
    yield spawn(watchLoginSaga());
    yield spawn(watchSaveAccountDeatilsSaga());

}