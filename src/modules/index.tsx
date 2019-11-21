import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import {
    searchReducer,
    SearchState,
    SEARCH_REQUEST,
} from './search';
import SearchRequestSaga from './search/saga';

export * from './search';

declare global {
    // tslint:disable-next-line:no-any
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

// app state interface
export interface AppState {
    search: SearchState;
}

// preparing app reducer
const appReducer = combineReducers({
    search: searchReducer,
});

// preparing sagas
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function* appSaga() {
    yield takeEvery(SEARCH_REQUEST, SearchRequestSaga);
}

const sagaMiddleware = createSagaMiddleware();

// creating store
export const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// running all sagas
sagaMiddleware.run(appSaga);

// export default store;
