import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import RootReducer from './Reducers';
import RootSaga from './Sagas';


const sagaMiddleware = createSagaMiddleware()

export default function({children,initialState={}}){
    const store=<Provider store={createStore(RootReducer,initialState,applyMiddleware(sagaMiddleware))}>
                {children}
                </Provider>
                sagaMiddleware.run(RootSaga);
    return store;
}