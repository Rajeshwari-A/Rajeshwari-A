import { call, put, takeaway, takeEvery } from 'redux-saga/effects';
// import API from '../../API/api';
import * as actions from "../Actions/index";
import { type } from '../types';

function* saveAccountDeatilsSaga(action) {
    yield put(actions.saveAccountDetails());
}

export function* watchSaveAccountDeatilsSaga() {
    yield takeEvery( 'SAVE_ACCOUNT_DETAILS', saveAccountDeatilsSaga);
}

