import { call, put, takeaway, takeEvery } from 'redux-saga/effects';
import API from '../../API/api';
import { type } from '../types';

function* loginSaga(action) {
   try {
       const data = yield API.get('/');
       yield put({type: 'LOGIN_SUCCESS', data: data})
   }
   catch (error) {
    yield put({type: 'LOGIN_FAILED', error: error.data})
   }
}

export function* watchLoginSaga() {
    yield takeEvery( 'HANDLE_LOGIN', loginSaga);
}

