import {spawn} from 'redux-saga/effects';

import { watchLoginSaga } from './loginSaga';

export default function* RootSaga() {
    yield spawn(watchLoginSaga());
}