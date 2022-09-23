import {legacy_createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk"
import reducer from "./reducers/index.js"

const initialState = {};
const middleware = [thunk]

const store = legacy_createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
)

export default store;